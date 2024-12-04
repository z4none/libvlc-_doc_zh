## addon_entry_Release {#addon_entry_Release}

```c
VLC_API void addon_entry_Release(addon_entry_t *);
```

### 描述
该函数用于释放 `addon_entry_t` 结构体实例的引用。每次调用此函数时，引用计数会减少。当引用计数达到零时，该结构体实例将被释放。

### 函数参数说明

| 参数名          | 类型            | 描述                                                                 |
|-----------------|-----------------|----------------------------------------------------------------------|
| `addon_entry_t` | `addon_entry_t*` | 指向要释放的 `addon_entry_t` 结构体实例的指针。该结构体实例的引用计数将减少。 |

### 函数返回值
该函数没有返回值。
## addons_manager_Delete {#addons_manager_Delete}

```c
VLC_API void addons_manager_Delete( addons_manager_t *p_manager );
```

### 描述
该函数用于删除一个插件管理器实例。调用此函数后，插件管理器及其相关资源将被释放。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_manager`  | `addons_manager_t*` | 指向要删除的插件管理器实例的指针。该指针在函数调用后将不再有效。 |

### 函数返回值
该函数没有返回值。
## addons_manager_LoadCatalog {#addons_manager_LoadCatalog}

```c
VLC_API int addons_manager_LoadCatalog( addons_manager_t * );
```

### 描述
该函数用于加载当前已安装、可用且可管理的插件（默认使用“插件存储”模块）。

### 函数参数说明

| 参数名               | 类型                | 描述                                                                 |
|----------------------|---------------------|----------------------------------------------------------------------|
| `addons_manager_t *` | `addons_manager_t *` | 指向 `addons_manager_t` 结构的指针，表示插件管理器。                |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - `0`: 成功加载插件目录。
  - `非0值`: 加载插件目录失败。
## addons_manager_Gather {#addons_manager_Gather}

```c
VLC_API void addons_manager_Gather( addons_manager_t *p_manager, const char *psz_uri );
```

### 描述
从仓库中收集插件信息（默认使用 "addons finder" 模块）。如果 `psz_uri` 不为 `NULL`，则仅从指定的包中收集信息。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_manager`  | `addons_manager_t*` | 指向插件管理器对象的指针，用于管理插件的收集和处理。                 |
| `psz_uri`    | `const char*`       | 指向 URI 字符串的指针，指定要从哪个包中收集插件信息。如果为 `NULL`，则从默认仓库中收集。 |

### 函数返回值
该函数没有返回值。
## addons_manager_Install {#addons_manager_Install}

```c
VLC_API int addons_manager_Install( addons_manager_t *p_manager, const addon_uuid_t uuid );
```

### 函数描述
该函数用于安装或移除由其 UUID 标识的插件。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_manager`  | `addons_manager_t*` | 指向 `addons_manager_t` 结构的指针，表示插件管理器。                |
| `uuid`       | `const addon_uuid_t` | 插件的 UUID，用于唯一标识要安装或移除的插件。                        |

### 函数返回值
- `0`：表示操作成功。
- `非0`：表示操作失败，返回值可能指示具体的错误类型。
## addons_manager_Remove {#addons_manager_Remove}

```c
VLC_API int addons_manager_Remove( addons_manager_t *p_manager, const addon_uuid_t uuid );
```

### 描述
该函数用于从管理器中移除指定的插件。它接收一个插件管理器对象和一个插件的UUID，并尝试移除该插件。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_manager`  | `addons_manager_t*` | 指向插件管理器对象的指针，表示要操作的管理器。                       |
| `uuid`       | `const addon_uuid_t`| 要移除的插件的UUID，表示要移除的插件的唯一标识符。                   |

### 函数返回值

- `0`：成功移除插件。
- `-1`：移除插件失败，可能是因为插件不存在或管理器无法执行移除操作。
## addons_uuid_read {#addons_uuid_read}

```c
static inline bool addons_uuid_read(const char *psz_uuid, addon_uuid_t *p_uuid)
```

