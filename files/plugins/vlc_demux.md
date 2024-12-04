## demux_vaControlHelper {#demux_vaControlHelper}

```c
VLC_API int demux_vaControlHelper( stream_t *p_stream, int64_t i_start, int64_t i_end, int64_t i_bitrate, int i_align, int i_query, va_list args );
```

### 函数描述
`demux_vaControlHelper` 是一个用于处理解复用器（demuxer）控制查询的辅助函数。它通过可变参数列表（`va_list`）来处理各种查询请求。该函数通常用于解复用器模块中，帮助处理不同类型的控制查询。

### 函数参数说明

| 参数名    | 类型      | 描述                                                                 |
|-----------|-----------|----------------------------------------------------------------------|
| `p_stream`| `stream_t*`| 指向 `stream_t` 结构的指针，表示当前的流。                            |
| `i_start` | `int64_t` | 流的起始位置，通常以字节为单位。                                      |
| `i_end`   | `int64_t` | 流的结束位置，通常以字节为单位。                                      |
| `i_bitrate`| `int64_t` | 流的比特率，通常以比特每秒（bps）为单位。                             |
| `i_align` | `int`     | 对齐参数，用于某些特定的查询。                                        |
| `i_query` | `int`     | 查询类型，表示要执行的具体查询操作。                                  |
| `args`    | `va_list` | 可变参数列表，包含查询所需的额外参数。                                |

### 函数返回值
- `int` 类型，表示函数执行的结果。
  - `VLC_SUCCESS`：表示查询成功执行。
  - `VLC_EGENERIC`：表示查询失败，通常是因为不支持的查询类型或其他错误。
  - 其他值：可能表示其他特定的错误情况，具体取决于查询类型和实现。
## demux_UpdateTitleFromStream {#demux_UpdateTitleFromStream}

```c
static inline void demux_UpdateTitleFromStream( demux_t *demux )
```

### 函数描述
该函数用于从流中更新解复用器（demuxer）的标题和查找点信息。它会检查当前流中的标题和查找点是否与解复用器中记录的信息不同，如果不同则更新解复用器的信息，并标记需要更新标题或查找点。

### 函数参数说明

| 参数名 | 类型    | 描述                 |
|--------|---------|----------------------|
| demux  | demux_t*| 指向解复用器结构的指针 |

### 函数返回值
该函数没有返回值（`void`）。
## demux_IsPathExtension {#demux_IsPathExtension}

```c
static inline bool demux_IsPathExtension( demux_t *p_demux, const char *psz_extension )
```

### 函数描述
该函数用于检查给定的 `demux_t` 对象的路径是否具有指定的文件扩展名。它会先检查 `p_demux` 对象中的 `psz_file` 字段，如果该字段为空，则检查 `psz_location` 字段。然后，函数会查找路径中的最后一个点（`.`），并将其后的字符串与指定的扩展名进行比较。如果扩展名匹配，则返回 `true`，否则返回 `false`。

### 函数参数说明

| 参数名          | 类型        | 描述                                                                 |
|-----------------|-------------|--------------------------------------------------------------------------|
| `p_demux`       | `demux_t*`  | 指向 `demux_t` 对象的指针，表示要检查的解复用器对象。                  |
| `psz_extension` | `const char*` | 指向以空字符结尾的字符串的指针，表示要检查的文件扩展名。               |

### 函数返回值
- **`true`**: 如果路径的扩展名与指定的扩展名匹配。
- **`false`**: 如果路径的扩展名与指定的扩展名不匹配，或者路径中没有扩展名。
## demux_IsForced {#demux_IsForced}

```c
static inline bool demux_IsForced(demux_t *p_demux, const char *psz_name)
```

### 函数描述
该函数用于检查指定的解复用器（demuxer）是否被强制使用。如果解复用器的名称与传入的名称匹配，则返回 `true`，否则返回 `false`。

### 函数参数说明

