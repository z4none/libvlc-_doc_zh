## stream_Read {#stream_Read}

```c
VLC_API int stream_Read( stream_t *s, void *p_read, int i_read );
```

### 描述
该函数用于从流中读取数据。它尝试从指定的流 `s` 中读取 `i_read` 字节的数据，并将读取的数据存储在 `p_read` 指向的缓冲区中。

### 函数参数说明

| 参数名   | 类型      | 描述                                                                 |
|----------|-----------|----------------------------------------------------------------------|
| `s`      | `stream_t*` | 指向要读取的流的指针。                                               |
| `p_read` | `void*`    | 指向存储读取数据的缓冲区的指针。如果为 `NULL`，则函数仅跳过数据。     |
| `i_read` | `int`      | 要读取的字节数。如果为 `0`，则函数不执行任何操作并立即返回。         |

### 函数返回值
- 如果成功读取数据，返回实际读取的字节数。
- 如果遇到流的末尾（EOF），返回 `0`。
- 如果发生错误，返回 `-1`。
## stream_Peek {#stream_Peek}

```c
VLC_API int stream_Peek( stream_t *s, const uint8_t **pp_peek, int i_peek );
```

### 描述
该函数用于从流中预览（peek）指定数量的字节数据，而不实际读取这些数据。预览的数据将存储在 `pp_peek` 指向的缓冲区中。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| `s`       | `stream_t *`  | 指向流的指针，表示要操作的流对象。                                       |
| `pp_peek` | `const uint8_t **` | 指向指针的指针，用于存储预览数据的缓冲区地址。函数执行后，该指针将指向预览数据的起始位置。 |
| `i_peek`  | `int`         | 要预览的字节数。函数将尝试预览指定数量的字节数据。                     |

### 函数返回值

- **成功**：返回实际预览的字节数，该值可能小于或等于 `i_peek`。
- **失败**：返回 `0`，表示没有预览到任何数据，或者返回 `-1`，表示发生了错误。
## stream_vaControl {#stream_vaControl}

```c
VLC_API int stream_vaControl( stream_t *s, int i_query, va_list args );
```

### 描述
该函数用于对流进行控制操作。它通过 `va_list` 参数传递控制查询和相关参数。

### 函数参数说明

| 参数名  | 类型      | 描述                                                                 |
|---------|-----------|----------------------------------------------------------------------|
| `s`     | `stream_t*` | 指向要进行控制操作的流的指针。                                       |
| `i_query` | `int`     | 控制查询的类型，指定要执行的操作。                                   |
| `args`  | `va_list` | 可变参数列表，包含控制查询所需的额外参数。                           |

### 函数返回值
- `0`：操作成功。
- `非0`：操作失败，返回值表示错误代码。
## stream_Delete {#stream_Delete}

```c
VLC_API void stream_Delete( stream_t *s );
```

### 描述
该函数用于删除一个流对象。它释放与流对象相关的所有资源，并将其从内存中删除。

### 函数参数说明

| 参数名 | 类型      | 描述               |
|--------|-----------|--------------------|
| `s`    | `stream_t*` | 指向要删除的流对象的指针。 |

### 函数返回值
该函数没有返回值。
## stream_Control {#stream_Control}

```c
VLC_API int stream_Control( stream_t *s, int i_query, ... );
```

### 描述
`stream_Control` 函数用于对流进行控制操作。它允许用户通过传递不同的查询类型来执行各种流操作，例如获取流的长度、读取数据等。

### 函数参数说明

| 参数名   | 类型      | 描述                                                                 |
|----------|-----------|----------------------------------------------------------------------|
| `s`      | `stream_t*` | 指向要控制的流的指针。                                               |
| `i_query` | `int`       | 查询类型，指定要执行的操作。不同的查询类型对应不同的操作。           |
| `...`    | `va_list`  | 可变参数列表，根据 `i_query` 的不同，可能需要传递额外的参数。        |

### 函数返回值
- `0` 或正数：操作成功。返回值的具体含义取决于 `i_query` 的类型。
- `-1`：操作失败。
## stream_Block {#stream_Block}

```c
VLC_API block_t * stream_Block( stream_t *s, int i_size );
```

### 描述
该函数用于从流中读取指定大小的数据块。它尝试从流 `s` 中读取 `i_size` 字节的数据，并返回一个包含这些数据的 `block_t` 结构体。如果读取失败或流中没有足够的数据，函数将返回 `NULL`。

### 函数参数说明

| 参数名 | 类型      | 描述                                                                 |
|--------|-----------|--------------------------------------------------------------------|
| `s`    | `stream_t*` | 指向要从中读取数据的流的指针。                                       |
| `i_size` | `int`     | 要读取的数据块的大小（以字节为单位）。如果 `i_size` 为 0，则函数的行为未定义。 |

