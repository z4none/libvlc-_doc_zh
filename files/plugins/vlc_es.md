## video_format_Init {#video_format_Init}

```c
static inline void video_format_Init( video_format_t *p_src, vlc_fourcc_t i_chroma )
```

### 描述
该函数用于初始化一个 `video_format_t` 结构体，并设置其色度值为 `i_chroma`。函数会将结构体中的所有成员初始化为零，然后将 `i_chroma` 赋值给结构体中的 `i_chroma` 成员，同时将宽高比（SAR）的分子和分母都设置为1，并将调色板指针设置为 `NULL`。

### 参数说明

| 参数名   | 类型          | 描述                                                         |
|----------|---------------|--------------------------------------------------------------|
| `p_src`  | `video_format_t*` | 指向 `video_format_t` 结构体的指针，该结构体将被初始化。 |
| `i_chroma` | `vlc_fourcc_t`   | 用于初始化 `video_format_t` 结构体的色度值。               |

### 返回值
该函数没有返回值。
## video_format_Copy {#video_format_Copy}

```c
static inline int video_format_Copy( video_format_t *p_dst, const video_format_t *p_src )
```

### 函数描述
该函数用于复制 `video_format_t` 结构体，包括其调色板。

### 函数参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_dst` | `video_format_t *` | 目标 `video_format_t` 结构体，用于存储复制的内容。 |
| `p_src` | `const video_format_t *` | 源 `video_format_t` 结构体，从中复制内容。 |

### 函数返回值
- `VLC_SUCCESS`：复制成功。
- `VLC_ENOMEM`：内存分配失败，无法复制调色板。
## video_format_Clean {#video_format_Clean}

```c
static inline void video_format_Clean( video_format_t *p_src )
```

### 函数描述
该函数用于清理并释放 `video_format_t` 结构中的调色板（palette）。清理后，结构体将被重置为零，并且调色板指针将被设置为 `NULL`。

### 函数参数说明

| 参数名 | 类型            | 描述                                                                 |
|--------|-----------------|----------------------------------------------------------------------|
| p_src  | video_format_t* | 指向需要清理的 `video_format_t` 结构体的指针。该结构体中的调色板将被释放，并且结构体将被重置为零。 |

### 函数返回值
该函数没有返回值。
## video_format_Setup {#video_format_Setup}

```c
VLC_API void video_format_Setup( video_format_t *p_fmt, vlc_fourcc_t i_chroma,
    int i_width, int i_height, int i_visible_width, int i_visible_height,
    int i_sar_num, int i_sar_den );
```

### 描述
该函数使用给定的参数填充 `video_format_t` 结构体。需要注意的是，`video_format_t` 结构体必须已经初始化。

### 函数参数说明

| 参数名            | 类型          | 描述                                                                 |
|-------------------|---------------|--------------------------------------------------------------------------|
| `p_fmt`           | `video_format_t *` | 指向 `video_format_t` 结构体的指针，用于存储视频格式信息。 |
| `i_chroma`        | `vlc_fourcc_t` | 视频的色度格式，使用 `vlc_fourcc_t` 类型表示。 |
| `i_width`         | `int`         | 视频的宽度（以像素为单位）。 |
| `i_height`        | `int`         | 视频的高度（以像素为单位）。 |
| `i_visible_width` | `int`         | 视频的可见宽度（以像素为单位）。 |
| `i_visible_height`| `int`         | 视频的可见高度（以像素为单位）。 |
| `i_sar_num`       | `int`         | 样本宽高比的分子部分。 |
| `i_sar_den`       | `int`         | 样本宽高比的分母部分。 |

### 函数返回值
该函数没有返回值。
## video_format_CopyCrop {#video_format_CopyCrop}

```c
VLC_API void video_format_CopyCrop( video_format_t *p_dst, const video_format_t *p_src );
```

### 描述
该函数用于将一个 `video_format_t` 结构中的裁剪属性复制到另一个 `video_format_t` 结构中。

### 函数参数说明

