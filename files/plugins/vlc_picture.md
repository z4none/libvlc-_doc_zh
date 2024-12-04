## picture_Release {#picture_Release}

```c
VLC_API void picture_Release( picture_t *p_picture );
```

### 描述
该函数用于释放一张图片。它不会对从 `vout` 获取的图片产生任何影响。

### 参数说明

| 参数名       | 类型       | 描述                     |
|--------------|------------|--------------------------|
| `p_picture`  | `picture_t*` | 指向要释放的图片结构的指针 |

### 返回值
该函数没有返回值。
## picture_IsReferenced {#picture_IsReferenced}

```c
VLC_API bool picture_IsReferenced( picture_t *p_picture );
```

### 描述
该函数用于判断你是否是图片的唯一所有者。如果图片有多个引用者，则返回 `true`。该函数仅在图片是通过 `picture_New` 创建时有效。

### 参数说明

| 参数名       | 类型       | 描述                   |
|--------------|------------|------------------------|
| `p_picture`  | `picture_t*` | 指向图片结构的指针。 |

### 返回值
- **`true`**: 如果图片有多个引用者。
- **`false`**: 如果图片是唯一的所有者。
## picture_CopyProperties {#picture_CopyProperties}

```c
VLC_API void picture_CopyProperties( picture_t *p_dst, const picture_t *p_src );
```

### 描述
此函数将复制所有图片的动态属性。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_dst` | `picture_t *` | 目标图片，属性将被复制到此图片中。 |
| `p_src` | `const picture_t *` | 源图片，属性将从该图片中复制。 |

### 函数返回值
此函数没有返回值。
## picture_Reset {#picture_Reset}

```c
VLC_API void picture_Reset( picture_t * );
```

### 描述
该函数将重置图片信息（属性和量化器）。有时对于重用图片（例如从池中）非常有用。

### 函数参数说明

| 参数名       | 类型       | 描述                       |
|--------------|------------|----------------------------|
| `picture_t *` | `picture_t*` | 指向要重置的图片结构的指针 |

### 函数返回值
该函数没有返回值。
## picture_CopyPixels {#picture_CopyPixels}

```c
VLC_API void picture_CopyPixels( picture_t *p_dst, const picture_t *p_src );
```

### 描述
该函数用于复制图片的像素。你可以安全地在不同大小的图片之间进行复制，只有兼容（较小）的部分会被复制。

### 函数参数说明

| 参数名 | 类型          | 描述               |
|--------|---------------|--------------------|
| p_dst  | `picture_t *` | 目标图片结构体指针 |
| p_src  | `const picture_t *` | 源图片结构体指针   |

### 函数返回值
该函数没有返回值。
## plane_CopyPixels {#plane_CopyPixels}

```c
VLC_API void plane_CopyPixels( plane_t *p_dst, const plane_t *p_src );
```

### 函数描述
该函数用于将一个 `plane_t` 结构中的像素数据复制到另一个 `plane_t` 结构中。`plane_t` 结构通常用于表示视频帧的单个颜色平面（如 Y、U、V 平面）。

### 函数参数说明

| 参数名 | 类型          | 描述                                                                 |
|--------|---------------|--------------------------------------------------------------------------|
| p_dst  | `plane_t *`   | 目标 `plane_t` 结构，用于存储复制后的像素数据。                       |
| p_src  | `const plane_t *` | 源 `plane_t` 结构，包含要复制的像素数据。                             |

### 函数返回值
该函数没有返回值（`void`）。
## picture_Copy {#picture_Copy}

```c
VLC_API void picture_Copy( picture_t *p_dst, const picture_t *p_src );
```

### 描述
此函数将复制图片的动态属性和像素。需要注意的是，有时简单的 `picture_Hold` 可能已经满足需求，而不需要复制带来的开销。该函数提供了一种便捷的方式来完成复制操作。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_dst` | `picture_t *` | 指向目标图片的指针，复制后的图片将存储在这里。 |
| `p_src` | `const picture_t *` | 指向源图片的指针，将从该图片中复制属性和像素。 |

### 返回值
该函数没有返回值。
## picture_Export {#picture_Export}

```c
VLC_API int picture_Export( vlc_object_t *p_obj, block_t **pp_image, video_format_t *p_fmt, picture_t *p_picture, vlc_fourcc_t i_format, int i_override_width, int i_override_height );
```

### 函数描述
此函数将图片导出为编码的比特流。`pp_image` 将包含以 `psz_format` 格式编码的比特流。如果 `p_fmt` 不为 `NULL`，它将被设置为编码前图片的格式。`i_override_width` 和 `i_override_height` 允许覆盖要编码的图片的宽度和/或高度：
- 如果严格小于 0，将使用原始尺寸。
- 如果等于 0，将根据另一个不为 0 的维度推导出尺寸。
- 如果严格大于 0，将覆盖该维度。
如果最多只有一个维度大于 0，则将保持图片的宽高比。

### 函数参数说明