### 函数返回值

- **`block_t*`**: 成功时，返回一个包含读取数据的 `block_t` 结构体指针。如果读取失败或流中没有足够的数据，则返回 `NULL`。
## stream_BlockRemaining {#stream_BlockRemaining}

```c
VLC_API block_t * stream_BlockRemaining( stream_t *s, int i_max_size );
```

### 描述
该函数用于从流中读取剩余的数据块。它尝试读取流中剩余的所有数据，直到达到指定的最大大小限制。如果流中没有剩余数据，函数将返回 `NULL`。

### 函数参数说明

| 参数名      | 类型      | 描述                                                                 |
|-------------|-----------|----------------------------------------------------------------------|
| `s`         | `stream_t*` | 指向要读取的流的指针。                                               |
| `i_max_size`| `int`     | 读取数据块的最大大小限制。如果为负数，则表示没有大小限制。           |

### 函数返回值
- **`block_t*`**: 返回一个指向读取的数据块的指针。如果流中没有剩余数据，或者读取失败，则返回 `NULL`。
## stream_ReadLine {#stream_ReadLine}

```c
VLC_API char * stream_ReadLine( stream_t * );
```

### 描述
该函数用于从流中读取一行数据。它读取直到遇到换行符（'\n'）或流的末尾。读取的字符串不包含换行符。

### 函数参数说明

| 参数名 | 类型       | 描述                                                                 |
|--------|------------|--------------------------------------------------------------------------|
| stream | stream_t * | 指向要从中读取数据的流的指针。该流必须已经打开并且可以读取。 |

### 函数返回值
- 成功时，返回一个指向新分配的字符串的指针，该字符串包含从流中读取的一行数据。
- 如果读取失败或到达流的末尾，返回 `NULL`。
## stream_Tell {#stream_Tell}

```c
static inline int64_t stream_Tell(stream_t *s)
{
    uint64_t i_pos;
    stream_Control(s, STREAM_GET_POSITION, &i_pos);
    if (i_pos >> 62)
        return (int64_t)1 << 62;
    return i_pos;
}
```

### 函数描述
该函数用于获取流中的当前位置。它通过调用 `stream_Control` 函数来获取流的位置，并返回该位置的值。如果位置值超过了 `int64_t` 的最大范围，则返回 `(int64_t)1 << 62`。

### 函数参数说明

| 参数名 | 类型     | 描述                 |
|--------|----------|----------------------|
| `s`    | `stream_t*` | 指向流对象的指针，表示要获取位置的流。 |

### 函数返回值
- **正常情况**：返回流中的当前位置，类型为 `int64_t`。
- **异常情况**：如果位置值超过了 `int64_t` 的最大范围，则返回 `(int64_t)1 << 62`。
## stream_Size {#stream_Size}

```c
static inline int64_t stream_Size(stream_t *s)
{
    uint64_t i_pos;
    stream_Control(s, STREAM_GET_SIZE, &i_pos);
    if (i_pos >> 62)
        return (int64_t)1 << 62;
    return i_pos;
}
```

### 函数描述
该函数用于获取流的大小。它通过调用 `stream_Control` 函数来获取流的大小，并根据返回值进行处理。如果流的大小超过了 `2^62`，则返回 `2^62`。

### 函数参数说明

| 参数名 | 类型    | 描述               |
|--------|---------|--------------------|
| `s`    | `stream_t *` | 指向流对象的指针。 |

### 函数返回值
- 如果流的大小不超过 `2^62`，则返回流的大小。
- 如果流的大小超过了 `2^62`，则返回 `2^62`。
## stream_Seek {#stream_Seek}

```c
static inline int stream_Seek( stream_t *s, uint64_t i_pos )
{
    return stream_Control( s, STREAM_SET_POSITION, i_pos );
}
```

### 函数描述
`stream_Seek` 函数用于在流中设置当前位置。它通过调用 `stream_Control` 函数并传递 `STREAM_SET_POSITION` 控制码来实现。

### 函数参数说明

| 参数名 | 类型     | 描述               |
|--------|----------|--------------------|
| `s`    | `stream_t*` | 指向流对象的指针   |
| `i_pos`| `uint64_t`  | 要设置的流位置     |

### 函数返回值
- **成功**：返回 `stream_Control` 函数的返回值，通常为 `0` 表示成功。
- **失败**：返回 `stream_Control` 函数的返回值，可能为负数表示错误。
## stream_DemuxNew {#stream_DemuxNew}

