## input_item_CopyOptions {#input_item_CopyOptions}

```c
VLC_API void input_item_CopyOptions( input_item_t *p_parent, input_item_t *p_child );
```

### 函数描述
该函数用于将父输入项 (`p_parent`) 中的所有选项复制到子输入项 (`p_child`) 中。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| p_parent  | input_item_t* | 指向父输入项的指针，其选项将被复制到子输入项中。 |
| p_child   | input_item_t* | 指向子输入项的指针，将接收来自父输入项的选项。   |

### 函数返回值
该函数没有返回值 (`void`)。
## input_item_SetName {#input_item_SetName}

```c
VLC_API void input_item_SetName( input_item_t *p_item, const char *psz_name );
```

### 函数描述
该函数用于设置输入项（`input_item_t`）的名称。名称是一个字符串，通常用于标识输入项的内容。

### 函数参数说明

| 参数名    | 类型           | 描述                                                         |
|-----------|----------------|--------------------------------------------------------------|
| `p_item`  | `input_item_t*` | 指向要设置名称的输入项的指针。                               |
| `psz_name`| `const char*`  | 指向要设置的名称字符串的指针。                               |

### 函数返回值
该函数没有返回值（`void`）。
## input_item_PostSubItem {#input_item_PostSubItem}

```c
VLC_API void input_item_PostSubItem( input_item_t *p_parent, input_item_t *p_child );
```

### 描述
该函数用于向当前项添加一个子项。它不会持有该子项，但可以通知感兴趣的第三方（如播放列表）有新的子项。通过这种设计，输入项不需要负责保持所有输入项子项的引用。该函数会发送 `vlc_InputItemSubItemTreeAdded` 和 `vlc_InputItemSubItemAdded` 事件。

### 参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| p_parent  | input_item_t* | 指向父项的指针，新子项将被添加到该父项中。 |
| p_child   | input_item_t* | 指向要添加的子项的指针。 |

### 返回值
该函数没有返回值。
## input_item_node_AppendItem {#input_item_node_AppendItem}

```c
VLC_API input_item_node_t * input_item_node_AppendItem( input_item_node_t *p_node, input_item_t *p_item );
```

### 函数描述
该函数用于将一个新的子节点添加到父节点中，该子节点将指向指定的子项。

### 函数参数说明

| 参数名   | 类型                | 描述                                                                 |
|----------|---------------------|----------------------------------------------------------------------|
| p_node   | input_item_node_t * | 指向父节点的指针，新子节点将被添加到该父节点中。                     |
| p_item   | input_item_t *      | 指向子项的指针，新子节点将指向该子项。                               |

### 函数返回值
- 成功时，返回指向新添加的子节点的指针。
- 如果参数无效或操作失败，返回 `NULL`。
## input_item_node_AppendNode {#input_item_node_AppendNode}

```c
VLC_API void input_item_node_AppendNode( input_item_node_t *p_parent, input_item_node_t *p_child );
```

### 函数描述
将一个已经创建的节点添加到父节点的子节点中。

### 函数参数说明

| 参数名      | 类型                | 描述                                                         |
|-------------|---------------------|--------------------------------------------------------------|
| `p_parent`  | `input_item_node_t*` | 指向父节点的指针，新节点将被添加到该父节点的子节点列表中。   |
| `p_child`   | `input_item_node_t*` | 指向要添加的子节点的指针。                                   |

### 函数返回值
该函数没有返回值。
## input_item_node_Delete {#input_item_node_Delete}

```c
VLC_API void input_item_node_Delete( input_item_node_t *p_node );
```

### 描述
删除通过 `input_item_node_Create()` 创建的节点及其所有子节点。

### 函数参数说明

| 参数名       | 类型                | 描述                 |
|--------------|---------------------|----------------------|
| `p_node`     | `input_item_node_t*` | 要删除的节点指针。 |

### 函数返回值
该函数没有返回值。
## input_item_node_PostAndDelete {#input_item_node_PostAndDelete}

