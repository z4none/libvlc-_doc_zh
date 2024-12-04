## vout_window_New {#vout_window_New}

```c
VLC_API vout_window_t * vout_window_New(vlc_object_t *, const char *module, const vout_window_cfg_t *);
```

### 描述
创建一个新的窗口。

### 函数参数说明

| 参数名       | 类型                  | 描述                                                                 |
|--------------|-----------------------|--------------------------------------------------------------------------|
| `vlc_object_t *` | `vlc_object_t *`      | VLC 对象指针，通常是当前模块的父对象。                                |
| `module`     | `const char *`        | 插件名称（通常是 "$window"）。                                         |
| `vout_window_cfg_t *` | `const vout_window_cfg_t *` | 窗口配置结构体指针，包含窗口的初始化配置信息。 |

### 函数返回值
- 成功时返回一个指向新创建的 `vout_window_t` 结构体的指针。
- 如果创建失败，返回 `NULL`。

### 注意事项
如果你在一个 "vout display" 内部，你必须使用 `vout_display_NewWindow()` 和 `vout_display_DeleteWindow()` 来代替。这可以实现窗口的回收。
## vout_window_Delete {#vout_window_Delete}

```c
VLC_API void vout_window_Delete(vout_window_t *);
```

### 描述
该函数用于删除由 `vout_window_New()` 创建的窗口。

### 参数说明
| 参数名          | 类型            | 描述                 |
|-----------------|-----------------|----------------------|
| `vout_window_t` | `vout_window_t*` | 指向要删除的窗口对象的指针 |

### 返回值
该函数没有返回值。
## vout_window_Control {#vout_window_Control}

```c
VLC_API int vout_window_Control(vout_window_t *, int query, ...);
```

### 描述
重新配置一个窗口。

**注意**：应使用 `vout_window_*` 包装函数，而不是直接调用此函数。

**警告**：调用者必须拥有窗口的所有权，因为 `vout_window_t` 不是线程安全的。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `vout_window_t *` | `vout_window_t *` | 指向 `vout_window_t` 结构的指针，表示要重新配置的窗口。 |
| `query` | `int` | 控制查询的类型。具体查询类型取决于实现。 |
| `...` | `va_list` | 可变参数列表，根据 `query` 的不同，可能需要传递额外的参数。 |

### 函数返回值

- **成功**：返回 `0`。
- **失败**：返回 `-1`，表示操作失败。
## vout_window_SetState {#vout_window_SetState}

```c
static inline int vout_window_SetState(vout_window_t *window, unsigned state)
{
    return vout_window_Control(window, VOUT_WINDOW_SET_STATE, state);
}
```

### 函数描述
配置此窗口的窗口管理器状态。

### 函数参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| window | vout_window_t* | 指向要配置的窗口对象的指针 |
| state | unsigned | 要设置的窗口状态 |

### 函数返回值
- 返回 `int` 类型，表示操作的结果。通常情况下，返回值为 `0` 表示成功，非零值表示失败。
## vout_window_SetSize {#vout_window_SetSize}

```c
static inline int vout_window_SetSize(vout_window_t *window, unsigned width, unsigned height)
{
    return vout_window_Control(window, VOUT_WINDOW_SET_SIZE, width, height);
}
```

### 函数描述
配置窗口的显示（即内部/有用）尺寸。

### 函数参数说明

| 参数名   | 类型           | 描述                 |
|----------|----------------|----------------------|
| window   | vout_window_t* | 指向窗口对象的指针   |
| width    | unsigned       | 窗口的宽度           |
| height   | unsigned       | 窗口的高度           |

### 函数返回值
- **成功**：返回 0。
- **失败**：返回负值，表示错误代码。
## vout_window_SetFullScreen {#vout_window_SetFullScreen}

```c
static inline int vout_window_SetFullScreen(vout_window_t *window, bool full)
{
    return vout_window_Control(window, VOUT_WINDOW_SET_FULLSCREEN, full);
}
```

### 函数描述
设置全屏模式。

### 函数参数说明
| 参数名   | 类型          | 描述               |
|----------|---------------|--------------------|
| window   | vout_window_t*| 指向窗口对象的指针 |
| full     | bool          | 是否启用全屏模式   |

### 函数返回值
- 返回 `0` 表示成功设置全屏模式。
- 返回非零值表示设置全屏模式失败。
## vout_window_t {#vout_window_t}

```c
struct vout_window_t {
    VLC_COMMON_MEMBERS

    unsigned type; /**< Window handle type */

    union {
        void     *hwnd;          /* Win32 window handle */
        uint32_t xid;            /* X11 windows ID */
        void     *nsobject;      /* Mac OSX view object */
        void     *anativewindow; /* Android native window. */
    } handle;

    union {
        char     *x11; /* X11 display (NULL = use default) */
    } display;

    int (*control)(vout_window_t *, int query, va_list);

    vout_window_sys_t *sys;
};
```

### 描述
`vout_window_t` 结构体定义了一个用于视频输出的窗口对象。该结构体包含了窗口句柄类型、窗口句柄、显示服务器信息、控制模块的函数指针以及一个私有占位符，用于模块的内部使用。

### 字段说明

| 字段名       | 类型                  | 描述                                                                 |
|--------------|-----------------------|--------------------------------------------------------------------------|
| `type`       | `unsigned`            | 窗口句柄类型。                                                           |
| `handle`     | `union`               | 窗口句柄的联合体，包含不同平台的窗口句柄类型：<br>- `hwnd`: Win32 窗口句柄<br>- `xid`: X11 窗口 ID<br>- `nsobject`: Mac OSX 视图对象<br>- `anativewindow`: Android 原生窗口 |
| `display`    | `union`               | 显示服务器的联合体，包含不同平台的显示服务器信息：<br>- `x11`: X11 显示（`NULL` 表示使用默认显示） |
| `control`    | `int (*)(vout_window_t *, int query, va_list)` | 控制模块的函数指针，用于对窗口进行控制。不要直接使用它，而是使用 `vout_window_Control` 函数。 |
| `sys`        | `vout_window_sys_t *`  | 私有占位符，用于模块的内部使用。模块可以自由使用它。                     |

### 返回值
该结构体本身不返回值，它是一个定义窗口对象的结构体。