| 参数名    | 类型        | 描述                                                                 |
|-----------|-------------|----------------------------------------------------------------------|
| `p_demux` | `demux_t*`  | 指向解复用器结构体的指针，包含解复用器的相关信息。                     |
| `psz_name`| `const char*` | 指向要检查的解复用器名称的字符串指针。                                 |

### 函数返回值
- **`true`**: 如果解复用器的名称与传入的名称匹配。
- **`false`**: 如果解复用器的名称与传入的名称不匹配，或者解复用器的名称未设置。
## demux_PacketizerDestroy {#demux_PacketizerDestroy}

```c
VLC_API void demux_PacketizerDestroy( decoder_t *p_packetizer );
```

### 函数描述
该函数用于销毁由 `demux_PacketizerNew` 创建的解包器。

### 函数参数说明

| 参数名          | 类型       | 描述                                                         |
|-----------------|------------|--------------------------------------------------------------|
| `p_packetizer`  | `decoder_t*` | 指向要销毁的解包器的指针。该解包器是由 `demux_PacketizerNew` 创建的。 |

### 函数返回值
该函数没有返回值。
## demux_t {#demux_t}

```c
struct demux_t
{
    VLC_COMMON_MEMBERS

    /* Module properties */
    module_t    *p_module;

    /* eg informative but needed (we can have access+demux) */
    char        *psz_access;
    char        *psz_demux;
    char        *psz_location;
    char        *psz_file;

    /* input stream */
    stream_t    *s;     /* NULL in case of a access+demux in one */

    /* es output */
    es_out_t    *out;   /* our p_es_out */

    /* set by demuxer */
    int (*pf_demux)  ( demux_t * );   /* demux one frame only */
    int (*pf_control)( demux_t *, int i_query, va_list args);

    /* Demux has to maintain them uptodate
     * when it is responsible of seekpoint/title */
    struct
    {
        unsigned int i_update;  /* Demux sets them on change,
                                   Input removes them once take into account*/
        /* Seekpoint/Title at demux level */
        int          i_title;       /* idem, start from 0 (could be menu) */
        int          i_seekpoint;   /* idem, start from 0 */
    } info;
    demux_sys_t *p_sys;

    /* Weak link to parent input */
    input_thread_t *p_input;
};
```

### 描述
`demux_t` 结构体定义了一个解复用器（demuxer）的实例。它包含了与解复用器相关的各种属性和函数指针，用于处理输入流和输出流。

### 成员说明

| 成员名称       | 类型           | 描述                                                                 |
|----------------|----------------|--------------------------------------------------------------------------|
| `p_module`     | `module_t*`    | 指向模块的指针，用于加载和卸载模块。                                       |
| `psz_access`   | `char*`        | 访问方法的名称，例如 "file"、"http" 等。                                    |
| `psz_demux`    | `char*`        | 解复用方法的名称，例如 "avi"、"mp4" 等。                                    |
| `psz_location` | `char*`        | 文件或资源的位置。                                                         |
| `psz_file`     | `char*`        | 文件名。                                                                   |
| `s`            | `stream_t*`    | 指向输入流的指针，如果访问和解复用在一个模块中，则为 `NULL`。               |
| `out`          | `es_out_t*`    | 指向输出流的指针，用于输出解复用后的数据。                                 |
| `pf_demux`     | `int (*)(demux_t*)` | 解复用函数指针，用于解复用一帧数据。                                       |
| `pf_control`   | `int (*)(demux_t*, int, va_list)` | 控制函数指针，用于处理解复用器的控制命令。 |
| `info`         | `struct`       | 包含解复用器维护的信息，如标题和定位点。                                   |
| `p_sys`        | `demux_sys_t*` | 指向解复用器私有数据的指针。                                               |
| `p_input`      | `input_thread_t*` | 指向父输入线程的弱链接指针。                                               |

### 返回值
该结构体本身不返回值，但其中的函数指针 `pf_demux` 和 `pf_control` 返回整数值，表示操作的结果。通常返回 `0` 表示成功，非零值表示失败。
