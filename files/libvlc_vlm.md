## libvlc_vlm_release {#libvlc_vlm_release}

```c
LIBVLC_API void libvlc_vlm_release( libvlc_instance_t *p_instance );
```

### 描述
释放与给定 `libvlc_instance_t` 相关的 `vlm` 实例。

### 参数说明

| 参数名        | 类型                  | 描述                 |
|---------------|-----------------------|----------------------|
| `p_instance`  | `libvlc_instance_t*`  | 要释放的 `vlm` 实例的 `libvlc_instance_t` 指针。 |

### 返回值
该函数没有返回值。
## libvlc_vlm_add_broadcast {#libvlc_vlm_add_broadcast}

```c
LIBVLC_API int libvlc_vlm_add_broadcast( libvlc_instance_t *p_instance,
                                         const char *psz_name, const char *psz_input,
                                         const char *psz_output, int i_options,
                                         const char * const* ppsz_options,
                                         int b_enabled, int b_loop );
```

### 描述
该函数用于添加一个广播，并指定一个输入源。广播可以通过指定的输入MRL（媒体资源定位符）进行播放，并且可以选择是否启用循环播放。

### 参数说明

| 参数名        | 类型                    | 描述                                                                 |
|---------------|-------------------------|----------------------------------------------------------------------|
| p_instance    | libvlc_instance_t*      | VLC实例指针，表示当前的VLC实例。                                      |
| psz_name      | const char*             | 新广播的名称。                                                         |
| psz_input     | const char*             | 输入MRL，指定广播的输入源。                                            |
| psz_output    | const char*             | 输出MRL，指定广播的输出目标（即“sout”变量的参数）。                     |
| i_options     | int                     | 附加选项的数量。                                                       |
| ppsz_options  | const char* const*      | 附加选项的数组，每个选项是一个字符串。                                 |
| b_enabled     | int                     | 布尔值，表示是否启用新广播。1表示启用，0表示禁用。                      |
| b_loop        | int                     | 布尔值，表示广播是否应该循环播放。1表示循环播放，0表示不循环播放。      |

### 返回值
- **0**：成功添加广播。
- **-1**：添加广播时发生错误。
## libvlc_vlm_add_vod {#libvlc_vlm_add_vod}

```c
LIBVLC_API int libvlc_vlm_add_vod( libvlc_instance_t * p_instance,
                                   const char *psz_name, const char *psz_input,
                                   int i_options, const char * const* ppsz_options,
                                   int b_enabled, const char *psz_mux );
```

### 函数描述
该函数用于添加一个新的VOD（视频点播）媒体。通过指定输入MRL（媒体资源定位符）和其他可选参数，可以在VLC媒体库中创建一个新的VOD媒体。

### 函数参数说明

| 参数名        | 类型                    | 描述                                                                 |
|---------------|-------------------------|----------------------------------------------------------------------|
| `p_instance`  | `libvlc_instance_t *`   | VLC实例指针，表示当前的VLC实例。                                     |
| `psz_name`    | `const char *`          | 新VOD媒体的名称。                                                     |
| `psz_input`   | `const char *`          | 输入的MRL，指定VOD媒体的来源。                                        |
| `i_options`   | `int`                   | 附加选项的数量。                                                     |
| `ppsz_options`| `const char * const*`   | 附加选项的数组，每个选项是一个字符串。                               |
| `b_enabled`   | `int`                   | 布尔值，表示是否启用新创建的VOD媒体。1表示启用，0表示不启用。        |
| `psz_mux`     | `const char *`          | VOD媒体的复用器（muxer）类型，指定如何封装媒体数据。                  |

### 函数返回值
- **0**：表示函数执行成功。
- **-1**：表示函数执行失败。
## libvlc_vlm_del_media {#libvlc_vlm_del_media}

```c
LIBVLC_API int libvlc_vlm_del_media( libvlc_instance_t * p_instance, const char *psz_name );
```

### 描述
删除一个媒体（VOD 或广播）。

### 函数参数说明

| 参数名       | 类型                  | 描述                   |
|--------------|-----------------------|------------------------|
| p_instance   | libvlc_instance_t*    | VLC 实例指针           |
| psz_name     | const char*           | 要删除的媒体名称       |