```c
VLC_API void input_item_node_PostAndDelete( input_item_node_t *p_node );
```

### 描述
结束添加多个子项。

发送 `vlc_InputItemSubItemTreeAdded` 事件，通知给定的根节点指向的项目已创建新的子项，这些子项由节点的所有子节点指向。

同时，为给定根节点下的每个子节点发送 `vlc_InputItemSubItemAdded` 事件。

最后，删除节点及其所有子节点。

### 参数说明

| 参数名       | 类型                | 描述                         |
|--------------|---------------------|------------------------------|
| `p_node`     | `input_item_node_t*` | 指向要处理的根节点的指针。   |

### 返回值
该函数没有返回值。
## input_item_AddOption {#input_item_AddOption}

```c
VLC_API int input_item_AddOption(input_item_t *p_item, const char *psz_option, unsigned i_flags);
```

### 描述
该函数允许向现有的 `input_item_t` 添加一个选项。

### 函数参数说明

| 参数名       | 类型           | 描述                                                         |
|--------------|----------------|--------------------------------------------------------------|
| `p_item`     | `input_item_t*` | 指向要添加选项的 `input_item_t` 对象的指针。                  |
| `psz_option` | `const char*`  | 要添加的选项字符串。                                         |
| `i_flags`    | `unsigned`     | 选项的标志位，用于指定选项的行为或特性。                     |

### 函数返回值
- `0`：成功添加选项。
- `非0`：添加选项失败。
## input_item_HasErrorWhenReading {#input_item_HasErrorWhenReading}

```c
VLC_API bool input_item_HasErrorWhenReading( input_item_t * );
```

### 描述
该函数用于检查输入项（`input_item_t`）在读取时是否发生了错误。

### 函数参数说明

| 参数名          | 类型          | 描述                                                         |
|-----------------|---------------|--------------------------------------------------------------|
| `input_item_t *` | `input_item_t*` | 指向输入项的指针，用于检查读取时是否发生了错误。 |

### 函数返回值
- **`true`**: 表示在读取输入项时发生了错误。
- **`false`**: 表示在读取输入项时没有发生错误。
## input_item_SetMeta 

```c
VLC_API void input_item_SetMeta( input_item_t *p_i, vlc_meta_type_t meta_type, const char *psz_val );
```

### 函数描述
该函数用于设置 `input_item_t` 对象的元数据。元数据可以是标题、艺术家、专辑等信息。通过指定 `meta_type` 参数，可以设置不同类型的元数据。

### 函数参数说明

| 参数名      | 类型               | 描述                                                                 |
|-------------|--------------------|--------------------------------------------------------------------------|
| `p_i`       | `input_item_t *`   | 指向 `input_item_t` 对象的指针，表示要设置元数据的项目。               |
| `meta_type` | `vlc_meta_type_t`  | 元数据的类型，指定要设置的元数据类型（如标题、艺术家、专辑等）。       |
| `psz_val`   | `const char *`     | 指向要设置的元数据字符串的指针。如果为 `NULL`，则删除该元数据。         |

### 函数返回值
该函数没有返回值。
## input_item_MetaMatch {#input_item_MetaMatch}

```c
VLC_API bool input_item_MetaMatch( input_item_t *p_i, vlc_meta_type_t meta_type, const char *psz );
```

### 描述
该函数用于检查 `input_item_t` 对象的元数据是否与指定的元数据类型和字符串匹配。如果元数据匹配，则返回 `true`，否则返回 `false`。

### 函数参数说明

| 参数名       | 类型               | 描述                                                                 |
|--------------|--------------------|--------------------------------------------------------------------------|
| `p_i`        | `input_item_t *`   | 指向 `input_item_t` 对象的指针，表示要检查的输入项。                   |
| `meta_type`  | `vlc_meta_type_t`  | 表示要检查的元数据类型。                                               |
| `psz`        | `const char *`     | 指向要匹配的字符串的指针。                                             |

### 函数返回值
- **`true`**: 如果 `input_item_t` 对象的元数据与指定的元数据类型和字符串匹配。
- **`false`**: 如果元数据不匹配或发生错误。
## input_item_SetURI {#input_item_SetURI}

