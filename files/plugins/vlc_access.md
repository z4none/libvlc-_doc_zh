## access_vaControl {#access_vaControl}

```c
static inline int access_vaControl(access_t *p_access, int i_query, va_list args)
```

### 描述
该函数用于对访问模块进行控制操作。它通过调用访问模块的控制函数 `pf_control` 来执行具体的控制操作。如果传入的访问模块指针 `p_access` 为空，则返回通用错误码 `VLC_EGENERIC`。

### 函数参数说明

| 参数名    | 类型      | 描述                                                                 |
|-----------|-----------|--------------------------------------------------------------------------|
| p_access  | access_t* | 指向访问模块的指针，表示要进行控制操作的访问模块。如果为空，则返回错误。|
| i_query   | int       | 控制操作的查询类型，表示要执行的具体控制操作。                           |
| args      | va_list   | 可变参数列表，包含控制操作所需的参数。                                   |

### 函数返回值
- **VLC_SUCCESS**：如果控制操作成功执行。
- **VLC_EGENERIC**：如果传入的访问模块指针 `p_access` 为空，或者控制操作失败。
## access_Control {#access_Control}

```c
static inline int access_Control(access_t *p_access, int i_query, ...)
```

### 描述
`access_Control` 函数用于对访问控制进行操作。它通过可变参数列表来处理不同的查询类型。该函数内部调用了 `access_vaControl` 函数来执行具体的操作，并返回操作结果。

### 函数参数说明

| 参数名    | 类型      | 描述                                                                 |
|-----------|-----------|----------------------------------------------------------------------|
| `p_access`| `access_t*`| 指向 `access_t` 结构体的指针，表示访问控制对象。                     |
| `i_query` | `int`     | 查询类型，表示要执行的操作类型。                                     |
| `...`     | `...`     | 可变参数列表，根据 `i_query` 的不同，可能需要传递不同的参数。        |

### 函数返回值
- `int`: 返回操作的结果。具体的返回值取决于 `access_vaControl` 函数的执行结果。通常情况下，返回值为 `0` 表示操作成功，非零值表示操作失败或出现错误。
## access_GetSize {#access_GetSize}

```c
static inline uint64_t access_GetSize(access_t *p_access)
```

### 函数描述
该函数用于获取访问对象的大小。它通过调用 `access_Control` 函数来获取大小，如果获取失败则返回 0。

### 函数参数说明

| 参数名    | 类型      | 描述                   |
|-----------|-----------|------------------------|
| `p_access`| `access_t*`| 指向访问对象的指针     |

### 函数返回值
- **返回值类型**: `uint64_t`
- **返回值说明**:
  - 如果成功获取访问对象的大小，则返回该大小。
  - 如果获取失败，则返回 0。
## access_InitFields {#access_InitFields}

```c
static inline void access_InitFields(access_t *p_a)
```

### 函数描述
该函数用于初始化 `access_t` 结构体中的字段。它将 `info.i_pos` 设置为 0，并将 `info.b_eof` 设置为 `false`。

### 函数参数说明

| 参数名 | 类型      | 描述               |
|--------|-----------|--------------------|
| `p_a`  | `access_t*` | 指向 `access_t` 结构体的指针，该结构体需要进行字段初始化。 |

### 函数返回值
该函数没有返回值。

## access_InitFields {#access_InitFields1}

```c
void access_InitFields( access_t *p_access );
```

### 描述
该函数用于初始化访问字段的结构。它将访问结构中的所有字段设置为默认值。

### 函数参数说明

| 参数名    | 类型       | 描述                       |
|-----------|------------|----------------------------|
| `p_access`| `access_t*`| 指向访问结构体的指针，该结构体将被初始化。|

### 函数返回值
该函数没有返回值。
## ACCESS_SET_CALLBACKS {#ACCESS_SET_CALLBACKS1}

```c
void ACCESS_SET_CALLBACKS(Read, NULL, Control, Seek);
```

### 描述
该函数用于设置访问操作的回调函数。通过调用此函数，可以为读取、控制和查找操作指定相应的回调函数。

### 函数参数说明

| 参数名   | 类型       | 描述                                                                 |
|----------|------------|--------------------------------------------------------------------|
| Read     | 函数指针   | 指向读取操作的回调函数。回调函数应具有适当的签名，以处理读取请求。 |
| NULL     | 常量       | 表示不设置写入操作的回调函数。                                     |
| Control  | 函数指针   | 指向控制操作的回调函数。回调函数应具有适当的签名，以处理控制请求。 |
| Seek     | 函数指针   | 指向查找操作的回调函数。回调函数应具有适当的签名，以处理查找请求。 |

### 函数返回值
该函数没有返回值。
## access_InitFields {#access_InitFields2}

```c
void access_InitFields( access_t *p_access );
```

### 函数描述
该函数用于初始化访问字段的结构。它将访问结构中的所有字段设置为默认值。

### 函数参数说明

