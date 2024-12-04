## vlc_meta_Delete {#vlc_meta_Delete}

```c
VLC_API void vlc_meta_Delete( vlc_meta_t *m );
```

### 描述
该函数用于删除一个 `vlc_meta_t` 结构体对象。调用此函数后，`vlc_meta_t` 结构体将被释放，不再有效。

### 函数参数说明

| 参数名 | 类型        | 描述                   |
|--------|-------------|------------------------|
| `m`    | `vlc_meta_t*` | 指向要删除的 `vlc_meta_t` 结构体的指针。 |

### 函数返回值
该函数没有返回值。
## vlc_meta_Set {#vlc_meta_Set}

```c
VLC_API void vlc_meta_Set( vlc_meta_t *p_meta, vlc_meta_type_t meta_type, const char *psz_val );
```

### 函数描述
该函数用于设置媒体元数据中的特定字段。它允许用户为指定的元数据类型设置一个字符串值。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_meta`     | `vlc_meta_t *`      | 指向要设置元数据的 `vlc_meta_t` 结构体的指针。                       |
| `meta_type`  | `vlc_meta_type_t`   | 要设置的元数据类型，例如 `VLC_META_TITLE`、`VLC_META_ARTIST` 等。    |
| `psz_val`    | `const char *`      | 要设置的字符串值，表示元数据的值。                                   |

### 函数返回值
该函数没有返回值 (`void`)。
## vlc_meta_Get {#vlc_meta_Get}

```c
VLC_API const char * vlc_meta_Get( const vlc_meta_t *p_meta, vlc_meta_type_t meta_type );
```

### 描述
该函数用于从 `vlc_meta_t` 结构体中获取指定类型的元数据。元数据类型由 `meta_type` 参数指定。

### 函数参数说明

| 参数名      | 类型                | 描述                                                                 |
|-------------|---------------------|----------------------------------------------------------------------|
| `p_meta`    | `const vlc_meta_t *` | 指向 `vlc_meta_t` 结构体的指针，表示要从中获取元数据的元数据对象。 |
| `meta_type` | `vlc_meta_type_t`    | 指定要获取的元数据类型。                                             |

### 函数返回值
- 如果成功获取元数据，返回指向元数据字符串的指针。
- 如果指定的元数据类型不存在或未设置，返回 `NULL`。
## vlc_meta_AddExtra {#vlc_meta_AddExtra}

```c
VLC_API void vlc_meta_AddExtra( vlc_meta_t *m, const char *psz_name, const char *psz_value );
```

### 函数描述
该函数用于向 `vlc_meta_t` 结构中添加额外的元数据。元数据可以包含媒体文件的附加信息，如评论、歌词等。

### 函数参数说明

| 参数名       | 类型          | 描述                                                                 |
|--------------|---------------|--------------------------------------------------------------------------|
| `m`          | `vlc_meta_t*` | 指向 `vlc_meta_t` 结构的指针，表示要添加元数据的媒体文件。         |
| `psz_name`   | `const char*` | 指向字符串的指针，表示要添加的元数据的名称。                         |
| `psz_value`  | `const char*` | 指向字符串的指针，表示要添加的元数据的值。                           |

### 函数返回值
该函数没有返回值。
## vlc_meta_GetExtra {#vlc_meta_GetExtra}

```c
VLC_API const char * vlc_meta_GetExtra( const vlc_meta_t *m, const char *psz_name );
```

### 描述
该函数用于从 `vlc_meta_t` 结构中获取指定名称的额外元数据。如果找到匹配的额外元数据，则返回其值；否则返回 `NULL`。

### 函数参数说明

| 参数名      | 类型              | 描述                                                                 |
|-------------|-------------------|--------------------------------------------------------------------------|
| `m`         | `const vlc_meta_t *` | 指向 `vlc_meta_t` 结构的指针，表示要从中获取额外元数据的元数据对象。 |
| `psz_name`  | `const char *`      | 指向字符串的指针，表示要获取的额外元数据的名称。                     |

### 函数返回值
- **返回值类型**: `const char *`
- **返回值说明**:
  - 如果找到指定名称的额外元数据，则返回该元数据的值（字符串）。
  - 如果没有找到指定名称的额外元数据，则返回 `NULL`。
## vlc_meta_GetExtraCount {#vlc_meta_GetExtraCount}

```c
VLC_API unsigned vlc_meta_GetExtraCount( const vlc_meta_t *m );
```

### 描述
该函数用于获取 `vlc_meta_t` 结构体中额外元数据的计数。`vlc_meta_t` 结构体通常用于存储媒体文件的元数据信息，例如标题、艺术家、专辑等。额外元数据是指除了标准元数据字段之外的其他自定义元数据。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `m` | `const vlc_meta_t*` | 指向 `vlc_meta_t` 结构体的指针，表示要查询的元数据对象。 |

### 函数返回值
该函数返回一个 `unsigned` 类型的值，表示 `vlc_meta_t` 结构体中额外元数据的计数。如果 `m` 为 `NULL`，则返回值为 `0`。
## vlc_meta_Merge {#vlc_meta_Merge}

```c
VLC_API void vlc_meta_Merge( vlc_meta_t *dst, const vlc_meta_t *src );
```

### 描述
该函数用于将源元数据 (`src`) 合并到目标元数据 (`dst`) 中。合并操作会将源元数据中的所有键值对添加到目标元数据中，如果目标元数据中已经存在相同的键，则不会覆盖。

### 函数参数说明

| 参数名 | 类型           | 描述                                                                 |
|--------|----------------|--------------------------------------------------------------------|
| dst    | vlc_meta_t*    | 目标元数据对象，合并后的结果将存储在此对象中。                       |
| src    | const vlc_meta_t* | 源元数据对象，其内容将被合并到目标元数据中。                         |

### 函数返回值
该函数没有返回值。
## vlc_meta_GetStatus {#vlc_meta_GetStatus}

```c
VLC_API int vlc_meta_GetStatus( vlc_meta_t *m );
```

### 描述
该函数用于获取元数据对象的状态。状态值表示元数据对象的当前状态，例如是否已更新或是否已读取。

### 函数参数说明

| 参数名 | 类型        | 描述                   |
|--------|-------------|------------------------|
| `m`    | `vlc_meta_t*` | 指向元数据对象的指针。 |

### 函数返回值
- 返回值为整数类型，表示元数据对象的状态。
- 具体的状态值含义可能由具体的实现定义，通常包括以下几种情况：
  - `0`：表示元数据对象处于默认状态或未更新状态。
  - `1`：表示元数据对象已更新或已读取。
  - 其他值：可能表示其他特定状态，具体含义需参考相关文档或实现。
## vlc_meta_SetStatus {#vlc_meta_SetStatus}

```c
VLC_API void vlc_meta_SetStatus( vlc_meta_t *m, int status );
```

### 描述
该函数用于设置元数据对象的状态。状态值可以是预定义的常量，用于指示元数据的当前状态。

### 函数参数说明

| 参数名 | 类型       | 描述                                                         |
|--------|------------|--------------------------------------------------------------|
| `m`    | `vlc_meta_t*` | 指向元数据对象的指针，该对象的状态将被设置。                  |
| `status` | `int`        | 要设置的状态值。可以是预定义的常量，用于指示元数据的当前状态。 |

### 函数返回值
该函数没有返回值。
## vlc_meta_TypeToLocalizedString {#vlc_meta_TypeToLocalizedString}

```c
VLC_API const char * vlc_meta_TypeToLocalizedString( vlc_meta_type_t meta_type );
```

### 函数描述
该函数返回一个本地化的字符串，描述给定的元数据类型。

### 函数参数说明

| 参数名      | 类型              | 描述                                                                 |
|-------------|-------------------|--------------------------------------------------------------------------|
| meta_type   | vlc_meta_type_t   | 需要转换为本地化字符串的元数据类型。 |

### 函数返回值
- 返回值类型：`const char *`
- 返回值说明：
  - 成功时，返回一个描述元数据类型的本地化字符串。
  - 如果输入的元数据类型无效，可能返回 `NULL` 或一个默认的错误字符串。
## input_item_WriteMeta {#input_item_WriteMeta}

```c
VLC_API int input_item_WriteMeta(vlc_object_t *p_this, input_item_t *p_item);
```

### 描述
该函数用于将输入项的元数据写入文件。它将元数据（如标题、艺术家、专辑等）写入与输入项关联的文件中。

### 函数参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|--------------------------------------------------------------------------|
| `p_this`  | `vlc_object_t *` | VLC 对象指针，通常是调用该函数的对象。                                     |
| `p_item`  | `input_item_t *` | 指向要写入元数据的输入项的指针。                                           |

### 函数返回值

- **返回值为 `0`**：表示元数据成功写入文件。
- **返回值为 `-1`**：表示写入元数据时发生错误。