| 参数名 | 类型 | 输入/输出 | 描述 |
| --- | --- | --- | --- |
| `p_dst` | `video_format_t *` | 输出 | 目标 `video_format_t` 结构，裁剪属性将被复制到这里。 |
| `p_src` | `const video_format_t *` | 输入 | 源 `video_format_t` 结构，包含要复制的裁剪属性。 |

### 函数返回值
该函数没有返回值。
## video_format_ScaleCropAr {#video_format_ScaleCropAr}

```c
VLC_API void video_format_ScaleCropAr( video_format_t *p_dst, const video_format_t *p_src );
```

### 描述
该函数用于在缩放时计算裁剪/宽高比属性。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_dst` | `video_format_t *` | 目标视频格式结构体指针，用于存储计算后的裁剪/宽高比属性。 |
| `p_src` | `const video_format_t *` | 源视频格式结构体指针，包含原始的裁剪/宽高比属性。 |

### 函数返回值
该函数没有返回值。
## video_format_ApplyRotation {#video_format_ApplyRotation}

```c
VLC_API void video_format_ApplyRotation(video_format_t * /*restrict*/ out,
                                        const video_format_t *in);
```

### 函数描述
该函数通过根据方向调整宽高比，将视频格式的方向“归一化”，生成一个方向为 `ORIENT_NORMAL` 的格式。它进行浅拷贝（调色板不会被分配）。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `out` | `video_format_t *` | 输出视频格式结构体指针，用于存储归一化后的视频格式。 |
| `in` | `const video_format_t *` | 输入视频格式结构体指针，包含原始视频格式信息。 |

### 函数返回值
该函数没有返回值（`void`）。
## video_format_TransformBy {#video_format_TransformBy}

```c
VLC_API void video_format_TransformBy(video_format_t *fmt, video_transform_t transform);
```

### 函数描述
该函数将指定的变换操作应用于 `video_format_t` 结构体。

### 函数参数说明

| 参数名    | 类型                | 描述                                                                 |
|-----------|---------------------|----------------------------------------------------------------------|
| `fmt`     | `video_format_t *`   | 指向 `video_format_t` 结构体的指针，表示要进行变换操作的视频格式。   |
| `transform` | `video_transform_t` | 表示要应用的变换操作的类型，具体类型由 `video_transform_t` 定义。 |

### 函数返回值
该函数没有返回值。
## video_format_TransformTo {#video_format_TransformTo}

```c
VLC_API void video_format_TransformTo(video_format_t *fmt, video_orientation_t dst_orientation);
```

### 描述
该函数应用必要的变换，使得 `fmt` 的结果具有 `dst_orientation` 的方向。

### 函数参数说明

| 参数名          | 类型                | 描述                                                                 |
|-----------------|---------------------|----------------------------------------------------------------------|
| `fmt`           | `video_format_t *`   | 指向 `video_format_t` 结构的指针，表示要进行变换的视频格式。         |
| `dst_orientation` | `video_orientation_t` | 目标方向，表示变换后的视频格式应具有的方向。                         |

### 函数返回值
该函数没有返回值。
## video_format_GetTransform {#video_format_GetTransform}

```c
VLC_API video_transform_t video_format_GetTransform(video_orientation_t src, video_orientation_t dst);
```

### 函数描述
该函数返回将源视频方向 `src` 转换为目标视频方向 `dst` 所需的操作。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `src` | `video_orientation_t` | 源视频方向 |
| `dst` | `video_orientation_t` | 目标视频方向 |

### 函数返回值
该函数返回一个 `video_transform_t` 类型的值，表示从源视频方向到目标视频方向所需的变换操作。具体返回值取决于 `src` 和 `dst` 的组合，可能的返回值包括但不限于：

- `TRANSFORM_90`: 顺时针旋转90度
- `TRANSFORM_180`: 顺时针旋转180度
- `TRANSFORM_270`: 顺时针旋转270度
- `TRANSFORM_HFLIP`: 水平翻转
- `TRANSFORM_VFLIP`: 垂直翻转
- `TRANSFORM_R180`: 旋转180度
- `TRANSFORM_TRANSPOSE`: 转置
- `TRANSFORM_ANTI_TRANSPOSE`: 反向转置
- `TRANSFORM_IDENTITY`: 无变换
## video_format_IsSimilar {#video_format_IsSimilar}

```c
VLC_API bool video_format_IsSimilar( const video_format_t *p_fmt1, const video_format_t *p_fmt2 );
```

### 描述
该函数用于检查第一个视频格式是否与第二个视频格式相似。

### 函数参数说明

| 参数名   | 类型                | 描述                     |
|----------|---------------------|--------------------------|
| p_fmt1   | const video_format_t* | 指向第一个视频格式的指针 |
| p_fmt2   | const video_format_t* | 指向第二个视频格式的指针 |

### 函数返回值
- **true**: 如果第一个视频格式与第二个视频格式相似。
- **false**: 如果第一个视频格式与第二个视频格式不相似。
## video_format_Print {#video_format_Print}

```c
VLC_API void video_format_Print( vlc_object_t *p_obj, const char *psz_text, const video_format_t *p_fmt );
```

### 描述
该函数用于打印给定 `video_format_t` 结构的详细信息。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_obj`      | `vlc_object_t *`    | VLC 对象指针，通常用于日志记录。                                      |
| `psz_text`   | `const char *`      | 描述视频格式的文本字符串，用于在日志中标识该视频格式。                |
| `p_fmt`      | `const video_format_t *` | 指向 `video_format_t` 结构的指针，包含要打印的视频格式信息。 |

