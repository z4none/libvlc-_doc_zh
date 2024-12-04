## vout_Request {#vout_Request}

```c
VLC_API vout_thread_t * vout_Request( vlc_object_t *object, const vout_configuration_t *cfg );
```

### 描述
该函数返回一个合适的视频输出（vout）或释放给定的视频输出。如果 `cfg->fmt` 非空且有效，将返回一个视频输出，可能会重用 `cfg->vout`，否则返回 `NULL`。如果 `cfg->vout` 未被使用，它将被关闭并释放。返回的视频输出可以通过 `vout_Request` 或 `vout_Close()` 后跟 `vlc_object_release()` 或简化为 `vout_CloseAndRelease()` 来释放。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| object | `vlc_object_t *` | 一个 VLC 对象 |
| cfg | `const vout_configuration_t *` | 请求的视频配置 |

### 返回值
- **`vout_thread_t *`**: 返回一个视频输出线程指针。如果 `cfg->fmt` 非空且有效，则返回一个视频输出；如果 `cfg->vout` 未被使用，则返回 `NULL`。返回的视频输出可以通过 `vout_Request` 或 `vout_Close()` 后跟 `vlc_object_release()` 或简化为 `vout_CloseAndRelease()` 来释放。
## vout_Close {#vout_Close}

```c
VLC_API void vout_Close(vout_thread_t *p_vout);
```

### 描述
该函数用于关闭由 `vout_Request` 创建的输出（vout）。关联的输出模块将被关闭。需要注意的是，该函数不会释放资源，你需要调用 `vlc_object_release()` 或使用便捷的 `vout_CloseAndRelease()` 函数来释放资源。

### 参数说明

| 参数名   | 类型            | 描述                   |
|----------|-----------------|------------------------|
| `p_vout` | `vout_thread_t*` | 要关闭的输出线程的指针 |

### 返回值
该函数没有返回值。
## vout_CloseAndRelease {#vout_CloseAndRelease}

```c
static inline void vout_CloseAndRelease( vout_thread_t *p_vout )
```

### 函数描述
该函数用于关闭并释放由 `vout_Create` 创建的输出线程。

### 函数参数说明

| 参数名   | 类型            | 描述                   |
|----------|-----------------|------------------------|
| `p_vout` | `vout_thread_t*` | 要关闭并释放的输出线程 |

### 函数返回值
该函数没有返回值。
## vout_GetSnapshot {#vout_GetSnapshot}

```c
VLC_API int vout_GetSnapshot( vout_thread_t *p_vout,
                              block_t **pp_image, picture_t **pp_picture,
                              video_format_t *p_fmt,
                              const char *psz_format, mtime_t i_timeout );
```

### 函数描述
该函数用于处理快照请求。如果成功，`pp_image`、`pp_picture` 和 `p_fmt` 将被设置为返回的值。`pp_image` 将保存以 `psz_format` 格式编码的图片。`i_timeout` 指定函数等待快照可用的时间。

### 函数参数说明

| 参数名       | 类型            | 描述                                                                 |
|--------------|-----------------|----------------------------------------------------------------------|
| `p_vout`     | `vout_thread_t*`| 视频输出线程的指针。                                                   |
| `pp_image`   | `block_t**`     | 指向编码图片块的指针的指针。如果为 `NULL`，则不会返回编码图片。         |
| `pp_picture` | `picture_t**`   | 指向原始图片的指针的指针。如果为 `NULL`，则不会返回原始图片。           |
| `p_fmt`      | `video_format_t*`| 指向视频格式的指针。如果为 `NULL`，则不会返回视频格式信息。             |
| `psz_format` | `const char*`   | 指定编码图片的格式字符串。                                             |
| `i_timeout`  | `mtime_t`       | 函数等待快照可用的时间（以微秒为单位）。                               |

### 函数返回值
- **成功时**：返回 `0`。
- **失败时**：返回非零值，表示快照获取失败或超时。
## vout_ChangeAspectRatio {#vout_ChangeAspectRatio}

