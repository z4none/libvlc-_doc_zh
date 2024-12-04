## vout_display_SendEvent {#vout_display_SendEvent}

```c
static inline void vout_display_SendEvent(vout_display_t *vd, int query, ...)
{
    va_list args;
    va_start(args, query);
    vd->owner.event(vd, query, args);
    va_end(args);
}
```

### 函数描述
该函数用于向视频输出显示模块发送事件。它通过可变参数列表将事件传递给视频输出显示模块的回调函数。

### 函数参数说明

| 参数名 | 类型           | 描述                                                                 |
|--------|----------------|--------------------------------------------------------------------------|
| vd     | vout_display_t* | 指向视频输出显示模块的指针，表示要发送事件的目标模块。 |
| query  | int            | 表示要发送的事件类型或查询类型。                               |
| ...    | 可变参数       | 事件的附加参数，具体内容取决于 `query` 的值。              |

### 函数返回值
该函数没有返回值（`void`）。
## vout_display_SendEventDisplaySize {#vout_display_SendEventDisplaySize}

```c
static inline void vout_display_SendEventDisplaySize(vout_display_t *vd, int width, int height, bool is_fullscreen)
```

### 函数描述
该函数用于向视频输出显示模块发送显示尺寸变化的事件。它会将当前的显示宽度和高度以及是否全屏的状态通知给视频输出显示模块。

### 函数参数说明

| 参数名        | 类型           | 描述                                                                 |
|---------------|----------------|--------------------------------------------------------------------------|
| `vd`          | `vout_display_t *` | 指向视频输出显示模块的指针，表示目标显示模块。                         |
| `width`       | `int`          | 新的显示宽度，以像素为单位。                                           |
| `height`      | `int`          | 新的显示高度，以像素为单位。                                           |
| `is_fullscreen` | `bool`         | 布尔值，表示当前显示是否为全屏模式。`true` 表示全屏，`false` 表示窗口模式。 |

### 函数返回值
该函数没有返回值。
## vout_display_SendEventPicturesInvalid {#vout_display_SendEventPicturesInvalid}

```c
static inline void vout_display_SendEventPicturesInvalid(vout_display_t *vd)
{
    vout_display_SendEvent(vd, VOUT_DISPLAY_EVENT_PICTURES_INVALID);
}
```

### 函数描述
该函数用于向视频输出显示模块发送一个事件，通知其当前的图片数据无效。

### 函数参数说明

| 参数名 | 类型               | 描述                                                                 |
|--------|--------------------|--------------------------------------------------------------------------|
| vd     | vout_display_t *   | 指向 `vout_display_t` 结构体的指针，表示视频输出显示模块的实例。 |

### 函数返回值
该函数没有返回值。
## vout_display_SendEventClose {#vout_display_SendEventClose}

```c
static inline void vout_display_SendEventClose(vout_display_t *vd)
{
    vout_display_SendEvent(vd, VOUT_DISPLAY_EVENT_CLOSE);
}
```

### 函数描述
该函数用于向视频输出模块发送关闭事件。它通过调用 `vout_display_SendEvent` 函数并传递 `VOUT_DISPLAY_EVENT_CLOSE` 事件类型来实现。

### 函数参数说明

| 参数名 | 类型            | 描述               |
|--------|-----------------|--------------------|
| `vd`   | `vout_display_t*` | 指向视频输出模块的指针 |

### 函数返回值
该函数没有返回值。
## vout_display_SendEventKey {#vout_display_SendEventKey}

```c
static inline void vout_display_SendEventKey(vout_display_t *vd, int key)
{
    vout_display_SendEvent(vd, VOUT_DISPLAY_EVENT_KEY, key);
}
```

### 函数描述
该函数用于向视频输出模块发送一个按键事件。它通过调用 `vout_display_SendEvent` 函数来实现，事件类型为 `VOUT_DISPLAY_EVENT_KEY`，并传递按键值。

### 函数参数说明

| 参数名 | 类型          | 描述                                                                 |
|--------|---------------|--------------------------------------------------------------------|
| `vd`   | `vout_display_t *` | 指向视频输出模块的指针，表示要发送事件的目标模块。                   |
| `key`  | `int`             | 表示按键值的整数，用于标识具体的按键事件。                           |

### 函数返回值
该函数没有返回值（`void`）。
## vout_display_SendEventFullscreen {#vout_display_SendEventFullscreen}

```c
static inline void vout_display_SendEventFullscreen(vout_display_t *vd, bool is_fullscreen)
```

### 描述
该函数用于向视频输出显示模块发送一个全屏状态的事件。它通过调用 `vout_display_SendEvent` 函数来实现，传递的事件类型为 `VOUT_DISPLAY_EVENT_FULLSCREEN`，并附带当前的全屏状态。