### 函数返回值
该函数没有返回值（`void`）。
## transform_Inverse {#transform_Inverse}

```c
static inline video_transform_t transform_Inverse(video_transform_t transform)
```

### 函数描述
该函数用于计算给定视频变换的逆变换。如果输入的变换是90度旋转（TRANSFORM_R90），则返回270度旋转（TRANSFORM_R270）；如果输入的变换是270度旋转（TRANSFORM_R270），则返回90度旋转（TRANSFORM_R90）。对于其他变换，直接返回原始变换。

### 函数参数说明

| 参数名      | 类型                | 描述                                                                 |
|-------------|---------------------|----------------------------------------------------------------------|
| transform   | video_transform_t   | 输入的视频变换类型，可以是90度旋转、270度旋转或其他变换。           |

### 函数返回值
- 如果输入的变换是 `TRANSFORM_R90`，则返回 `TRANSFORM_R270`。
- 如果输入的变换是 `TRANSFORM_R270`，则返回 `TRANSFORM_R90`。
- 对于其他变换，直接返回输入的变换。
## video_format_FixRgb {#video_format_FixRgb}

```c
VLC_API void video_format_FixRgb( video_format_t * );
```

### 描述
该函数将根据 RGB 掩码填充所有 RGB 偏移量。

### 函数参数说明

| 参数名          | 类型           | 描述                         |
|-----------------|----------------|------------------------------|
| `video_format_t *` | `video_format_t *` | 指向 `video_format_t` 结构的指针，用于存储视频格式信息。 |

### 函数返回值
该函数没有返回值。
## es_format_Init {#es_format_init}

```c
VLC_API void es_format_Init( es_format_t *p_fmt, int i_cat, vlc_fourcc_t i_codec );
```

### 函数描述
该函数用于初始化一个 `es_format_t` 结构体。

### 函数参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|----------------------------------------------------------------------|
| `p_fmt`   | `es_format_t*` | 指向要初始化的 `es_format_t` 结构体的指针。                          |
| `i_cat`   | `int`          | 表示媒体类型的整数，例如 `VIDEO_ES` 表示视频，`AUDIO_ES` 表示音频。   |
| `i_codec` | `vlc_fourcc_t` | 表示编解码器的 FourCC 码，用于标识具体的编解码器类型。                |

