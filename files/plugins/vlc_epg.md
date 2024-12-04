## vlc_epg_Init {#vlc_epg_Init}

```c
VLC_API void vlc_epg_Init(vlc_epg_t *p_epg, const char *psz_name);
```

### 描述
该函数用于初始化一个 `vlc_epg_t` 结构体。在使用完该结构体后，必须调用 `vlc_epg_Clean` 函数来释放相关的资源。

### 函数参数说明

| 参数名    | 类型        | 描述                                                                 |
|-----------|-------------|----------------------------------------------------------------------|
| `p_epg`   | `vlc_epg_t*` | 指向要初始化的 `vlc_epg_t` 结构体的指针。                             |
| `psz_name`| `const char*` | 指向 EPG 名称的字符串指针，用于标识该 EPG 条目。                      |

### 函数返回值
该函数没有返回值。
## vlc_epg_Clean {#vlc_epg_Clean}

```c
VLC_API void vlc_epg_Clean(vlc_epg_t *p_epg);
```

### 函数描述
该函数用于释放与 `vlc_epg_t` 结构体相关的所有资源。

### 函数参数说明

| 参数名 | 类型       | 描述               |
|--------|------------|--------------------|
| p_epg  | vlc_epg_t* | 指向 `vlc_epg_t` 结构体的指针，表示要释放资源的 EPG 数据。 |

### 函数返回值
该函数没有返回值。
## vlc_epg_AddEvent {#vlc_epg_AddEvent}

```c
VLC_API void vlc_epg_AddEvent(vlc_epg_t *p_epg, int64_t i_start, int i_duration, const char *psz_name, const char *psz_short_description, const char *psz_description, uint8_t i_rating);
```

### 描述
该函数用于创建并追加一个新的 `vlc_epg_event_t` 到 `vlc_epg_t` 中。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_epg` | `vlc_epg_t*` | 指向 `vlc_epg_t` 结构的指针，表示 EPG 数据。 |
| `i_start` | `int64_t` | 事件的开始时间，以毫秒为单位。 |
| `i_duration` | `int` | 事件的持续时间，以秒为单位。 |
| `psz_name` | `const char*` | 事件的名称。 |
| `psz_short_description` | `const char*` | 事件的简短描述。 |
| `psz_description` | `const char*` | 事件的详细描述。 |
| `i_rating` | `uint8_t` | 事件的评级。 |

### 返回值
该函数没有返回值。
## vlc_epg_Delete {#vlc_epg_Delete}

```c
VLC_API void vlc_epg_Delete(vlc_epg_t *p_epg);
```

### 函数描述
该函数用于释放 `vlc_epg_t` 类型的指针。

### 函数参数说明

| 参数名  | 类型       | 描述               |
|---------|------------|--------------------|
| `p_epg` | `vlc_epg_t*` | 指向 `vlc_epg_t` 结构体的指针，表示要释放的 EPG 数据。 |

### 函数返回值
该函数没有返回值。
## vlc_epg_SetCurrent {#vlc_epg_SetCurrent}

```c
VLC_API void vlc_epg_SetCurrent(vlc_epg_t *p_epg, int64_t i_start);
```

### 函数描述
该函数用于设置 `vlc_epg_t` 结构体中的当前事件，根据给定的开始时间。

### 函数参数说明

| 参数名   | 类型      | 描述                                                         |
|----------|-----------|--------------------------------------------------------------|
| `p_epg`  | `vlc_epg_t*` | 指向 `vlc_epg_t` 结构体的指针，表示要设置当前事件的 EPG 数据。 |
| `i_start`| `int64_t`   | 事件的开始时间，用于确定哪个事件是当前事件。                 |

### 函数返回值
该函数没有返回值。
## vlc_epg_Merge {#vlc_epg_Merge}

```c
VLC_API void vlc_epg_Merge(vlc_epg_t *p_dst, const vlc_epg_t *p_src);
```

### 描述
该函数将 `p_src` 中的所有事件合并到 `p_dst` 中。`p_src` 不会被修改。

### 函数参数说明

| 参数名 | 类型          | 描述                         |
|--------|---------------|------------------------------|
| p_dst  | vlc_epg_t*    | 目标 EPG 结构体，合并后的结果将存储在这里。 |
| p_src  | const vlc_epg_t* | 源 EPG 结构体，包含要合并的事件。 |

### 函数返回值
该函数没有返回值。