```c
VLC_API void input_item_SetURI( input_item_t * p_i, const char *psz_uri );
```

### 函数描述
该函数用于设置 `input_item_t` 结构体中的 URI 字段。URI 是用于标识媒体资源位置的字符串。

### 函数参数说明

| 参数名    | 类型            | 描述                                                                 |
|-----------|-----------------|----------------------------------------------------------------------|
| `p_i`     | `input_item_t *` | 指向 `input_item_t` 结构体的指针，表示要设置 URI 的输入项。           |
| `psz_uri` | `const char *`  | 指向包含 URI 的字符串的指针，表示要设置到 `input_item_t` 中的 URI。 |

### 函数返回值
该函数没有返回值。
## input_item_GetDuration {#input_item_GetDuration}

```c
VLC_API mtime_t input_item_GetDuration( input_item_t * p_i );
```

### 描述
该函数用于获取输入项（`input_item_t`）的持续时间。持续时间以微秒为单位返回。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_i`  | `input_item_t *` | 指向输入项的指针，表示要获取持续时间的输入项。 |

### 函数返回值
- **返回值类型**: `mtime_t`
- **返回值说明**:
  - 如果成功，返回输入项的持续时间，单位为微秒。
  - 如果输入项没有设置持续时间，或者输入项为 `NULL`，则返回 `0`。
## input_item_SetDuration {#input_item_SetDuration}

```c
VLC_API void input_item_SetDuration( input_item_t * p_i, mtime_t i_duration );
```

### 描述
该函数用于设置输入项（`input_item_t`）的持续时间。持续时间以微秒为单位表示。

### 函数参数说明

| 参数名       | 类型        | 描述                                                                 |
|--------------|-------------|--------------------------------------------------------------------------|
| `p_i`        | `input_item_t *` | 指向要设置持续时间的输入项的指针。                                       |
| `i_duration` | `mtime_t`       | 输入项的持续时间，以微秒为单位。如果设置为 `VLC_TICK_INVALID`，则表示持续时间未知。 |

### 函数返回值
该函数没有返回值。
## input_item_IsPreparsed {#input_item_IsPreparsed}

```c
VLC_API bool input_item_IsPreparsed( input_item_t *p_i );
```

### 描述
该函数用于检查给定的输入项是否已经过预解析。预解析是指在播放之前对媒体文件进行的一些初步分析，例如获取元数据、检查格式等。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_i`  | `input_item_t *` | 指向要检查的输入项的指针。 |

### 函数返回值
- `true`：如果输入项已经过预解析。
- `false`：如果输入项尚未预解析。
## input_item_IsArtFetched {#input_item_IsArtFetched}

```c
VLC_API bool input_item_IsArtFetched( input_item_t *p_i );
```

### 描述
该函数用于检查给定的输入项（`input_item_t`）是否已经获取了艺术封面（art）。如果艺术封面已经被获取，函数返回 `true`；否则返回 `false`。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_i`  | `input_item_t*` | 指向要检查的输入项的指针。 |

### 函数返回值
- **`true`**: 如果输入项的艺术封面已经被获取。
- **`false`**: 如果输入项的艺术封面尚未被获取。
## free {#free}

```c
void free(void *psz_meta);
```

### 描述
`free` 函数用于释放先前通过 `malloc`、`calloc`、`realloc` 等函数分配的内存空间。调用 `free` 后，指向该内存的指针将变为无效，不应再使用。

### 函数参数说明

| 参数名    | 类型      | 描述                                                                 |
|-----------|-----------|--------------------------------------------------------------------------|
| `psz_meta`| `void *`  | 指向要释放的内存块的指针。该指针必须是先前通过 `malloc` 等函数分配的内存。|

### 函数返回值
`free` 函数没有返回值。
## input_item_GetMeta 

```c
const char *input_item_GetMeta( input_item_t *p_item, vlc_meta_type_t meta_type );
```

### 描述
该函数用于从 `input_item_t` 对象中获取指定类型的元数据。元数据类型由 `vlc_meta_type_t` 定义。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_item`     | `input_item_t *`    | 指向 `input_item_t` 对象的指针，表示要从中获取元数据的输入项。       |
| `meta_type`  | `vlc_meta_type_t`   | 表示要获取的元数据类型，例如 `vlc_meta_ESNowPlaying`。               |