```c
VLC_API stream_t * stream_DemuxNew( demux_t *p_demux, const char *psz_demux, es_out_t *out );
```

### 函数描述
创建一个特殊的流和一个解复用器，这允许链接多个解复用器。你必须使用 `stream_Delete` 函数来删除它。

### 函数参数说明

| 参数名      | 类型        | 描述                                                                 |
|-------------|-------------|----------------------------------------------------------------------|
| `p_demux`   | `demux_t*`  | 指向解复用器的指针，用于创建新的流。                                   |
| `psz_demux` | `const char*` | 解复用器的名称，用于指定要创建的解复用器类型。                         |
| `out`       | `es_out_t*` | 指向 ES 输出模块的指针，用于处理解复用后的数据流。                     |

### 函数返回值
- 返回值类型：`stream_t*`
  - 如果成功创建了新的流和解复用器，则返回指向新创建的流的指针。
  - 如果创建失败，则返回 `NULL`。
## stream_DemuxSend {#stream_DemuxSend}

```c
VLC_API void stream_DemuxSend( stream_t *s, block_t *p_block );
```

### 描述
该函数用于将数据发送到由 `stream_DemuxNew()` 创建的流句柄。

### 函数参数说明

| 参数名    | 类型      | 描述                                                                 |
|-----------|-----------|----------------------------------------------------------------------|
| `s`       | `stream_t*` | 指向由 `stream_DemuxNew()` 创建的流句柄的指针。                       |
| `p_block` | `block_t*`  | 指向包含要发送数据的 `block_t` 结构体的指针。                         |

### 函数返回值
该函数没有返回值。
## stream_DemuxControlVa {#stream_DemuxControlVa}

```c
VLC_API int stream_DemuxControlVa( stream_t *s, int, va_list );
```

### 描述
该函数用于在由 `stream_DemuxNew()` 创建的流句柄上执行一个 **demux**（即 DEMUX_...）控制请求。

### 函数参数说明

| 参数名   | 类型      | 描述                                                                 |
|----------|-----------|----------------------------------------------------------------------|
| `s`      | `stream_t*` | 由 `stream_DemuxNew()` 创建的流句柄。                                 |
| `int`    | `int`     | 控制请求的类型，通常是 DEMUX_... 系列的控制命令。                     |
| `va_list`| `va_list` | 可变参数列表，包含控制请求所需的参数。                                |

### 函数返回值
- **成功**：返回 `0` 或正整数，表示操作成功。
- **失败**：返回负数，表示操作失败。具体的错误码取决于控制请求的类型和执行情况。
## stream_DemuxControl {#stream_DemuxControl}

```c
static inline int stream_DemuxControl(stream_t *s, int query, ...)
{
    va_list ap;
    int ret;

    va_start(ap, query);
    ret = stream_DemuxControlVa(s, query, ap);
    va_end(ap);
    return ret;
}
```

### 函数描述
`stream_DemuxControl` 是一个内联函数，用于对流进行解复用控制操作。它通过可变参数列表来传递控制查询和相关参数，并将这些参数传递给 `stream_DemuxControlVa` 函数进行处理。

### 函数参数说明

| 参数名 | 类型     | 描述                                                                 |
|--------|----------|--------------------------------------------------------------------------|
| `s`    | `stream_t *` | 指向 `stream_t` 结构体的指针，表示要进行解复用控制的流。 |
| `query`| `int`        | 控制查询的类型，表示要执行的具体操作。                     |
| `...`  | `va_list`    | 可变参数列表，包含与查询相关的其他参数。                   |

### 函数返回值
- `ret`：函数的返回值，表示操作的结果。具体的返回值取决于 `stream_DemuxControlVa` 函数的实现。通常情况下，返回值为 `0` 表示操作成功，非零值表示操作失败或出现错误。
## stream_MemoryNew {#stream_MemoryNew}

```c
VLC_API stream_t * stream_MemoryNew(vlc_object_t *p_obj, uint8_t *p_buffer, uint64_t i_size, bool b_preserve_memory);
```

### 描述
创建一个从内存中读取数据的 `stream_t`。你必须使用 `stream_Delete` 来删除它。

### 函数参数说明

| 参数名               | 类型          | 描述                                                                 |
|----------------------|---------------|----------------------------------------------------------------------|
| `p_obj`              | `vlc_object_t *` | VLC 对象指针，通常是 `libvlc_instance_t` 或 `libvlc_media_player_t`。 |
| `p_buffer`           | `uint8_t *`     | 指向内存缓冲区的指针，数据将从该缓冲区中读取。                       |
| `i_size`             | `uint64_t`      | 缓冲区的大小，以字节为单位。                                         |
| `b_preserve_memory`  | `bool`          | 如果为 `true`，则保留内存缓冲区；如果为 `false`，则允许 VLC 释放缓冲区。 |

