## libvlc_media_add_option {#libvlc_media_add_option}

```c
LIBVLC_API void libvlc_media_add_option(
                                   libvlc_media_t *p_md,
                                   const char * psz_options );
```

### 描述
该函数用于向媒体添加一个选项。这个选项将用于确定媒体播放器如何读取媒体。这允许在每个媒体的基础上使用VLC的高级读取/流选项。

注意：选项列表可以在命令行中通过 `vlc --long-help` 查看，例如 `"-sout-all"`。请记住，可用选项及其语义会因LibVLC版本和构建而异。

警告：并非所有选项都会影响 `libvlc_media_t` 对象：特别是由于架构问题，大多数音频和视频选项（如文本渲染器选项）对单个媒体没有影响。这些选项必须通过 `libvlc_new()` 设置。

### 参数说明

| 参数名       | 类型                | 描述                                                         |
|--------------|---------------------|--------------------------------------------------------------|
| `p_md`       | `libvlc_media_t *`  | 媒体描述符，指向要添加选项的媒体对象。                       |
| `psz_options`| `const char *`      | 选项字符串，包含要添加到媒体的选项。                         |

### 返回值
该函数没有返回值。
## libvlc_media_add_option_flag {#libvlc_media_add_option_flag}

```c
LIBVLC_API void libvlc_media_add_option_flag(
                                   libvlc_media_t *p_md,
                                   const char * psz_options,
                                   unsigned i_flags );
```

### 描述
该函数用于向媒体添加带有可配置标志的选项。这些选项将用于确定 `media_player` 如何读取媒体。这允许在每个媒体的基础上使用 VLC 的高级读取/流选项。

选项的详细信息可以在 `vlc --long-help` 中找到，例如 `--sout-all`。请注意，并非所有选项都可以在媒体上使用：特别是由于架构问题，与视频相关的选项（如文本渲染器选项）不能在单个媒体上设置。它们必须在整个 `libvlc` 实例上设置。

### 参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_md`       | `libvlc_media_t *`  | 媒体描述符，指向要添加选项的媒体对象。                                 |
| `psz_options`| `const char *`      | 选项字符串，包含要添加到媒体的选项。                                   |
| `i_flags`    | `unsigned`          | 选项标志，用于指定该选项的标志。                                       |

### 返回值
该函数没有返回值。
## libvlc_media_retain {#libvlc_media_retain}

```c
LIBVLC_API void libvlc_media_retain( libvlc_media_t *p_md );
```

### 描述
保留对媒体描述符对象（`libvlc_media_t`）的引用。使用 `libvlc_media_release()` 函数来减少媒体描述符对象的引用计数。

### 参数说明

| 参数名 | 类型                | 描述                   |
|--------|---------------------|------------------------|
| p_md   | `libvlc_media_t *`  | 媒体描述符对象的指针。 |

### 返回值
该函数没有返回值。
## libvlc_media_release {#libvlc_media_release}

```c
LIBVLC_API void libvlc_media_release( libvlc_media_t *p_md );
```

### 描述
该函数用于减少媒体描述符对象的引用计数。如果引用计数为0，`libvlc_media_release()` 将释放媒体描述符对象，并向所有监听器发送一个 `libvlc_MediaFreed` 事件。如果媒体描述符对象已被释放，则不应再使用它。

### 参数说明

| 参数名 | 类型               | 描述                   |
|--------|--------------------|------------------------|
| p_md   | libvlc_media_t*     | 媒体描述符对象的指针。 |

### 返回值
该函数没有返回值。
## libvlc_media_set_meta {#libvlc_media_set_meta}

```c
LIBVLC_API void libvlc_media_set_meta( libvlc_media_t *p_md,
                                       libvlc_meta_t e_meta,
                                       const char *psz_value );
```

### 描述
设置媒体的元数据（此函数不会保存元数据，需要调用 `libvlc_media_save_meta` 来保存元数据）。

### 参数说明