### 函数返回值
- **0**：成功删除媒体。
- **-1**：删除媒体时发生错误。
## libvlc_vlm_set_enabled {#libvlc_vlm_set_enabled}

```c
LIBVLC_API int libvlc_vlm_set_enabled( libvlc_instance_t *p_instance,
                                       const char *psz_name, int b_enabled );
```

### 描述
该函数用于启用或禁用一个媒体（VOD 或广播）。

### 函数参数说明

| 参数名       | 类型                  | 描述                                                                 |
|--------------|-----------------------|--------------------------------------------------------------------------|
| p_instance   | libvlc_instance_t*    | VLC 实例指针，表示要操作的 VLC 实例。                                    |
| psz_name     | const char*           | 要操作的媒体名称，指定要启用或禁用的媒体。                               |
| b_enabled    | int                   | 新的状态，`1` 表示启用，`0` 表示禁用。                                   |

### 函数返回值
- **0**：成功。
- **-1**：错误。
## libvlc_vlm_set_output {#libvlc_vlm_set_output}

```c
LIBVLC_API int libvlc_vlm_set_output( libvlc_instance_t *p_instance,
                                      const char *psz_name,
                                      const char *psz_output );
```

### 描述
设置媒体的输出。

### 函数参数说明

| 参数名        | 类型                  | 描述                                                                 |
|---------------|-----------------------|--------------------------------------------------------------------------|
| p_instance    | libvlc_instance_t*    | 实例指针。                                                             |
| psz_name      | const char*           | 要操作的媒体名称。                                                     |
| psz_output    | const char*           | 输出MRL（即“sout”变量的参数）。                                        |

### 函数返回值
- **0**：成功。
- **-1**：错误。
## libvlc_vlm_set_input {#libvlc_vlm_set_input}

```c
LIBVLC_API int libvlc_vlm_set_input( libvlc_instance_t *p_instance,
                                     const char *psz_name,
                                     const char *psz_input );
```

### 描述
设置媒体输入的MRL（媒体资源定位符）。这将删除所有现有的输入并添加指定的输入。

### 函数参数说明

| 参数名        | 类型                  | 描述                                                         |
|---------------|-----------------------|--------------------------------------------------------------|
| `p_instance`  | `libvlc_instance_t*`  | 实例指针，表示当前的VLC实例。                                |
| `psz_name`    | `const char*`         | 要操作的媒体名称。                                           |
| `psz_input`   | `const char*`         | 要设置的输入MRL。                                             |

### 函数返回值
- **0**：成功。
- **-1**：错误。
## libvlc_vlm_add_input {#libvlc_vlm_add_input}

```c
LIBVLC_API int libvlc_vlm_add_input( libvlc_instance_t *p_instance,
                                     const char *psz_name,
                                     const char *psz_input );
```

### 描述
该函数用于向指定的媒体添加输入MRL（媒体资源定位符）。通过调用此函数，可以将指定的输入MRL添加到媒体中。

### 参数说明

| 参数名       | 类型                  | 描述                                                                 |
|--------------|-----------------------|--------------------------------------------------------------------------|
| p_instance   | libvlc_instance_t*    | VLC实例指针，表示当前的VLC实例。                                       |
| psz_name     | const char*           | 要操作的媒体名称，指定要添加输入MRL的媒体。                            |
| psz_input    | const char*           | 要添加的输入MRL，表示要添加到指定媒体的媒体资源定位符。                |

### 返回值
- **0**：成功添加输入MRL。
- **-1**：添加输入MRL时发生错误。
## libvlc_vlm_set_loop {#libvlc_vlm_set_loop}

```c
LIBVLC_API int libvlc_vlm_set_loop( libvlc_instance_t *p_instance,
                                    const char *psz_name,
                                    int b_loop );
```

### 描述
设置媒体循环状态。

### 函数参数说明

| 参数名       | 类型                  | 描述                                                         |
|--------------|-----------------------|--------------------------------------------------------------|
| p_instance   | libvlc_instance_t*    | VLC 实例指针                                                 |
| psz_name     | const char*           | 要操作的媒体名称                                             |
| b_loop       | int                   | 新的循环状态（0 表示不循环，非 0 表示循环）                  |