```c
VLC_API void vout_ChangeAspectRatio(vout_thread_t *p_vout, unsigned int i_num, unsigned int i_den);
```

### 描述
该函数用于更改视频输出的宽高比。它允许你设置一个新的宽高比，该宽高比将应用于视频输出。

### 函数参数说明

| 参数名   | 类型           | 描述                                                                 |
|----------|----------------|--------------------------------------------------------------------|
| p_vout   | vout_thread_t* | 指向视频输出线程的指针，表示要更改宽高比的视频输出。                  |
| i_num    | unsigned int   | 宽高比分子部分，表示宽高比的前半部分（例如，16 表示 16:9 中的 16）。 |
| i_den    | unsigned int   | 宽高比分母部分，表示宽高比的后半部分（例如，9 表示 16:9 中的 9）。    |

### 函数返回值
该函数没有返回值（`void`）。
## vout_GetPicture {#vout_GetPicture}

```c
VLC_API picture_t * vout_GetPicture( vout_thread_t *p_vout );
```

### 描述
该函数用于从视频输出线程中获取当前显示的图片。

### 函数参数说明

| 参数名   | 类型           | 描述                                                         |
|----------|----------------|--------------------------------------------------------------|
| `p_vout` | `vout_thread_t*` | 指向视频输出线程的指针，表示要从哪个视频输出线程中获取图片。 |

### 函数返回值
- 返回值类型：`picture_t*`
  - 如果成功，返回指向当前显示图片的指针。
  - 如果失败或当前没有可用的图片，返回 `NULL`。
## vout_PutPicture {#vout_PutPicture}

```c
VLC_API void vout_PutPicture(vout_thread_t *p_vout, picture_t *p_pic);
```

### 函数描述
该函数用于将一个视频帧（`picture_t`）放入视频输出线程（`vout_thread_t`）的队列中。这个函数通常用于将解码后的视频帧传递给视频输出模块进行显示。

### 函数参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|--------------------------------------------------------------------------|
| `p_vout`  | `vout_thread_t *` | 指向视频输出线程的指针，表示要将视频帧放入哪个视频输出线程的队列中。 |
| `p_pic`   | `picture_t *`    | 指向要放入队列的视频帧的指针。                                         |

### 函数返回值
该函数没有返回值（`void`）。
## vout_HoldPicture {#vout_HoldPicture}

```c
VLC_API void vout_HoldPicture(vout_thread_t *p_vout, picture_t *p_picture);
```

### 函数描述
该函数用于在视频输出线程中保留一张图片。保留的图片将不会被释放，直到调用 `vout_ReleasePicture` 函数。

### 函数参数说明

| 参数名      | 类型           | 描述                                                                 |
|-------------|----------------|--------------------------------------------------------------------------|
| `p_vout`    | `vout_thread_t *` | 指向视频输出线程的指针，表示要操作的视频输出线程。                     |
| `p_picture` | `picture_t *`    | 指向要保留的图片的指针，表示要保留的图片对象。                         |

### 函数返回值
该函数没有返回值。
## vout_ReleasePicture {#vout_ReleasePicture}

```c
VLC_API void vout_ReleasePicture(vout_thread_t *p_vout, picture_t *p_pic);
```

### 描述
该函数用于释放视频输出线程中的图片资源。它通知视频输出线程不再需要指定的图片，并允许视频输出线程回收该图片以供后续使用。

### 函数参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|--------------------------------------------------------------------------|
| `p_vout`  | `vout_thread_t *` | 指向视频输出线程的指针，表示当前操作的视频输出线程。                |
| `p_pic`   | `picture_t *`    | 指向要释放的图片的指针，表示需要释放的图片资源。                    |

### 函数返回值
该函数没有返回值。
## vout_PutSubpicture {#vout_PutSubpicture}

```c
VLC_API void vout_PutSubpicture(vout_thread_t *p_vout, subpicture_t *p_subpicture);
```

### 描述
该函数用于将一个子画面（subpicture）放入视频输出线程（vout_thread_t）中。子画面通常用于显示字幕、OSD（屏幕显示）或其他叠加在视频上的图形元素。

### 函数参数说明

