## video_splitter_NewPicture {#video_splitter_NewPicture}

```c
static inline int video_splitter_NewPicture( video_splitter_t *p_splitter,
                                             picture_t *pp_picture[] )
```

### 描述
该函数用于创建一个适合作为输出的图片数组。你必须通过 `pf_filter` 返回它们，或者通过调用 `video_splitter_DeletePicture` 来删除它们。如果返回值不是 `VLC_SUCCESS`，则 `pp_picture` 的值是未定义的。

### 参数说明

| 参数名        | 类型                | 描述                                                                 |
|---------------|---------------------|----------------------------------------------------------------------|
| p_splitter    | video_splitter_t*   | 指向 `video_splitter_t` 结构的指针，表示视频分割器。                  |
| pp_picture    | picture_t**         | 指向 `picture_t` 指针数组的指针，用于存储生成的图片。                 |

### 返回值
- **VLC_SUCCESS**: 成功创建图片数组。
- **非 VLC_SUCCESS**: 未能成功创建图片数组，`pp_picture` 的值是未定义的。
## video_splitter_DeletePicture {#video_splitter_DeletePicture}

```c
static inline void video_splitter_DeletePicture( video_splitter_t *p_splitter,
                                                 picture_t *pp_picture[] )
{
    p_splitter->pf_picture_del( p_splitter, pp_picture );
}
```

### 函数描述
该函数用于释放由 `video_splitter_NewPicture` 创建的图片数组。提供此函数的目的是为了方便使用。

### 函数参数说明

| 参数名        | 类型                | 描述                                                                 |
|---------------|---------------------|----------------------------------------------------------------------|
| `p_splitter`  | `video_splitter_t*` | 指向 `video_splitter_t` 结构体的指针，表示视频分割器对象。           |
| `pp_picture`  | `picture_t**`       | 指向 `picture_t` 结构体数组的指针，表示需要释放的图片数组。          |

### 函数返回值
该函数没有返回值。
## video_splitter_New {#video_splitter_New}

```c
VLC_API video_splitter_t * video_splitter_New( vlc_object_t *p_this, const char *psz_name, const video_format_t *p_fmt );
```

### 函数描述
该函数用于创建一个新的视频分割器（video splitter）。视频分割器用于将输入的视频流分割成多个输出流。函数需要传入一个 `vlc_object_t` 类型的对象、视频分割器的名称以及输入视频的格式。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_this`     | `vlc_object_t *`    | VLC 对象指针，通常是调用该函数的对象。                                |
| `psz_name`   | `const char *`      | 视频分割器的名称，用于标识特定的视频分割器。                         |
| `p_fmt`      | `const video_format_t *` | 输入视频的格式，描述了视频的分辨率、色彩空间等信息。                |

### 函数返回值
- **成功**：返回一个指向新创建的 `video_splitter_t` 结构体的指针。
- **失败**：返回 `NULL`，表示视频分割器创建失败。可能的原因包括但不限于：内存分配失败、无效的输入参数、不支持的视频格式等。
## video_splitter_Delete {#video_splitter_Delete}

```c
VLC_API void video_splitter_Delete( video_splitter_t * );
```

### 描述
该函数用于删除一个视频分割器对象。

### 函数参数说明

| 参数名               | 类型                | 描述                                                                 |
|----------------------|---------------------|----------------------------------------------------------------------|
| `video_splitter_t *` | `video_splitter_t *` | 指向要删除的视频分割器对象的指针。该对象将被释放并从内存中移除。 |

### 函数返回值
该函数没有返回值。
## video_splitter_Filter {#video_splitter_Filter}

```c
static inline int video_splitter_Filter(video_splitter_t *p_splitter, picture_t *pp_dst[], picture_t *p_src)
```

### 描述
该函数用于将输入的视频帧 `p_src` 通过 `video_splitter_t` 对象的过滤器函数 `pf_filter` 进行处理，并将处理后的结果存储在 `pp_dst` 数组中。

### 函数参数说明

| 参数名       | 类型                | 描述                                                         |
|--------------|---------------------|--------------------------------------------------------------|
| `p_splitter` | `video_splitter_t*` | 指向 `video_splitter_t` 对象的指针，包含过滤器函数 `pf_filter`。 |
| `pp_dst`     | `picture_t**`       | 指向输出图片数组的指针，存储处理后的图片。                     |
| `p_src`      | `picture_t*`        | 指向输入图片的指针，待处理的原始图片。                         |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - 如果过滤器函数 `pf_filter` 成功处理了输入图片并将其存储在 `pp_dst` 中，则返回 `0`。
  - 如果过滤器函数 `pf_filter` 处理失败，则返回一个非零的错误码。
## video_splitter_Mouse {#video_splitter_Mouse}

```c
static inline int video_splitter_Mouse( video_splitter_t *p_splitter,
                                        vlc_mouse_t *p_mouse,
                                        int i_index,
                                        const vlc_mouse_t *p_old, const vlc_mouse_t *p_new )