### 函数返回值
该函数没有返回值。
## es_format_InitFromVideo {#es_format_InitFromVideo}

```c
VLC_API void es_format_InitFromVideo( es_format_t *p_es_format, const video_format_t *p_video_format );
```

### 描述
该函数将从 `video_format_t` 结构体初始化一个 `es_format_t` 结构体。

### 函数参数说明

| 参数名            | 类型                | 描述                                                                 |
|-------------------|---------------------|----------------------------------------------------------------------|
| `p_es_format`     | `es_format_t *`     | 指向要初始化的 `es_format_t` 结构体的指针。                          |
| `p_video_format`  | `const video_format_t *` | 指向包含视频格式信息的 `video_format_t` 结构体的指针。 |

### 函数返回值
该函数没有返回值。
## es_format_Copy {#es_format_copy}

```c
VLC_API int es_format_Copy( es_format_t *p_dst, const es_format_t *p_src );
```

### 函数描述
该函数用于复制一个 `es_format_t` 结构体。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_dst` | `es_format_t *` | 目标 `es_format_t` 结构体，用于存储复制后的内容。 |
| `p_src` | `const es_format_t *` | 源 `es_format_t` 结构体，包含需要复制的内容。 |

### 函数返回值
- `0`：复制成功。
- `非0`：复制失败。
## es_format_Clean {#es_format_Clean}

```c
VLC_API void es_format_Clean( es_format_t *fmt );
```

### 描述
该函数用于清理 `es_format_t` 结构体并释放所有相关资源。可以对同一个结构体多次调用此函数。

### 参数说明

| 参数名 | 类型          | 描述                   |
|--------|---------------|------------------------|
| fmt    | `es_format_t*` | 指向 `es_format_t` 结构体的指针，表示要清理的格式。 |

### 返回值
该函数没有返回值。
## es_format_IsSimilar {#es_format_IsSimilar}

```c
VLC_API bool es_format_IsSimilar( const es_format_t *p_fmt1, const es_format_t *p_fmt2 );
```

### 函数描述
该函数用于检查第一个ES格式是否与第二个ES格式相似。所有描述性字段都会被忽略。

### 函数参数说明

| 参数名   | 类型            | 描述                   |
|----------|-----------------|------------------------|
| `p_fmt1` | `const es_format_t *` | 指向第一个ES格式的指针 |
| `p_fmt2` | `const es_format_t *` | 指向第二个ES格式的指针 |

### 函数返回值
- **`true`**: 如果第一个ES格式与第二个ES格式相似。
- **`false`**: 如果第一个ES格式与第二个ES格式不相似。
## video_palette_t {#video_palette_t}

```c
struct video_palette_t
{
    int i_entries;      /**< to keep the compatibility with libavcodec's palette */
    uint8_t palette[VIDEO_PALETTE_COLORS_MAX][4];  /**< 4-byte RGBA/YUVA palette */
};
```

### 描述
`video_palette_t` 结构体用于表示视频调色板。它包含了调色板中的颜色条目数量以及每个颜色条目的RGBA/YUVA值。

### 成员说明

| 成员名称 | 类型 | 描述 |
|----------|------|------|
| `i_entries` | `int` | 调色板中的颜色条目数量，用于与libavcodec的调色板兼容。 |
| `palette` | `uint8_t[VIDEO_PALETTE_COLORS_MAX][4]` | 4字节的RGBA/YUVA调色板，每个条目包含4个字节，分别表示红、绿、蓝和透明度（或亮度、色度、饱和度和透明度）。 |

### 返回值
该结构体没有返回值，因为它是一个定义的结构体类型。
## audio_format_t {#audio_format_t}

```c
struct audio_format_t
{
    vlc_fourcc_t i_format;                          /**< audio format fourcc */
    unsigned int i_rate;                              /**< audio sample-rate */

    /* Describes the channels configuration of the samples (ie. number of
     * channels which are available in the buffer, and positions). */
    uint16_t     i_physical_channels;

    /* Describes from which original channels, before downmixing, the
     * buffer is derived. */
    uint32_t     i_original_channels;

