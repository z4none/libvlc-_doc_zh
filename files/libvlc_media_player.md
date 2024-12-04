## libvlc_media_player_new {#libvlc_media_player_new}

```c
LIBVLC_API libvlc_media_player_t * libvlc_media_player_new( libvlc_instance_t *p_libvlc_instance );
```

### 描述
创建一个空的媒体播放器对象。

### 函数参数说明

| 参数名                | 类型                  | 描述                                                         |
|----------------------|-----------------------|------------------------------------------------------------|
| `p_libvlc_instance`   | `libvlc_instance_t*`  | 在其中创建媒体播放器的 `libvlc` 实例。                      |

### 函数返回值
- **成功**：返回一个新的媒体播放器对象。
- **失败**：返回 `NULL`。
## libvlc_media_player_new_from_media {#libvlc_media_player_new_from_media}

```c
LIBVLC_API libvlc_media_player_t * libvlc_media_player_new_from_media( libvlc_media_t *p_md );
```

### 函数描述
从媒体对象创建一个新的媒体播放器对象。创建后，`p_md` 可以安全地销毁。

### 函数参数说明

| 参数名 | 类型                | 描述                                                                 |
|--------|---------------------|----------------------------------------------------------------------|
| p_md   | libvlc_media_t *     | 媒体对象。创建媒体播放器对象后，该媒体对象可以安全地销毁。 |

### 函数返回值
- **返回值类型**: `libvlc_media_player_t *`
- **返回值说明**:
  - 成功时返回一个新的媒体播放器对象。
  - 如果发生错误，返回 `NULL`。
## libvlc_media_player_release {#libvlc_media_player_release}

```c
LIBVLC_API void libvlc_media_player_release( libvlc_media_player_t *p_mi );
```

### 描述
在使用完媒体播放器后释放它。减少媒体播放器对象的引用计数。如果引用计数为0，`libvlc_media_player_release()` 将释放媒体播放器对象。如果媒体播放器对象已被释放，则不应再使用它。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 要释放的媒体播放器对象 |

### 返回值
该函数没有返回值。
## libvlc_media_player_retain {#libvlc_media_player_retain}

```c
LIBVLC_API void libvlc_media_player_retain( libvlc_media_player_t *p_mi );
```

### 描述
保留对媒体播放器对象的引用。使用 `libvlc_media_player_release()` 函数来减少引用计数。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器对象 |

### 返回值
该函数没有返回值。
## libvlc_media_player_set_media {#libvlc_media_player_set_media}

```c
LIBVLC_API void libvlc_media_player_set_media( libvlc_media_player_t *p_mi,
                                               libvlc_media_t *p_md );
```

### 描述
该函数用于设置媒体播放器将要使用的媒体。如果之前已经设置了媒体，则会释放之前的媒体。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t *` | 媒体播放器对象指针 |
| `p_md` | `libvlc_media_t *` | 媒体对象指针。设置后可以安全地销毁 `p_md` |

### 函数返回值
该函数没有返回值。

## libvlc_media_player_get_media {#libvlc_media_player_get_media}

```c
LIBVLC_API libvlc_media_t * libvlc_media_player_get_media( libvlc_media_player_t *p_mi );
```

### 描述
获取与媒体播放器关联的媒体。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| p_mi   | libvlc_media_player_t* | 媒体播放器对象 |

### 函数返回值
- **返回值类型**: `libvlc_media_t*`
- **返回值说明**:
  - 如果与 `p_mi` 关联的媒体存在，则返回该媒体对象。
  - 如果没有与 `p_mi` 关联的媒体，则返回 `NULL`。

## libvlc_media_player_event_manager {#libvlc_media_player_event_manager}

```c
LIBVLC_API libvlc_event_manager_t * libvlc_media_player_event_manager ( libvlc_media_player_t *p_mi );
```

### 描述
获取媒体播放器发送事件的事件管理器。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t *` | 媒体播放器实例 |

### 函数返回值
返回与 `p_mi` 关联的事件管理器。如果 `p_mi` 为 `NULL`，则返回 `NULL`。
## libvlc_media_player_is_playing {#libvlc_media_player_is_playing}

```c
LIBVLC_API int libvlc_media_player_is_playing ( libvlc_media_player_t *p_mi );
```

### 描述
该函数用于检查媒体播放器是否正在播放媒体。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t*` | 指向媒体播放器的指针 |

### 函数返回值
- **1**：如果媒体播放器正在播放媒体。
- **0**：如果媒体播放器没有在播放媒体。
## libvlc_media_player_play {#libvlc_media_player_play}

```c
LIBVLC_API int libvlc_media_player_play ( libvlc_media_player_t *p_mi );
```

### 描述
该函数用于启动媒体播放器的播放。如果播放已经启动，该函数也会返回成功。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 指向媒体播放器对象的指针。 |

### 函数返回值
- **0**：如果播放成功启动（或者播放已经启动）。
- **-1**：如果发生错误。
## libvlc_media_player_set_pause {#libvlc_media_player_set_pause}

```c
LIBVLC_API void libvlc_media_player_set_pause ( libvlc_media_player_t *mp, int do_pause );
```

### 描述
暂停或恢复媒体播放器（如果没有媒体则无效）。

### 函数参数说明

| 参数名    | 类型                     | 描述                                                                 |
|-----------|--------------------------|--------------------------------------------------------------------------|
| `mp`      | `libvlc_media_player_t*` | 媒体播放器对象。                                                         |
| `do_pause` | `int`                    | 如果为零，则恢复播放；如果为非零值，则暂停播放。                         |

### 函数返回值
该函数没有返回值。
## libvlc_media_player_pause {#libvlc_media_player_pause}

```c
LIBVLC_API void libvlc_media_player_pause ( libvlc_media_player_t *p_mi );
```

### 描述
切换暂停状态（如果没有媒体则无效果）。

### 参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| p_mi   | libvlc_media_player_t* | 媒体播放器实例 |

### 返回值
该函数没有返回值。
## libvlc_media_player_stop {#libvlc_media_player_stop}

```c
LIBVLC_API void libvlc_media_player_stop ( libvlc_media_player_t *p_mi );
```

### 描述
停止播放媒体（如果没有媒体正在播放，则此函数无效）。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| p_mi | libvlc_media_player_t* | 媒体播放器对象 |

### 函数返回值
该函数没有返回值。
## libvlc_video_set_callbacks {#libvlc_video_set_callbacks}

```c
void libvlc_video_set_callbacks( libvlc_media_player_t *mp,
                                 libvlc_video_lock_cb lock,
                                 libvlc_video_unlock_cb unlock,
                                 libvlc_video_display_cb display,
                                 void *opaque );
```

### 描述
设置回调函数和私有数据，以便将解码后的视频渲染到内存中的自定义区域。使用 `libvlc_video_set_format()` 或 `libvlc_video_set_format_callbacks()` 来配置解码格式。

### 函数参数说明

| 参数名   | 类型                        | 描述                                                                 |
|----------|-----------------------------|----------------------------------------------------------------------|
| `mp`     | `libvlc_media_player_t *`   | 媒体播放器对象                                                       |
| `lock`   | `libvlc_video_lock_cb`      | 锁定视频内存的回调函数（必须不为 `NULL`）                            |
| `unlock` | `libvlc_video_unlock_cb`    | 解锁视频内存的回调函数（如果不需要可以为 `NULL`）                    |
| `display`| `libvlc_video_display_cb`   | 显示视频的回调函数（如果不需要可以为 `NULL`）                        |
| `opaque` | `void *`                    | 三个回调函数的私有指针（作为第一个参数传递）                         |

### 函数返回值
该函数没有返回值。
## libvlc_video_set_format {#libvlc_video_set_format}

```c
void libvlc_video_set_format( libvlc_media_player_t *mp, const char *chroma,
                              unsigned width, unsigned height,
                              unsigned pitch );
```

### 描述
设置解码后的视频色度和尺寸。此功能仅在使用 `libvlc_video_set_callbacks()` 时有效，并且与 `libvlc_video_set_format_callbacks()` 互斥。

### 参数说明

| 参数   | 类型                     | 描述                                                                 |
|--------|--------------------------|--------------------------------------------------------------------------|
| mp     | libvlc_media_player_t*   | 媒体播放器对象。                                                         |
| chroma | const char*              | 一个四字符字符串，用于标识色度（例如 "RV32" 或 "YUYV"）。                |
| width  | unsigned                 | 像素宽度。                                                               |
| height | unsigned                 | 像素高度。                                                               |
| pitch  | unsigned                 | 行间距（以字节为单位）。所有像素平面都预期具有相同的间距。               |

### 返回值
该函数没有返回值。
## libvlc_video_set_format_callbacks {#libvlc_video_set_format_callbacks}

```c
void libvlc_video_set_format_callbacks( libvlc_media_player_t *mp,
                                        libvlc_video_format_cb setup,
                                        libvlc_video_cleanup_cb cleanup );
```

### 描述
设置解码后的视频色度和尺寸。此功能仅在使用 `libvlc_video_set_callbacks()` 时有效。

### 参数说明

| 参数名   | 类型                        | 描述                                                                 |
|----------|-----------------------------|----------------------------------------------------------------------|
| `mp`     | `libvlc_media_player_t *`   | 媒体播放器实例。                                                     |
| `setup`  | `libvlc_video_format_cb`     | 用于选择视频格式的回调函数（不能为 `NULL`）。                        |
| `cleanup`| `libvlc_video_cleanup_cb`   | 用于释放任何已分配资源的回调函数（可以为 `NULL`）。                  |

### 返回值
该函数没有返回值。
## libvlc_media_player_set_nsobject {#libvlc_media_player_set_nsobject}

```c
LIBVLC_API void libvlc_media_player_set_nsobject ( libvlc_media_player_t *p_mi, void * drawable );
```

### 描述
设置媒体播放器应该在其上渲染视频输出的NSView处理程序。使用名为“macosx”的输出。

`drawable` 可以是一个遵循 `VLCOpenGLVideoViewEmbedding` 协议的 `NSObject`，或者是一个 `NSView` 对象。

如果你想在Qt4中使用它，可以参考 `QMacCocoaViewContainer`。以下代码应该可以工作：

```c
{
    NSView *video = [[NSView alloc] init];
    QMacCocoaViewContainer *container = new QMacCocoaViewContainer(video, parent);
    libvlc_media_player_set_nsobject(mp, video);
    [video release];
}
```

你可以在 `VLCKit.framework` 中的 `VLCVideoView` 找到一个实际的例子。

### 参数说明

| 参数名   | 类型                      | 描述                                                                 |
|----------|---------------------------|----------------------------------------------------------------------|
| `p_mi`   | `libvlc_media_player_t *` | 媒体播放器实例。                                                     |
| `drawable` | `void *`                  | 可绘制的对象，可以是 `NSView` 或遵循 `VLCOpenGLVideoViewEmbedding` 协议的对象。 |

### 返回值
该函数没有返回值。
## libvlc_media_player_get_nsobject {#libvlc_media_player_get_nsobject}

```c
LIBVLC_API void * libvlc_media_player_get_nsobject ( libvlc_media_player_t *p_mi );
```

### 函数描述
获取之前通过 `libvlc_media_player_set_nsobject()` 设置的 NSView 句柄。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t *` | 媒体播放器对象 |