### 函数返回值
- 如果成功获取元数据，返回指向元数据字符串的指针。
- 如果指定的元数据类型不存在或未设置，返回 `NULL`。
## input_item_SetMeta 

```c
void input_item_SetMeta(input_item_t *p_input, vlc_meta_t name, const char *val);
```

### 描述
该函数用于设置 `input_item_t` 对象的元数据。元数据可以是标题、艺术家、专辑等信息。通过指定 `vlc_meta_t` 类型的 `name` 参数，可以设置不同类型的元数据。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_input` | `input_item_t *` | 指向 `input_item_t` 对象的指针，表示要设置元数据的输入项。 |
| `name` | `vlc_meta_t` | 表示要设置的元数据类型，例如 `vlc_meta_Title` 表示标题，`vlc_meta_Artist` 表示艺术家。 |
| `val` | `const char *` | 指向要设置的元数据字符串的指针。 |

### 函数返回值
该函数没有返回值（`void`）。
## input_item_GetMeta 

```c
char *input_item_GetMeta(input_item_t *p_input, vlc_meta_t name);
```

### 描述
该函数用于从输入项中获取指定元数据的值。元数据可以是标题、艺术家、专辑等信息。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| `p_input` | `input_item_t*` | 指向输入项的指针，表示要从中获取元数据的输入项。 |
| `name`    | `vlc_meta_t`    | 表示要获取的元数据类型，如 `vlc_meta_Title` 表示标题。 |

### 函数返回值
- 如果成功获取元数据，返回一个指向元数据值的 `char*` 指针。
- 如果指定的元数据不存在或获取失败，返回 `NULL`。
## input_item_DelInfo {#input_item_DelInfo}

```c
VLC_API int input_item_DelInfo( input_item_t *p_i, const char *psz_cat, const char *psz_name );
```

### 描述
该函数用于从输入项中删除指定的信息。信息由类别和名称唯一标识。如果成功删除信息，函数将返回0；如果未找到指定的信息，则返回-1。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| `p_i`     | `input_item_t*` | 指向要删除信息的输入项的指针。                                           |
| `psz_cat` | `const char*`  | 信息的类别字符串。用于标识信息的类别。                                   |
| `psz_name`| `const char*`  | 信息的名称字符串。用于标识特定类别的信息。                               |

### 函数返回值

- **0**: 成功删除指定的信息。
- **-1**: 未找到指定的信息。
## input_item_ReplaceInfos {#input_item_ReplaceInfos}

```c
VLC_API void input_item_ReplaceInfos( input_item_t *p_item, info_category_t *p_cat );
```

### 函数描述
该函数用于替换输入项（`input_item_t`）中的信息类别（`info_category_t`）。它会将指定的信息类别替换为新的信息类别，并更新输入项的相关信息。

### 函数参数说明

| 参数名       | 类型              | 描述                                                                 |
|--------------|-------------------|--------------------------------------------------------------------------|
| `p_item`     | `input_item_t *`  | 指向要替换信息类别的输入项的指针。                                       |
| `p_cat`      | `info_category_t *` | 指向要替换的新信息类别的指针。如果为 `NULL`，则表示删除所有信息类别。 |

### 函数返回值
该函数没有返回值。
## input_item_MergeInfos {#input_item_MergeInfos}

```c
VLC_API void input_item_MergeInfos( input_item_t *p_item, info_category_t *p_cat );
```

### 描述
该函数用于将指定的信息类别合并到输入项中。

### 函数参数说明

| 参数名       | 类型            | 描述                                                                 |
|--------------|-----------------|----------------------------------------------------------------------|
| `p_item`     | `input_item_t*` | 指向要合并信息的输入项的指针。                                       |
| `p_cat`      | `info_category_t*` | 指向要合并的信息类别的指针。                                         |

### 函数返回值
该函数没有返回值。
## input_item_Release {#input_item_Release}

```c
VLC_API void input_item_Release(input_item_t *);
```

### 函数描述
释放一个输入项，即减少其引用计数器。

### 函数参数说明

| 参数名         | 类型          | 描述                 |
|----------------|---------------|----------------------|
| `input_item_t` | `input_item_t*` | 指向要释放的输入项的指针 |

### 函数返回值
该函数没有返回值。
## libvlc_MetaRequest {#libvlc_MetaRequest}

```c
VLC_API int libvlc_MetaRequest(libvlc_int_t *p_libvlc, input_item_t *p_item,
                               input_item_meta_request_option_t i_options);
