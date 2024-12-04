## libvlc_media_list_new {#libvlc_media_list_new}

```c
LIBVLC_API libvlc_media_list_t *
    libvlc_media_list_new( libvlc_instance_t *p_instance );
```

### 描述
创建一个空的媒体列表。

### 函数参数说明

| 参数名        | 类型                  | 描述                     |
|---------------|-----------------------|--------------------------|
| `p_instance`  | `libvlc_instance_t *` | libvlc 实例指针          |

### 函数返回值
- **成功**：返回一个空的媒体列表。
- **失败**：返回 `NULL`。
## libvlc_media_list_release {#libvlc_media_list_release}

```c
LIBVLC_API void libvlc_media_list_release( libvlc_media_list_t *p_ml );
```

### 描述
释放通过 `libvlc_media_list_new()` 创建的媒体列表。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_ml` | `libvlc_media_list_t*` | 通过 `libvlc_media_list_new()` 创建的媒体列表 |

### 函数返回值
该函数没有返回值。
## libvlc_media_list_retain {#libvlc_media_list_retain}

```c
LIBVLC_API void libvlc_media_list_retain( libvlc_media_list_t *p_ml );
```

### 描述
保留对媒体列表的引用。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| p_ml   | libvlc_media_list_t* | 通过 `libvlc_media_list_new()` 创建的媒体列表 |

### 函数返回值
该函数没有返回值。
## libvlc_media_list_add_file_content {#libvlc_media_list_add_file_content}

```c
LIBVLC_DEPRECATED int libvlc_media_list_add_file_content( libvlc_media_list_t * p_ml, const char * psz_uri );
```

### 描述
该函数用于将文件内容添加到媒体列表中。它从指定的 URI 加载文件内容，并将其添加到给定的媒体列表中。

### 函数参数说明

| 参数名       | 类型                    | 描述                                                                 |
|--------------|-------------------------|----------------------------------------------------------------------|
| `p_ml`       | `libvlc_media_list_t *` | 指向要添加内容的媒体列表的指针。                                     |
| `psz_uri`    | `const char *`          | 指向包含要添加的文件内容的 URI 的字符串指针。                        |

### 函数返回值

- `0`：成功添加文件内容到媒体列表。
- `-1`：添加文件内容失败。
## libvlc_media_list_set_media {#libvlc_media_list_set_media}

```c
LIBVLC_API void
libvlc_media_list_set_media( libvlc_media_list_t *p_ml, libvlc_media_t *p_md );
```

### 描述
将媒体实例与此媒体列表实例关联。如果之前已经存在另一个媒体实例，它将被释放。在进入此函数时，不应持有 `libvlc_media_list_lock`。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_ml` | `libvlc_media_list_t*` | 一个媒体列表实例 |
| `p_md` | `libvlc_media_t*` | 要添加的媒体实例 |

### 函数返回值
该函数没有返回值。
## libvlc_media_list_media {#libvlc_media_list_media}

```c
LIBVLC_API libvlc_media_t *
    libvlc_media_list_media( libvlc_media_list_t *p_ml );
```

### 描述
从当前媒体列表实例中获取媒体实例。此操作将增加媒体实例的引用计数。进入此函数时，不应持有 `libvlc_media_list_lock`。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_ml` | `libvlc_media_list_t *` | 一个媒体列表实例 |

### 返回值
返回一个媒体实例。如果操作成功，返回的媒体实例的引用计数将增加；如果操作失败，返回 `NULL`。
## libvlc_media_list_add_media {#libvlc_media_list_add_media}

```c
LIBVLC_API int libvlc_media_list_add_media(libvlc_media_list_t *p_ml, libvlc_media_t *p_md);
```

### 描述
将媒体实例添加到媒体列表中。在进入此函数之前，应持有 `libvlc_media_list_lock`。

### 参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_ml` | `libvlc_media_list_t*` | 媒体列表实例 |
| `p_md` | `libvlc_media_t*` | 媒体实例 |

### 返回值
- `0`：成功
- `-1`：如果媒体列表是只读的
## libvlc_media_list_insert_media {#libvlc_media_list_insert_media}

```c
LIBVLC_API int libvlc_media_list_insert_media( libvlc_media_list_t *p_ml,
                                               libvlc_media_t *p_md, int i_pos );
```

### 描述
在媒体列表的指定位置插入一个媒体实例。在调用此函数之前，应持有 `libvlc_media_list_lock`。

### 参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_ml` | `libvlc_media_list_t *` | 媒体列表实例 |
| `p_md` | `libvlc_media_t *` | 媒体实例 |
| `i_pos` | `int` | 数组中的插入位置 |