### 函数返回值
- **返回值类型**: `void *`
- **返回值说明**: 
  - 返回之前设置的 NSView 句柄。
  - 如果没有设置 NSView 句柄，则返回 `0`。
## libvlc_media_player_set_agl {#libvlc_media_player_set_agl}

```c
LIBVLC_API void libvlc_media_player_set_agl ( libvlc_media_player_t *p_mi, uint32_t drawable );
```

### 函数描述
设置媒体播放器应渲染其视频输出的 AGL 处理程序。

### 函数参数说明

| 参数名   | 类型                     | 描述                                                                 |
|----------|--------------------------|--------------------------------------------------------------------------|
| p_mi     | libvlc_media_player_t*   | 媒体播放器实例。                                                         |
| drawable | uint32_t                 | AGL 处理程序，用于指定视频输出的目标位置。                                |

### 函数返回值
该函数没有返回值。
## libvlc_media_player_get_agl {#libvlc_media_player_get_agl}

```c
LIBVLC_API uint32_t libvlc_media_player_get_agl ( libvlc_media_player_t *p_mi );
```

### 描述
获取之前通过 `libvlc_media_player_set_agl()` 设置的 AGL 处理程序。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器对象 |

### 函数返回值
- **返回值类型**: `uint32_t`
- **返回值说明**:
  - 返回之前设置的 AGL 处理程序，如果没有设置则返回 0。
## libvlc_media_player_set_xwindow {#libvlc_media_player_set_xwindow}

```c
LIBVLC_API void libvlc_media_player_set_xwindow ( libvlc_media_player_t *p_mi, uint32_t drawable );
```

### 描述
该函数用于设置一个 X Window System 的绘制区域（drawable），媒体播放器将在此区域渲染其视频输出。如果 LibVLC 是基于没有 X11 输出支持的版本构建的，则此函数不会有任何效果。

指定的标识符必须对应于一个现有的 Input/Output 类 X11 窗口。不支持 Pixmaps。调用者应确保 X11 服务器与 VLC 实例配置的服务器相同。此函数必须在视频播放开始之前调用；否则，它只会在播放停止并重新启动后生效。

### 参数说明

| 参数名   | 类型                     | 描述                                                                 |
|----------|--------------------------|--------------------------------------------------------------------|
| `p_mi`   | `libvlc_media_player_t*` | 媒体播放器对象的指针。                                               |
| `drawable` | `uint32_t`               | X 窗口的 ID，媒体播放器将在此窗口中渲染视频输出。                     |

### 返回值
该函数没有返回值。
## libvlc_media_player_get_xwindow {#libvlc_media_player_get_xwindow}

```c
LIBVLC_API uint32_t libvlc_media_player_get_xwindow ( libvlc_media_player_t *p_mi );
```

### 函数描述
该函数用于获取先前通过 `libvlc_media_player_set_xwindow()` 设置的 X Window System 窗口标识符。即使 VLC 当前未使用该标识符（例如播放仅音频的输入），该函数也会返回该标识符。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器对象 |

### 函数返回值
- **返回值类型**: `uint32_t`
- **返回值说明**:
  - 返回一个 X 窗口 ID，如果未设置窗口 ID，则返回 0。
## libvlc_media_player_set_hwnd {#libvlc_media_player_set_hwnd}

```c
LIBVLC_API void libvlc_media_player_set_hwnd ( libvlc_media_player_t *p_mi, void *drawable );
```

### 描述
设置一个 Win32/Win64 API 窗口句柄（HWND），媒体播放器应在此窗口中渲染其视频输出。如果 LibVLC 是使用不支持 Win32/Win64 API 输出的方式构建的，则此操作无效。

### 参数说明

| 参数名    | 类型                     | 描述                                                                 |
|-----------|--------------------------|--------------------------------------------------------------------------|
| p_mi      | libvlc_media_player_t*   | 媒体播放器实例。                                                       |
| drawable  | void*                    | 可绘制区域的窗口句柄（HWND），媒体播放器将在此窗口中渲染视频输出。 |

### 返回值
该函数没有返回值。
## libvlc_audio_set_callbacks {#libvlc_audio_set_callbacks}

```c
void libvlc_audio_set_callbacks( libvlc_media_player_t *mp,
                                 libvlc_audio_play_cb play,
                                 libvlc_audio_pause_cb pause,
                                 libvlc_audio_resume_cb resume,
                                 libvlc_audio_flush_cb flush,
                                 libvlc_audio_drain_cb drain,
                                 void *opaque );
```

### 描述
设置解码音频的回调函数和私有数据。使用 `libvlc_audio_set_format()` 或 `libvlc_audio_set_format_callbacks()` 来配置解码音频的格式。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `mp` | `libvlc_media_player_t *` | 媒体播放器实例 |
| `play` | `libvlc_audio_play_cb` | 播放音频样本的回调函数（不能为 NULL） |
| `pause` | `libvlc_audio_pause_cb` | 暂停播放的回调函数（可以为 NULL） |
| `resume` | `libvlc_audio_resume_cb` | 恢复播放的回调函数（可以为 NULL） |
| `flush` | `libvlc_audio_flush_cb` | 刷新音频缓冲区的回调函数（可以为 NULL） |
| `drain` | `libvlc_audio_drain_cb` | 排空音频缓冲区的回调函数（可以为 NULL） |
| `opaque` | `void *` | 音频回调函数的私有指针（作为第一个参数） |

### 返回值
该函数没有返回值。
## libvlc_audio_set_volume_callback {#libvlc_audio_set_volume_callback}

```c
LIBVLC_API
void libvlc_audio_set_volume_callback( libvlc_media_player_t *mp,
                                       libvlc_audio_set_volume_cb set_volume );
```

### 描述
设置解码音频的回调函数和私有数据。这仅在使用 `libvlc_audio_set_callbacks()` 时有效。使用 `libvlc_audio_set_format()` 或 `libvlc_audio_set_format_callbacks()` 来配置解码音频的格式。

### 参数说明

| 参数名        | 类型                        | 描述                                                                 |
|---------------|-----------------------------|----------------------------------------------------------------------|
| `mp`          | `libvlc_media_player_t*`     | 媒体播放器对象。                                                     |
| `set_volume`  | `libvlc_audio_set_volume_cb` | 用于应用音频音量的回调函数，如果为 `NULL`，则会在软件中应用音量。   |

### 返回值
该函数没有返回值。
## libvlc_audio_set_format_callbacks {#libvlc_audio_set_format_callbacks}

```c
void libvlc_audio_set_format_callbacks( libvlc_media_player_t *mp,
                                        libvlc_audio_setup_cb setup,
                                        libvlc_audio_cleanup_cb cleanup );
```

### 描述
设置解码后的音频格式。此功能仅在使用 `libvlc_audio_set_callbacks()` 时有效。

### 函数参数说明

| 参数名   | 类型                      | 描述                                                                 |
|----------|---------------------------|----------------------------------------------------------------------|
| `mp`     | `libvlc_media_player_t*`  | 媒体播放器对象。                                                     |
| `setup`  | `libvlc_audio_setup_cb`    | 用于选择音频格式的回调函数（不能为 `NULL`）。                        |
| `cleanup`| `libvlc_audio_cleanup_cb`  | 用于释放任何已分配资源的回调函数（可以为 `NULL`）。                  |

### 函数返回值
该函数没有返回值。
## libvlc_audio_set_format {#libvlc_audio_set_format}

```c
void libvlc_audio_set_format( libvlc_media_player_t *mp, const char *format,
                              unsigned rate, unsigned channels );
```

### 描述
设置解码后的音频格式。此功能仅在使用 `libvlc_audio_set_callbacks()` 时有效，并且与 `libvlc_audio_set_format_callbacks()` 互斥。

### 参数说明

| 参数       | 类型                     | 描述                                                                 |
|------------|--------------------------|--------------------------------------------------------------------------|
| `mp`       | `libvlc_media_player_t*` | 媒体播放器对象。                                                         |
| `format`   | `const char*`            | 一个四字符的字符串，用于标识样本格式（例如 "S16N" 或 "FL32"）。         |
| `rate`     | `unsigned`               | 采样率（以 Hz 为单位）。                                                 |
| `channels` | `unsigned`               | 声道数。                                                               |

### 返回值
该函数没有返回值。
## libvlc_media_player_get_length {#libvlc_media_player_get_length}

```c
LIBVLC_API libvlc_time_t libvlc_media_player_get_length( libvlc_media_player_t *p_mi );
```

### 描述
获取当前媒体的长度（以毫秒为单位）。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |

### 函数返回值
- **返回值类型**: `libvlc_time_t`
- **返回值说明**:
  - 返回当前媒体的长度（以毫秒为单位）。
  - 如果当前没有媒体，则返回 `-1`。
## libvlc_media_player_get_time {#libvlc_media_player_get_time}

```c
LIBVLC_API libvlc_time_t libvlc_media_player_get_time( libvlc_media_player_t *p_mi );
```

### 描述
获取当前电影时间（以毫秒为单位）。

### 函数参数说明

| 参数名       | 类型                     | 描述                   |
|--------------|--------------------------|------------------------|
| `p_mi`       | `libvlc_media_player_t*` | 媒体播放器对象指针     |