### 函数返回值
- 成功时返回一个指向新创建的 `stream_t` 的指针。
- 如果创建失败，则返回 `NULL`。
## stream_UrlNew {#stream_UrlNew}

```c
VLC_API stream_t * stream_UrlNew(vlc_object_t *p_this, const char *psz_url);
```

### 描述
创建一个从URL读取数据的 `stream_t` 对象。你必须使用 `stream_Delete` 函数来删除它。

### 函数参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|--------------------------------------------------------------------------|
| `p_this`  | `vlc_object_t*` | VLC对象指针，通常是当前模块的父对象。                                       |
| `psz_url` | `const char*`  | 要读取的URL字符串。                                                       |

### 函数返回值
- **成功**：返回一个指向新创建的 `stream_t` 对象的指针。
- **失败**：返回 `NULL`，表示创建失败。
## stream_FilterNew {#stream_FilterNew}

```c
VLC_API stream_t* stream_FilterNew( stream_t *p_source, const char *psz_stream_filter );
```

### 描述
尝试将一个流过滤器添加到一个已打开的流中。

### 函数参数说明

| 参数名               | 类型          | 描述                                                                 |
|----------------------|---------------|--------------------------------------------------------------------------|
| `p_source`           | `stream_t*`   | 已打开的流对象，过滤器将附加到此流上。                                       |
| `psz_stream_filter`  | `const char*` | 要添加的流过滤器的名称。如果为 `NULL`，则不添加任何过滤器。                   |

### 函数返回值
- **`stream_t*`**: 返回一个新的流对象，该对象包含附加的过滤器。如果过滤器无法添加，则返回 `NULL`。
## stream_t {#stream_t}

```c
struct stream_t
{
    VLC_COMMON_MEMBERS
    bool        b_error;

    /* Module properties for stream filter */
    module_t    *p_module;

    char        *psz_access;
    /* Real or virtual path (it can only be changed during stream_t opening) */
    char        *psz_path;

    /* Stream source for stream filter */
    stream_t *p_source;

    /* */
    int      (*pf_read)   ( stream_t *, void *p_read, unsigned int i_read );
    int      (*pf_peek)   ( stream_t *, const uint8_t **pp_peek, unsigned int i_peek );
    int      (*pf_control)( stream_t *, int i_query, va_list );

    /* */
    void     (*pf_destroy)( stream_t *);

    /* Private data for module */
    stream_sys_t *p_sys;

    /* Text reader state */
    stream_text_t *p_text;

    /* Weak link to parent input */
    input_thread_t *p_input;
};
```

### 描述
`stream_t` 结构体定义了一个流对象，用于表示一个数据流。该结构体包含了流的各个属性，如错误状态、模块属性、访问路径、源流、读取和控制函数指针、销毁函数指针、模块私有数据、文本读取状态以及父输入线程的弱链接。

### 成员说明

| 成员变量       | 类型           | 描述                                                                 |
|----------------|----------------|--------------------------------------------------------------------------|
| `VLC_COMMON_MEMBERS` | -              | VLC 公共成员，通常包含一些通用的成员变量和函数指针。                     |
| `b_error`      | `bool`         | 表示流是否处于错误状态。                                                 |
| `p_module`     | `module_t*`    | 指向流的模块对象，用于流过滤器。                                         |
| `psz_access`   | `char*`        | 流的访问方式，如 "file"、"http" 等。                                     |
| `psz_path`     | `char*`        | 流的实际或虚拟路径，只能在 `stream_t` 打开时更改。                       |
| `p_source`     | `stream_t*`    | 指向流的源流对象，用于流过滤器。                                         |
| `pf_read`      | `int (*)(stream_t*, void*, unsigned int)` | 读取数据的函数指针。 |
| `pf_peek`      | `int (*)(stream_t*, const uint8_t**, unsigned int)` | 窥视数据的函数指针。 |
| `pf_control`   | `int (*)(stream_t*, int, va_list)` | 控制流的函数指针。       |
| `pf_destroy`   | `void (*)(stream_t*)` | 销毁流的函数指针。       |
| `p_sys`        | `stream_sys_t*` | 模块的私有数据。                                                         |
| `p_text`       | `stream_text_t*` | 文本读取器的状态。                                                       |
| `p_input`      | `input_thread_t*` | 指向父输入线程的弱链接。                                                 |

### 返回值
该结构体本身不返回值，它定义了一个流对象的结构。具体的函数指针（如 `pf_read`、`pf_peek`、`pf_control`、`pf_destroy`）的返回值取决于它们的实现。