| 参数名       | 类型                | 描述                                       |
|--------------|---------------------|--------------------------------------------|
| `p_md`       | `libvlc_media_t*`   | 媒体描述符指针                             |
| `e_meta`     | `libvlc_meta_t`     | 要写入的元数据类型                         |
| `psz_value`  | `const char*`       | 媒体的元数据值                             |

### 返回值
此函数没有返回值。
## libvlc_media_save_meta {#libvlc_media_save_meta}

```c
LIBVLC_API int libvlc_media_save_meta( libvlc_media_t *p_md );
```

### 描述
保存之前设置的元数据。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_md` | `libvlc_media_t *` | 媒体描述符 |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - `true` (1): 写操作成功。
  - `false` (0): 写操作失败。
## libvlc_media_get_state {#libvlc_media_get_state}

```c
LIBVLC_API libvlc_state_t libvlc_media_get_state(libvlc_media_t *p_md);
```

### 描述
获取媒体描述符对象的当前状态。可能的媒体状态定义在 `libvlc_structures.c` 中，包括 `libvlc_NothingSpecial=0`、`libvlc_Opening`、`libvlc_Buffering`、`libvlc_Playing`、`libvlc_Paused`、`libvlc_Stopped`、`libvlc_Ended` 和 `libvlc_Error`。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_md` | `libvlc_media_t *` | 一个媒体描述符对象 |

### 函数返回值
返回媒体描述符对象的当前状态，可能的状态值包括：

- `libvlc_NothingSpecial` (0)
- `libvlc_Opening`
- `libvlc_Buffering`
- `libvlc_Playing`
- `libvlc_Paused`
- `libvlc_Stopped`
- `libvlc_Ended`
- `libvlc_Error`
## libvlc_media_get_stats {#libvlc_media_get_stats}

```c
LIBVLC_API int libvlc_media_get_stats( libvlc_media_t *p_md, libvlc_media_stats_t *p_stats );
```

### 描述
获取当前媒体的统计信息。

### 参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| p_md | libvlc_media_t* | 媒体描述符对象 |
| p_stats | libvlc_media_stats_t* | 包含媒体统计信息的结构体（该结构体必须由调用者分配） |

### 返回值
- **true**：如果统计信息可用。
- **false**：如果统计信息不可用。
## libvlc_media_event_manager {#libvlc_media_event_manager}

```c
LIBVLC_API libvlc_event_manager_t *
    libvlc_media_event_manager( libvlc_media_t *p_md );
```

### 描述
从媒体描述符对象中获取事件管理器。注意：此函数不会增加引用计数。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_md` | `libvlc_media_t *` | 媒体描述符对象 |

### 函数返回值
返回事件管理器对象。
## libvlc_media_get_duration {#libvlc_media_get_duration}

```c
LIBVLC_API libvlc_time_t
libvlc_media_get_duration( libvlc_media_t *p_md );
```

### 描述
获取媒体描述符对象项的持续时间（以毫秒为单位）。

### 函数参数说明

| 参数名 | 类型                | 描述                 |
|--------|---------------------|----------------------|
| p_md   | libvlc_media_t*      | 媒体描述符对象       |

### 函数返回值
- **libvlc_time_t**: 返回媒体项的持续时间（以毫秒为单位）。如果发生错误，则返回 -1。
## libvlc_media_parse {#libvlc_media_parse}

```c
LIBVLC_API void libvlc_media_parse( libvlc_media_t *p_md );
```

### 描述
该函数用于解析媒体文件。它会获取（本地）元数据和轨道信息。该方法是同步的。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_md` | `libvlc_media_t *` | 媒体描述符对象 |

### 函数返回值
该函数没有返回值。
## libvlc_media_parse_async {#libvlc_media_parse_async}

```c
LIBVLC_API void
libvlc_media_parse_async( libvlc_media_t *p_md );
```