### 函数返回值
- **返回值类型**: `libvlc_time_t`
- **返回值说明**:
  - 返回当前电影时间（以毫秒为单位）。
  - 如果当前没有媒体，则返回 `-1`。
## libvlc_media_player_set_time {#libvlc_media_player_set_time}

```c
LIBVLC_API void libvlc_media_player_set_time( libvlc_media_player_t *p_mi, libvlc_time_t i_time );
```

### 描述
设置电影时间（以毫秒为单位）。如果没有媒体正在播放，则此操作无效。并非所有格式和协议都支持此功能。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |
| `i_time` | `libvlc_time_t` | 电影时间（以毫秒为单位） |

### 函数返回值
该函数没有返回值。
## libvlc_media_player_get_position {#libvlc_media_player_get_position}

```c
LIBVLC_API float libvlc_media_player_get_position( libvlc_media_player_t *p_mi );
```

### 描述
获取电影播放位置，以0.0到1.0之间的百分比表示。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| p_mi   | libvlc_media_player_t* | 媒体播放器实例 |

### 函数返回值
- **返回值类型**: `float`
- **返回值说明**:
  - 返回电影的播放位置，范围在0.0到1.0之间。
  - 如果发生错误，返回值为 `-1.0`。
## libvlc_media_player_set_position {#libvlc_media_player_set_position}

```c
LIBVLC_API void libvlc_media_player_set_position( libvlc_media_player_t *p_mi, float f_pos );
```

### 描述
设置电影播放位置为0.0到1.0之间的百分比。如果播放未启用，此操作无效。根据底层输入格式和协议的不同，此操作可能不起作用。

### 参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |
| `f_pos` | `float` | 播放位置，取值范围为0.0到1.0 |

### 返回值
该函数没有返回值。
## libvlc_media_player_set_chapter {#libvlc_media_player_set_chapter}

```c
LIBVLC_API void libvlc_media_player_set_chapter( libvlc_media_player_t *p_mi, int i_chapter );
```

### 函数描述
设置电影的章节（如果适用）。

### 函数参数说明
| 参数名       | 类型                    | 描述                   |
|--------------|-------------------------|------------------------|
| `p_mi`       | `libvlc_media_player_t*` | 媒体播放器实例         |
| `i_chapter`  | `int`                   | 要播放的章节编号       |

### 函数返回值
该函数没有返回值。
## libvlc_media_player_get_chapter {#libvlc_media_player_get_chapter}

```c
LIBVLC_API int libvlc_media_player_get_chapter( libvlc_media_player_t *p_mi );
```

### 函数描述
获取当前播放的电影章节。

### 函数参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - 返回当前播放的章节编号。
  - 如果当前没有媒体播放，则返回 `-1`。
## libvlc_media_player_get_chapter_count {#libvlc_media_player_get_chapter_count}

```c
LIBVLC_API int libvlc_media_player_get_chapter_count( libvlc_media_player_t *p_mi );
```

### 函数描述
获取电影的章节数量。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |

### 函数返回值
- 返回电影中的章节数量。
- 如果发生错误，返回 `-1`。
## libvlc_media_player_will_play {#libvlc_media_player_will_play}

```c
LIBVLC_API int libvlc_media_player_will_play( libvlc_media_player_t *p_mi );
```

### 描述
该函数用于检查媒体播放器是否能够播放。

### 参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 指向媒体播放器的指针 |

### 返回值
- `1`：表示媒体播放器能够播放。
- `0`：表示媒体播放器不能播放。
## libvlc_media_player_get_chapter_count_for_title {#libvlc_media_player_get_chapter_count_for_title}

```c
LIBVLC_API int libvlc_media_player_get_chapter_count_for_title(
                       libvlc_media_player_t *p_mi, int i_title );
```

### 描述
获取指定标题的章节数量。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |
| `i_title` | `int` | 标题索引 |

### 函数返回值
- 返回指定标题的章节数量。
- 如果发生错误，返回 `-1`。
## libvlc_media_player_set_title {#libvlc_media_player_set_title}

```c
LIBVLC_API void libvlc_media_player_set_title( libvlc_media_player_t *p_mi, int i_title );
```

### 描述
设置电影标题。

### 函数参数说明

| 参数名       | 类型                     | 描述                   |
|--------------|--------------------------|------------------------|
| `p_mi`       | `libvlc_media_player_t*` | 媒体播放器对象         |
| `i_title`    | `int`                    | 要播放的标题编号       |

### 函数返回值
该函数没有返回值。
## libvlc_media_player_get_title {#libvlc_media_player_get_title}

```c
LIBVLC_API int libvlc_media_player_get_title( libvlc_media_player_t *p_mi );
```

### 函数描述
获取当前播放的电影标题编号。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器对象指针 |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - 返回当前播放的电影标题编号。
  - 如果发生错误，返回 `-1`。
## libvlc_media_player_get_title_count {#libvlc_media_player_get_title_count}

```c
LIBVLC_API int libvlc_media_player_get_title_count( libvlc_media_player_t *p_mi );
```

### 函数描述
获取媒体播放器中的标题数量。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器对象指针 |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - 返回媒体播放器中的标题数量。
  - 如果发生错误，返回 `-1`。
## libvlc_media_player_previous_chapter {#libvlc_media_player_previous_chapter}

```c
LIBVLC_API void libvlc_media_player_previous_chapter( libvlc_media_player_t *p_mi );
```

### 描述
设置上一个章节（如果适用）。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |

### 函数返回值
该函数没有返回值。
## libvlc_media_player_next_chapter {#libvlc_media_player_next_chapter}

```c
LIBVLC_API void libvlc_media_player_next_chapter( libvlc_media_player_t *p_mi );
```

### 函数描述
设置下一章节（如果适用）。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t *` | 媒体播放器实例 |

### 函数返回值
该函数没有返回值。
## libvlc_media_player_get_rate {#libvlc_media_player_get_rate}

```c
LIBVLC_API float libvlc_media_player_get_rate( libvlc_media_player_t *p_mi );
```

### 描述
获取请求的电影播放速率。

**警告**: 根据底层媒体的不同，请求的速率可能与实际的播放速率不同。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器对象 |

### 函数返回值
返回电影的播放速率。
## libvlc_media_player_set_rate {#libvlc_media_player_set_rate}

```c
LIBVLC_API int libvlc_media_player_set_rate( libvlc_media_player_t *p_mi, float rate );
```

### 描述
设置媒体播放器的播放速率。

### 函数参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器对象 |
| `rate` | `float` | 要设置的播放速率 |

### 函数返回值
- `-1`：如果检测到错误。
- `0`：如果没有错误，但即使返回0，实际播放速率也可能不会生效，具体取决于底层媒体协议的支持情况。
## libvlc_media_player_get_state {#libvlc_media_player_get_state}

```c
LIBVLC_API libvlc_state_t libvlc_media_player_get_state( libvlc_media_player_t *p_mi );
```

### 函数描述
获取当前媒体播放器的状态。

### 函数参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| p_mi | libvlc_media_player_t* | 媒体播放器对象 |

### 函数返回值
返回当前媒体播放器的状态，可能的状态值包括：
- `libvlc_NothingSpecial`
- `libvlc_Opening`
- `libvlc_Buffering`
- `libvlc_Playing`
- `libvlc_Paused`
- `libvlc_Stopped`
- `libvlc_Ended`
- `libvlc_Error`

详细的状态值定义请参考 `libvlc_state_t`。
## libvlc_media_player_get_fps {#libvlc_media_player_get_fps}

```c
LIBVLC_API float libvlc_media_player_get_fps( libvlc_media_player_t *p_mi );
```

### 函数描述
获取正在播放的电影的帧率（fps）。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |

### 函数返回值
- **返回值类型**: `float`
- **返回值说明**:
  - 返回当前播放的电影的帧率（fps）。
  - 如果帧率未指定，则返回 `0`。
## libvlc_media_player_has_vout {#libvlc_media_player_has_vout}

```c
LIBVLC_API unsigned libvlc_media_player_has_vout( libvlc_media_player_t *p_mi );
```

### 描述
此函数用于查询媒体播放器当前有多少个视频输出。

### 参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| p_mi | libvlc_media_player_t* | 媒体播放器实例 |

### 返回值
- **返回值类型**: `unsigned`
- **返回值说明**: 返回媒体播放器当前的视频输出数量。
## libvlc_media_player_is_seekable {#libvlc_media_player_is_seekable}

```c
LIBVLC_API int libvlc_media_player_is_seekable( libvlc_media_player_t *p_mi );
```

### 描述
该函数用于检查媒体播放器是否支持定位（seek）功能。如果媒体播放器支持定位，则返回 `true`，否则返回 `false`。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t*` | 指向媒体播放器对象的指针。 |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - `1`：表示媒体播放器支持定位功能。
  - `0`：表示媒体播放器不支持定位功能。
## libvlc_media_player_can_pause {#libvlc_media_player_can_pause}

```c
LIBVLC_API int libvlc_media_player_can_pause( libvlc_media_player_t *p_mi );
```