### 函数返回值
- **0**：成功
- **-1**：错误
## libvlc_vlm_set_mux {#libvlc_vlm_set_mux}

```c
LIBVLC_API int libvlc_vlm_set_mux(libvlc_instance_t *p_instance, const char *psz_name, const char *psz_mux);
```

### 描述
设置媒体的视频点播（VOD）复用器。

### 函数参数说明

| 参数名       | 类型                   | 描述                                                         |
|--------------|------------------------|--------------------------------------------------------------|
| p_instance   | libvlc_instance_t*     | 实例指针，表示要操作的 VLC 实例。                            |
| psz_name     | const char*            | 媒体名称，表示要操作的媒体。                                 |
| psz_mux      | const char*            | 新的复用器名称，表示要设置的复用器。                         |

### 函数返回值
- **0**：成功设置复用器。
- **-1**：设置复用器时发生错误。
## libvlc_vlm_change_media {#libvlc_vlm_change_media}

```c
LIBVLC_API int libvlc_vlm_change_media( libvlc_instance_t *p_instance,
                                        const char *psz_name, const char *psz_input,
                                        const char *psz_output, int i_options,
                                        const char * const *ppsz_options,
                                        int b_enabled, int b_loop );
```

### 函数描述
该函数用于编辑媒体参数。它会删除所有现有的输入并添加指定的输入。

### 函数参数说明

| 参数名         | 类型                     | 描述                                                                 |
|----------------|--------------------------|--------------------------------------------------------------------------|
| p_instance     | libvlc_instance_t*       | VLC 实例指针。                                                         |
| psz_name       | const char*              | 新广播的名称。                                                         |
| psz_input      | const char*              | 输入的 MRL（媒体资源定位符）。                                         |
| psz_output     | const char*              | 输出的 MRL（传递给 "sout" 变量的参数）。                               |
| i_options      | int                      | 附加选项的数量。                                                       |
| ppsz_options   | const char* const*       | 附加选项的数组。                                                       |
| b_enabled      | int                      | 布尔值，用于启用新的广播。1 表示启用，0 表示禁用。                     |
| b_loop         | int                      | 布尔值，用于指示广播是否应该循环播放。1 表示循环，0 表示不循环。       |

### 函数返回值
- **0**：成功。
- **-1**：错误。
## libvlc_vlm_play_media {#libvlc_vlm_play_media}

```c
LIBVLC_API int libvlc_vlm_play_media ( libvlc_instance_t *p_instance, const char *psz_name );
```

### 描述
该函数用于播放指定名称的广播。

### 函数参数说明

| 参数名        | 类型                   | 描述                   |
|---------------|------------------------|------------------------|
| `p_instance`  | `libvlc_instance_t*`   | VLC 实例指针           |
| `psz_name`    | `const char*`          | 广播的名称             |

### 函数返回值
- **0**：成功
- **-1**：错误
## libvlc_vlm_stop_media {#libvlc_vlm_stop_media}

```c
LIBVLC_API int libvlc_vlm_stop_media ( libvlc_instance_t *p_instance, const char *psz_name );
```

### 描述
该函数用于停止指定名称的广播。

### 函数参数说明

| 参数名        | 类型                  | 描述                         |
|---------------|-----------------------|------------------------------|
| `p_instance`  | `libvlc_instance_t*`  | VLC 实例指针                 |
| `psz_name`    | `const char*`         | 要停止的广播的名称           |

### 函数返回值
- **0**：成功停止广播。
- **-1**：发生错误。
## libvlc_vlm_pause_media {#libvlc_vlm_pause_media}

```c
LIBVLC_API int libvlc_vlm_pause_media(libvlc_instance_t *p_instance, const char *psz_name);
```

### 描述
暂停指定的广播。

### 函数参数说明

| 参数名       | 类型                  | 描述               |
|--------------|-----------------------|--------------------|
| p_instance   | libvlc_instance_t*    | VLC 实例指针       |
| psz_name     | const char*           | 广播的名称         |

### 函数返回值
- **0**：成功
- **-1**：错误
## libvlc_vlm_seek_media {#libvlc_vlm_seek_media}