### 函数参数说明

| 参数名        | 类型           | 描述                                       |
|---------------|----------------|--------------------------------------------|
| `vd`          | `vout_display_t *` | 指向视频输出显示模块的指针，表示目标显示模块。 |
| `is_fullscreen` | `bool`          | 布尔值，表示当前是否为全屏状态。`true` 表示全屏，`false` 表示非全屏。 |

### 函数返回值
该函数没有返回值 (`void`)。
## vout_display_SendWindowState {#vout_display_SendWindowState}

```c
static inline void vout_display_SendWindowState(vout_display_t *vd, unsigned state)
```

### 函数描述
该函数用于向视频输出显示模块发送窗口状态事件。它通过调用 `vout_display_SendEvent` 函数来实现，将窗口状态作为事件参数传递。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `vd`   | `vout_display_t *` | 指向视频输出显示模块的指针 |
| `state` | `unsigned` | 窗口状态值，表示当前窗口的状态 |

### 函数返回值
该函数没有返回值（`void`）。
## vout_display_SendEventMouseState {#vout_display_SendEventMouseState}

```c
static inline void vout_display_SendEventMouseState(vout_display_t *vd, int x, int y, int button_mask)
```

### 描述
该函数用于发送鼠标状态事件到视频输出显示模块。鼠标位置（状态和移动事件）必须以 `vout_display_t::source` 的单位表示。

### 函数参数说明

| 参数名       | 类型            | 描述                                                                 |
|--------------|-----------------|----------------------------------------------------------------------|
| `vd`         | `vout_display_t*` | 指向视频输出显示模块的指针。                                           |
| `x`          | `int`           | 鼠标的X坐标，以 `vout_display_t::source` 的单位表示。                  |
| `y`          | `int`           | 鼠标的Y坐标，以 `vout_display_t::source` 的单位表示。                  |
| `button_mask`| `int`           | 鼠标按钮的掩码，表示当前按下的鼠标按钮状态。                           |

### 函数返回值
该函数没有返回值。
## vout_display_SendEventMouseMoved {#vout_display_SendEventMouseMoved}

```c
static inline void vout_display_SendEventMouseMoved(vout_display_t *vd, int x, int y)
{
    vout_display_SendEvent(vd, VOUT_DISPLAY_EVENT_MOUSE_MOVED, x, y);
}
```

### 描述
该函数用于发送鼠标移动事件到视频输出显示模块。它通过调用 `vout_display_SendEvent` 函数来实现，事件类型为 `VOUT_DISPLAY_EVENT_MOUSE_MOVED`，并传递鼠标的当前坐标 `(x, y)`。

### 参数说明
| 参数名 | 类型           | 描述               |
|--------|----------------|--------------------|
| `vd`   | `vout_display_t*` | 指向视频输出显示模块的指针 |
| `x`    | `int`            | 鼠标的当前 X 坐标     |
| `y`    | `int`            | 鼠标的当前 Y 坐标     |

### 返回值
该函数为 `void` 类型，没有返回值。
## vout_display_SendEventMousePressed {#vout_display_SendEventMousePressed}

```c
static inline void vout_display_SendEventMousePressed(vout_display_t *vd, int button)
{
    vout_display_SendEvent(vd, VOUT_DISPLAY_EVENT_MOUSE_PRESSED, button);
}
```

### 描述
该函数用于发送鼠标按键按下的事件。它通过调用 `vout_display_SendEvent` 函数来实现，事件类型为 `VOUT_DISPLAY_EVENT_MOUSE_PRESSED`，并传递按下的鼠标按钮编号。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `vd` | `vout_display_t *` | 指向 `vout_display_t` 结构的指针，表示视频输出显示对象。 |
| `button` | `int` | 表示按下的鼠标按钮编号。 |

### 函数返回值
该函数没有返回值。
## vout_display_SendEventMouseReleased {#vout_display_SendEventMouseReleased}

```c
static inline void vout_display_SendEventMouseReleased(vout_display_t *vd, int button)
```

### 函数描述
该函数用于向视频输出显示模块发送鼠标释放事件。它通过调用 `vout_display_SendEvent` 函数来实现，事件类型为 `VOUT_DISPLAY_EVENT_MOUSE_RELEASED`，并传递鼠标按钮的标识符。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `vd` | `vout_display_t *` | 指向视频输出显示模块的指针。 |
| `button` | `int` | 表示被释放的鼠标按钮的标识符。 |

### 函数返回值
该函数没有返回值。
## vout_display_SendEventMouseDoubleClick {#vout_display_SendEventMouseDoubleClick}

```c
static inline void vout_display_SendEventMouseDoubleClick(vout_display_t *vd)
{
    vout_display_SendEvent(vd, VOUT_DISPLAY_EVENT_MOUSE_DOUBLE_CLICK);
}
```

