## decoder_DeletePicture {#decoder_DeletePicture}

```c
VLC_API void decoder_DeletePicture( decoder_t *p_dec, picture_t *p_picture );
```

### 函数描述
该函数用于释放由 `decoder_NewPicture` 创建的图片。

### 函数参数说明

| 参数名       | 类型        | 描述                                                                 |
|--------------|-------------|--------------------------------------------------------------------------|
| `p_dec`      | `decoder_t*`| 解码器对象的指针。                                                     |
| `p_picture`  | `picture_t*`| 需要释放的图片对象的指针。                                             |

### 函数返回值
该函数没有返回值。
## decoder_LinkPicture {#decoder_LinkPicture}

```c
VLC_API void decoder_LinkPicture( decoder_t *, picture_t * );
```

### 描述
该函数用于增加图片的引用计数。需要注意的是，`picture_Hold` 函数不可用。

### 函数参数说明

| 参数名       | 类型       | 描述                 |
|--------------|------------|----------------------|
| `decoder_t *` | `decoder_t` | 解码器对象指针       |
| `picture_t *` | `picture_t` | 图片对象指针         |

### 函数返回值
该函数没有返回值。
## decoder_UnlinkPicture {#decoder_UnlinkPicture}

```c
VLC_API void decoder_UnlinkPicture( decoder_t *, picture_t * );
```

### 函数描述

此函数用于减少图片的引用计数。（`picture_Release` 不可用。）

### 函数参数说明

| 参数名        | 类型       | 描述                   |
|---------------|------------|------------------------|
| `decoder_t *` | `decoder_t` | 解码器对象指针         |
| `picture_t *` | `picture_t` | 图片对象指针           |

### 函数返回值

此函数没有返回值。
## decoder_UpdateAudioFormat {#decoder_UpdateAudioFormat}

```c
static inline int decoder_UpdateAudioFormat( decoder_t *dec )
```

### 函数描述
该函数通知音频输出管道一个新的音频输出格式（`fmt_out.audio`）。如果当前没有音频输出或音频输出格式已更改，则会设置一个新的音频输出。

### 函数参数说明

| 参数名 | 类型       | 描述               |
|--------|------------|--------------------|
| dec    | `decoder_t*` | 指向解码器结构的指针 |

### 函数返回值
- **0**：如果音频输出正常工作。
- **-1**：如果音频输出无法正常工作。
## decoder_DeleteSubpicture {#decoder_DeleteSubpicture}

```c
VLC_API void decoder_DeleteSubpicture( decoder_t *, subpicture_t *p_subpicture );
```

### 函数描述
该函数用于释放由 `decoder_NewSubpicture` 创建的子画面（subpicture）。

### 函数参数说明

| 参数名          | 类型          | 描述                                                                 |
|-----------------|---------------|--------------------------------------------------------------------------|
| `decoder_t *`   | `decoder_t *` | 解码器对象指针，通常由调用者传递，用于标识解码器上下文。 |
| `p_subpicture`  | `subpicture_t *` | 需要释放的子画面指针。 |

### 函数返回值
该函数没有返回值。
## decoder_GetInputAttachments {#decoder_GetInputAttachments}

```c
VLC_API int decoder_GetInputAttachments( decoder_t *p_dec, input_attachment_t ***ppp_attachment, int *pi_attachment );
```

### 描述
该函数一次性获取所有输入附件。调用者必须释放返回的值。

### 函数参数说明

| 参数名            | 类型                    | 描述                                                                 |
|-------------------|-------------------------|----------------------------------------------------------------------|
| `p_dec`           | `decoder_t *`           | 解码器对象指针。                                                     |
| `ppp_attachment`  | `input_attachment_t ***` | 指向输入附件数组的指针的指针。函数将返回的附件数组存储在此指针中。   |
| `pi_attachment`   | `int *`                 | 指向整数的指针，用于存储返回的附件数量。                             |

### 函数返回值

- **成功**：返回 `0`。
- **失败**：返回非零值，表示获取输入附件失败。
## encoder_t {#encoder_t}

```c
struct encoder_t
{
    VLC_COMMON_MEMBERS

    /* Module properties */
    module_t *          p_module;
    encoder_sys_t *     p_sys;

    /* Properties of the input data fed to the encoder */
    es_format_t         fmt_in;

    /* Properties of the output of the encoder */
    es_format_t         fmt_out;

    block_t *           ( * pf_encode_video )( encoder_t *, picture_t * );
    block_t *           ( * pf_encode_audio )( encoder_t *, block_t * );
    block_t *           ( * pf_encode_sub )( encoder_t *, subpicture_t * );

    /* Common encoder options */
    int i_threads;               /* Number of threads to use during encoding */
    int i_iframes;               /* One I frame per i_iframes */
    int i_bframes;               /* One B frame per i_bframes */
    int i_tolerance;             /* Bitrate tolerance */

    /* Encoder config */
    config_chain_t *p_cfg;
};
```

### 描述
`encoder_t` 结构体定义了一个编码器的属性。它包含了编码器模块的属性、输入数据的格式、输出数据的格式、编码视频、音频和字幕的函数指针，以及一些常见的编码器选项和配置。

### 成员变量说明

| 成员变量名       | 类型                | 描述                                                                 |
|------------------|---------------------|----------------------------------------------------------------------|
| `p_module`       | `module_t *`        | 编码器模块的指针。                                                     |
| `p_sys`          | `encoder_sys_t *`   | 编码器系统特定的数据结构指针。                                           |
| `fmt_in`         | `es_format_t`       | 输入数据的格式。                                                       |
| `fmt_out`        | `es_format_t`       | 输出数据的格式。                                                       |
| `pf_encode_video`| `block_t * (*)(encoder_t *, picture_t *)` | 编码视频的函数指针。返回编码后的数据块。 |
| `pf_encode_audio`| `block_t * (*)(encoder_t *, block_t *)`   | 编码音频的函数指针。返回编码后的数据块。 |
| `pf_encode_sub`  | `block_t * (*)(encoder_t *, subpicture_t *)` | 编码字幕的函数指针。返回编码后的数据块。 |
| `i_threads`      | `int`               | 编码过程中使用的线程数。                                                 |
| `i_iframes`      | `int`               | 每 `i_iframes` 帧生成一个 I 帧。                                          |
| `i_bframes`      | `int`               | 每 `i_bframes` 帧生成一个 B 帧。                                          |
| `i_tolerance`    | `int`               | 比特率容差。                                                           |
| `p_cfg`          | `config_chain_t *`  | 编码器的配置链。                                                       |

### 返回值
该结构体没有返回值，因为它是一个定义编码器属性的结构体。
