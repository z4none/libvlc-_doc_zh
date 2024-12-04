## msg_Warn 

```c
void msg_Warn( vlc_object_t *p_filter, const char *psz_format, ... );
```

### 函数描述
`msg_Warn` 函数用于向日志系统发送警告消息。警告消息通常用于指示可能的问题或异常情况，但不会导致程序立即终止。

### 函数参数说明

| 参数名       | 类型            | 描述                                                                 |
|--------------|-----------------|----------------------------------------------------------------------|
| `p_filter`   | `vlc_object_t*` | 指向当前过滤器对象的指针，用于标识消息的来源。                       |
| `psz_format` | `const char*`   | 格式化字符串，用于指定要输出的警告消息的格式。支持类似 `printf` 的格式化选项。 |
| `...`        | `va_list`       | 可变参数列表，用于传递格式化字符串所需的参数。                       |

### 函数返回值
该函数没有返回值。
## filter_DeletePicture {#filter_DeletePicture}

```c
static inline void filter_DeletePicture( filter_t *p_filter, picture_t *p_picture )
{
    p_filter->pf_video_buffer_del( p_filter, p_picture );
}
```

### 描述
该函数用于释放由 `filter_NewPicture` 创建的图片。该函数提供了一种便利的方式来删除图片。

### 函数参数说明

| 参数名       | 类型       | 描述                                                         |
| ------------ | ---------- | ------------------------------------------------------------ |
| `p_filter`   | `filter_t*` | `filter_t` 对象，表示过滤器。                                |
| `p_picture`  | `picture_t*` | 需要删除的图片对象。                                         |

### 函数返回值
该函数没有返回值。
## filter_FlushPictures {#filter_FlushPictures}

```c
static inline void filter_FlushPictures( filter_t *p_filter )
```

### 函数描述
该函数用于刷新视频过滤器的状态。

### 函数参数说明

| 参数名     | 类型      | 描述               |
|------------|-----------|--------------------|
| `p_filter` | `filter_t*` | 指向视频过滤器结构的指针。 |

### 函数返回值
该函数没有返回值。
## msg_Warn 

```c
void msg_Warn( vlc_object_t *p_filter, const char *psz_format, ... );
```

### 描述
`msg_Warn` 函数用于向日志系统发送警告消息。警告消息通常用于指示可能影响程序正常运行但不会导致程序崩溃的问题。

### 函数参数说明

| 参数名       | 类型           | 描述                                                                 |
|--------------|----------------|--------------------------------------------------------------------------|
| `p_filter`   | `vlc_object_t*` | 指向 `vlc_object_t` 类型的指针，表示消息的来源对象。通常是过滤器对象。 |
| `psz_format` | `const char*`  | 格式化字符串，用于指定消息的格式。类似于 `printf` 中的格式字符串。     |
| `...`        | `...`          | 可变参数列表，用于填充格式化字符串中的占位符。                         |

### 函数返回值
该函数没有返回值（`void`）。
## filter_DeleteSubpicture {#filter_DeleteSubpicture}

```c
static inline void filter_DeleteSubpicture( filter_t *p_filter, subpicture_t *p_subpicture )
{
    p_filter->pf_sub_buffer_del( p_filter, p_subpicture );
}
```

### 描述
该函数用于释放由 `filter_NewSubpicture` 创建的子画面。该函数提供了一种便利的方式来释放子画面。

### 参数说明

| 参数名          | 类型           | 描述                                                         |
|-----------------|----------------|--------------------------------------------------------------|
| `p_filter`      | `filter_t*`    | 指向 `filter_t` 对象的指针，表示过滤器对象。                  |
| `p_subpicture`  | `subpicture_t*`| 指向 `subpicture_t` 对象的指针，表示需要释放的子画面。        |

### 返回值
该函数没有返回值。
## filter_GetInputAttachments {#filter_GetInputAttachments}

