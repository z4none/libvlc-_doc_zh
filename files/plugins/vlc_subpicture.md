## subpicture_region_New {#subpicture_region_New}

```c
VLC_API subpicture_region_t * subpicture_region_New( const video_format_t *p_fmt );
```

### 描述
该函数用于创建一个新的子画面区域。你必须使用 `subpicture_region_Delete` 函数来销毁它。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_fmt` | `const video_format_t *` | 指向 `video_format_t` 结构的指针，用于指定新子画面区域的格式。 |

### 函数返回值
- **成功**：返回一个指向新创建的 `subpicture_region_t` 结构的指针。
- **失败**：返回 `NULL`，表示创建子画面区域失败。
## subpicture_region_Delete {#subpicture_region_Delete}

```c
VLC_API void subpicture_region_Delete( subpicture_region_t *p_region );
```

### 函数描述
该函数用于销毁由 `subpicture_region_New` 分配的子画面区域。可以传入 `NULL` 参数。

### 函数参数说明

| 参数名       | 类型                  | 描述                                                                 |
|--------------|-----------------------|--------------------------------------------------------------------------|
| `p_region`   | `subpicture_region_t*` | 指向要销毁的子画面区域的指针。如果传入 `NULL`，函数将不执行任何操作。 |

### 函数返回值
该函数没有返回值。
## subpicture_region_ChainDelete {#subpicture_region_ChainDelete}

```c
VLC_API void subpicture_region_ChainDelete( subpicture_region_t *p_head );
```

### 函数描述
该函数用于销毁由 `subpicture_region_New` 分配的子图片区域链表。提供此函数是为了方便使用。

### 函数参数说明

| 参数名       | 类型                  | 描述                                                                 |
|--------------|-----------------------|--------------------------------------------------------------------------|
| `p_head`     | `subpicture_region_t*` | 指向子图片区域链表头部的指针。该函数将销毁从 `p_head` 开始的整个链表。 |

### 函数返回值
该函数没有返回值。
## subpicture_New {#subpicture_New}

```c
VLC_API subpicture_t * subpicture_New( const subpicture_updater_t * );
```

### 描述
该函数用于创建一个新的空子画面（subpicture）。你必须使用 `subpicture_Delete` 函数来销毁它。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `subpicture_updater_t *` | `const subpicture_updater_t *` | 指向子画面更新器的指针。 |

### 函数返回值
- **成功**：返回一个指向新创建的 `subpicture_t` 结构的指针。
- **失败**：返回 `NULL`。
## subpicture_Delete {#subpicture_Delete}

```c
VLC_API void subpicture_Delete( subpicture_t *p_subpic );
```

### 函数描述
该函数用于删除由 `subpicture_New` 创建的子画面。你可以传入 `NULL` 作为参数。

### 函数参数说明

| 参数名       | 类型            | 描述                                                                 |
|--------------|-----------------|----------------------------------------------------------------------|
| `p_subpic`   | `subpicture_t*` | 指向要删除的子画面的指针。如果传入 `NULL`，函数将不执行任何操作。 |

### 函数返回值
该函数没有返回值。
## subpicture_NewFromPicture {#subpicture_NewFromPicture}

```c
VLC_API subpicture_t * subpicture_NewFromPicture( vlc_object_t *, picture_t *, vlc_fourcc_t i_chroma );
```

### 函数描述
该函数将创建一个包含一个区域的子画面，该区域使用请求的色度显示给定的图片。传入的 `picture_t` 不会被释放或用于返回的 `subpicture_t` 内部。

### 函数参数说明

| 参数名          | 类型          | 描述                                                                 |
|-----------------|---------------|--------------------------------------------------------------------------|
| `vlc_object_t *` | `vlc_object_t *` | VLC 对象指针，通常是调用该函数的对象。                                       |
| `picture_t *`    | `picture_t *`    | 要用于创建子画面的图片。该图片不会被释放或用于返回的子画面内部。               |
| `vlc_fourcc_t`   | `vlc_fourcc_t`   | 请求的色度格式，用于指定子画面的颜色格式。                                     |

### 函数返回值
- **成功**：返回一个指向新创建的 `subpicture_t` 的指针。
- **失败**：返回 `NULL`，表示创建子画面失败。
## subpicture_Update {#subpicture_Update}

```c
VLC_API void subpicture_Update( subpicture_t *p_subpicture, const video_format_t *p_src, const video_format_t *p_dst, mtime_t i_ts );
```

### 函数描述
该函数用于更新使用非空 `subpicture_updater_t` 创建的子图的内容。

### 函数参数说明

| 参数名          | 类型                | 描述                                                                 |
|-----------------|---------------------|----------------------------------------------------------------------|
| `p_subpicture`  | `subpicture_t *`    | 指向要更新的子图对象的指针。                                         |
| `p_src`         | `const video_format_t *` | 指向源视频格式的指针，描述子图的源格式。                             |
| `p_dst`         | `const video_format_t *` | 指向目标视频格式的指针，描述子图的目标格式。                         |
| `i_ts`          | `mtime_t`           | 时间戳，表示子图的更新时间。                                         |

### 函数返回值
该函数没有返回值。
## subpicture_region_t {#subpicture_region_t}

```c
struct subpicture_region_t
{
    video_format_t  fmt;                          /**< format of the picture */
    picture_t       *p_picture;          /**< picture comprising this region */