```

### 描述
该函数用于处理视频分割器中的鼠标事件。如果视频分割器没有定义鼠标处理函数 (`pf_mouse`)，则直接将新的鼠标状态复制到目标鼠标状态中，并返回成功。否则，调用视频分割器定义的鼠标处理函数来处理鼠标事件。

### 参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_splitter` | `video_splitter_t*` | 指向视频分割器对象的指针，包含鼠标处理函数的指针 (`pf_mouse`)。       |
| `p_mouse`    | `vlc_mouse_t*`      | 指向目标鼠标状态的指针，用于存储处理后的鼠标状态。                   |
| `i_index`    | `int`               | 鼠标事件的索引，通常用于区分不同的鼠标事件或窗口。                   |
| `p_old`      | `const vlc_mouse_t*`| 指向旧的鼠标状态的指针，包含鼠标事件发生前的状态。                   |
| `p_new`      | `const vlc_mouse_t*`| 指向新的鼠标状态的指针，包含鼠标事件发生后的状态。                   |

### 返回值
- **`VLC_SUCCESS`**: 如果成功处理鼠标事件，或者视频分割器没有定义鼠标处理函数 (`pf_mouse`)，则返回 `VLC_SUCCESS`。
- **其他值**: 如果调用了视频分割器定义的鼠标处理函数 (`pf_mouse`)，则返回该函数的返回值。
## video_splitter_t {#video_splitter_t}

```c
struct video_splitter_t
{
    VLC_COMMON_MEMBERS

    /* Module properties */
    module_t        *p_module;

    /* configuration */
    config_chain_t  *p_cfg;

    /* Input format
     * It is filled by the creator and cannot be modified.
     */
    video_format_t  fmt;

    /* Output formats
     *
     * It can only be set in the open() function and must remain
     * constant.
     * The module is responsible for the allocation and deallocation.
     */
    int                     i_output;
    video_splitter_output_t *p_output;

    int             (*pf_filter)( video_splitter_t *, picture_t *pp_dst[],
                                  picture_t *p_src );
    int             (*pf_mouse) ( video_splitter_t *, vlc_mouse_t *,
                                  int i_index,
                                  const vlc_mouse_t *p_old, const vlc_mouse_t *p_new );

    video_splitter_sys_t *p_sys;

    /* Buffer allocation */
    int  (*pf_picture_new) ( video_splitter_t *, picture_t *pp_picture[] );
    void (*pf_picture_del) ( video_splitter_t *, picture_t *pp_picture[] );
    video_splitter_owner_t *p_owner;
};
```

### 描述
`video_splitter_t` 结构体描述了一个视频分割器。它包含了模块属性、配置、输入格式、输出格式、过滤函数、鼠标事件处理函数、系统特定数据、缓冲区分配函数以及所有者信息。

### 成员说明

| 成员名               | 类型                          | 描述                                                                 |
|----------------------|-------------------------------|--------------------------------------------------------------------------|
| `VLC_COMMON_MEMBERS` | 宏                            | VLC 通用成员，包含一些通用的结构体成员。                                  |
| `p_module`           | `module_t*`                   | 模块属性，指向当前模块的指针。                                           |
| `p_cfg`              | `config_chain_t*`             | 配置链表，用于存储模块的配置信息。                                       |
| `fmt`                | `video_format_t`              | 输入格式，由创建者填充且不可修改。                                       |
| `i_output`           | `int`                         | 输出格式的数量。                                                         |
| `p_output`           | `video_splitter_output_t*`    | 输出格式的数组，由模块负责分配和释放。                                   |
| `pf_filter`          | `int (*)(video_splitter_t*, picture_t**, picture_t*)` | 过滤函数，用于处理视频帧。                                              |
| `pf_mouse`           | `int (*)(video_splitter_t*, vlc_mouse_t*, int, const vlc_mouse_t*, const vlc_mouse_t*)` | 鼠标事件处理函数，用于处理鼠标事件。 |
| `p_sys`              | `video_splitter_sys_t*`       | 系统特定数据，用于存储模块的私有数据。                                   |
| `pf_picture_new`     | `int (*)(video_splitter_t*, picture_t**)` | 缓冲区分配函数，用于分配新的图片缓冲区。                                  |
| `pf_picture_del`     | `void (*)(video_splitter_t*, picture_t**)` | 缓冲区释放函数，用于释放图片缓冲区。                                      |
| `p_owner`            | `video_splitter_owner_t*`     | 所有者信息，指向视频分割器的所有者。                                     |

### 返回值
该结构体本身不返回值，但其中的函数指针成员（如 `pf_filter`, `pf_mouse`, `pf_picture_new`, `pf_picture_del`）会根据具体实现返回相应的值。