```c
static inline int filter_GetInputAttachments( filter_t *p_filter,
                                              input_attachment_t ***ppp_attachment,
                                              int *pi_attachment )
```

### 函数描述
该函数一次性获取所有输入附件。你必须释放返回的值。

### 函数参数说明

| 参数名            | 类型                    | 描述                                                         |
|-------------------|-------------------------|--------------------------------------------------------------|
| `p_filter`        | `filter_t *`            | 指向过滤器对象的指针。                                       |
| `ppp_attachment`  | `input_attachment_t ***` | 指向输入附件数组的指针的指针。函数将填充此数组。             |
| `pi_attachment`   | `int *`                 | 指向整数的指针，函数将填充此整数以表示附件的数量。           |

### 函数返回值
- `VLC_SUCCESS`：成功获取输入附件。
- `VLC_EGENERIC`：过滤器对象中没有 `pf_get_attachments` 函数指针，无法获取附件。
## filter_ConfigureBlend {#filter_ConfigureBlend}

```c
VLC_API int filter_ConfigureBlend( filter_t *p_filter, int i_dst_width, int i_dst_height, const video_format_t *p_src );
```

### 描述
该函数用于配置混合滤镜参数，这些参数在创建后允许更改。

### 函数参数说明

| 参数名        | 类型                | 描述                                                                 |
|---------------|---------------------|----------------------------------------------------------------------|
| `p_filter`    | `filter_t *`        | 指向混合滤镜的指针。                                                 |
| `i_dst_width` | `int`               | 目标图像的宽度。                                                     |
| `i_dst_height`| `int`               | 目标图像的高度。                                                     |
| `p_src`       | `const video_format_t *` | 指向源视频格式的指针，包含源图像的格式信息。 |

### 函数返回值
- 成功时返回 `0`。
- 失败时返回 `-1`。
## filter_Blend {#filter_Blend}

```c
VLC_API int filter_Blend( filter_t *p_filter, picture_t *p_dst, int i_dst_x, int i_dst_y, const picture_t *p_src, int i_alpha );
```

### 描述
该函数将一张图片混合到另一张图片中。输入的图片不会被修改，也不会被释放。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| p_filter  | filter_t*     | 过滤器对象，用于指定混合操作的上下文。                                     |
| p_dst     | picture_t*    | 目标图片，混合后的结果将存储在这张图片中。                               |
| i_dst_x   | int           | 目标图片中混合的起始X坐标。                                              |
| i_dst_y   | int           | 目标图片中混合的起始Y坐标。                                              |
| p_src     | const picture_t* | 源图片，将被混合到目标图片中。                                           |
| i_alpha   | int           | 混合的透明度值，范围通常为0到255，0表示完全透明，255表示完全不透明。 |

### 函数返回值
- **0**：表示混合操作成功完成。
- **非0值**：表示混合操作失败，可能由于参数错误或其他原因导致。
## filter_DeleteBlend {#filter_DeleteBlend}

```c
VLC_API void filter_DeleteBlend( filter_t * );
```

### 描述
该函数用于销毁由 `filter_NewBlend` 创建的混合滤镜。

### 函数参数说明

| 参数名       | 类型     | 描述                       |
|--------------|----------|----------------------------|
| `filter_t *` | `filter_t` | 指向要销毁的混合滤镜的指针 |

### 函数返回值
该函数没有返回值。
## name {#name}

```c
void name(p_filter, p_pic, p_outpic);
```

### 描述
该函数用于处理图像过滤操作。它接收一个过滤器、输入图像和输出图像的指针，并将过滤后的图像存储在输出图像指针中。

### 函数参数说明

| 参数名   | 类型   | 描述                                                         |
|----------|--------|--------------------------------------------------------------|
| p_filter | 过滤器 | 指向过滤器结构的指针，包含过滤操作所需的参数和配置。       |
| p_pic    | 图像   | 指向输入图像数据的指针，该图像将被过滤器处理。             |
| p_outpic | 图像   | 指向输出图像数据的指针，过滤后的图像将被存储在此处。       |