| 参数名        | 类型           | 描述                                                                 |
|---------------|----------------|--------------------------------------------------------------------------|
| `p_vout`      | `vout_thread_t*` | 指向视频输出线程的指针，表示要将子画面放入的目标视频输出线程。         |
| `p_subpicture`| `subpicture_t*`  | 指向子画面的指针，表示要放入视频输出线程的子画面。                     |

### 函数返回值
该函数没有返回值（`void`）。
## vout_RegisterSubpictureChannel {#vout_RegisterSubpictureChannel}

```c
VLC_API int vout_RegisterSubpictureChannel(vout_thread_t *p_vout);
```

### 描述
该函数用于在视频输出线程中注册一个新的子画面通道。子画面通道用于在视频上叠加图形或文本，例如字幕或OSD（屏幕显示）信息。

### 函数参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|--------------------------------------------------------------------------|
| `p_vout`  | `vout_thread_t*` | 指向视频输出线程的指针。该线程负责管理视频的显示和相关的子画面通道。 |

### 函数返回值
- **成功**：返回一个非负整数，表示新注册的子画面通道的标识符（channel ID）。
- **失败**：返回 `-1`，表示注册子画面通道失败。可能的原因包括但不限于：视频输出线程未正确初始化或资源不足。
## vout_FlushSubpictureChannel {#vout_FlushSubpictureChannel}

```c
VLC_API void vout_FlushSubpictureChannel(vout_thread_t *p_vout, int i_channel);
```

### 函数描述
该函数用于刷新指定通道的子图层（subpicture）缓冲区。调用此函数后，该通道上的所有子图层将被丢弃，并且任何尚未显示的子图层将被立即移除。

### 函数参数说明

| 参数名       | 类型           | 描述                                                                 |
|--------------|----------------|--------------------------------------------------------------------------|
| `p_vout`     | `vout_thread_t*` | 指向视频输出线程的指针，表示要操作的视频输出实例。                     |
| `i_channel`  | `int`          | 子图层通道的标识符，表示要刷新的子图层通道。通道标识符通常是一个整数。 |

### 函数返回值
该函数没有返回值（`void`）。
## vout_EnableFilter {#vout_EnableFilter}

```c
VLC_API void vout_EnableFilter(vout_thread_t *p_vout, const char *psz_name, bool b_add, bool b_replace);
```

### 描述
该函数用于启用或禁用视频输出线程中的特定滤镜。通过指定滤镜名称，可以选择性地添加或替换现有的滤镜。

### 函数参数说明

| 参数名       | 类型          | 描述                                                                 |
|--------------|---------------|--------------------------------------------------------------------------|
| `p_vout`     | `vout_thread_t *` | 指向视频输出线程的指针，表示要操作的视频输出线程。 |
| `psz_name`   | `const char *`    | 滤镜的名称，表示要启用或禁用的滤镜。 |
| `b_add`      | `bool`            | 如果为 `true`，则添加指定的滤镜；如果为 `false`，则禁用指定的滤镜。 |
| `b_replace`  | `bool`            | 如果为 `true`，则替换现有的同名滤镜；如果为 `false`，则不替换。 |

### 函数返回值
该函数没有返回值。
## vout_thread_t {#vout_thread_t}

```c
struct vout_thread_t {
    VLC_COMMON_MEMBERS

    /* Private vout_thread data */
    vout_thread_sys_t *p;
};
```

### 描述
视频输出线程描述符。

任何独立视频输出设备，如 X11 窗口或 GGI 设备，都由一个视频输出线程表示，并使用以下结构进行描述。

### 成员说明

| 成员名称          | 类型                | 描述                                                                 |
|-------------------|---------------------|----------------------------------------------------------------------|
| VLC_COMMON_MEMBERS | (宏定义)            | VLC 公共成员，包含一些通用的成员变量和函数指针。                      |
| p                 | vout_thread_sys_t * | 指向私有视频输出线程数据的指针，用于存储特定于该线程的私有数据。     |

### 返回值
该结构体本身不返回值，它是一个描述视频输出线程的结构体定义。
