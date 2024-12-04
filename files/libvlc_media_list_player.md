## libvlc_media_list_player_new {#libvlc_media_list_player_new}

```c
LIBVLC_API libvlc_media_list_player_t *
    libvlc_media_list_player_new( libvlc_instance_t * p_instance );
```

### 描述
创建一个新的媒体列表播放器实例。

### 函数参数说明

| 参数名        | 类型                  | 描述                                                         |
|---------------|-----------------------|--------------------------------------------------------------|
| `p_instance`  | `libvlc_instance_t *` | libvlc 实例，用于创建媒体列表播放器。                        |

### 函数返回值
- 成功时返回一个新的媒体列表播放器实例。
- 如果发生错误，返回 `NULL`。
## libvlc_media_list_player_release {#libvlc_media_list_player_release}

```c
LIBVLC_API void
libvlc_media_list_player_release( libvlc_media_list_player_t * p_mlp );
```

### 描述
释放一个 `media_list_player` 实例。减少媒体播放器对象的引用计数。如果引用计数为 0，`libvlc_media_list_player_release()` 将释放媒体播放器对象。如果媒体播放器对象已被释放，则不应再使用它。

### 参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mlp` | `libvlc_media_list_player_t *` | 媒体列表播放器实例 |

### 返回值
该函数没有返回值。
## libvlc_media_list_player_retain {#libvlc_media_list_player_retain}

```c
LIBVLC_API void
libvlc_media_list_player_retain( libvlc_media_list_player_t *p_mlp );
```

### 描述
保留对媒体播放器列表对象的引用。使用 `libvlc_media_list_player_release()` 来减少引用计数。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mlp` | `libvlc_media_list_player_t*` | 媒体播放器列表对象 |

### 函数返回值
该函数没有返回值。
## libvlc_media_list_player_event_manager {#libvlc_media_list_player_event_manager}

```c
LIBVLC_API libvlc_event_manager_t *
libvlc_media_list_player_event_manager(libvlc_media_list_player_t * p_mlp);
```

### 函数描述
该函数返回 `media_list_player` 的事件管理器。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mlp` | `libvlc_media_list_player_t *` | `media_list_player` 实例 |

### 函数返回值
返回 `media_list_player` 的事件管理器。
## libvlc_media_list_player_set_media_player {#libvlc_media_list_player_set_media_player}

```c
LIBVLC_API void
libvlc_media_list_player_set_media_player(
                                     libvlc_media_list_player_t * p_mlp,
                                     libvlc_media_player_t * p_mi );
```

### 描述
该函数用于将 `media_list_player` 中的媒体播放器替换为指定的实例。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mlp` | `libvlc_media_list_player_t *` | 媒体列表播放器实例 |
| `p_mi` | `libvlc_media_player_t *` | 媒体播放器实例 |

### 返回值
该函数没有返回值。
## libvlc_media_list_player_set_media_list {#libvlc_media_list_player_set_media_list}

```c
LIBVLC_API void
libvlc_media_list_player_set_media_list(
                                     libvlc_media_list_player_t * p_mlp,
                                     libvlc_media_list_t * p_mlist );
```

### 函数描述
设置与播放器关联的媒体列表。

### 函数参数说明

| 参数名       | 类型                          | 描述                 |
|--------------|-------------------------------|----------------------|
| `p_mlp`      | `libvlc_media_list_player_t *` | 媒体列表播放器实例   |
| `p_mlist`    | `libvlc_media_list_t *`        | 媒体列表             |

### 函数返回值
该函数没有返回值。
## libvlc_media_list_player_play {#libvlc_media_list_player_play}

```c
LIBVLC_API
void libvlc_media_list_player_play(libvlc_media_list_player_t * p_mlp);
```

### 描述
播放媒体列表。

### 函数参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| p_mlp | libvlc_media_list_player_t* | 媒体列表播放器实例 |

### 函数返回值
该函数没有返回值。
## libvlc_media_list_player_pause {#libvlc_media_list_player_pause}

```c
LIBVLC_API
void libvlc_media_list_player_pause(libvlc_media_list_player_t * p_mlp);
```

### 描述
切换媒体列表的暂停（或恢复）状态。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| p_mlp  | libvlc_media_list_player_t* | 媒体列表播放器实例 |

### 函数返回值
该函数没有返回值。
## libvlc_media_list_player_is_playing {#libvlc_media_list_player_is_playing}

```c
LIBVLC_API int libvlc_media_list_player_is_playing( libvlc_media_list_player_t * p_mlp );
```

### 描述
该函数用于检查媒体列表播放器是否正在播放。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mlp` | `libvlc_media_list_player_t *` | 媒体列表播放器实例 |

