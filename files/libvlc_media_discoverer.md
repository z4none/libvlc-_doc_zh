## libvlc_media_discoverer_new_from_name {#libvlc_media_discoverer_new_from_name}

```c
LIBVLC_API libvlc_media_discoverer_t *
libvlc_media_discoverer_new_from_name( libvlc_instance_t * p_inst,
                                       const char * psz_name );
```

### 描述
该函数通过名称发现媒体服务。它根据提供的 `psz_name` 参数查找并返回一个媒体发现对象。如果发生错误，则返回 `NULL`。

### 参数说明

| 参数名       | 类型                    | 描述                                                                 |
|--------------|-------------------------|----------------------------------------------------------------------|
| `p_inst`     | `libvlc_instance_t *`   | libvlc 实例对象，表示当前的 libvlc 实例。                            |
| `psz_name`   | `const char *`          | 服务名称，用于指定要发现的媒体服务的名称。                           |

### 返回值
- **成功**：返回一个 `libvlc_media_discoverer_t` 类型的指针，表示媒体发现对象。
- **失败**：返回 `NULL`，表示在发现媒体服务时发生了错误。
## libvlc_media_discoverer_release {#libvlc_media_discoverer_release}

```c
LIBVLC_API void libvlc_media_discoverer_release(libvlc_media_discoverer_t *p_mdis);
```

### 描述
释放媒体发现对象。如果引用计数达到0，则该对象将被释放。

### 函数参数说明

| 参数名    | 类型                        | 描述                   |
|-----------|-----------------------------|------------------------|
| `p_mdis`  | `libvlc_media_discoverer_t*` | 媒体服务发现对象的指针 |

### 函数返回值
该函数没有返回值。
## libvlc_media_discoverer_localized_name {#libvlc_media_discoverer_localized_name}

```c
LIBVLC_API char * libvlc_media_discoverer_localized_name( libvlc_media_discoverer_t * p_mdis );
```

### 描述
获取媒体服务发现对象的本地化名称。

### 函数参数说明

| 参数名       | 类型                        | 描述                 |
|--------------|-----------------------------|----------------------|
| `p_mdis`     | `libvlc_media_discoverer_t*` | 媒体发现对象的指针   |

### 函数返回值
返回媒体服务发现对象的本地化名称。如果操作失败，返回值可能为 `NULL`。
## libvlc_media_discoverer_media_list {#libvlc_media_discoverer_media_list}

```c
LIBVLC_API libvlc_media_list_t * libvlc_media_discoverer_media_list( libvlc_media_discoverer_t * p_mdis );
```

### 描述
获取媒体服务发现媒体列表。

### 函数参数说明

| 参数名       | 类型                        | 描述                       |
|--------------|-----------------------------|----------------------------|
| `p_mdis`     | `libvlc_media_discoverer_t*` | 媒体服务发现对象           |

### 函数返回值
返回媒体项的列表。
## libvlc_media_discoverer_event_manager {#libvlc_media_discoverer_event_manager}

```c
LIBVLC_API libvlc_event_manager_t *
libvlc_media_discoverer_event_manager( libvlc_media_discoverer_t * p_mdis );
```

### 函数描述
从媒体服务发现对象中获取事件管理器。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mdis` | `libvlc_media_discoverer_t *` | 媒体服务发现对象 |

### 函数返回值
返回事件管理器对象。
## libvlc_media_discoverer_is_running {#libvlc_media_discoverer_is_running}

```c
LIBVLC_API int libvlc_media_discoverer_is_running( libvlc_media_discoverer_t * p_mdis );
```

### 函数描述
该函数用于查询媒体服务发现对象是否正在运行。

### 函数参数说明
| 参数名       | 类型                        | 描述                   |
|--------------|-----------------------------|------------------------|
| `p_mdis`     | `libvlc_media_discoverer_t*` | 媒体服务发现对象的指针 |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - `1` 表示媒体服务发现对象正在运行。
  - `0` 表示媒体服务发现对象未在运行。