### 描述
该函数用于向视频输出显示模块发送鼠标双击事件。它通过调用 `vout_display_SendEvent` 函数来实现，传递的事件类型为 `VOUT_DISPLAY_EVENT_MOUSE_DOUBLE_CLICK`。

### 函数参数说明

| 参数名 | 类型              | 描述                   |
|--------|-------------------|------------------------|
| `vd`   | `vout_display_t *` | 指向视频输出显示模块的指针。 |

### 函数返回值
该函数没有返回值（`void`）。
## vout_display_DeleteWindow {#vout_display_DeleteWindow}

```c
static inline void vout_display_DeleteWindow(vout_display_t *vd, vout_window_t *window)
{
    vd->owner.window_del(vd, window);
}
```

### 函数描述
该函数用于删除由 `vout_display_NewWindow` 创建的窗口。如果 `window` 参数非空，则删除指定的窗口；否则，删除任何未使用的窗口。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `vd` | `vout_display_t *` | 指向 `vout_display_t` 结构体的指针，表示视频输出显示。 |
| `window` | `vout_window_t *` | 指向 `vout_window_t` 结构体的指针，表示要删除的窗口。如果为 `NULL`，则删除任何未使用的窗口。 |

### 函数返回值
该函数没有返回值。
## vout_display_GetDefaultDisplaySize {#vout_display_GetDefaultDisplaySize}

```c
VLC_API void vout_display_GetDefaultDisplaySize(unsigned *width, unsigned *height, const video_format_t *source, const vout_display_cfg_t *);
```

### 函数描述
该函数根据源视频格式和显示配置计算默认的显示尺寸。假设图片已经被裁剪。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| width | unsigned * | 输出参数，用于存储计算出的默认显示宽度。 |
| height | unsigned * | 输出参数，用于存储计算出的默认显示高度。 |
| source | const video_format_t * | 输入参数，指向源视频格式的结构体，包含视频的原始尺寸等信息。 |
| vout_display_cfg | const vout_display_cfg_t * | 输入参数，指向显示配置的结构体，包含显示窗口的尺寸、位置等信息。 |

### 函数返回值
该函数没有返回值（`void`）。计算出的默认显示尺寸通过传入的指针参数 `width` 和 `height` 返回。
## vout_display_PlacePicture {#vout_display_PlacePicture}

```c
VLC_API void vout_display_PlacePicture(vout_display_place_t *place, const video_format_t *source, const vout_display_cfg_t *cfg, bool do_clipping);
```

### 函数描述
该函数用于计算如何在显示窗口内放置图片，以符合给定的参数。假设裁剪操作由外部手段完成。

### 函数参数说明

| 参数名       | 类型                    | 描述                                                                 |
|--------------|-------------------------|----------------------------------------------------------------------|
| `place`      | `vout_display_place_t*` | 指向 `vout_display_place_t` 结构的指针，用于存储图片在窗口内的位置信息。 |
| `source`     | `const video_format_t*` | 指向 `video_format_t` 结构的指针，表示视频源的格式。                   |
| `cfg`        | `const vout_display_cfg_t*` | 指向 `vout_display_cfg_t` 结构的指针，表示显示配置。                   |
| `do_clipping`| `bool`                  | 如果为 `true`，则防止视频超出显示区域（会破坏缩放效果）。              |

### 函数返回值
该函数没有返回值（`void`）。
## vout_display_SendMouseMovedDisplayCoordinates {#vout_display_SendMouseMovedDisplayCoordinates}

```c
VLC_API void vout_display_SendMouseMovedDisplayCoordinates(vout_display_t *vd, video_orientation_t orient_display, int m_x, int m_y, vout_display_place_t *place);
```

### 函数描述
该辅助函数将鼠标位置应用必要的变换，然后调用 `vout_display_SendEventMouseMoved`。

### 函数参数说明

| 参数名          | 类型                  | 描述                                                                 |
|-----------------|-----------------------|--------------------------------------------------------------------------|
| `vd`            | `vout_display_t*`     | 视频输出显示的结构体指针。                                             |
| `orient_display`| `video_orientation_t` | 图片在屏幕上的方向（通常为 `ORIENT_NORMAL`）。                         |
| `m_x`           | `int`                 | 鼠标的x位置（相对于放置区域，原点在左上角）。                          |
| `m_y`           | `int`                 | 鼠标的y位置（相对于放置区域，原点在左上角）。                          |
| `place`         | `vout_display_place_t*`| 图片的放置区域。                                                       |

### 函数返回值
该函数没有返回值。
## vout_display_owner_t {#vout_display_owner_t}