### 描述
该函数用于检查指定的媒体播放器是否可以暂停。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t*` | 指向媒体播放器对象的指针 |

### 函数返回值
- **`true`**: 如果媒体播放器可以暂停，返回 `1`。
- **`false`**: 如果媒体播放器不能暂停，返回 `0`。
## libvlc_media_player_program_scrambled {#libvlc_media_player_program_scrambled}

```c
LIBVLC_API int libvlc_media_player_program_scrambled( libvlc_media_player_t *p_mi );
```

### 描述
检查当前节目是否被加扰。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| p_mi | libvlc_media_player_t* | 媒体播放器实例 |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - `1`：当前节目被加扰。
  - `0`：当前节目未被加扰。
  - `-1`：发生错误。

### 版本
- **LibVLC 2.2.0** 或更高版本
## libvlc_media_player_next_frame {#libvlc_media_player_next_frame}

```c
LIBVLC_API void libvlc_media_player_next_frame( libvlc_media_player_t *p_mi );
```

### 描述
显示下一帧（如果支持）。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |

### 函数返回值
该函数没有返回值。
## libvlc_media_player_navigate {#libvlc_media_player_navigate}

```c
LIBVLC_API void libvlc_media_player_navigate( libvlc_media_player_t* p_mi, unsigned navigate );
```

### 函数描述
该函数用于在DVD菜单中进行导航操作。通过指定导航模式，可以在DVD菜单中进行相应的操作。

### 函数参数说明

| 参数名   | 类型                     | 描述                                                                 |
|----------|--------------------------|--------------------------------------------------------------------|
| `p_mi`   | `libvlc_media_player_t*` | 媒体播放器实例，指向要进行导航操作的媒体播放器对象。                   |
| `navigate` | `unsigned`               | 导航模式，指定要在DVD菜单中执行的导航操作。具体模式值请参考相关文档。 |

### 函数返回值
该函数没有返回值。
## libvlc_media_player_set_video_title_display {#libvlc_media_player_set_video_title_display}

```c
LIBVLC_API void libvlc_media_player_set_video_title_display( libvlc_media_player_t *p_mi, libvlc_position_t position, unsigned int timeout );
```

### 描述
设置在播放媒体时是否以及如何显示视频标题。

### 函数参数说明

| 参数名   | 类型                  | 描述                                                                 |
|----------|-----------------------|--------------------------------------------------------------------------|
| `p_mi`   | `libvlc_media_player_t*` | 媒体播放器对象。                                                       |
| `position` | `libvlc_position_t`    | 显示标题的位置，或者使用 `libvlc_position_disable` 来阻止标题显示。 |
| `timeout` | `unsigned int`         | 标题显示的超时时间，单位为毫秒（如果 `position` 为 `libvlc_position_disable`，则忽略此参数）。 |

### 函数返回值
该函数没有返回值。
## libvlc_track_description_list_release {#libvlc_track_description_list_release}

```c
LIBVLC_API void libvlc_track_description_list_release( libvlc_track_description_t *p_track_description );
```

### 描述
释放（释放）`libvlc_track_description_t` 结构体。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_track_description` | `libvlc_track_description_t*` | 要释放的结构体指针 |

### 函数返回值
该函数没有返回值。
## libvlc_track_description_release {#libvlc_track_description_release}

```c
void libvlc_track_description_release( libvlc_track_description_t *p_track_description );
```

### 描述

该函数已被弃用，建议使用 `libvlc_track_description_list_release` 代替。它用于释放 `libvlc_track_description_t` 结构体及其相关资源。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_track_description` | `libvlc_track_description_t*` | 指向要释放的 `libvlc_track_description_t` 结构体的指针。 |

### 函数返回值

该函数没有返回值。
## libvlc_toggle_fullscreen {#libvlc_toggle_fullscreen}

```c
LIBVLC_API void libvlc_toggle_fullscreen( libvlc_media_player_t *p_mi );
```

### 描述
切换非嵌入式视频输出的全屏状态。

### 函数参数说明

| 参数名       | 类型                      | 描述                 |
|--------------|---------------------------|----------------------|
| `p_mi`       | `libvlc_media_player_t*`   | 媒体播放器实例       |

### 函数返回值
该函数没有返回值。
## libvlc_set_fullscreen {#libvlc_set_fullscreen}

```c
LIBVLC_API void libvlc_set_fullscreen( libvlc_media_player_t *p_mi, int b_fullscreen );
```

### 描述
启用或禁用全屏模式。

**警告**：大多数窗口管理器只允许顶级窗口处于全屏模式。因此，如果使用 `libvlc_media_player_set_xwindow()` 将视频嵌入到非顶级窗口中，此函数将无法正常工作。在这种情况下，嵌入的窗口必须在启用全屏模式**之前**重新父化为根窗口。当禁用全屏模式时，您可能希望将其重新父化为其正常父窗口。

### 参数说明

| 参数名        | 类型                     | 描述                                                                 |
|---------------|--------------------------|--------------------------------------------------------------------------|
| `p_mi`        | `libvlc_media_player_t*` | 媒体播放器对象的指针。                                                 |
| `b_fullscreen`| `int`                    | 全屏状态的布尔值。非零值表示启用全屏，零值表示禁用全屏。               |

### 返回值
此函数没有返回值。
## libvlc_get_fullscreen {#libvlc_get_fullscreen}

```c
LIBVLC_API int libvlc_get_fullscreen( libvlc_media_player_t *p_mi );
```

### 描述
获取当前的全屏状态。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - `1`: 表示当前处于全屏状态。
  - `0`: 表示当前未处于全屏状态。
## libvlc_video_set_key_input {#libvlc_video_set_key_input}

```c
LIBVLC_API
void libvlc_video_set_key_input( libvlc_media_player_t *p_mi, unsigned on );
```

### 描述
启用或禁用按键事件处理，根据 LibVLC 的热键配置。默认情况下，由于历史原因，键盘事件由 LibVLC 视频小部件处理。

**注意**：在 X11 上，每个窗口只能有一个订阅者用于按键和鼠标点击事件。如果您的应用程序已经订阅了视频小部件的 X 窗口 ID 的这些事件，那么 LibVLC 将无法处理任何情况下的按键和鼠标点击事件。

**警告**：此函数目前仅在 X11 和 Win32 上实现。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |
| `on` | `unsigned` | 如果为 `true`，则处理按键事件；如果为 `false`，则忽略按键事件。 |

### 返回值
此函数没有返回值。
## libvlc_video_set_mouse_input {#libvlc_video_set_mouse_input}

```c
LIBVLC_API
void libvlc_video_set_mouse_input( libvlc_media_player_t *p_mi, unsigned on );
```

### 描述
该函数用于启用或禁用鼠标点击事件的处理。默认情况下，这些事件是被处理的。这对于DVD菜单的正常工作以及一些视频滤镜（如“拼图”）是必需的。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |
| `on` | `unsigned` | 如果为 `true`，则处理鼠标点击事件；如果为 `false`，则忽略鼠标点击事件 |

### 返回值
该函数没有返回值。
## libvlc_video_get_size {#libvlc_video_get_size}

```c
LIBVLC_API
int libvlc_video_get_size( libvlc_media_player_t *p_mi, unsigned num,
                           unsigned *px, unsigned *py );
```

### 描述
获取视频的像素尺寸。

### 参数说明
| 参数名 | 类型 | 输入/输出 | 描述 |
| --- | --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 输入 | 媒体播放器实例 |
| `num` | `unsigned` | 输入 | 视频的编号（从0开始，通常为0） |
| `px` | `unsigned*` | 输出 | 用于获取像素宽度的指针 |
| `py` | `unsigned*` | 输出 | 用于获取像素高度的指针 |

### 返回值
- `0`：成功获取视频的像素尺寸。
- `-1`：指定的视频不存在。
## libvlc_video_get_height {#libvlc_video_get_height}

```c
int libvlc_video_get_height( libvlc_media_player_t *p_mi );
```

### 描述
获取当前视频的高度。此函数已被弃用，建议使用 `libvlc_video_get_size()` 代替。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - 返回当前视频的像素高度。
  - 如果无法获取视频高度，则返回 `0`。
## libvlc_video_get_width {#libvlc_video_get_width}

```c
LIBVLC_DEPRECATED LIBVLC_API
int libvlc_video_get_width( libvlc_media_player_t *p_mi );
```

### 描述
获取当前视频的宽度。该函数已被弃用，建议使用 `libvlc_video_get_size()` 代替。

### 参数说明

| 参数名       | 类型                      | 描述                   |
|--------------|---------------------------|------------------------|
| `p_mi`       | `libvlc_media_player_t*`  | 媒体播放器实例         |

### 返回值
- 返回当前视频的像素宽度。
- 如果无法获取宽度，则返回 `0`。
## libvlc_video_get_cursor {#libvlc_video_get_cursor}

```c
LIBVLC_API
int libvlc_video_get_cursor( libvlc_media_player_t *p_mi, unsigned num,
                             int *px, int *py );