### 函数返回值
该函数没有返回值（`void`）。
## picture_CopyProperties {#picture_CopyProperties}

```c
void picture_CopyProperties( picture_t *p_outpic, const picture_t *p_pic );
```

### 描述
该函数用于将一个图片的属性复制到另一个图片中。它会将源图片 (`p_pic`) 的属性（如颜色空间、分辨率等）复制到目标图片 (`p_outpic`) 中。

### 函数参数说明

| 参数名    | 类型            | 描述                                                                 |
|-----------|-----------------|----------------------------------------------------------------------|
| `p_outpic`| `picture_t *`   | 目标图片，属性将被复制到该图片中。                                   |
| `p_pic`   | `const picture_t *` | 源图片，其属性将被复制到目标图片中。                             |

### 函数返回值
该函数没有返回值 (`void`)。
## picture_Release {#picture_Release}

```c
void picture_Release( picture_t *p_pic );
```

### 函数描述
释放图片资源。该函数用于释放由 `picture_t` 结构体表示的图片资源。调用此函数后，图片资源将被释放，不再可用。

### 函数参数说明

| 参数名 | 类型       | 描述                     |
|--------|------------|--------------------------|
| p_pic  | picture_t* | 指向要释放的图片结构的指针 |

### 函数返回值
该函数没有返回值。
## filter_chain_Delete {#filter_chain_Delete}

```c
VLC_API void filter_chain_Delete( filter_chain_t *p_chain );
```

### 函数描述
删除过滤器链，将删除链中的所有过滤器并释放所有分配的数据。过滤器链的指针将不再有效。

### 函数参数说明

| 参数名    | 类型            | 描述                 |
|-----------|-----------------|----------------------|
| `p_chain` | `filter_chain_t*` | 指向过滤器链的指针   |

### 函数返回值
该函数没有返回值。
## filter_chain_Reset {#filter_chain_Reset}

```c
VLC_API void filter_chain_Reset( filter_chain_t *p_chain, const es_format_t *p_fmt_in, const es_format_t *p_fmt_out );
```

### 函数描述
该函数用于重置过滤器链，删除链中的所有过滤器，并将 `p_fmt_in` 和 `p_fmt_out` 重置为新的值。

### 函数参数说明

| 参数名      | 类型            | 描述                                                                 |
|-------------|-----------------|----------------------------------------------------------------------|
| `p_chain`   | `filter_chain_t*` | 指向过滤器链的指针，表示要重置的过滤器链。                             |
| `p_fmt_in`  | `const es_format_t*` | 新的输入格式参数，表示重置后的输入格式。                             |
| `p_fmt_out` | `const es_format_t*` | 新的输出格式参数，表示重置后的输出格式。                             |

### 函数返回值
该函数没有返回值。
## filter_chain_AppendFilter {#filter_chain_AppendFilter}

```c
VLC_API filter_t * filter_chain_AppendFilter( filter_chain_t *p_chain, const char *psz_name, config_chain_t *p_cfg, const es_format_t *p_fmt_in, const es_format_t *p_fmt_out );
```

### 描述
该函数用于将一个过滤器附加到过滤器链的末尾。

### 函数参数说明

| 参数名     | 类型                | 描述                                                                 |
|------------|---------------------|----------------------------------------------------------------------|
| `p_chain`  | `filter_chain_t *`  | 指向过滤器链的指针。                                                 |
| `psz_name` | `const char *`      | 过滤器的名称。                                                       |
| `p_cfg`    | `config_chain_t *`  | 过滤器的配置。                                                       |
| `p_fmt_in` | `const es_format_t *` | 输入的 `es_format_t` 结构体，表示过滤器的输入格式。                 |
| `p_fmt_out`| `const es_format_t *` | 输出的 `es_format_t` 结构体，表示过滤器的输出格式。                 |