    /* Optional - for A/52, SPDIF and DTS types : */
    /* Bytes used by one compressed frame, depends on bitrate. */
    unsigned int i_bytes_per_frame;

    /* Number of sampleframes contained in one compressed frame. */
    unsigned int i_frame_length;
    /* Please note that it may be completely arbitrary - buffers are not
     * obliged to contain a integral number of so-called "frames". It's
     * just here for the division :
     * buffer_size = i_nb_samples * i_bytes_per_frame / i_frame_length
     */

    /* FIXME ? (used by the codecs) */
    unsigned     i_bitspersample;
    unsigned     i_blockalign;
    uint8_t      i_channels; /* must be <=32 */
};
```

### 描述
`audio_format_t` 结构体用于描述音频格式。它包含了音频的格式标识符（fourcc）、采样率、通道配置、原始通道信息、压缩帧的字节数、帧长度、比特率、块对齐以及通道数等信息。

### 结构体成员说明

| 成员名称              | 类型           | 描述                                                                 |
|-----------------------|----------------|--------------------------------------------------------------------------|
| `i_format`            | `vlc_fourcc_t` | 音频格式标识符（fourcc）。                                             |
| `i_rate`              | `unsigned int` | 音频采样率。                                                           |
| `i_physical_channels` | `uint16_t`     | 描述样本的通道配置（即缓冲区中可用的通道数及其位置）。                 |
| `i_original_channels` | `uint32_t`     | 描述在降混之前，缓冲区所派生的原始通道。                               |
| `i_bytes_per_frame`   | `unsigned int` | 可选，用于A/52、SPDIF和DTS类型。一个压缩帧使用的字节数，取决于比特率。 |
| `i_frame_length`      | `unsigned int` | 一个压缩帧中包含的样本帧数。                                           |
| `i_bitspersample`     | `unsigned`     | 每个样本的比特数。                                                     |
| `i_blockalign`        | `unsigned`     | 块对齐。                                                               |
| `i_channels`          | `uint8_t`      | 通道数，必须小于等于32。                                               |

### 返回值
该结构体没有返回值，因为它是一个定义音频格式的结构体。
## video_format_t {#video_format_t}

```c
struct video_format_t
{
    vlc_fourcc_t i_chroma;                               /**< picture chroma */

    unsigned int i_width;                                 /**< picture width */
    unsigned int i_height;                               /**< picture height */
    unsigned int i_x_offset;               /**< start offset of visible area */
    unsigned int i_y_offset;               /**< start offset of visible area */
    unsigned int i_visible_width;                 /**< width of visible area */
    unsigned int i_visible_height;               /**< height of visible area */

    unsigned int i_bits_per_pixel;             /**< number of bits per pixel */

    unsigned int i_sar_num;                   /**< sample/pixel aspect ratio */
    unsigned int i_sar_den;

    unsigned int i_frame_rate;                     /**< frame rate numerator */
    unsigned int i_frame_rate_base;              /**< frame rate denominator */