```

### 描述
获取鼠标指针在视频上的坐标。坐标是基于解码视频分辨率表示的，**而不是**屏幕/视口上的像素（要获取后者，可以直接查询窗口系统）。

如果指针位于渲染区域之外，坐标可能是负值或大于视频的相应尺寸。

**警告**：如果指针不在视频渲染区域内，坐标可能已过期。LibVLC 不会跟踪指针是否在视频小部件之外。

**注意**：目前 LibVLC 不支持多个指针（当然，它支持多个输入设备共享同一个指针）。

### 参数说明

| 参数 | 类型 | 方向 | 描述 |
|------|------|------|------|
| `p_mi` | `libvlc_media_player_t*` | 输入 | 媒体播放器实例 |
| `num` | `unsigned` | 输入 | 视频编号（从 0 开始，通常为 0） |
| `px` | `int*` | 输出 | 用于获取横坐标 [OUT] |
| `py` | `int*` | 输出 | 用于获取纵坐标 [OUT] |

### 返回值
- `0`：成功
- `-1`：指定的视频不存在
## libvlc_video_get_scale {#libvlc_video_get_scale}

```c
LIBVLC_API float libvlc_video_get_scale( libvlc_media_player_t *p_mi );
```

### 描述
获取当前视频的缩放因子。参见 `libvlc_video_set_scale()` 函数。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |

### 函数返回值
- 返回当前配置的缩放因子。如果视频设置为自动适应输出窗口/可绘制区域，则返回 `0.0`。
## libvlc_video_set_scale {#libvlc_video_set_scale}

```c
LIBVLC_API void libvlc_video_set_scale( libvlc_media_player_t *p_mi, float f_factor );
```

### 描述
设置视频的缩放因子。这个因子是屏幕上像素数量与原始解码视频中像素数量在每个维度上的比率。零是一个特殊值；它将调整视频以适应输出窗口/可绘制区域（在窗口模式下）或整个屏幕。

请注意，并非所有视频输出都支持缩放。

### 参数说明

| 参数名    | 类型                   | 描述                                                         |
|-----------|------------------------|--------------------------------------------------------------|
| `p_mi`    | `libvlc_media_player_t*` | 媒体播放器实例。                                             |
| `f_factor`| `float`                | 缩放因子，或为零以自动调整视频大小以适应输出窗口/屏幕。     |

### 返回值
该函数没有返回值。
## libvlc_video_set_aspect_ratio {#libvlc_video_set_aspect_ratio}

```c
LIBVLC_API void libvlc_video_set_aspect_ratio( libvlc_media_player_t *p_mi, const char *psz_aspect );
```

### 描述
设置新的视频宽高比。

### 函数参数说明

| 参数名       | 类型                      | 描述                                                                 |
|--------------|---------------------------|--------------------------------------------------------------------------|
| `p_mi`       | `libvlc_media_player_t*`   | 媒体播放器实例。                                                         |
| `psz_aspect` | `const char*`              | 新的视频宽高比字符串，或 `NULL` 以重置为默认值。无效的宽高比将被忽略。 |

### 函数返回值
该函数没有返回值。
## libvlc_video_get_spu {#libvlc_video_get_spu}

```c
LIBVLC_API int libvlc_video_get_spu( libvlc_media_player_t *p_mi );
```

### 描述
获取当前视频的字幕。

### 函数参数说明

| 参数名       | 类型                      | 描述                                                         |
| ------------ | ------------------------- | ------------------------------------------------------------ |
| `p_mi`       | `libvlc_media_player_t*`  | 媒体播放器实例的指针。                                       |

### 函数返回值
- 返回当前选中的字幕索引，如果未选中任何字幕，则返回 `-1`。
## libvlc_video_get_spu_count {#libvlc_video_get_spu_count}

```c
LIBVLC_API int libvlc_video_get_spu_count( libvlc_media_player_t *p_mi );
```

### 函数描述
获取可用的视频字幕数量。

### 函数参数说明

| 参数名       | 类型                      | 描述                   |
|--------------|---------------------------|------------------------|
| `p_mi`       | `libvlc_media_player_t*`  | 媒体播放器实例         |

### 函数返回值
返回可用的视频字幕数量。如果发生错误，返回值可能为负数。
## libvlc_video_get_spu_description {#libvlc_video_get_spu_description}

```c
LIBVLC_API libvlc_track_description_t *
libvlc_video_get_spu_description( libvlc_media_player_t *p_mi );
```

### 描述
获取可用视频字幕的描述。

### 函数参数说明

| 参数名       | 类型                     | 描述                   |
|--------------|--------------------------|------------------------|
| `p_mi`       | `libvlc_media_player_t*` | 媒体播放器实例         |

### 函数返回值
返回一个包含可用视频字幕描述的列表。
## libvlc_video_set_spu {#libvlc_video_set_spu}

```c
LIBVLC_API int libvlc_video_set_spu( libvlc_media_player_t *p_mi, int i_spu );
```

### 描述
设置新的视频字幕。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |
| `i_spu` | `int` | 要选择的视频字幕轨道（从轨道描述中的 `i_id` 获取） |

### 函数返回值
- **0**：成功
- **-1**：超出范围
## libvlc_video_set_subtitle_file {#libvlc_video_set_subtitle_file}

```c
LIBVLC_API int libvlc_video_set_subtitle_file( libvlc_media_player_t *p_mi, const char *psz_subtitle );
```

### 函数描述
设置新的视频字幕文件。

### 函数参数说明
| 参数名          | 类型                        | 描述                   |
|-----------------|-----------------------------|------------------------|
| `p_mi`          | `libvlc_media_player_t*`     | 媒体播放器实例         |
| `psz_subtitle`  | `const char*`               | 新的视频字幕文件路径   |

### 函数返回值
- **成功**：返回 `1`，表示字幕文件设置成功。
- **失败**：返回 `0`，表示字幕文件设置失败。
## libvlc_video_get_spu_delay {#libvlc_video_get_spu_delay}

```c
LIBVLC_API int64_t libvlc_video_get_spu_delay( libvlc_media_player_t *p_mi );
```

### 描述
获取当前字幕延迟时间。正值表示字幕显示延迟，负值表示字幕显示提前。

### 参数说明
| 参数名       | 类型                     | 描述                   |
|--------------|--------------------------|------------------------|
| `p_mi`       | `libvlc_media_player_t*` | 媒体播放器实例         |

### 返回值
返回字幕显示延迟的时间（以微秒为单位）。正值表示字幕显示延迟，负值表示字幕显示提前。
## libvlc_video_set_spu_delay {#libvlc_video_set_spu_delay}

```c
LIBVLC_API int libvlc_video_set_spu_delay( libvlc_media_player_t *p_mi, int64_t i_delay );
```

### 描述
设置字幕延迟。这将影响字幕显示的时间。正值会导致字幕显示延迟，而负值会导致字幕显示提前。每次媒体更改时，字幕延迟都会重置为零。

### 参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |
| `i_delay` | `int64_t` | 字幕显示延迟的时间（以微秒为单位） |

### 返回值
- `0`：成功
- `-1`：错误

### 版本
LibVLC 2.0.0 或更高版本
## libvlc_video_get_title_description {#libvlc_video_get_title_description}

```c
LIBVLC_API libvlc_track_description_t *
libvlc_video_get_title_description( libvlc_media_player_t *p_mi );
```

### 函数描述
获取可用标题的描述列表。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t *` | 媒体播放器实例 |

### 函数返回值
返回一个包含可用标题描述的列表。如果发生错误，返回值可能为 `NULL`。
## libvlc_video_get_chapter_description {#libvlc_video_get_chapter_description}

```c
LIBVLC_API libvlc_track_description_t *
libvlc_video_get_chapter_description( libvlc_media_player_t *p_mi, int i_title );
```

### 描述
获取特定标题的可用章节的描述。

### 函数参数说明

| 参数名       | 类型                     | 描述                                                                 |
|--------------|--------------------------|--------------------------------------------------------------------------|
| `p_mi`       | `libvlc_media_player_t*` | 媒体播放器实例。                                                         |
| `i_title`    | `int`                    | 选定的标题索引。                                                         |

### 函数返回值
返回一个包含标题 `i_title` 的可用章节描述的列表。如果失败，返回 `NULL`。
## libvlc_video_set_crop_geometry {#libvlc_video_set_crop_geometry}

```c
LIBVLC_API
void libvlc_video_set_crop_geometry( libvlc_media_player_t *p_mi, const char *psz_geometry );
```

### 函数描述
设置新的裁剪滤镜几何参数。

### 函数参数说明

| 参数名        | 类型                        | 描述                                                                 |
|---------------|-----------------------------|----------------------------------------------------------------------|
| `p_mi`        | `libvlc_media_player_t*`     | 媒体播放器实例。                                                     |
| `psz_geometry`| `const char*`               | 新的裁剪滤镜几何参数（设置为 `NULL` 以取消裁剪）。                   |

### 函数返回值
该函数没有返回值。
## libvlc_video_get_teletext {#libvlc_video_get_teletext}

```c
LIBVLC_API int libvlc_video_get_teletext( libvlc_media_player_t *p_mi );
```

### 描述
获取当前请求的图文电视页面。

### 函数参数说明

| 参数名       | 类型                      | 描述                   |
|--------------|---------------------------|------------------------|
| `p_mi`       | `libvlc_media_player_t*`  | 媒体播放器实例         |

### 函数返回值
返回当前请求的图文电视页面编号。
## libvlc_video_set_teletext {#libvlc_video_set_teletext}

```c
LIBVLC_API void libvlc_video_set_teletext( libvlc_media_player_t *p_mi, int i_page );
```

### 描述
设置新的图文电视页面以进行检索。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |
| `i_page` | `int` | 请求的图文电视页面编号 |

### 函数返回值
该函数没有返回值。
## libvlc_toggle_teletext {#libvlc_toggle_teletext}

```c
LIBVLC_API void libvlc_toggle_teletext( libvlc_media_player_t *p_mi );
```

### 描述
切换视频输出中的图文电视透明状态。

### 函数参数说明

| 参数名       | 类型                      | 描述                   |
|--------------|---------------------------|------------------------|
| `p_mi`       | `libvlc_media_player_t*`   | 媒体播放器实例         |

### 函数返回值
该函数没有返回值。
## libvlc_video_get_track_count {#libvlc_video_get_track_count}

```c
LIBVLC_API int libvlc_video_get_track_count( libvlc_media_player_t *p_mi );
```

### 描述
获取可用的视频轨道的数量。

### 函数参数说明

| 参数名       | 类型                      | 描述               |
|--------------|---------------------------|--------------------|
| `p_mi`       | `libvlc_media_player_t*`   | 媒体播放器实例     |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - 返回可用的视频轨道的数量。
  - 如果发生错误，返回值可能为负数。
## libvlc_video_get_track_description {#libvlc_video_get_track_description}

```c
LIBVLC_API libvlc_track_description_t *
libvlc_video_get_track_description( libvlc_media_player_t *p_mi );
```

### 函数描述
获取可用视频轨道的描述信息。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t *` | 媒体播放器实例 |

### 函数返回值
- **成功**：返回一个包含可用视频轨道描述信息的链表。
- **失败**：返回 `NULL`。
## libvlc_video_get_track {#libvlc_video_get_track}

```c
LIBVLC_API int libvlc_video_get_track( libvlc_media_player_t *p_mi );
```

### 描述
获取当前视频轨道的ID。

### 函数参数说明

| 参数名       | 类型                     | 描述                                                         |
|--------------|--------------------------|--------------------------------------------------------------|
| `p_mi`       | `libvlc_media_player_t*` | 媒体播放器实例的指针。                                       |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - 返回当前视频轨道的ID（整数）。
  - 如果当前没有激活的输入，则返回 `-1`。
## libvlc_video_set_track {#libvlc_video_set_track}

```c
LIBVLC_API
int libvlc_video_set_track( libvlc_media_player_t *p_mi, int i_track );
```

### 描述
设置视频轨道。

### 函数参数说明

| 参数名       | 类型                     | 描述                                                                 |
|--------------|--------------------------|--------------------------------------------------------------------------|
| `p_mi`       | `libvlc_media_player_t*` | 媒体播放器对象。                                                         |
| `i_track`    | `int`                    | 轨道ID（从轨道描述中的 `i_id` 字段获取）。                                |

### 函数返回值
- `0`：成功。
- `-1`：超出范围（即指定的轨道ID无效）。
## libvlc_video_take_snapshot {#libvlc_video_take_snapshot}

```c
LIBVLC_API
int libvlc_video_take_snapshot( libvlc_media_player_t *p_mi, unsigned num,
                                const char *psz_filepath, unsigned int i_width,
                                unsigned int i_height );