### 函数描述
该函数用于将字符串格式的UUID转换为二进制格式的UUID。UUID字符串必须符合特定的格式，并且长度必须为36个字符（包括4个连字符）。如果输入的字符串不符合要求，函数将返回`false`。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| psz_uuid  | `const char *` | 指向字符串格式的UUID的指针，UUID字符串必须符合特定的格式，长度为36个字符。 |
| p_uuid    | `addon_uuid_t *` | 指向存储二进制格式UUID的结构的指针。                                     |

### 函数返回值
- **`true`**: 如果UUID字符串成功转换为二进制格式。
- **`false`**: 如果输入的UUID字符串为`NULL`，或者长度小于36个字符，或者格式不正确。
## uuid_to_string {#uuid_to_string}

```c
void uuid_to_string(char *psz, const unsigned char *p_uuid);
```

### 描述
该函数将一个 UUID（通用唯一识别码）转换为字符串格式。UUID 是一个 128 位的值，通常表示为 32 个十六进制数字，分为 5 组，用连字符分隔。转换后的字符串格式为：`xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`。

### 函数参数说明

| 参数名   | 类型                | 描述                                                                 |
|----------|---------------------|----------------------------------------------------------------------|
| `psz`    | `char *`             | 指向存储转换后字符串的缓冲区的指针。缓冲区大小应至少为 `ADDON_UUID_SIZE + 1` 字节。 |
| `p_uuid` | `const unsigned char *` | 指向 UUID 数据的指针，UUID 数据为 128 位（16 字节）。                      |

### 函数返回值
该函数没有返回值（`void`）。
## addon_entry_t {#addon_entry_t}

```c
struct addon_entry_t
{
    vlc_mutex_t lock;

    addon_type_t e_type;
    addon_state_t e_state;
    addon_flags_t e_flags;

    /* data describing addon */
    addon_uuid_t uuid;
    char *psz_name;
    char *psz_summary;
    char *psz_description;
    char *psz_author;
    char *psz_source_uri; /* webpage, ... */
    char *psz_image_uri;
    char *psz_image_data; /* base64, png */
    char *psz_version;

    /* stats */
    long int i_downloads;
    int i_score; /* score 0..5 in hundredth */

    /* Lister */
    char *psz_source_module;

    /* files list */
    char *psz_archive_uri; /* Archive */
    DECL_ARRAY(addon_file_t *) files;

    /* custom data storage (if needed by module/source) */
    void * p_custom;
};
```

### 描述
`addon_entry_t` 结构体用于描述一个插件（addon）的详细信息。它包含了插件的各种属性，如类型、状态、标志、UUID、名称、描述、作者、版本、下载次数、评分等。此外，它还包含了插件的来源模块、文件列表以及自定义数据存储区域。

### 字段说明

| 字段名            | 类型                  | 描述                                                                 |
|-------------------|-----------------------|--------------------------------------------------------------------------|
| `lock`            | `vlc_mutex_t`         | 用于同步访问的互斥锁。                                                   |
| `e_type`          | `addon_type_t`        | 插件的类型。                                                             |
| `e_state`         | `addon_state_t`       | 插件的状态。                                                             |
| `e_flags`         | `addon_flags_t`       | 插件的标志。                                                             |
| `uuid`            | `addon_uuid_t`        | 插件的唯一标识符（UUID）。                                               |
| `psz_name`        | `char *`              | 插件的名称。                                                             |
| `psz_summary`     | `char *`              | 插件的简短描述。                                                         |
| `psz_description` | `char *`              | 插件的详细描述。                                                         |
| `psz_author`      | `char *`              | 插件的作者。                                                             |
| `psz_source_uri`  | `char *`              | 插件的来源URI（网页等）。                                                |
| `psz_image_uri`   | `char *`              | 插件图像的URI。                                                          |
| `psz_image_data`  | `char *`              | 插件图像数据的Base64编码（PNG格式）。                                    |
| `psz_version`     | `char *`              | 插件的版本号。                                                           |
| `i_downloads`     | `long int`            | 插件的下载次数。                                                         |
| `i_score`         | `int`                 | 插件的评分（0到5分，以百分之一为单位）。                                 |
| `psz_source_module` | `char *`            | 插件的来源模块名称。                                                     |
| `psz_archive_uri` | `char *`              | 插件的归档文件URI。                                                      |
| `files`           | `DECL_ARRAY(addon_file_t *)` | 插件文件列表。                                                         |
| `p_custom`        | `void *`              | 自定义数据存储区域（如果模块/来源需要）。                               |