### 描述
该函数用于异步解析媒体文件。它会获取（本地）元数据和轨道信息。此方法是 `libvlc_media_parse()` 的异步版本。

要跟踪此操作何时完成，您可以监听 `libvlc_MediaParsedChanged` 事件。然而，如果媒体文件已经被解析过，您将不会收到此事件。

### 参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_md` | `libvlc_media_t*` | 媒体描述符对象 |

### 返回值
该函数没有返回值。
## libvlc_media_is_parsed {#libvlc_media_is_parsed}

```c
LIBVLC_API int libvlc_media_is_parsed( libvlc_media_t *p_md );
```

### 描述
获取媒体描述符对象的解析状态。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_md` | `libvlc_media_t*` | 媒体描述符对象 |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - `true` (非零值): 如果媒体对象已经被解析。
  - `false` (零值): 如果媒体对象尚未被解析。
## libvlc_media_set_user_data {#libvlc_media_set_user_data}

```c
LIBVLC_API void libvlc_media_set_user_data( libvlc_media_t *p_md, void *p_new_user_data );
```

### 函数描述
设置媒体描述符的 `user_data`。`user_data` 是宿主应用程序（如 VLC.framework）访问的专用数据，通常用作指向本地对象的指针，该对象引用 `libvlc_media_t` 指针。

### 函数参数说明

| 参数名            | 类型                | 描述                                                                 |
|-------------------|---------------------|----------------------------------------------------------------------|
| `p_md`            | `libvlc_media_t*`   | 媒体描述符对象。                                                     |
| `p_new_user_data` | `void*`             | 指向用户数据的指针。                                                 |

### 函数返回值
该函数没有返回值。
## libvlc_media_get_tracks_info {#libvlc_media_get_tracks_info}

```c
LIBVLC_DEPRECATED LIBVLC_API
int libvlc_media_get_tracks_info( libvlc_media_t *p_md,
                                  libvlc_media_track_info_t **tracks );
```

### 描述
获取媒体描述符的基本流描述信息。

注意：在调用此函数之前，您需要调用 `libvlc_media_parse()` 或至少播放一次媒体。否则，将返回一个空数组。

此函数已被弃用，建议使用 `libvlc_media_tracks_get` 代替。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_md` | `libvlc_media_t*` | 媒体描述符对象 |
| `tracks` | `libvlc_media_track_info_t**` | 用于存储分配的基本流描述数组的地址（必须由调用者释放）[OUT] |

### 返回值
返回基本流的数目。如果未解析媒体或未播放媒体，则返回值为0。
## libvlc_media_tracks_get {#libvlc_media_tracks_get}

```c
LIBVLC_API
unsigned libvlc_media_tracks_get( libvlc_media_t *p_md,
                                  libvlc_media_track_t ***tracks );
```

### 描述
获取媒体描述符的基本流描述。

注意：在调用此函数之前，您需要调用 `libvlc_media_parse()` 或至少播放一次媒体。否则，将返回一个空数组。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_md` | `libvlc_media_t *` | 媒体描述符对象 |
| `tracks` | `libvlc_media_track_t ***` | 用于存储分配的基本流描述数组的地址（必须由调用者使用 `libvlc_media_tracks_release` 释放）[OUT] |

### 返回值
- **返回值类型**: `unsigned`
- **返回值说明**:
  - 返回基本流的数目。
  - 如果发生错误，返回值为零。
## libvlc_media_tracks_release {#libvlc_media_tracks_release}

```c
LIBVLC_API
void libvlc_media_tracks_release( libvlc_media_track_t **p_tracks,
                                  unsigned i_count );
```

### 描述
释放媒体描述符的基本流描述数组。

### 函数参数说明

| 参数名    | 类型                   | 描述                         |
|-----------|------------------------|------------------------------|
| p_tracks  | libvlc_media_track_t** | 要释放的轨道信息数组         |
| i_count   | unsigned               | 数组中的元素数量             |

### 函数返回值
该函数没有返回值。
