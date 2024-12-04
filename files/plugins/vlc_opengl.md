## vlc_gl_Destroy {#vlc_gl_Destroy}

```c
VLC_API void vlc_gl_Destroy(vlc_gl_t *);
```

### 函数描述
该函数用于销毁一个 `vlc_gl_t` 对象。它释放与该对象关联的所有资源，并确保不再使用该对象。

### 函数参数说明

| 参数名    | 类型       | 描述                                                                 |
|-----------|------------|--------------------------------------------------------------------------|
| `vlc_gl_t`| `vlc_gl_t*`| 指向要销毁的 `vlc_gl_t` 对象的指针。该对象将被释放，不再有效。|

### 函数返回值
该函数没有返回值。
## vlc_gl_MakeCurrent {#vlc_gl_MakeCurrent}

```c
static inline int vlc_gl_MakeCurrent(vlc_gl_t *gl)
{
    return gl->makeCurrent(gl);
}
```

### 描述
该函数用于将当前 OpenGL 上下文设置为指定的 `vlc_gl_t` 对象所关联的上下文。调用此函数后，后续的 OpenGL 操作将作用于该上下文。

### 函数参数说明

| 参数名 | 类型      | 描述                                                                 |
|--------|-----------|--------------------------------------------------------------------|
| `gl`   | `vlc_gl_t*` | 指向 `vlc_gl_t` 对象的指针，表示要设置为当前上下文的 OpenGL 上下文。 |

### 函数返回值

- **成功**：返回 `0`，表示成功将指定的 OpenGL 上下文设置为当前上下文。
- **失败**：返回非零值，表示设置当前上下文失败。
## vlc_gl_ReleaseCurrent {#vlc_gl_ReleaseCurrent}

```c
static inline void vlc_gl_ReleaseCurrent(vlc_gl_t *gl)
{
    gl->releaseCurrent(gl);
}
```

### 描述
该函数用于释放当前 OpenGL 上下文。它调用 `vlc_gl_t` 结构体中的 `releaseCurrent` 函数指针来执行具体的释放操作。

### 参数说明
| 参数名 | 类型      | 描述               |
|--------|-----------|--------------------|
| `gl`   | `vlc_gl_t*` | 指向 `vlc_gl_t` 结构体的指针，表示当前的 OpenGL 上下文。 |

### 返回值
该函数没有返回值。
## vlc_gl_Lock {#vlc_gl_Lock}

```c
static inline int vlc_gl_Lock(vlc_gl_t *gl)
{
    return (gl->lock != NULL) ? gl->lock(gl) : VLC_SUCCESS;
}
```

### 描述
该函数用于锁定 OpenGL 上下文。如果 `gl->lock` 不为 `NULL`，则调用 `gl->lock` 函数进行锁定；否则，直接返回 `VLC_SUCCESS`。

### 参数说明

| 参数名 | 类型       | 描述               |
|--------|------------|--------------------|
| `gl`   | `vlc_gl_t*` | 指向 `vlc_gl_t` 结构的指针，表示 OpenGL 上下文。 |

### 返回值
- 如果 `gl->lock` 不为 `NULL`，则返回 `gl->lock(gl)` 的结果。
- 如果 `gl->lock` 为 `NULL`，则返回 `VLC_SUCCESS`。
## vlc_gl_Unlock {#vlc_gl_Unlock}

```c
static inline void vlc_gl_Unlock(vlc_gl_t *gl)
{
    if (gl->unlock != NULL)
        gl->unlock(gl);
}
```

### 描述
该函数用于解锁 OpenGL 上下文。如果 `gl->unlock` 函数指针不为 `NULL`，则调用该函数指针所指向的解锁函数。

### 函数参数说明

| 参数名 | 类型       | 描述               |
|--------|------------|--------------------|
| `gl`   | `vlc_gl_t*` | 指向 `vlc_gl_t` 结构体的指针，表示 OpenGL 上下文。 |

### 函数返回值
该函数没有返回值。
## vlc_gl_Swap {#vlc_gl_Swap}

```c
static inline void vlc_gl_Swap(vlc_gl_t *gl)
{
    gl->swap(gl);
}
```

### 描述
该函数用于交换 OpenGL 上下文中的缓冲区。它调用 `vlc_gl_t` 结构体中的 `swap` 函数指针来执行实际的缓冲区交换操作。

### 函数参数说明

| 参数名 | 类型      | 描述               |
|--------|-----------|--------------------|
| `gl`   | `vlc_gl_t*` | 指向 `vlc_gl_t` 结构体的指针，表示 OpenGL 上下文。 |

### 函数返回值
该函数没有返回值（`void`）。
## vlc_gl_t {#vlc_gl_t}

```c
struct vlc_gl_t {
    VLC_COMMON_MEMBERS

    struct vout_window_t *surface;
    module_t *module;
    void *sys;

    int  (*makeCurrent)(vlc_gl_t *);
    void (*releaseCurrent)(vlc_gl_t *);
    void (*swap)(vlc_gl_t *);
    int  (*lock)(vlc_gl_t *);
    void (*unlock)(vlc_gl_t *);
    void*(*getProcAddress)(vlc_gl_t *, const char *);
};
```

### 描述
`vlc_gl_t` 结构体定义了一个用于与 OpenGL 交互的接口。它包含了与 OpenGL 上下文相关的操作函数指针，如设置当前上下文、释放当前上下文、交换缓冲区等。

### 成员变量说明

| 成员变量名       | 类型                | 描述                                                                 |
|------------------|---------------------|----------------------------------------------------------------------|
| `surface`        | `struct vout_window_t *` | 指向与 OpenGL 上下文关联的窗口表面的指针。                                |
| `module`         | `module_t *`        | 指向与 OpenGL 上下文相关的模块的指针。                                    |
| `sys`            | `void *`            | 指向与 OpenGL 上下文相关的系统特定数据的指针。                             |
| `makeCurrent`    | `int (*)(vlc_gl_t *)` | 设置当前 OpenGL 上下文的函数指针。                                        |
| `releaseCurrent` | `void (*)(vlc_gl_t *)` | 释放当前 OpenGL 上下文的函数指针。                                        |
| `swap`           | `void (*)(vlc_gl_t *)` | 交换 OpenGL 缓冲区的函数指针。                                            |
| `lock`           | `int (*)(vlc_gl_t *)` | 锁定 OpenGL 上下文的函数指针。                                             |
| `unlock`         | `void (*)(vlc_gl_t *)` | 解锁 OpenGL 上下文的函数指针。                                             |
| `getProcAddress` | `void* (*)(vlc_gl_t *, const char *)` | 获取 OpenGL 扩展函数地址的函数指针。                                        |

### 函数指针说明

#### `makeCurrent`
- **描述**: 设置当前 OpenGL 上下文。
- **返回值**: 成功返回 0，失败返回负值。

#### `releaseCurrent`
- **描述**: 释放当前 OpenGL 上下文。
- **返回值**: 无返回值。

#### `swap`
- **描述**: 交换 OpenGL 缓冲区。
- **返回值**: 无返回值。

#### `lock`
- **描述**: 锁定 OpenGL 上下文。
- **返回值**: 成功返回 0，失败返回负值。

#### `unlock`
- **描述**: 解锁 OpenGL 上下文。
- **返回值**: 无返回值。

#### `getProcAddress`
- **描述**: 获取 OpenGL 扩展函数的地址。
- **返回值**: 返回函数地址，如果函数不存在则返回 `NULL`。