| 参数名            | 类型            | 描述                                                                 |
|-------------------|-----------------|----------------------------------------------------------------------|
| `p_obj`           | `vlc_object_t*` | VLC 对象指针，通常为 `vlc_object_t` 类型的指针。                      |
| `pp_image`        | `block_t**`     | 指向 `block_t` 指针的指针，用于存储编码后的比特流。                  |
| `p_fmt`           | `video_format_t*`| 指向 `video_format_t` 结构的指针，用于存储编码前的图片格式。如果为 `NULL`，则不存储格式信息。 |
| `p_picture`       | `picture_t*`    | 指向 `picture_t` 结构的指针，表示要导出的图片。                      |
| `i_format`        | `vlc_fourcc_t`  | 表示编码格式的 `vlc_fourcc_t` 类型变量。                             |
| `i_override_width`| `int`           | 覆盖图片宽度的整数值。如果小于 0，则使用原始宽度；如果等于 0，则根据高度推导宽度；如果大于 0，则覆盖宽度。 |
| `i_override_height`| `int`           | 覆盖图片高度的整数值。如果小于 0，则使用原始高度；如果等于 0，则根据宽度推导高度；如果大于 0，则覆盖高度。 |

### 函数返回值
- 成功时返回 `0`。
- 失败时返回负值。
## picture_Setup {#picture_Setup}

```c
VLC_API int picture_Setup( picture_t *p_picture, const video_format_t *p_fmt );
```

### 描述
此函数将设置 `picture_t` 结构体的所有字段，而不会分配任何内存。需要注意的是，内存必须已经初始化，并且不需要释放。如果核心无法理解请求的格式，函数将返回 `VLC_EGENERIC`。此函数对于获取图像平面的属性非常有用。

### 参数说明

| 参数名        | 类型                | 描述                                                                 |
|---------------|---------------------|----------------------------------------------------------------------|
| `p_picture`   | `picture_t *`       | 指向 `picture_t` 结构体的指针，该结构体将被设置。                     |
| `p_fmt`       | `const video_format_t *` | 指向 `video_format_t` 结构体的指针，包含图像的格式信息。 |

### 返回值
- **`VLC_SUCCESS`**: 如果函数成功设置 `picture_t` 结构体。
- **`VLC_EGENERIC`**: 如果核心无法理解请求的格式。
## picture_BlendSubpicture {#picture_BlendSubpicture}

```c
VLC_API unsigned picture_BlendSubpicture( picture_t *p_dst, filter_t *p_blend, subpicture_t *p_subpic );
```

### 描述
该函数将给定的子图混合到图片上。子图及其所有区域必须满足以下条件：
- 必须是绝对的。
- 不能是短暂的。
- 不能有淡入淡出标志。
- 只包含图片（没有文本渲染）。

### 函数参数说明

| 参数名    | 类型        | 描述                   |
|-----------|-------------|------------------------|
| `p_dst`   | `picture_t*` | 目标图片，混合后的结果将存储在此图片上。 |
| `p_blend` | `filter_t*`  | 混合滤镜，用于执行混合操作。 |
| `p_subpic`| `subpicture_t*` | 要混合的子图。 |

### 函数返回值
该函数返回成功混合的区域数量。
## picture_t {#picture_t}

```c
struct picture_t
{
    video_frame_format_t format;
    plane_t p[PICTURE_PLANE_MAX];
    int i_planes;
    mtime_t date;
    bool b_force;
    bool b_progressive;
    bool b_top_field_first;
    unsigned int i_nb_fields;
    void *context;
    picture_sys_t *p_sys;
    struct
    {
#if (defined (__LIBVLC__) && !defined (__PLUGIN__))
        atomic_uintptr_t refcount;
#else
        uintptr_t refcount_placeholder_keep_off;
#endif
        void (*pf_destroy)( picture_t * );
        picture_gc_sys_t *p_sys;
    } gc;
    struct picture_t *p_next;
};
```

### 描述
`picture_t` 结构体用于表示视频帧的图片。它包含了图片的各种属性，如格式、平面信息、显示日期、动态属性等。该结构体还包含了一些管理属性和私有数据，用于视频输出插件的内部管理。

### 成员说明

| 成员名称               | 类型                        | 描述                                                                 |
|----------------------|-----------------------------|--------------------------------------------------------------------|
| `format`             | `video_frame_format_t`      | 图片的格式属性。                                                       |
| `p`                  | `plane_t[PICTURE_PLANE_MAX]` | 图片的平面描述数组。                                                     |
| `i_planes`           | `int`                       | 已分配的平面数量。                                                       |
| `date`               | `mtime_t`                   | 显示日期。该属性可以通过视频输出线程API修改，但不应直接写入。                      |
| `b_force`            | `bool`                      | 强制显示标志。该属性可以通过视频输出线程API修改，但不应直接写入。                  |
| `b_progressive`      | `bool`                      | 是否为逐行扫描帧。该属性可以由解码器修改。                                    |
| `b_top_field_first`  | `bool`                      | 哪个场先显示。该属性可以由解码器修改。                                      |
| `i_nb_fields`        | `unsigned int`              | 显示的场数。该属性可以由解码器修改。                                        |
| `context`            | `void *`                    | 指向视频格式特定数据的指针，必须指向一个用于释放上下文的函数指针。                  |
| `p_sys`              | `picture_sys_t *`           | 私有数据，视频输出插件可能会在这里放置数据以跟踪图片。                          |
| `gc`                 | `struct`                    | 垃圾回收相关的结构体，包含引用计数和销毁函数。                                 |
| `p_next`             | `struct picture_t *`        | 下一个图片的指针，用于图片的FIFO队列。                                        |

### 返回值
该结构体没有返回值，因为它是一个定义数据结构的声明。