### 返回值
该结构体没有返回值，因为它是一个定义，而不是一个函数。
## addons_finder_t {#addons_finder_t}

```c
struct addons_finder_t
{
    VLC_COMMON_MEMBERS

    int ( * pf_find )( addons_finder_t * );
    int ( * pf_retrieve )( addons_finder_t *, addon_entry_t * );
    DECL_ARRAY( addon_entry_t * ) entries;
    char *psz_uri;

    addons_finder_sys_t *p_sys;
};
```

### 描述
`addons_finder_t` 结构体用于定义一个插件查找器。它包含了查找和检索插件的函数指针，以及存储插件条目的数组和相关系统数据。

### 成员说明

| 成员名称       | 类型                        | 描述                                                                 |
|----------------|-----------------------------|----------------------------------------------------------------------|
| `pf_find`      | `int ( * )( addons_finder_t * )` | 指向查找插件的函数的指针。该函数用于查找可用的插件。                   |
| `pf_retrieve`  | `int ( * )( addons_finder_t *, addon_entry_t * )` | 指向检索插件的函数的指针。该函数用于检索特定的插件条目。               |
| `entries`      | `DECL_ARRAY( addon_entry_t * )` | 存储插件条目的数组。                                                   |
| `psz_uri`      | `char *`                     | 指向插件源 URI 的字符串指针。                                         |
| `p_sys`        | `addons_finder_sys_t *`      | 指向插件查找器系统数据的指针。                                         |

### 返回值
该结构体本身不返回值，但其中的函数指针成员函数可能会返回以下值：

- `pf_find` 函数返回值：
  - `0`：成功查找插件。
  - `非0`：查找插件失败。

- `pf_retrieve` 函数返回值：
  - `0`：成功检索插件条目。
  - `非0`：检索插件条目失败。
## addons_storage_t {#addons_storage_t}

```c
struct addons_storage_t
{
    VLC_COMMON_MEMBERS

    int ( * pf_install )( addons_storage_t *, addon_entry_t * );
    int ( * pf_remove )( addons_storage_t *, addon_entry_t * );
    int ( * pf_catalog ) ( addons_storage_t *, addon_entry_t **, int );

    addons_storage_sys_t *p_sys;
};
```

### 描述
`addons_storage_t` 结构体定义了用于管理插件存储的接口。它包含了一些函数指针，用于安装、移除和获取插件目录。此外，它还包含了一个指向系统特定数据的指针。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `pf_install` | `int ( * )( addons_storage_t *, addon_entry_t * )` | 安装插件的函数指针 |
| `pf_remove` | `int ( * )( addons_storage_t *, addon_entry_t * )` | 移除插件的函数指针 |
| `pf_catalog` | `int ( * )( addons_storage_t *, addon_entry_t **, int )` | 获取插件目录的函数指针 |
| `p_sys` | `addons_storage_sys_t *` | 指向系统特定数据的指针 |

### 返回值
该结构体本身不返回值，但其包含的函数指针可能返回以下值：

- `pf_install` 和 `pf_remove` 可能返回：
  - `0`：操作成功
  - `非0`：操作失败

- `pf_catalog` 可能返回：
  - `0`：操作成功
  - `非0`：操作失败
## addons_manager_t {#addons_manager_t}

```c
struct addons_manager_t
{
    vlc_event_manager_t * p_event_manager;
    addons_manager_private_t *p_priv;
};
```

### 描述
`addons_manager_t` 结构体用于管理插件（addons）。它包含一个事件管理器和一个私有数据指针。

### 成员说明

| 成员名称               | 类型                        | 描述                                                                 |
|----------------------|-----------------------------|--------------------------------------------------------------------|
| `p_event_manager`    | `vlc_event_manager_t *`     | 指向事件管理器的指针，用于处理与插件管理相关的事件。                         |
| `p_priv`             | `addons_manager_private_t *`| 指向私有数据的指针，通常用于存储插件管理器的内部状态和数据。                |

### 返回值
该结构体本身不返回值，它是一个定义结构体类型的声明。