```

### 描述
该函数用于对当前视频窗口进行截图。如果 `i_width` 和 `i_height` 都为 0，则使用原始尺寸。如果 `i_width` 或 `i_height` 为 0，则保留原始宽高比。

### 参数说明

| 参数名        | 类型                        | 描述                                                         |
|---------------|-----------------------------|--------------------------------------------------------------|
| `p_mi`        | `libvlc_media_player_t*`     | 媒体播放器实例                                               |
| `num`         | `unsigned`                  | 视频输出的编号（通常为 0，表示第一个/唯一的视频输出）        |
| `psz_filepath`| `const char*`               | 保存截图的路径                                               |
| `i_width`     | `unsigned int`              | 截图的宽度                                                   |
| `i_height`    | `unsigned int`              | 截图的高度                                                   |

### 返回值
- `0`：成功
- `-1`：视频未找到
## libvlc_video_set_deinterlace {#libvlc_video_set_deinterlace}

```c
LIBVLC_API void libvlc_video_set_deinterlace( libvlc_media_player_t *p_mi, const char *psz_mode );
```

### 描述
该函数用于启用或禁用去隔行滤镜。通过设置 `psz_mode` 参数来指定去隔行滤镜的类型，如果设置为 `NULL`，则禁用去隔行滤镜。

### 函数参数说明

| 参数名       | 类型                     | 描述                                                                 |
|--------------|--------------------------|--------------------------------------------------------------------------|
| `p_mi`       | `libvlc_media_player_t*` | libvlc 媒体播放器实例指针。                                             |
| `psz_mode`   | `const char*`            | 去隔行滤镜的类型，设置为 `NULL` 表示禁用去隔行滤镜。                     |

### 函数返回值
该函数没有返回值。
## libvlc_video_get_marquee_int {#libvlc_video_get_marquee_int}

```c
LIBVLC_API int libvlc_video_get_marquee_int( libvlc_media_player_t *p_mi, unsigned option );
```

### 描述
获取整数类型的字幕选项值。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| p_mi   | libvlc_media_player_t* | libvlc 媒体播放器实例 |
| option | unsigned | 要获取的字幕选项，参考 `libvlc_video_marquee_int_option_t` |

### 函数返回值
返回指定字幕选项的整数值。如果选项无效或发生错误，则返回 `-1`。
## libvlc_video_set_marquee_int {#libvlc_video_set_marquee_int}

```c
LIBVLC_API void libvlc_video_set_marquee_int( libvlc_media_player_t *p_mi,
                                              unsigned option, int i_val );
```

### 描述
启用、禁用或设置整数类型的字幕选项。设置 `libvlc_marquee_Enable` 的副作用是启用（`arg != 0`）或禁用（`arg == 0`）字幕过滤器。

### 参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t*` | libvlc 媒体播放器实例 |
| `option` | `unsigned` | 要设置的字幕选项，参考 `libvlc_video_marquee_int_option_t` |
| `i_val` | `int` | 字幕选项的值 |

### 返回值
该函数没有返回值。
## libvlc_video_set_marquee_string {#libvlc_video_set_marquee_string}

```c
LIBVLC_API void libvlc_video_set_marquee_string( libvlc_media_player_t *p_mi,
                                                 unsigned option, const char *psz_text );
```

### 描述
设置跑马灯字符串选项。

### 函数参数说明

| 参数名     | 类型                        | 描述                                                                 |
|------------|-----------------------------|----------------------------------------------------------------------|
| `p_mi`     | `libvlc_media_player_t*`    | libvlc 媒体播放器实例                                                |
| `option`   | `unsigned`                  | 要设置的跑马灯选项，参考 `libvlc_video_marquee_string_option_t`       |
| `psz_text` | `const char*`               | 跑马灯选项的值                                                       |

### 函数返回值
该函数没有返回值。
## libvlc_video_get_logo_int {#libvlc_video_get_logo_int}

```c
LIBVLC_API int libvlc_video_get_logo_int( libvlc_media_player_t *p_mi, unsigned option );
```

### 描述
获取整数类型的 logo 选项。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t*` | libvlc 媒体播放器实例 |
| `option` | `unsigned` | 要获取的 logo 选项，取值为 `libvlc_video_logo_option_t` 中的值 |

### 函数返回值
- 返回指定 logo 选项的整数值。
- 如果参数无效或发生错误，返回值可能为负数。
## libvlc_video_set_logo_int {#libvlc_video_set_logo_int}

```c
LIBVLC_API void libvlc_video_set_logo_int( libvlc_media_player_t *p_mi,
                                               unsigned option, int value );
```

### 描述
该函数用于将Logo选项设置为整数值。如果选项需要不同类型的值，则会被忽略。传递 `libvlc_logo_enable` 作为选项值时，会有一个副作用，即启动（参数不为0）或停止（参数为0）Logo滤镜。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | libvlc媒体播放器实例 |
| `option` | `unsigned` | 要设置的Logo选项，取值为 `libvlc_video_logo_option_t` 中的值 |
| `value` | `int` | Logo选项的值 |

### 返回值
该函数没有返回值。
## libvlc_video_set_logo_string {#libvlc_video_set_logo_string}

```c
LIBVLC_API void libvlc_video_set_logo_string( libvlc_media_player_t *p_mi,
                                      unsigned option, const char *psz_value );
```

### 描述
设置视频的 logo 选项为字符串。如果选项需要不同类型的值，则会被忽略。

### 参数说明
| 参数名       | 类型                     | 描述                                                                 |
|--------------|--------------------------|----------------------------------------------------------------------|
| `p_mi`       | `libvlc_media_player_t*` | libvlc 媒体播放器实例                                                |
| `option`     | `unsigned`               | 要设置的 logo 选项，取值为 `libvlc_video_logo_option_t` 枚举类型      |
| `psz_value`  | `const char*`            | logo 选项的值，以字符串形式表示                                       |

### 返回值
该函数没有返回值。
## libvlc_video_get_adjust_int {#libvlc_video_get_adjust_int}

```c
LIBVLC_API int libvlc_video_get_adjust_int( libvlc_media_player_t *p_mi, unsigned option );
```

### 描述
获取整数调整选项。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t*` | libvlc 媒体播放器实例 |
| `option` | `unsigned` | 要获取的调整选项，取值为 `libvlc_video_adjust_option_t` 中的值 |

### 函数返回值
返回整数调整选项的值。如果成功，返回值为调整选项的当前值；如果失败，返回值为 `-1`。
## libvlc_video_set_adjust_int {#libvlc_video_set_adjust_int}

```c
LIBVLC_API void libvlc_video_set_adjust_int( libvlc_media_player_t *p_mi,
                                             unsigned option, int value );
```

### 描述
设置调整选项为整数。如果选项需要不同类型的值，则会被忽略。传递 `libvlc_adjust_enable` 作为选项值时，会有一个副作用，即根据参数值（非零时启动，零时停止）启动或停止调整滤镜。

### 参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| p_mi | libvlc_media_player_t* | libvlc 媒体播放器实例 |
| option | unsigned | 要设置的调整选项，取值为 `libvlc_video_adjust_option_t` 中的值 |
| value | int | 调整选项的值 |

### 返回值
该函数没有返回值。
## libvlc_video_get_adjust_float {#libvlc_video_get_adjust_float}

```c
LIBVLC_API float libvlc_video_get_adjust_float( libvlc_media_player_t *p_mi, unsigned option );
```

### 函数描述
获取视频调整选项的浮点数值。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | libvlc 媒体播放器实例 |
| `option` | `unsigned` | 要获取的调整选项，取值为 `libvlc_video_adjust_option_t` 中的值 |

### 函数返回值
返回指定调整选项的浮点数值。如果选项无效或发生错误，返回值可能为 `0.0`。
## libvlc_video_set_adjust_float {#libvlc_video_set_adjust_float}

```c
LIBVLC_API void libvlc_video_set_adjust_float( libvlc_media_player_t *p_mi,
                                               unsigned option, float value );
```

### 描述
设置调整选项为浮点数。对于接受不同类型值的选项将被忽略。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| p_mi | libvlc_media_player_t* | libvlc 媒体播放器实例 |
| option | unsigned | 要设置的调整选项，取值为 `libvlc_video_adjust_option_t` 中的值 |
| value | float | 调整选项的值 |

### 函数返回值
该函数没有返回值。
## libvlc_audio_output_list_get {#libvlc_audio_output_list_get}

```c
LIBVLC_API libvlc_audio_output_t *
libvlc_audio_output_list_get( libvlc_instance_t *p_instance );
```

### 描述
获取可用的音频输出模块列表。

### 函数参数说明

| 参数名        | 类型                  | 描述                                                                 |
|---------------|-----------------------|--------------------------------------------------------------------------|
| p_instance    | libvlc_instance_t*    | libvlc 实例。                                                          |

### 函数返回值
- **返回值类型**: `libvlc_audio_output_t*`
  - **成功**: 返回可用的音频输出列表。必须使用 `libvlc_audio_output_list_release` 函数释放该列表。
  - **失败**: 返回 `NULL`。
## libvlc_audio_output_list_release {#libvlc_audio_output_list_release}

```c
LIBVLC_API
void libvlc_audio_output_list_release( libvlc_audio_output_t *p_list );
```

### 函数描述
释放可用的音频输出模块列表。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| p_list | libvlc_audio_output_t* | 需要释放的音频输出列表 |

### 函数返回值
该函数没有返回值。
## libvlc_audio_output_set {#libvlc_audio_output_set}

```c
LIBVLC_API int libvlc_audio_output_set( libvlc_media_player_t *p_mi,
                                        const char *psz_name );
```

### 描述
选择一个音频输出模块。请注意，任何更改只有在播放停止并重新启动后才会生效。在播放过程中无法更改音频输出。

### 函数参数说明

| 参数名       | 类型                      | 描述                                                                 |
|--------------|---------------------------|--------------------------------------------------------------------------|
| `p_mi`       | `libvlc_media_player_t*`  | 媒体播放器实例。                                                         |
| `psz_name`   | `const char*`             | 音频输出的名称，使用 `libvlc_audio_output_t` 结构体中的 `psz_name`。 |

### 函数返回值
- **0**：函数成功执行。
- **-1**：函数执行失败。
## libvlc_audio_output_device_count {#libvlc_audio_output_device_count}

```c
LIBVLC_DEPRECATED LIBVLC_API
int libvlc_audio_output_device_count( libvlc_instance_t *, const char * );
```