    uint32_t i_rmask, i_gmask, i_bmask;          /**< color masks for RGB chroma */
    int i_rrshift, i_lrshift;
    int i_rgshift, i_lgshift;
    int i_rbshift, i_lbshift;
    video_palette_t *p_palette;              /**< video palette from demuxer */
    video_orientation_t orientation;                /**< picture orientation */
};
```

### 描述
`video_format_t` 结构体用于描述视频格式。它包含了视频的色度、分辨率、可见区域、每像素的位数、采样/像素宽高比、帧率、颜色掩码、调色板以及图像方向等信息。

### 成员变量说明

| 成员变量          | 类型               | 描述                                                                 |
|-------------------|--------------------|--------------------------------------------------------------------------|
| `i_chroma`        | `vlc_fourcc_t`     | 图像的色度格式。                                                         |
| `i_width`         | `unsigned int`     | 图像的宽度。                                                             |
| `i_height`        | `unsigned int`     | 图像的高度。                                                             |
| `i_x_offset`      | `unsigned int`     | 可见区域的起点偏移量（水平方向）。                                         |
| `i_y_offset`      | `unsigned int`     | 可见区域的起点偏移量（垂直方向）。                                         |
| `i_visible_width` | `unsigned int`     | 可见区域的宽度。                                                         |
| `i_visible_height`| `unsigned int`     | 可见区域的高度。                                                         |
| `i_bits_per_pixel`| `unsigned int`     | 每像素的位数。                                                           |
| `i_sar_num`       | `unsigned int`     | 采样/像素宽高比（分子）。                                                 |
| `i_sar_den`       | `unsigned int`     | 采样/像素宽高比（分母）。                                                 |
| `i_frame_rate`    | `unsigned int`     | 帧率（分子）。                                                           |
| `i_frame_rate_base`| `unsigned int`    | 帧率（分母）。                                                           |
| `i_rmask`         | `uint32_t`         | RGB 色度的红色掩码。                                                      |
| `i_gmask`         | `uint32_t`         | RGB 色度的绿色掩码。                                                      |
| `i_bmask`         | `uint32_t`         | RGB 色度的蓝色掩码。                                                      |
| `i_rrshift`       | `int`              | 红色掩码的右移位数。                                                      |
| `i_lrshift`       | `int`              | 红色掩码的左移位数。                                                      |
| `i_rgshift`       | `int`              | 绿色掩码的右移位数。                                                      |
| `i_lgshift`       | `int`              | 绿色掩码的左移位数。                                                      |
| `i_rbshift`       | `int`              | 蓝色掩码的右移位数。                                                      |
| `i_lbshift`       | `int`              | 蓝色掩码的左移位数。                                                      |
| `p_palette`       | `video_palette_t*` | 从解复用器获取的视频调色板。                                               |
| `orientation`     | `video_orientation_t` | 图像的方向。                                                         |

### 返回值
该结构体没有返回值，因为它是一个定义数据结构的模板。
## subs_format_t {#subs_format_t}

```c
struct subs_format_t
{
    char *psz_encoding;
    int  i_x_origin;
    int  i_y_origin;
    struct
    {
        uint32_t palette[16+1];
        int i_original_frame_width;
        int i_original_frame_height;
    } spu;
    struct
    {
        int i_id;
    } dvb;
    struct
    {
        int i_magazine;
        int i_page;
    } teletext;
    text_style_t *p_style;
};
```

### 描述
`subs_format_t` 结构体描述了字幕的格式信息。它包含了字幕文本的字符编码、字幕的位置坐标、字幕的原始帧尺寸、调色板信息、DVB 和 Teletext 的相关信息，以及默认的字幕样式。

### 成员说明

| 成员名称 | 类型 | 描述 |
|----------|------|------|
| `psz_encoding` | `char *` | 字幕文本的字符编码。所有 gettext 识别的简写都可以使用。 |
| `i_x_origin` | `int` | 字幕的 x 坐标。0 表示左侧。 |
| `i_y_origin` | `int` | 字幕的 y 坐标。0 表示顶部。 |
| `spu` | `struct` | 包含字幕的调色板和原始帧尺寸信息。 |
| `spu.palette` | `uint32_t[16+1]` | 字幕的调色板。 |
| `spu.i_original_frame_width` | `int` | 字幕提取自的原始电影的宽度。 |
| `spu.i_original_frame_height` | `int` | 字幕提取自的原始电影的高度。 |
| `dvb` | `struct` | 包含 DVB 字幕的 ID 信息。 |
| `dvb.i_id` | `int` | DVB 字幕的 ID。 |
| `teletext` | `struct` | 包含 Teletext 字幕的杂志和页面信息。 |
| `teletext.i_magazine` | `int` | Teletext 字幕的杂志编号。 |
| `teletext.i_page` | `int` | Teletext 字幕的页面编号。 |
| `p_style` | `text_style_t *` | 默认的字幕样式。 |