```

### 描述
该函数用于请求输入项的元数据。它允许用户指定请求的选项，并根据这些选项获取输入项的元数据。

### 函数参数说明

| 参数名       | 类型                                      | 描述                                                                 |
|--------------|-------------------------------------------|----------------------------------------------------------------------|
| `p_libvlc`   | `libvlc_int_t *`                          | 指向 `libvlc_int_t` 结构的指针，表示 VLC 的内部实例。                |
| `p_item`     | `input_item_t *`                          | 指向 `input_item_t` 结构的指针，表示要请求元数据的输入项。           |
| `i_options`  | `input_item_meta_request_option_t`        | 请求元数据的选项，指定如何处理元数据请求。                           |

### 函数返回值

- **返回值类型**: `int`
- **返回值说明**:
  - `0`: 函数成功执行，元数据请求已成功处理。
  - `非0`: 函数执行失败，可能由于参数错误或其他原因导致元数据请求未能成功处理。
## libvlc_ArtRequest {#libvlc_ArtRequest}

```c
VLC_API int libvlc_ArtRequest(libvlc_int_t *p_libvlc, input_item_t *p_item,
                              input_item_meta_request_option_t i_options);
```

### 描述
该函数用于请求获取媒体项的艺术封面（如专辑封面）。它通过指定的选项来请求封面，并返回请求的结果。

### 函数参数说明

| 参数名       | 类型                                | 描述                                                                 |
|--------------|-------------------------------------|--------------------------------------------------------------------------|
| `p_libvlc`   | `libvlc_int_t *`                    | 指向 `libvlc_int_t` 结构的指针，表示 VLC 的内部实例。                   |
| `p_item`     | `input_item_t *`                    | 指向 `input_item_t` 结构的指针，表示要获取封面的媒体项。               |
| `i_options`  | `input_item_meta_request_option_t`  | 请求选项，指定如何获取封面。例如，是否强制重新获取封面或使用缓存等。 |

### 函数返回值

- **返回值为 `0`**：表示请求成功。
- **返回值为负数**：表示请求失败，具体错误码取决于实现。
## input_item_t 

### 函数定义
```c
struct info_t
{
    char *psz_name;            /**< Name of this info */
    char *psz_value;           /**< Value of the info */
};
```

### 描述
`input_item_t` 结构体描述了一个输入项，并用于生成 `input_thread_t` 对象。

### 参数说明
| 参数名    | 类型    | 描述               |
|-----------|---------|--------------------|
| psz_name  | char*   | 此信息的名称       |
| psz_value | char*   | 此信息的值         |

### 返回值
该结构体没有返回值。
## info_category_t {#info_category_t}

```c
struct info_category_t
{
    char   *psz_name;      /**< Name of this category */
    int    i_infos;        /**< Number of infos in the category */
    struct info_t **pp_infos;     /**< Pointer to an array of infos */
};
```

### 描述
`info_category_t` 结构体用于表示一个信息类别。每个类别包含一个名称、该类别中的信息数量以及指向信息数组的指针。

### 成员变量说明

| 成员变量 | 类型 | 描述 |
|----------|------|------|
| `psz_name` | `char *` | 该类别的名称 |
| `i_infos` | `int` | 该类别中的信息数量 |
| `pp_infos` | `struct info_t **` | 指向信息数组的指针 |

### 返回值
该结构体没有返回值，因为它是一个定义结构体。
## input_item_t 

```c
struct input_item_t
{
    int        i_id;                 /**< Identifier of the item */
    char       *psz_name;            /**< text describing this item */
    char       *psz_uri;             /**< mrl of this item */
    int        i_options;            /**< Number of input options */
    char       **ppsz_options;       /**< Array of input options */
    uint8_t    *optflagv;            /**< Some flags of input options */
    unsigned   optflagc;
    mtime_t    i_duration;           /**< Duration in microseconds */
    int        i_categories;         /**< Number of info categories */
    info_category_t **pp_categories; /**< Pointer to the first info category */
    int         i_es;                /**< Number of es format descriptions */
    es_format_t **es;                /**< Es formats */
    input_stats_t *p_stats;          /**< Statistics */
    int           i_nb_played;       /**< Number of times played */
    vlc_meta_t *p_meta;
    int         i_epg;               /**< Number of EPG entries */
    vlc_epg_t   **pp_epg;            /**< EPG entries */
    vlc_event_manager_t event_manager;
    vlc_mutex_t lock;                 /**< Lock for the item */
    uint8_t     i_type;              /**< Type (file, disc, ... see input_item_type_e) */
    bool        b_fixed_name;        /**< Can the interface change the name ?*/
    bool        b_error_when_reading;/**< Error When Reading */
};
```

### 描述
`input_item_t` 结构体用于描述一个输入项（item），通常用于媒体播放器中。它包含了与该输入项相关的各种信息，如标识符、名称、URI、选项、持续时间、统计信息、元数据、EPG（电子节目指南）信息等。

### 成员变量说明

| 成员变量 | 类型 | 描述 |
|----------|------|------|
| `i_id` | `int` | 输入项的标识符 |
| `psz_name` | `char*` | 描述该输入项的文本 |
| `psz_uri` | `char*` | 该输入项的MRL（媒体资源定位符） |
| `i_options` | `int` | 输入选项的数量 |
| `ppsz_options` | `char**` | 输入选项的数组 |
| `optflagv` | `uint8_t*` | 输入选项的标志 |
| `optflagc` | `unsigned` | 标志的数量 |
| `i_duration` | `mtime_t` | 持续时间，以微秒为单位 |
| `i_categories` | `int` | 信息类别的数量 |
| `pp_categories` | `info_category_t**` | 指向第一个信息类别的指针 |
| `i_es` | `int` | ES（编码流）格式的描述数量 |
| `es` | `es_format_t**` | ES格式的指针数组 |
| `p_stats` | `input_stats_t*` | 统计信息 |
| `i_nb_played` | `int` | 播放次数 |
| `p_meta` | `vlc_meta_t*` | 元数据 |
| `i_epg` | `int` | EPG条目的数量 |
| `pp_epg` | `vlc_epg_t**` | EPG条目的指针数组 |
| `event_manager` | `vlc_event_manager_t` | 事件管理器 |
| `lock` | `vlc_mutex_t` | 用于该输入项的锁 |
| `i_type` | `uint8_t` | 类型（文件、光盘等，参见 `input_item_type_e`） |
| `b_fixed_name` | `bool` | 接口是否可以更改名称 |
| `b_error_when_reading` | `bool` | 读取时是否发生错误 |

### 返回值
该结构体本身没有返回值，它是一个用于存储输入项信息的容器。
## input_item_node_t {#input_item_node_t}

```c
struct input_item_node_t {
    input_item_t *p_item;
    int i_children;
    input_item_node_t **pp_children;
    input_item_node_t *p_parent;
};
```

### 描述
`input_item_node_t` 结构体用于表示输入项的节点。每个节点包含一个输入项 (`p_item`)，以及该节点的子节点数量 (`i_children`) 和子节点指针数组 (`pp_children`)。此外，该结构体还包含一个指向父节点的指针 (`p_parent`)。

### 成员说明

| 成员变量      | 类型                  | 描述                                                                 |
|---------------|-----------------------|--------------------------------------------------------------------------|
| `p_item`      | `input_item_t *`      | 指向当前节点的输入项的指针。                                             |
| `i_children`  | `int`                 | 当前节点的子节点数量。                                                   |
| `pp_children` | `input_item_node_t **`| 指向子节点指针数组的指针，数组中的每个元素都是一个指向子节点的指针。     |
| `p_parent`    | `input_item_node_t *` | 指向当前节点的父节点的指针。如果当前节点是根节点，则该指针为 `NULL`。    |

### 返回值
该结构体没有返回值，因为它是一个定义，而不是一个函数。
## input_stats_t {#input_stats_t}

```c
struct input_stats_t
{
    vlc_mutex_t         lock;