### 返回值
- `0`：成功
- `-1`：如果媒体列表是只读的
## libvlc_media_list_remove_index {#libvlc_media_list_remove_index}

```c
LIBVLC_API int libvlc_media_list_remove_index( libvlc_media_list_t *p_ml, int i_pos );
```

### 描述
从媒体列表中的指定位置移除媒体实例。在进入此函数之前，应持有 `libvlc_media_list_lock`。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_ml` | `libvlc_media_list_t*` | 媒体列表实例 |
| `i_pos` | `int` | 数组中的位置，用于指定要移除的媒体实例 |

### 返回值
- `0`：成功移除媒体实例。
- `-1`：如果列表是只读的或未找到指定位置的媒体实例。
## libvlc_media_list_count {#libvlc_media_list_count}

```c
LIBVLC_API int libvlc_media_list_count( libvlc_media_list_t *p_ml );
```

### 描述
获取媒体列表项的数量。在调用此函数时，应持有 `libvlc_media_list_lock`。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_ml` | `libvlc_media_list_t *` | 一个媒体列表实例 |

### 返回值
返回媒体列表中的项数。
## libvlc_media_list_item_at_index {#libvlc_media_list_item_at_index}

```c
LIBVLC_API libvlc_media_t *
    libvlc_media_list_item_at_index( libvlc_media_list_t *p_ml, int i_pos );
```

### 描述
该函数用于在媒体列表中的指定位置获取媒体实例。在调用此函数之前，应持有 `libvlc_media_list_lock`。如果成功，`libvlc_media_retain()` 将被调用以增加媒体的引用计数。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_ml` | `libvlc_media_list_t *` | 媒体列表实例 |
| `i_pos` | `int` | 数组中的位置，用于插入媒体实例 |

### 返回值
- **成功**：返回指定位置 `i_pos` 处的媒体实例，并调用 `libvlc_media_retain()` 增加媒体的引用计数。
- **未找到**：返回 `NULL`。
## libvlc_media_list_index_of_item {#libvlc_media_list_index_of_item}

```c
LIBVLC_API int
    libvlc_media_list_index_of_item( libvlc_media_list_t *p_ml,
                                     libvlc_media_t *p_md );
```

### 描述
该函数用于在媒体列表中查找媒体实例的索引位置。请注意，该函数将返回第一个匹配的位置。在调用此函数之前，应持有 `libvlc_media_list_lock`。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_ml` | `libvlc_media_list_t *` | 媒体列表实例 |
| `p_md` | `libvlc_media_t *` | 媒体实例 |

### 返回值
- **返回值类型**: `int`
- **返回值说明**:
  - 如果找到媒体实例，返回其在媒体列表中的位置。
  - 如果未找到媒体实例，返回 `-1`。
## libvlc_media_list_is_readonly {#libvlc_media_list_is_readonly}

```c
LIBVLC_API int libvlc_media_list_is_readonly( libvlc_media_list_t * p_ml );
```

### 描述
此函数用于判断媒体列表是否对用户来说是只读的。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_ml` | `libvlc_media_list_t *` | 媒体列表实例 |

### 函数返回值
- `1`：媒体列表是只读的。
- `0`：媒体列表是可读写的。
## libvlc_media_list_lock {#libvlc_media_list_lock}

```c
LIBVLC_API void libvlc_media_list_lock( libvlc_media_list_t *p_ml );
```

### 描述
获取媒体列表项的锁。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_ml` | `libvlc_media_list_t *` | 媒体列表实例 |

### 函数返回值
该函数没有返回值。
## libvlc_media_list_unlock {#libvlc_media_list_unlock}

```c
LIBVLC_API void libvlc_media_list_unlock( libvlc_media_list_t *p_ml );
```

### 描述
释放媒体列表项的锁。在进入此函数之前，应持有 `libvlc_media_list_lock`。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_ml` | `libvlc_media_list_t *` | 一个媒体列表实例 |

### 函数返回值
该函数没有返回值。
## libvlc_media_list_event_manager {#libvlc_media_list_event_manager}

```c
LIBVLC_API libvlc_event_manager_t *
    libvlc_media_list_event_manager( libvlc_media_list_t *p_ml );
```

### 描述
从媒体列表实例中获取 `libvlc_event_manager`。`p_event_manager` 是不可变的，因此您不需要持有锁。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_ml` | `libvlc_media_list_t *` | 一个媒体列表实例 |

### 返回值
返回 `libvlc_event_manager_t` 指针，表示媒体列表的事件管理器。
