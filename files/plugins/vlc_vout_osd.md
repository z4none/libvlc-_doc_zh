## vout_OSDEpg {#vout_OSDEpg}

```c
VLC_API int vout_OSDEpg( vout_thread_t *p_vout, input_item_t *p_input_item );
```

### 函数描述
该函数用于在视频输出（Vout）上显示EPG（电子节目指南）信息。它将EPG数据叠加在视频输出上，以便用户可以看到当前播放内容的节目信息。

### 函数参数说明

| 参数名         | 类型            | 描述                                                                 |
|----------------|-----------------|----------------------------------------------------------------------|
| `p_vout`       | `vout_thread_t*` | 指向视频输出线程的指针，表示要在哪个视频输出上显示EPG信息。         |
| `p_input_item` | `input_item_t*`  | 指向输入项的指针，包含要显示的EPG信息。通常与当前播放的媒体相关联。|

### 函数返回值

- **返回值类型**: `int`
- **返回值说明**:
  - `0`: 表示函数成功执行，EPG信息已成功叠加在视频输出上。
  - `非0值`: 表示函数执行失败，可能由于参数错误或其他原因导致EPG信息未能成功显示。
## vout_OSDText {#vout_OSDText}

```c
VLC_API void vout_OSDText(vout_thread_t *vout, int channel, int position, mtime_t duration, const char *text);
```

### 描述
如果 OSD（On-Screen Display）选项已启用，此函数将显示一条信息性消息。

### 函数参数说明

| 参数名   | 类型          | 描述                                                         |
|----------|---------------|--------------------------------------------------------------|
| `vout`   | `vout_thread_t*` | 消息将显示在其上的视频输出线程。                             |
| `channel`| `int`         | 子画面通道。                                                 |
| `position`| `int`        | 文本的位置。                                                 |
| `duration`| `mtime_t`     | 文本显示的持续时间。                                         |
| `text`   | `const char*` | 要显示的文本。                                               |

### 函数返回值
此函数没有返回值。
## vout_OSDSlider {#vout_OSDSlider}

```c
VLC_API void vout_OSDSlider( vout_thread_t *, int, int, short );
```

### 描述
在视频输出上显示一个滑块。

### 函数参数说明

| 参数名      | 类型          | 描述                                                                 |
|-------------|---------------|--------------------------------------------------------------------------|
| `p_this`    | `vout_thread_t *` | 调用该函数的对象。                                                     |
| `i_channel` | `int`         | 子画面通道。                                                           |
| `i_position`| `int`         | 滑块的当前位置。                                                       |
| `i_type`    | `short`       | 滑块的类型，可以是 `OSD_HOR_SLIDER`（水平滑块）或 `OSD_VERT_SLIDER`（垂直滑块）。 |

### 函数返回值
该函数没有返回值。
## vout_OSDIcon {#vout_OSDIcon}

```c
VLC_API void vout_OSDIcon( vout_thread_t *, int, short );
```

### 描述
该函数用于在视频输出上显示一个图标。图标的类型可以是播放、暂停、扬声器或静音图标。

### 函数参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|--------------------------------------------------------------------------|
| `p_this`  | `vout_thread_t *` | 调用该函数的对象。                                                     |
| `i_channel` | `int`          | 子画面通道。                                                           |
| `i_type`   | `short`        | 图标类型，可以是以下之一：`OSD_PLAY_ICON`, `OSD_PAUSE_ICON`, `OSD_SPEAKER_ICON`, `OSD_MUTE_ICON`。 |

### 函数返回值
该函数没有返回值。
