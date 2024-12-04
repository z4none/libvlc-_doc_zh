## libvlc_media_library_new {#libvlc_media_library_new}

```c
LIBVLC_API libvlc_media_library_t *
    libvlc_media_library_new( libvlc_instance_t * p_instance );
```

### 描述
创建一个新的媒体库对象。

### 函数参数说明

| 参数名       | 类型                  | 描述                                                         |
|--------------|-----------------------|--------------------------------------------------------------|
| `p_instance` | `libvlc_instance_t *` | 指向 `libvlc` 实例的指针，用于创建新的媒体库对象。           |

### 函数返回值
- 成功时返回一个新的 `libvlc_media_library_t` 对象。
- 如果发生错误，返回 `NULL`。
## libvlc_media_library_release {#libvlc_media_library_release}

```c
LIBVLC_API void
libvlc_media_library_release( libvlc_media_library_t * p_mlib );
```

### 描述
释放媒体库对象。此函数会减少媒体库对象的引用计数。如果引用计数达到0，则该对象将被释放。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mlib` | `libvlc_media_library_t *` | 媒体库对象指针 |

### 函数返回值
该函数没有返回值。
## libvlc_media_library_retain {#libvlc_media_library_retain}

```c
LIBVLC_API void libvlc_media_library_retain( libvlc_media_library_t * p_mlib );
```

### 描述
保留对媒体库对象的引用。此函数将增加该对象的引用计数。使用 `libvlc_media_library_release()` 来减少引用计数。

### 函数参数说明

| 参数名   | 类型                      | 描述                   |
|----------|---------------------------|------------------------|
| `p_mlib` | `libvlc_media_library_t *` | 媒体库对象的指针       |

### 函数返回值
该函数没有返回值。
## libvlc_media_library_load {#libvlc_media_library_load}

```c
LIBVLC_API int libvlc_media_library_load( libvlc_media_library_t * p_mlib );
```

### 描述
加载媒体库。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mlib` | `libvlc_media_library_t *` | 媒体库对象 |

### 函数返回值
- `0`：成功
- `-1`：错误
## libvlc_media_library_media_list {#libvlc_media_library_media_list}

```c
LIBVLC_API libvlc_media_list_t *
    libvlc_media_library_media_list( libvlc_media_library_t * p_mlib );
```

### 描述
获取媒体库的子项列表。

### 函数参数说明

| 参数名       | 类型                        | 描述               |
|--------------|-----------------------------|--------------------|
| `p_mlib`     | `libvlc_media_library_t *`   | 媒体库对象         |

### 函数返回值
返回媒体库的子项列表。