### 描述
这是一个向后兼容的存根函数，不建议在新代码中使用。建议使用 `libvlc_audio_output_device_list_get()` 函数代替。该函数总是返回 0。

### 函数参数说明

| 参数名               | 类型                | 描述                                                                 |
|----------------------|---------------------|----------------------------------------------------------------------|
| `libvlc_instance_t *` | `libvlc_instance_t*` | VLC 实例的指针。                                                     |
| `const char *`        | `const char*`       | 音频输出模块的名称。                                                 |

### 函数返回值
该函数总是返回 `0`。
## libvlc_audio_output_device_enum {#libvlc_audio_output_device_enum}

```c
LIBVLC_API libvlc_audio_output_device_t *
libvlc_audio_output_device_enum( libvlc_media_player_t *mp );
```

### 描述
获取潜在的音频输出设备列表。

注意：并非所有音频输出都支持枚举设备。即使列表为空（NULL），音频输出也可能正常工作。

注意：该列表可能不完整。

警告：列表中的某些音频输出设备在某些情况下可能无法正常工作。默认情况下，建议不要指定任何显式的音频设备。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| mp | libvlc_media_player_t* | 媒体播放器实例 |

### 返回值
返回一个以 NULL 结尾的潜在音频输出设备链表。必须使用 `libvlc_audio_output_device_list_release()` 函数释放该链表。

版本：LibVLC 2.2.0 或更高版本。
## libvlc_audio_output_device_list_get {#libvlc_audio_output_device_list_get}

```c
LIBVLC_API libvlc_audio_output_device_t *
libvlc_audio_output_device_list_get( libvlc_instance_t *p_instance,
                                     const char *aout );
```

### 描述
获取给定音频输出模块的音频输出设备列表。该函数返回一个以 NULL 结尾的链表，包含可能的音频输出设备。返回的列表必须使用 `libvlc_audio_output_device_list_release()` 函数释放。

注意：
- 并非所有音频输出都支持此功能。特别是，空（NULL）设备列表并不意味着指定的音频输出不可用。
- 该列表可能不完整。
- 列表中的某些音频输出设备在某些情况下可能无法正常工作。默认情况下，建议不要指定任何显式的音频设备。

### 参数说明

| 参数名       | 类型                  | 描述                                                                 |
|--------------|-----------------------|--------------------------------------------------------------------------|
| p_instance   | libvlc_instance_t*    | LibVLC 实例                                                           |
| psz_aout     | const char*           | 音频输出名称（由 `libvlc_audio_output_list_get()` 返回） |

### 返回值
返回一个以 NULL 结尾的链表，包含可能的音频输出设备。返回的列表必须使用 `libvlc_audio_output_device_list_release()` 函数释放。如果失败，返回 NULL。
## libvlc_audio_output_device_list_release {#libvlc_audio_output_device_list_release}

```c
LIBVLC_API void libvlc_audio_output_device_list_release(
                                        libvlc_audio_output_device_t *p_list );
```

### 描述
释放一个可用音频输出设备的列表。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_list` | `libvlc_audio_output_device_t *` | 需要释放的音频输出设备列表 |

### 函数返回值
该函数没有返回值。
## libvlc_audio_output_device_set {#libvlc_audio_output_device_set}

```c
LIBVLC_API void libvlc_audio_output_device_set( libvlc_media_player_t *mp,
                                                const char *module,
                                                const char *device_id );
```

### 描述
配置显式的音频输出设备。

如果 `module` 参数为 `NULL`，音频输出将立即切换到由设备标识符字符串指定的设备。这是推荐的用法。

可以通过 `libvlc_audio_output_device_enum()` 获取合适的设备字符串列表。

然而，在 LibVLC 2.2.0 及更高版本中才支持传递 `NULL`；在早期版本中，当 `module` 参数为 `NULL` 时，此函数将无效。

如果 `module` 参数不为 `NULL`，则相应音频输出的设备参数（如果存在）将被设置为指定的字符串。请注意，某些音频输出模块没有这样的参数（例如 MMDevice 和 PulseAudio）。

可以通过 `libvlc_audio_output_device_list_get()` 获取合适的设备字符串列表。

**注意**：此函数不会选择指定的音频输出插件。使用 `libvlc_audio_output_set()` 来实现此目的。

**警告**：设备参数的语法取决于音频输出模块。

某些音频输出模块需要进一步的参数（例如，ALSA 情况下的通道映射）。

### 参数说明

| 参数       | 类型                     | 描述                                                                 |
|------------|--------------------------|--------------------------------------------------------------------------|
| `mp`       | `libvlc_media_player_t*` | 媒体播放器实例。                                                         |
| `module`   | `const char*`            | 如果为 `NULL`，则使用当前的音频输出模块；如果不为 `NULL`，则为音频输出模块的名称（参考 `libvlc_audio_output_t`）。 |
| `device_id`| `const char*`            | 设备标识符字符串。                                                       |

### 返回值
此函数没有返回值。错误会被忽略（这是一个设计缺陷）。
## libvlc_audio_output_get_device_type {#libvlc_audio_output_get_device_type}

```c
LIBVLC_DEPRECATED
LIBVLC_API int libvlc_audio_output_get_device_type( libvlc_media_player_t *p_mi );
```

### 函数描述
该函数用于获取音频输出设备的类型。然而，该函数已被弃用，并且总是返回 `-1`。

### 函数参数说明

| 参数名          | 类型                     | 描述                                                                 |
|-----------------|--------------------------|--------------------------------------------------------------------------|
| `p_mi`          | `libvlc_media_player_t*` | 指向 `libvlc_media_player_t` 结构体的指针，表示媒体播放器实例。 |

### 函数返回值
该函数总是返回 `-1`，表示该函数已被弃用，不提供实际功能。
## libvlc_audio_output_set_device_type {#libvlc_audio_output_set_device_type}

```c
LIBVLC_DEPRECATED
LIBVLC_API void libvlc_audio_output_set_device_type( libvlc_media_player_t *p_mi,
                                                     int i_device_type );
```

### 描述

该函数用于设置音频输出设备的类型。由于是向后兼容的存根（stub），实际功能可能已被弃用或不再使用。

### 函数参数说明

| 参数名         | 类型                  | 描述                                                                 |
|----------------|-----------------------|--------------------------------------------------------------------------|
| `p_mi`         | `libvlc_media_player_t*` | 指向 `libvlc_media_player_t` 结构的指针，表示媒体播放器实例。 |
| `i_device_type`| `int`                 | 表示音频输出设备类型的整数值。                                       |

### 函数返回值

该函数没有返回值（`void`）。
## libvlc_audio_toggle_mute {#libvlc_audio_toggle_mute}

```c
LIBVLC_API void libvlc_audio_toggle_mute( libvlc_media_player_t *p_mi );
```

### 描述
切换静音状态。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |

### 函数返回值
该函数没有返回值。
## libvlc_audio_get_mute {#libvlc_audio_get_mute}

```c
LIBVLC_API int libvlc_audio_get_mute( libvlc_media_player_t *p_mi );
```

### 描述
获取当前的静音状态。

### 函数参数说明

| 参数名       | 类型                      | 描述                 |
|--------------|---------------------------|----------------------|
| `p_mi`       | `libvlc_media_player_t*`  | 媒体播放器实例       |

### 函数返回值
- **`1`**：表示当前处于静音状态。
- **`0`**：表示当前未处于静音状态。
- **`-1`**：表示静音状态未定义或不适用。
## libvlc_audio_set_mute {#libvlc_audio_set_mute}

```c
LIBVLC_API void libvlc_audio_set_mute( libvlc_media_player_t *p_mi, int status );
```

### 描述
设置静音状态。

### 函数参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| p_mi | libvlc_media_player_t* | 媒体播放器实例 |
| status | int | 如果为 `true` 则静音，否则取消静音 |

### 函数返回值
该函数没有返回值。

### 注意事项
- 该函数并不总是有效。如果没有活动的音频播放流，静音状态可能不可用。
- 如果使用数字直通（如 S/PDIF、HDMI 等），静音可能不可用。
- 某些音频输出插件根本不支持静音。
- 要强制静音播放，建议禁用所有音频轨道。这比静音更高效和可靠。
## libvlc_audio_get_volume {#libvlc_audio_get_volume}

```c
LIBVLC_API int libvlc_audio_get_volume( libvlc_media_player_t *p_mi );
```

### 描述
获取当前软件音频音量。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| p_mi | libvlc_media_player_t* | 媒体播放器实例 |

### 函数返回值
返回当前软件音量，以百分比表示（0 = 静音，100 = 标称音量 / 0dB）。
## libvlc_audio_set_volume {#libvlc_audio_set_volume}

```c
LIBVLC_API int libvlc_audio_set_volume( libvlc_media_player_t *p_mi, int i_volume );
```

### 描述
设置当前软件音频音量。

### 函数参数说明

| 参数名       | 类型                     | 描述                                                         |
|--------------|--------------------------|--------------------------------------------------------------|
| `p_mi`       | `libvlc_media_player_t*` | 媒体播放器对象                                               |
| `i_volume`   | `int`                    | 音量百分比（0 = 静音，100 = 0dB）                            |

### 函数返回值
- `0`：如果音量设置成功。
- `-1`：如果音量超出范围。
## libvlc_audio_get_track_count {#libvlc_audio_get_track_count}

```c
LIBVLC_API int libvlc_audio_get_track_count( libvlc_media_player_t *p_mi );
```

### 函数描述
获取可用的音频轨道的数量。

### 函数参数说明

| 参数名       | 类型                     | 描述                         |
|--------------|--------------------------|------------------------------|
| `p_mi`       | `libvlc_media_player_t*` | 媒体播放器实例的指针         |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - 返回可用的音频轨道数量（`int` 类型）。
  - 如果无法获取音频轨道数量，则返回 `-1`。
## libvlc_audio_get_track_description {#libvlc_audio_get_track_description}

```c
LIBVLC_API libvlc_track_description_t *
libvlc_audio_get_track_description( libvlc_media_player_t *p_mi );
```

### 描述
获取可用音频轨道的描述。

### 函数参数说明

| 参数名       | 类型                      | 描述                 |
|--------------|---------------------------|----------------------|
| `p_mi`       | `libvlc_media_player_t *` | 媒体播放器实例       |

### 函数返回值
- **成功**：返回一个包含可用音频轨道描述的列表。
- **失败**：返回 `NULL`。
## libvlc_audio_get_track {#libvlc_audio_get_track}

```c
LIBVLC_API int libvlc_audio_get_track( libvlc_media_player_t *p_mi );
```

### 描述
获取当前的音频轨道。

### 函数参数说明

| 参数名       | 类型                      | 描述                 |
|--------------|---------------------------|----------------------|
| `p_mi`       | `libvlc_media_player_t*`   | 媒体播放器实例       |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - 返回当前音频轨道的ID。
  - 如果没有活动的输入，则返回 `-1`。
## libvlc_audio_set_track {#libvlc_audio_set_track}

```c
LIBVLC_API int libvlc_audio_set_track( libvlc_media_player_t *p_mi, int i_track );
```

### 描述
设置当前的音频轨道。

### 函数参数说明

| 参数名       | 类型                      | 描述                                                         |
|--------------|---------------------------|--------------------------------------------------------------|
| `p_mi`       | `libvlc_media_player_t*`   | 媒体播放器对象，用于指定要操作的媒体播放器。                 |
| `i_track`    | `int`                     | 轨道ID，从轨道描述中的 `i_id` 字段获取。                     |

### 函数返回值
- **0**：成功设置音频轨道。
- **-1**：发生错误，无法设置音频轨道。
## libvlc_audio_get_channel {#libvlc_audio_get_channel}

```c
LIBVLC_API int libvlc_audio_get_channel( libvlc_media_player_t *p_mi );
```

### 描述
获取当前音频通道。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |

### 函数返回值
返回当前音频通道，具体值请参考 `libvlc_audio_output_channel_t` 枚举类型。
## libvlc_audio_set_channel {#libvlc_audio_set_channel}

```c
LIBVLC_API int libvlc_audio_set_channel( libvlc_media_player_t *p_mi, int channel );
```

### 描述
设置当前的音频通道。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |
| `channel` | `int` | 音频通道，参考 `libvlc_audio_output_channel_t` |

### 函数返回值
- `0`：成功
- `-1`：错误
## libvlc_audio_get_delay {#libvlc_audio_get_delay}

```c
LIBVLC_API int64_t libvlc_audio_get_delay( libvlc_media_player_t *p_mi );
```

### 描述
获取当前音频延迟。

### 函数参数说明

| 参数名       | 类型                     | 描述               |
|--------------|--------------------------|--------------------|
| `p_mi`       | `libvlc_media_player_t*` | 媒体播放器实例     |

### 函数返回值
返回当前音频延迟，单位为微秒。
## libvlc_audio_set_delay {#libvlc_audio_set_delay}

```c
LIBVLC_API int libvlc_audio_set_delay( libvlc_media_player_t *p_mi, int64_t i_delay );
```

### 描述
设置当前音频延迟。每次媒体更改时，音频延迟将被重置为零。

### 参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mi` | `libvlc_media_player_t*` | 媒体播放器实例 |
| `i_delay` | `int64_t` | 音频延迟（微秒） |

