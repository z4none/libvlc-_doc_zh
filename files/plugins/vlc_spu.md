## spu_Create {#spu_Create}

```c
VLC_API spu_t * spu_Create( vlc_object_t *p_parent );
```

### 描述
该函数用于创建一个新的子画面（Sub-Picture Unit）处理模块。子画面处理模块用于处理视频播放时的字幕和图形覆盖。

### 函数参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|--------------------------------------------------------------------------|
| `p_parent`| `vlc_object_t *`| 父对象指针，通常是 `libvlc` 或 `vlc_player` 对象，用于管理子画面模块的生命周期。|

### 函数返回值
- 成功时，返回一个指向新创建的 `spu_t` 结构体的指针。
- 如果创建失败，返回 `NULL`。
## spu_Destroy {#spu_Destroy}

```c
VLC_API void spu_Destroy( spu_t * );
```

### 函数描述
销毁一个 SPU（Sub-Picture Unit）对象。调用此函数后，SPU 对象及其相关资源将被释放。

### 函数参数说明

| 参数名 | 类型   | 描述                 |
|--------|--------|----------------------|
| spu    | spu_t* | 指向要销毁的 SPU 对象的指针 |

### 函数返回值
此函数没有返回值。
## spu_PutSubpicture {#spu_PutSubpicture}

```c
VLC_API void spu_PutSubpicture( spu_t *p_spu, subpicture_t *p_subpicture );
```

### 描述
该函数将一个子画面（subpicture）发送到 `spu_t` 核心。调用此函数后，您不能再使用提供的子画面。`spu_t` 核心会在适当的时候销毁它。

### 参数说明

| 参数名        | 类型           | 描述                                                                 |
|---------------|----------------|--------------------------------------------------------------------------|
| `p_spu`       | `spu_t *`      | `spu_t` 核心的指针，表示子画面处理单元。                                |
| `p_subpicture`| `subpicture_t *`| 要发送的子画面的指针。发送后，该子画面将由 `spu_t` 核心管理并最终销毁。|

### 返回值
该函数没有返回值。
## spu_Render {#spu_Render}

```c
VLC_API subpicture_t * spu_Render( spu_t *, const vlc_fourcc_t *p_chroma_list, const video_format_t *p_fmt_dst, const video_format_t *p_fmt_src, mtime_t render_subtitle_date, mtime_t render_osd_date, bool ignore_osd );
```

### 函数描述
该函数将返回一个包含在请求日期可见的OSD（On-Screen Display）和字幕的唯一子画面。

### 函数参数说明

| 参数名                | 类型                | 描述                                                                 |
|----------------------|---------------------|----------------------------------------------------------------------|
| `spu_t *`             | `spu_t *`            | SPU（Sub-Picture Unit）对象的指针。                                  |
| `p_chroma_list`       | `const vlc_fourcc_t *` | 输出支持的色度列表（可以为 `NULL`）。                                 |
| `p_fmt_dst`           | `const video_format_t *` | 目标图片的格式，即返回的子画面将被渲染到的图片格式。                  |
| `p_fmt_src`           | `const video_format_t *` | 原始（源）视频的格式。                                                |
| `render_subtitle_date`| `mtime_t`            | 字幕渲染的日期。                                                      |
| `render_osd_date`     | `mtime_t`            | OSD渲染的日期。                                                       |
| `ignore_osd`          | `bool`               | 是否忽略OSD（如果为 `true`，则不渲染OSD）。                           |

### 函数返回值
- 如果函数成功，返回一个 `subpicture_t` 类型的指针，表示包含OSD和字幕的子画面。
- 如果函数失败，返回 `NULL`。

**注意**：返回的非 `NULL` 值必须通过 `subpicture_Delete()` 函数释放。
## spu_RegisterChannel {#spu_RegisterChannel}

```c
VLC_API int spu_RegisterChannel( spu_t * );
```

### 描述
该函数用于注册一个新的 SPU（Sub-Picture Unit）通道。SPU 通道用于处理和显示字幕或叠加图像。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `spu`  | `spu_t *` | 指向 SPU 结构的指针，表示要注册的 SPU 通道。 |

### 函数返回值
- **成功**：返回一个非负整数，表示新注册的 SPU 通道的标识符。
- **失败**：返回 `-1`，表示注册失败。
## spu_ClearChannel {#spu_ClearChannel}

```c
VLC_API void spu_ClearChannel( spu_t *, int );
```

### 描述
该函数用于清除与指定 SPU 通道关联的所有子图片。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `spu_t *` | `spu_t *` | SPU 通道的指针 |
| `int` | `int` | 要清除的 SPU 通道的标识符 |

### 函数返回值
该函数没有返回值。
## spu_ChangeSources {#spu_ChangeSources}

```c
VLC_API void spu_ChangeSources(spu_t *p_spu, const char *psz_sources);
```

### 描述
该函数用于更改子源列表。

### 函数参数说明

| 参数名       | 类型        | 描述                 |
|--------------|-------------|----------------------|
| `p_spu`      | `spu_t *`   | 指向 `spu_t` 结构的指针，表示 SPU（Sub-Picture Unit）对象。 |
| `psz_sources`| `const char *` | 指向包含新子源列表的字符串的指针。 |

### 函数返回值
该函数没有返回值。
## spu_ChangeFilters {#spu_ChangeFilters}

```c
VLC_API void spu_ChangeFilters( spu_t *p_spu, const char *psz_filters );
```

### 描述
该函数用于更改子滤镜列表。

### 函数参数说明

| 参数名       | 类型        | 描述                                                                 |
|--------------|-------------|----------------------------------------------------------------------|
| `p_spu`      | `spu_t *`   | 指向 `spu_t` 结构体的指针，表示子滤镜处理单元。                       |
| `psz_filters`| `const char *` | 指向字符串的指针，表示要应用的新滤镜列表。滤镜列表以逗号分隔。 |

### 函数返回值
该函数没有返回值。
## spu_t {#spu_t}

```c
struct spu_t
{
    VLC_COMMON_MEMBERS

    spu_private_t *p;
};
```

### 描述
`spu_t` 结构体用于描述子图单元（Subpicture Unit）。子图单元通常用于在视频播放过程中显示字幕、图形覆盖等内容。

### 成员说明

| 成员变量          | 类型            | 描述                                                                 |
|-------------------|-----------------|----------------------------------------------------------------------|
| `VLC_COMMON_MEMBERS` | (宏定义)        | 包含 VLC 中常见的成员变量，如引用计数、锁等。                         |
| `p`               | `spu_private_t*` | 指向 `spu_private_t` 类型的指针，用于存储子图单元的私有数据。         |

### 返回值
该结构体没有返回值，因为它是一个定义，而不是一个函数。