```c
LIBVLC_API int libvlc_vlm_seek_media( libvlc_instance_t *p_instance,
                                      const char *psz_name,
                                      float f_percentage );
```

### 描述
在指定的广播中进行定位操作。

### 函数参数说明

| 参数名        | 类型                  | 描述                                                         |
|---------------|-----------------------|--------------------------------------------------------------|
| p_instance    | libvlc_instance_t*    | VLC 实例指针，表示当前的 VLC 实例。                          |
| psz_name      | const char*           | 广播的名称，表示要进行定位操作的广播的名称。                 |
| f_percentage  | float                 | 定位的百分比，表示要定位到广播的哪个百分比位置。             |

### 函数返回值
- **0**：成功执行定位操作。
- **-1**：发生错误，定位操作失败。
## libvlc_vlm_show_media {#libvlc_vlm_show_media}

```c
LIBVLC_API const char* libvlc_vlm_show_media( libvlc_instance_t *p_instance, const char *psz_name );
```

### 描述
该函数返回指定媒体名称的JSON字符串表示形式的信息。主要用于调试目的。如果需要以编程方式访问`vlm_media_instance_t`的状态，请使用相应的`libvlc_vlm_get_media_instance_xxx`函数。目前没有为`vlm_media_t`提供类似的函数。

### 参数说明
| 参数名       | 类型                  | 描述                                                                 |
|--------------|-----------------------|--------------------------------------------------------------------------|
| p_instance   | libvlc_instance_t*    | VLC实例指针。                                                           |
| psz_name     | const char*           | 媒体名称。如果名称为空字符串，则描述所有媒体。                           |

### 返回值
- 成功时返回包含指定媒体信息的JSON字符串。
- 错误时返回`NULL`。
## libvlc_vlm_get_media_instance_position {#libvlc_vlm_get_media_instance_position}

```c
LIBVLC_API float libvlc_vlm_get_media_instance_position( libvlc_instance_t *p_instance,
                                                         const char *psz_name,
                                                         int i_instance );
```

### 描述
该函数通过名称或实例ID获取vlm媒体实例的位置。

### 参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| p_instance   | libvlc_instance_t*  | 一个libvlc实例                                                       |
| psz_name     | const char*         | vlm媒体实例的名称                                                     |
| i_instance   | int                 | 实例ID                                                               |

### 返回值
- **float**: 返回位置值（以浮点数表示）。
- **-1.0**: 如果发生错误，返回-1.0。
## libvlc_vlm_get_media_instance_time {#libvlc_vlm_get_media_instance_time}

```c
LIBVLC_API int libvlc_vlm_get_media_instance_time( libvlc_instance_t *p_instance,
                                                   const char *psz_name,
                                                   int i_instance );
```

### 描述
获取指定名称或实例ID的VLM媒体实例的时间。

### 函数参数说明

| 参数名       | 类型                | 描述                                                         |
|--------------|---------------------|--------------------------------------------------------------|
| p_instance   | libvlc_instance_t*  | 一个libvlc实例                                               |
| psz_name     | const char*         | VLM媒体实例的名称                                            |
| i_instance   | int                 | 实例ID                                                       |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - 返回媒体实例的时间（以整数形式）。
  - 如果发生错误，返回 `-1`。
## libvlc_vlm_get_media_instance_length {#libvlc_vlm_get_media_instance_length}

```c
LIBVLC_API int libvlc_vlm_get_media_instance_length( libvlc_instance_t *p_instance,
                                                     const char *psz_name,
                                                     int i_instance );
```

### 描述
该函数用于通过名称或实例ID获取VLM媒体实例的长度。

### 参数说明

| 参数名       | 类型                  | 描述                                                         |
|--------------|-----------------------|--------------------------------------------------------------|
| p_instance   | libvlc_instance_t*    | 一个libvlc实例                                               |
| psz_name     | const char*           | VLM媒体实例的名称                                            |
| i_instance   | int                   | 实例ID                                                       |

### 返回值
- 返回媒体项的长度。
- 如果发生错误，返回-1。
## libvlc_vlm_get_media_instance_rate {#libvlc_vlm_get_media_instance_rate}