| 参数名    | 类型       | 描述                 |
|-----------|------------|----------------------|
| `p_access`| `access_t*`| 指向访问结构体的指针 |

### 函数返回值
该函数没有返回值。
## ACCESS_SET_CALLBACKS {#ACCESS_SET_CALLBACKS}

```c
void ACCESS_SET_CALLBACKS(void *user_data, BlockFunc Block, ControlFunc Control, SeekFunc Seek);
```

### 描述
该函数用于设置访问回调函数。通过调用此函数，用户可以指定在访问操作中使用的回调函数。这些回调函数包括块操作、控制操作和查找操作。

### 函数参数说明

| 参数名       | 类型          | 描述                                                                 |
|--------------|---------------|--------------------------------------------------------------------------|
| user_data    | `void *`      | 用户数据指针，将在回调函数中传递给用户。通常用于传递上下文信息。 |
| Block        | `BlockFunc`   | 块操作回调函数。用于处理数据块的读取或写入操作。             |
| Control      | `ControlFunc` | 控制操作回调函数。用于处理访问控制相关的操作。               |
| Seek         | `SeekFunc`    | 查找操作回调函数。用于处理查找操作，通常用于定位数据块。     |

### 函数返回值
该函数没有返回值。
## access_t {#access_t}

```c
struct access_t
{
    VLC_COMMON_MEMBERS

    /* Module properties */
    module_t    *p_module;

    /* Access name (empty if non forced) */
    char        *psz_access;
    char        *psz_location; /**< Location (URL with the scheme stripped) */
    char        *psz_filepath; /**< Local file path (if applicable) */

    /* Access can fill this entry to force a demuxer
     * XXX: fill it once you know for sure you will succeed
     * (if you fail, this value won't be reseted */
    char        *psz_demux;

    /* pf_read/pf_block is used to read data.
     * XXX A access should set one and only one of them */
    ssize_t     (*pf_read) ( access_t *, uint8_t *, size_t );  /* Return -1 if no data yet, 0 if no more data, else real data read */
    block_t    *(*pf_block)( access_t * );                  /* return a block of data in his 'natural' size, NULL if not yet data or eof */

    /* Called for each seek.
     * XXX can be null */
    int         (*pf_seek) ( access_t *, uint64_t );         /* can be null if can't seek */

    /* Used to retreive and configure the access
     * XXX mandatory. look at access_query_e to know what query you *have to* support */
    int         (*pf_control)( access_t *, int i_query, va_list args);

    /* Access has to maintain them uptodate */
    struct
    {
        uint64_t     i_pos;     /* idem */
        bool         b_eof;     /* idem */
    } info;
    access_sys_t *p_sys;

    /* Weak link to parent input */
    input_thread_t *p_input;
};
```

### 描述
`access_t` 结构体定义了访问模块的属性、名称、位置、文件路径等信息。它还包含了用于读取数据、定位、控制访问的函数指针。此外，结构体中还维护了当前的读取位置和是否到达文件末尾的状态信息。

### 成员说明

| 成员名称       | 类型                | 描述                                                                 |
|----------------|---------------------|----------------------------------------------------------------------|
| `p_module`     | `module_t*`         | 模块属性                                                             |
| `psz_access`   | `char*`             | 访问名称（如果未强制则为空）                                         |
| `psz_location` | `char*`             | 位置（URL 去掉 scheme 后的部分）                                     |
| `psz_filepath` | `char*`             | 本地文件路径（如果适用）                                             |
| `psz_demux`    | `char*`             | 强制使用的解复用器名称                                               |
| `pf_read`      | `ssize_t (*)(access_t*, uint8_t*, size_t)` | 读取数据的函数指针，返回 -1 表示无数据，0 表示无更多数据，否则返回实际读取的数据量 |
| `pf_block`     | `block_t* (*)(access_t*)` | 返回数据块的函数指针，返回 NULL 表示无数据或已到达文件末尾            |
| `pf_seek`      | `int (*)(access_t*, uint64_t)` | 定位函数指针，可以为 NULL 如果无法定位                                |
| `pf_control`   | `int (*)(access_t*, int, va_list)` | 用于检索和配置访问的函数指针，必须支持 `access_query_e` 中的查询      |
| `info`         | `struct`            | 包含当前读取位置和是否到达文件末尾的状态信息                         |
| `p_sys`        | `access_sys_t*`     | 访问系统特定的数据结构                                               |
| `p_input`      | `input_thread_t*`   | 指向父输入线程的弱链接                                               |

### 返回值
该结构体本身没有返回值，但其中的函数指针有返回值：

- `pf_read`: 返回 -1 表示无数据，0 表示无更多数据，否则返回实际读取的数据量。
- `pf_block`: 返回数据块，NULL 表示无数据或已到达文件末尾。
- `pf_seek`: 返回定位操作的结果，通常为 0 表示成功，非 0 表示失败。
- `pf_control`: 返回控制操作的结果，通常为 0 表示成功，非 0 表示失败。