### 函数返回值
- **`true`**：表示媒体列表播放器正在播放。
- **`false`**：表示媒体列表播放器没有在播放。
## libvlc_media_list_player_get_state {#libvlc_media_list_player_get_state}

```c
LIBVLC_API libvlc_state_t
    libvlc_media_list_player_get_state( libvlc_media_list_player_t * p_mlp );
```

### 描述
获取媒体列表播放器的当前状态。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mlp` | `libvlc_media_list_player_t *` | 媒体列表播放器实例 |

### 函数返回值
返回媒体列表播放器的当前状态，类型为 `libvlc_state_t`。
## libvlc_media_list_player_play_item_at_index {#libvlc_media_list_player_play_item_at_index}

```c
LIBVLC_API
int libvlc_media_list_player_play_item_at_index(libvlc_media_list_player_t * p_mlp,
                                                int i_index);
```

### 描述
该函数用于在媒体列表中播放指定位置的媒体项。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mlp` | `libvlc_media_list_player_t *` | 媒体列表播放器实例 |
| `i_index` | `int` | 媒体列表中要播放的项的索引 |

### 函数返回值
- `0`：成功播放指定位置的媒体项。
- `-1`：指定的媒体项未找到。
## libvlc_media_list_player_play_item {#libvlc_media_list_player_play_item}

```c
LIBVLC_API
int libvlc_media_list_player_play_item(libvlc_media_list_player_t * p_mlp,
                                       libvlc_media_t * p_md);
```

### 描述
播放给定的媒体项。

### 函数参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mlp` | `libvlc_media_list_player_t *` | 媒体列表播放器实例 |
| `p_md` | `libvlc_media_t *` | 媒体实例 |

### 函数返回值
- **0**：成功时返回0。
- **-1**：如果媒体不是媒体列表的一部分，则返回-1。
## libvlc_media_list_player_stop {#libvlc_media_list_player_stop}

```c
LIBVLC_API void libvlc_media_list_player_stop(libvlc_media_list_player_t *p_mlp);
```

### 函数描述
停止播放媒体列表。

### 函数参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mlp` | `libvlc_media_list_player_t *` | 媒体列表播放器实例 |

### 函数返回值
该函数没有返回值。
## libvlc_media_list_player_next {#libvlc_media_list_player_next}

```c
LIBVLC_API
int libvlc_media_list_player_next(libvlc_media_list_player_t * p_mlp);
```

### 描述
该函数用于播放媒体列表中的下一个项目。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mlp` | `libvlc_media_list_player_t *` | 媒体列表播放器实例 |

### 函数返回值
- `0`：成功播放下一个项目。
- `-1`：如果没有下一个项目。
## libvlc_media_list_player_previous {#libvlc_media_list_player_previous}

```c
LIBVLC_API
int libvlc_media_list_player_previous(libvlc_media_list_player_t * p_mlp);
```

### 描述
该函数用于从媒体列表中播放前一个项目。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_mlp` | `libvlc_media_list_player_t *` | 媒体列表播放器实例 |

### 函数返回值
- `0`：成功时返回 0。
- `-1`：如果没有前一个项目，则返回 -1。
## libvlc_media_list_player_set_playback_mode {#libvlc_media_list_player_set_playback_mode}

```c
LIBVLC_API
void libvlc_media_list_player_set_playback_mode(libvlc_media_list_player_t * p_mlp,
                                                libvlc_playback_mode_t e_mode);
```

### 描述
设置播放列表的播放模式。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_mlp` | `libvlc_media_list_player_t *` | 媒体列表播放器实例 |
| `e_mode` | `libvlc_playback_mode_t` | 播放模式规范 |

### 函数返回值
该函数没有返回值。