    int             i_x;                             /**< position of region */
    int             i_y;                             /**< position of region */
    int             i_align;                  /**< alignment within a region */
    int             i_alpha;                               /**< transparency */

    char            *psz_text;       /**< text string comprising this region */
    char            *psz_html;       /**< HTML version of subtitle (NULL = use psz_text) */
    text_style_t    *p_style;        /**< a description of the text style formatting */
    bool            b_renderbg;      /**< render black background under text */

    subpicture_region_t *p_next;                /**< next region in the list */
    subpicture_region_private_t *p_private;  /**< Private data for spu_t *only* */
};
```

### 描述
字幕区域由图片（图形）及其渲染坐标定义。字幕包含一个区域的列表。

### 结构成员说明

| 成员变量        | 类型                  | 描述                                                                 |
|-----------------|-----------------------|--------------------------------------------------------------------------|
| `fmt`           | `video_format_t`      | 图片的格式。                                                           |
| `p_picture`     | `picture_t*`          | 构成该区域的图片。                                                     |
| `i_x`           | `int`                 | 区域的X坐标位置。                                                      |
| `i_y`           | `int`                 | 区域的Y坐标位置。                                                      |
| `i_align`       | `int`                 | 区域内的对齐方式。                                                     |
| `i_alpha`       | `int`                 | 透明度。                                                               |
| `psz_text`      | `char*`               | 构成该区域的文本字符串。                                               |
| `psz_html`      | `char*`               | 字幕的HTML版本（如果为NULL，则使用`psz_text`）。                       |
| `p_style`       | `text_style_t*`       | 文本样式格式的描述。                                                   |
| `b_renderbg`    | `bool`                | 是否在文本下方渲染黑色背景。                                           |
| `p_next`        | `subpicture_region_t*`| 列表中的下一个区域。                                                   |
| `p_private`     | `subpicture_region_private_t*` | 仅供`spu_t`使用的私有数据。 |
## subpicture_t {#subpicture_t}

```c
struct subpicture_t
{
    int             i_channel;                    /**< subpicture channel ID */
    int64_t         i_order;                 /** an increasing unique number */
    subpicture_t *  p_next;               /**< next subtitle to be displayed */
    subpicture_region_t *p_region;  /**< region list composing this subtitle */
    mtime_t         i_start;                  /**< beginning of display date */
    mtime_t         i_stop;                         /**< end of display date */
    bool            b_ephemer;    /**< If this flag is set to true the subtitle
                                will be displayed untill the next one appear */
    bool            b_fade;                               /**< enable fading */
    bool         b_subtitle;            /**< the picture is a movie subtitle */
    bool         b_absolute;                       /**< position is absolute */
    int          i_original_picture_width;  /**< original width of the movie */
    int          i_original_picture_height;/**< original height of the movie */
    int          i_alpha;                                  /**< transparency */
    subpicture_updater_t updater;
    subpicture_private_t *p_private;    /* Reserved to the core */
};
```

### 描述
任何旨在由视频输出线程显示的字幕都应存储在此结构中，从其创建到其有效显示。字幕类型和标志只能由输出线程修改。请注意，空字幕必须将其标志设置为0。

### 结构成员说明

| 成员名称 | 类型 | 描述 |
|----------|------|------|
| `i_channel` | `int` | 字幕通道ID |
| `i_order` | `int64_t` | 一个递增的唯一数字 |
| `p_next` | `subpicture_t*` | 下一个要显示的字幕 |
| `p_region` | `subpicture_region_t*` | 组成此字幕的区域列表 |
| `i_start` | `mtime_t` | 显示开始日期 |
| `i_stop` | `mtime_t` | 显示结束日期 |
| `b_ephemer` | `bool` | 如果此标志设置为true，字幕将一直显示直到下一个字幕出现 |
| `b_fade` | `bool` | 启用渐变效果 |
| `b_subtitle` | `bool` | 图片是电影字幕 |
| `b_absolute` | `bool` | 位置是绝对的 |
| `i_original_picture_width` | `int` | 电影的原始宽度 |
| `i_original_picture_height` | `int` | 电影的原始高度 |
| `i_alpha` | `int` | 透明度 |
| `updater` | `subpicture_updater_t` | 字幕更新器 |
| `p_private` | `subpicture_private_t*` | 保留给核心使用 |