### 返回值
- `0`：成功
- `-1`：错误
## libvlc_audio_equalizer_get_preset_count {#libvlc_audio_equalizer_get_preset_count}

```c
LIBVLC_API unsigned libvlc_audio_equalizer_get_preset_count( void );
```

### 函数描述
获取均衡器预设的数量。

### 函数参数说明
无参数。

### 函数返回值
返回均衡器预设的数量。

- **返回值类型**: `unsigned`
- **返回值说明**: 返回当前可用的均衡器预设数量。
## libvlc_audio_equalizer_get_band_count {#libvlc_audio_equalizer_get_band_count}

```c
LIBVLC_API unsigned libvlc_audio_equalizer_get_band_count( void );
```

### 描述
获取均衡器的不同频段数量。

### 参数说明
无参数。

### 返回值
返回均衡器的频段数量。

- **返回值类型**: `unsigned`
- **返回值说明**: 返回均衡器的频段数量。
## libvlc_audio_equalizer_get_band_frequency {#libvlc_audio_equalizer_get_band_frequency}

```c
LIBVLC_API float libvlc_audio_equalizer_get_band_frequency( unsigned u_index );
```

### 描述
获取特定均衡器频带的频率。这个值可以用于在用户界面中为均衡器频带控件创建标签。

### 函数参数说明

| 参数名   | 类型     | 描述                                       |
|----------|----------|--------------------------------------------|
| u_index  | unsigned | 频带的索引，从零开始计数                   |

### 函数返回值
- **返回值类型**: `float`
- **返回值说明**:
  - 返回均衡器频带的频率（单位：Hz）。
  - 如果指定的频带不存在，则返回 `-1`。
## libvlc_audio_equalizer_release {#libvlc_audio_equalizer_release}

```c
LIBVLC_API void libvlc_audio_equalizer_release( libvlc_equalizer_t *p_equalizer );
```

### 描述
释放先前创建的均衡器实例。

该均衡器实例先前通过使用 `libvlc_audio_equalizer_new()` 或 `libvlc_audio_equalizer_new_from_preset()` 创建。

调用此方法时，如果 `p_equalizer` 参数为 `NULL`，则不会产生任何效果。

### 参数说明

| 参数名        | 类型                  | 描述                                                         |
|---------------|-----------------------|--------------------------------------------------------------|
| `p_equalizer` | `libvlc_equalizer_t*` | 不透明的均衡器句柄，或 `NULL`。如果为 `NULL`，则不会产生任何效果。 |

### 返回值
该函数没有返回值。
## libvlc_audio_equalizer_set_preamp {#libvlc_audio_equalizer_set_preamp}

```c
LIBVLC_API int libvlc_audio_equalizer_set_preamp( libvlc_equalizer_t *p_equalizer, float f_preamp );
```

### 描述
设置均衡器的新前置放大值。新的均衡器设置将通过调用 `libvlc_media_player_set_equalizer()` 应用于媒体播放器。提供的放大值将被限制在 -20.0 到 +20.0 的范围内。

### 参数说明

| 参数名        | 类型                | 描述                                                                 |
|---------------|---------------------|----------------------------------------------------------------------|
| p_equalizer   | libvlc_equalizer_t* | 有效的均衡器句柄，不能为 NULL。                                       |
| f_preamp      | float               | 前置放大值（-20.0 到 20.0 Hz）。                                      |

### 返回值
- **0**：成功。
- **-1**：错误。
## libvlc_audio_equalizer_get_preamp {#libvlc_audio_equalizer_get_preamp}

```c
LIBVLC_API float libvlc_audio_equalizer_get_preamp( libvlc_equalizer_t *p_equalizer );
```

### 描述
获取均衡器的当前前置放大值。

### 函数参数说明

| 参数名        | 类型                | 描述                                                                 |
|---------------|---------------------|----------------------------------------------------------------------|
| p_equalizer   | libvlc_equalizer_t* | 有效的均衡器句柄，不能为 `NULL`。                                    |

### 函数返回值
返回当前均衡器的前置放大值（单位：Hz）。
## libvlc_audio_equalizer_set_amp_at_index {#libvlc_audio_equalizer_set_amp_at_index}

```c
LIBVLC_API int libvlc_audio_equalizer_set_amp_at_index( libvlc_equalizer_t *p_equalizer, float f_amp, unsigned u_band );
```

### 描述
设置特定均衡器频段的新的增益值。新的均衡器设置将通过调用 `libvlc_media_player_set_equalizer()` 应用到媒体播放器。提供的增益值将被限制在 -20.0 到 +20.0 的范围内。

### 参数说明

| 参数名        | 类型                | 描述                                                                 |
|---------------|---------------------|----------------------------------------------------------------------|
| p_equalizer   | libvlc_equalizer_t* | 有效的均衡器句柄，不能为 NULL                                        |
| f_amp         | float               | 增益值，范围为 -20.0 到 +20.0 Hz                                     |
| u_band        | unsigned            | 频段索引，从零开始计数，表示要设置的频率段                           |

### 返回值
- **0**：成功
- **-1**：错误
## libvlc_audio_equalizer_get_amp_at_index {#libvlc_audio_equalizer_get_amp_at_index}

```c
LIBVLC_API float libvlc_audio_equalizer_get_amp_at_index( libvlc_equalizer_t *p_equalizer, unsigned u_band );
```

### 描述
获取特定均衡器频率带的增益值。

### 参数说明
| 参数名        | 类型                | 描述                                                                 |
|---------------|---------------------|----------------------------------------------------------------------|
| p_equalizer   | libvlc_equalizer_t* | 有效的均衡器句柄，不能为 NULL。                                       |
| u_band        | unsigned            | 频率带的索引，从零开始计数。                                           |

### 返回值
- **增益值 (Hz)**：如果存在该频率带，则返回其增益值。
- **NaN**：如果不存在该频率带，则返回 NaN。
## libvlc_media_player_set_equalizer {#libvlc_media_player_set_equalizer}

```c
LIBVLC_API int libvlc_media_player_set_equalizer( libvlc_media_player_t *p_mi, libvlc_equalizer_t *p_equalizer );
```

### 描述
该函数用于将新的均衡器设置应用于媒体播放器。均衡器首先通过调用 `libvlc_audio_equalizer_new()` 或 `libvlc_audio_equalizer_new_from_preset()` 创建。

无论媒体播放器当前是否正在播放媒体，都可以将新的均衡器设置应用于媒体播放器。调用此方法将立即对当前正在播放的媒体（如果有）的音频输出应用新的均衡器设置。如果没有当前正在播放的媒体，新的均衡器设置将在稍后播放新媒体时应用。

均衡器设置将自动应用于随后播放的媒体。要为媒体播放器禁用均衡器，可以传递 `NULL` 作为 `p_equalizer` 参数调用此方法。

媒体播放器不会保留对所提供均衡器的引用，因此应用程序可以在方法返回后随时安全地释放均衡器引用。

### 参数说明

| 参数名        | 类型                     | 描述                                                                 |
|---------------|--------------------------|--------------------------------------------------------------------------|
| `p_mi`        | `libvlc_media_player_t*` | 不透明的媒体播放器句柄。                                                 |
| `p_equalizer` | `libvlc_equalizer_t*`    | 不透明的均衡器句柄，或 `NULL` 以禁用此媒体播放器的均衡器。               |

### 返回值
- **0**：成功。
- **-1**：错误。