### 函数返回值
- 返回值为 `filter_t *` 类型，表示指向过滤器链的指针。
## filter_chain_AppendFromString {#filter_chain_AppendFromString}

```c
VLC_API int filter_chain_AppendFromString( filter_chain_t *p_chain, const char *psz_string );
```

### 描述
该函数用于从字符串中向过滤器链添加新的过滤器。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_chain`    | `filter_chain_t *`  | 指向过滤器链的指针。                                                 |
| `psz_string` | `const char *`      | 包含过滤器的字符串。                                                 |

### 函数返回值
- **0**：成功。
## filter_chain_DeleteFilter {#filter_chain_DeleteFilter}

```c
VLC_API int filter_chain_DeleteFilter( filter_chain_t *p_chain, filter_t *p_filter );
```

### 描述
该函数用于从过滤器链中删除一个过滤器。此函数还会释放过滤器对象并卸载过滤器模块。在函数成功返回后，`p_filter` 指针将不再有效。

### 参数说明

| 参数名    | 类型            | 描述                                                         |
|-----------|-----------------|--------------------------------------------------------------|
| `p_chain` | `filter_chain_t*` | 指向过滤器链的指针。                                         |
| `p_filter`| `filter_t*`      | 指向要删除的过滤器对象的指针。                               |

### 返回值
- `VLC_SUCCESS`：成功删除过滤器。
- `VLC_EGENERIC`：删除过滤器失败。
## filter_chain_GetLength {#filter_chain_GetLength}

```c
VLC_API int filter_chain_GetLength( filter_chain_t *p_chain );
```

### 描述
该函数用于获取过滤器链中的过滤器数量。

### 函数参数说明

| 参数名   | 类型            | 描述                     |
|----------|-----------------|--------------------------|
| `p_chain`| `filter_chain_t*`| 指向过滤器链的指针       |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**: 返回过滤器链中的过滤器数量。
## filter_chain_GetFmtOut {#filter_chain_GetFmtOut}

```c
VLC_API const es_format_t * filter_chain_GetFmtOut( filter_chain_t *p_chain );
```

### 函数描述
获取过滤器链中的最后一个输出格式。

### 函数参数说明

| 参数名    | 类型            | 描述                     |
|-----------|-----------------|--------------------------|
| `p_chain` | `filter_chain_t*` | 指向过滤器链的指针       |

### 函数返回值
返回过滤器链中的最后一个输出格式（`es_format_t`）。如果链中没有输出格式，则返回 `NULL`。
## filter_chain_VideoFilter {#filter_chain_VideoFilter}

```c
VLC_API picture_t * filter_chain_VideoFilter( filter_chain_t *p_chain, picture_t *p_picture );
```

### 函数描述
该函数将过滤器链应用于视频图片。

### 函数参数说明

| 参数名    | 类型            | 描述                         |
|-----------|-----------------|------------------------------|
| `p_chain` | `filter_chain_t*` | 指向过滤器链的指针           |
| `p_picture` | `picture_t*`    | 要应用过滤器的图片           |

### 函数返回值
返回应用了所有视频过滤器后的修改后的图片。
## filter_chain_VideoFlush {#filter_chain_VideoFlush}

```c
VLC_API void filter_chain_VideoFlush( filter_chain_t * );
```

### 函数描述
该函数用于刷新视频滤镜链。

### 函数参数说明

| 参数名          | 类型            | 描述                 |
|-----------------|-----------------|----------------------|
| `filter_chain_t *` | `filter_chain_t *` | 指向视频滤镜链的指针 |

### 函数返回值
该函数没有返回值。
## filter_chain_AudioFilter {#filter_chain_AudioFilter}

```c
VLC_API block_t * filter_chain_AudioFilter( filter_chain_t *p_chain, block_t *p_block );
```

### 函数描述
将过滤器链应用于音频块。

### 函数参数说明

| 参数名   | 类型            | 描述                         |
|----------|-----------------|------------------------------|
| `p_chain`| `filter_chain_t*`| 指向过滤器链的指针           |
| `p_block`| `block_t*`       | 要应用过滤器的音频帧         |

### 函数返回值
返回应用所有音频过滤器后的修改后的音频帧。
## filter_chain_SubSource {#filter_chain_SubSource}

```c
VLC_API void filter_chain_SubSource( filter_chain_t *p_chain, mtime_t display_date );
```

### 函数描述
该函数用于将过滤器链应用于字幕。

### 函数参数说明

| 参数名       | 类型          | 描述                                                                 |
|--------------|---------------|--------------------------------------------------------------------------|
| `p_chain`    | `filter_chain_t *` | 指向过滤器链的指针。                                                     |
| `display_date` | `mtime_t`        | 字幕的显示时间。`mtime_t` 是一个表示时间的类型，通常以微秒为单位。 |

### 函数返回值
该函数没有返回值。
## filter_chain_SubFilter {#filter_chain_SubFilter}

```c
VLC_API subpicture_t * filter_chain_SubFilter( filter_chain_t *p_chain, subpicture_t *p_subpicture );
```

### 描述
该函数用于将过滤器链应用于子画面。通过将过滤器链应用于指定的子画面，可以对其进行一系列的修改和处理。

### 函数参数说明

| 参数名       | 类型            | 描述                                                         |
| ------------ | --------------- | ------------------------------------------------------------ |
| `p_chain`    | `filter_chain_t*` | 指向过滤器链的指针，表示要应用的过滤器链。                   |
| `p_subpicture` | `subpicture_t*`  | 指向子画面的指针，表示要应用过滤器链的子画面。               |

### 函数返回值
该函数返回经过过滤器链处理后的子画面。返回值是一个指向 `subpicture_t` 类型的指针，表示处理后的子画面。如果处理过程中出现错误，返回值可能为 `NULL`。
## filter_chain_MouseFilter {#filter_chain_MouseFilter}

```c
VLC_API int filter_chain_MouseFilter( filter_chain_t *p_chain, vlc_mouse_t *p_dst, const vlc_mouse_t *p_src );
```

### 描述
该函数将过滤器链应用于鼠标状态。它将从输出到输入进行应用，仅对视频过滤器链有意义。`vlc_mouse_t*` 指针可以是相同的。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_chain`    | `filter_chain_t *`  | 过滤器链的指针，表示要应用的过滤器链。                                |
| `p_dst`      | `vlc_mouse_t *`     | 目标鼠标状态的指针，过滤后的鼠标状态将存储在这里。                    |
| `p_src`      | `const vlc_mouse_t *` | 源鼠标状态的指针，表示要过滤的原始鼠标状态。                          |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - 返回 `0` 表示成功应用过滤器链。
  - 返回非零值表示应用过滤器链时发生错误。
## filter_chain_MouseEvent {#filter_chain_MouseEvent}

```c
VLC_API int filter_chain_MouseEvent( filter_chain_t *p_chain, const vlc_mouse_t *p_mouse, const video_format_t *p_fmt );
```

### 描述
该函数用于通知过滤器链当前的鼠标状态。该函数仅对子源链有意义。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_chain`    | `filter_chain_t *`  | 指向过滤器链的指针，表示要通知的过滤器链。                           |
| `p_mouse`    | `const vlc_mouse_t *` | 指向 `vlc_mouse_t` 结构的指针，表示当前的鼠标状态。                  |
| `p_fmt`      | `const video_format_t *` | 指向 `video_format_t` 结构的指针，表示视频格式信息。                 |

### 函数返回值

- **返回值类型**: `int`
- **返回值说明**:
  - 返回 `0` 表示成功通知过滤器链。
  - 返回非零值表示通知失败。