```c
struct vout_display_owner_t {
    vout_display_owner_sys_t *sys;
    void (*event)(vout_display_t *, int, va_list);
    vout_window_t *(*window_new)(vout_display_t *, const vout_window_cfg_t *);
    void (*window_del)(vout_display_t *, vout_window_t *);
};
```

### 描述
`vout_display_owner_t` 结构体用于定义视频输出显示的所有者结构。它包含了一些私有占位符和回调函数，用于与模块进行交互。

### 成员说明

| 成员名          | 类型                                      | 描述                                                                 |
|-----------------|-------------------------------------------|--------------------------------------------------------------------------|
| `sys`           | `vout_display_owner_sys_t *`              | 私有占位符，用于视频输出显示的创建者。                                     |
| `event`         | `void (*)(vout_display_t *, int, va_list)` | 事件回调函数，用于处理来自模块的事件。该函数在模块实例化之前设置，不应被覆盖或直接使用（应使用 `vout_display_SendEvent*` 包装器）。可以在任何时候调用，但需要注意多线程环境下的序列化问题。 |
| `window_new`    | `vout_window_t *(*)(vout_display_t *, const vout_window_cfg_t *)` | 创建窗口的回调函数。该函数在模块实例化之前设置，不应被覆盖或直接使用（应使用 `vout_display_*Window` 包装器）。 |
| `window_del`    | `void (*)(vout_display_t *, vout_window_t *)` | 删除窗口的回调函数。该函数在模块实例化之前设置，不应被覆盖或直接使用（应使用 `vout_display_*Window` 包装器）。 |

### 返回值
该结构体本身不返回任何值，它定义了用于视频输出显示的回调函数和私有数据结构。
## vout_display_t {#vout_display_t}

```c
struct vout_display_t {
    VLC_COMMON_MEMBERS

    module_t *module;
    const vout_display_cfg_t *cfg;
    video_format_t source;
    video_format_t fmt;
    vout_display_info_t info;
    picture_pool_t *(*pool)(vout_display_t *, unsigned count);
    void (*prepare)(vout_display_t *, picture_t *, subpicture_t *);
    void (*display)(vout_display_t *, picture_t *, subpicture_t *);
    int (*control)(vout_display_t *, int, va_list);
    void (*manage)(vout_display_t *);
    vout_display_sys_t *sys;
    vout_display_owner_t owner;
};
```

### 描述
`vout_display_t` 结构体定义了视频输出显示模块的接口。该结构体包含了视频输出显示模块所需的各种配置、信息以及回调函数。

### 成员说明

| 成员名称 | 类型 | 描述 |
|----------|------|------|
| `module` | `module_t *` | 模块指针，指向当前使用的模块。 |
| `cfg` | `const vout_display_cfg_t *` | 初始和当前的配置。不能直接修改，必须使用适当的事件进行修改。 |
| `source` | `video_format_t` | 视频源格式。在打开函数中不请求裁剪。不能更改。 |
| `fmt` | `video_format_t` | 图片格式。只能在模块打开函数中更改，以匹配所需格式，并且在 `VOUT_DISPLAY_RESET_PICTURES` 控制请求成功时更改。 |
| `info` | `vout_display_info_t` | 信息。只能在打开函数中设置。 |
| `pool` | `picture_pool_t *(*)(vout_display_t *, unsigned count)` | 返回当前图片池的指针（必须实现）。为了性能考虑，最好提供至少 `count` 张图片，但不是强制的。可以返回 `NULL` 当无法或不想分配图片时。 |
| `prepare` | `void (*)(vout_display_t *, picture_t *, subpicture_t *)` | 准备图片和可选的子图片以供显示（可选）。在 `pf_display` 调用之前调用，以尽可能多地准备给定的图片和子图片。 |
| `display` | `void (*)(vout_display_t *, picture_t *, subpicture_t *)` | 显示图片和可选的子图片（必须实现）。图片和子图片必须尽快显示。不能更改图片或子图片的像素内容。 |
| `control` | `int (*)(vout_display_t *, int, va_list)` | 控制模块（必须实现）。 |
| `manage` | `void (*)(vout_display_t *)` | 管理挂起的事件（可选）。 |
| `sys` | `vout_display_sys_t *` | 私有占位符，供 `vout_display_t` 模块使用（可选）。模块可以自由使用它。 |
| `owner` | `vout_display_owner_t` | 保留给 `vout_display_t` 的所有者。模块不能直接覆盖或使用它。 |

### 返回值
该结构体本身没有返回值，但其中的函数指针成员有各自的返回值：

- `pool` 函数返回一个 `picture_pool_t *` 类型的指针，表示图片池的指针。如果无法分配图片，可以返回 `NULL`。
- `control` 函数返回一个 `int` 类型的值，表示控制操作的结果。具体返回值取决于控制操作的类型。
- `prepare` 和 `display` 函数没有返回值，它们通过指针参数来传递数据。