    /* Input */
    int64_t i_read_packets;
    int64_t i_read_bytes;
    float f_input_bitrate;
    float f_average_input_bitrate;

    /* Demux */
    int64_t i_demux_read_packets;
    int64_t i_demux_read_bytes;
    float f_demux_bitrate;
    float f_average_demux_bitrate;
    int64_t i_demux_corrupted;
    int64_t i_demux_discontinuity;

    /* Decoders */
    int64_t i_decoded_audio;
    int64_t i_decoded_video;

    /* Vout */
    int64_t i_displayed_pictures;
    int64_t i_lost_pictures;

    /* Sout */
    int64_t i_sent_packets;
    int64_t i_sent_bytes;
    float f_send_bitrate;

    /* Aout */
    int64_t i_played_abuffers;
    int64_t i_lost_abuffers;
};
```

### 描述
`input_stats_t` 结构体用于存储输入流的统计信息。它包含了输入、解复用、解码、视频输出、流输出和音频输出的各种统计数据。

### 结构体成员说明

| 成员名称                  | 类型       | 描述                                                                 |
|---------------------------|------------|--------------------------------------------------------------------------|
| `lock`                    | `vlc_mutex_t` | 用于保护结构体数据的互斥锁。                                             |
| `i_read_packets`          | `int64_t`  | 读取的数据包总数。                                                       |
| `i_read_bytes`            | `int64_t`  | 读取的字节总数。                                                         |
| `f_input_bitrate`         | `float`    | 当前输入比特率。                                                         |
| `f_average_input_bitrate` | `float`    | 平均输入比特率。                                                         |
| `i_demux_read_packets`    | `int64_t`  | 解复用器读取的数据包总数。                                               |
| `i_demux_read_bytes`      | `int64_t`  | 解复用器读取的字节总数。                                                 |
| `f_demux_bitrate`         | `float`    | 当前解复用比特率。                                                       |
| `f_average_demux_bitrate` | `float`    | 平均解复用比特率。                                                       |
| `i_demux_corrupted`       | `int64_t`  | 解复用过程中检测到的损坏数据包总数。                                     |
| `i_demux_discontinuity`   | `int64_t`  | 解复用过程中检测到的数据不连续总数。                                     |
| `i_decoded_audio`         | `int64_t`  | 解码的音频帧总数。                                                       |
| `i_decoded_video`         | `int64_t`  | 解码的视频帧总数。                                                       |
| `i_displayed_pictures`    | `int64_t`  | 显示的图片总数。                                                         |
| `i_lost_pictures`         | `int64_t`  | 丢失的图片总数。                                                         |
| `i_sent_packets`          | `int64_t`  | 发送的数据包总数。                                                       |
| `i_sent_bytes`            | `int64_t`  | 发送的字节总数。                                                         |
| `f_send_bitrate`          | `float`    | 当前发送比特率。                                                         |
| `i_played_abuffers`       | `int64_t`  | 播放的音频缓冲区总数。                                                   |
| `i_lost_abuffers`         | `int64_t`  | 丢失的音频缓冲区总数。                                                   |

### 返回值
该结构体没有返回值，它仅用于存储和传递统计信息。