```c
LIBVLC_API int libvlc_vlm_get_media_instance_rate( libvlc_instance_t *p_instance,
                                                   const char *psz_name,
                                                   int i_instance );
```

### 描述
该函数用于通过名称或实例ID获取vlm媒体实例的播放速率。

### 参数说明
| 参数名       | 类型                | 描述                                                         |
|--------------|---------------------|--------------------------------------------------------------|
| p_instance   | libvlc_instance_t*  | 一个libvlc实例                                               |
| psz_name     | const char*         | vlm媒体实例的名称                                            |
| i_instance   | int                 | 实例ID                                                       |

### 返回值
- 返回值为播放速率，如果成功获取则返回正整数值。
- 如果发生错误，返回值为 `-1`。
## libvlc_vlm_get_media_instance_title {#libvlc_vlm_get_media_instance_title}

```c
LIBVLC_API int libvlc_vlm_get_media_instance_title( libvlc_instance_t *p_instance, const char *psz_name, int i_instance );
```

### 描述
获取指定名称或实例ID的VLM媒体实例的标题编号。

### 函数参数说明

| 参数名       | 类型                | 描述                                         |
|--------------|---------------------|----------------------------------------------|
| p_instance   | libvlc_instance_t * | 一个libvlc实例                               |
| psz_name     | const char *        | VLM媒体实例的名称                            |
| i_instance   | int                 | 实例ID                                       |

### 函数返回值
- **返回值为0**：当前实现中，该函数总是返回0。
- **返回值为-1**：表示发生错误。
## libvlc_vlm_get_media_instance_chapter {#libvlc_vlm_get_media_instance_chapter}

```c
LIBVLC_API int libvlc_vlm_get_media_instance_chapter( libvlc_instance_t *p_instance,
                                                      const char *psz_name, int i_instance );
```

### 描述
获取 vlm_media 实例的章节编号，可以通过名称或实例 ID 进行查询。

### 函数参数说明

| 参数名       | 类型                | 描述                                                         |
|--------------|---------------------|--------------------------------------------------------------|
| p_instance   | libvlc_instance_t * | 一个 libvlc 实例                                              |
| psz_name     | const char *        | vlm 媒体实例的名称                                            |
| i_instance   | int                 | 实例 ID                                                       |

### 函数返回值
- 返回章节编号，如果成功。
- 返回 -1，如果发生错误。

**注意**: 该函数目前存在一个 bug，总是返回 0。
## libvlc_vlm_get_media_instance_seekable {#libvlc_vlm_get_media_instance_seekable}

```c
LIBVLC_API int libvlc_vlm_get_media_instance_seekable( libvlc_instance_t *p_instance,
                                                       const char *psz_name, int i_instance );
```

### 描述
该函数用于检查 libvlc 实例是否可进行定位操作。需要注意的是，该函数目前存在一个 bug，将始终返回 0。

### 函数参数说明

| 参数名       | 类型                | 描述                                                         |
|--------------|---------------------|--------------------------------------------------------------|
| p_instance   | libvlc_instance_t * | libvlc 实例的指针                                            |
| psz_name     | const char *        | vlm 媒体实例的名称                                            |
| i_instance   | int                 | 实例 ID                                                       |

### 函数返回值
- **1**：如果媒体实例可进行定位操作。
- **0**：如果媒体实例不可进行定位操作。
- **-1**：如果媒体实例不存在。

**注意**：由于存在 bug，该函数将始终返回 0。
## libvlc_vlm_get_event_manager {#libvlc_vlm_get_event_manager}

```c
LIBVLC_API libvlc_event_manager_t *
    libvlc_vlm_get_event_manager( libvlc_instance_t *p_instance );
```

### 描述
从 VLM 媒体中获取 `libvlc_event_manager`。`p_event_manager` 是不可变的，因此您不需要持有锁。

### 函数参数说明

| 参数名        | 类型                  | 描述                   |
|---------------|-----------------------|------------------------|
| `p_instance`  | `libvlc_instance_t*`  | 一个 `libvlc` 实例     |

### 函数返回值
- **返回值类型**: `libvlc_event_manager_t*`
- **返回值说明**: 返回 `libvlc_event_manager` 对象的指针。如果成功，返回有效的指针；如果失败，返回 `NULL`。
