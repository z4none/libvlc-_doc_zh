## sout_AccessOutDelete {#sout_AccessOutDelete}

```c
VLC_API void sout_AccessOutDelete( sout_access_out_t * );
```

### 描述
该函数用于删除一个输出访问模块。它释放与给定输出访问模块相关的所有资源。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `sout_access_out_t *` | 输入 | 指向要删除的输出访问模块的指针。 |

### 函数返回值
该函数没有返回值。
## sout_AccessOutSeek {#sout_AccessOutSeek}

```c
VLC_API int sout_AccessOutSeek( sout_access_out_t *p_access, off_t i_pos );
```

### 描述
该函数用于在输出访问模块中进行定位操作。它允许在输出流中设置当前位置，类似于文件指针的定位操作。

### 函数参数说明

| 参数名       | 类型                | 描述                                                         |
|--------------|---------------------|--------------------------------------------------------------|
| `p_access`   | `sout_access_out_t*` | 指向输出访问模块的指针，表示要进行定位操作的输出流。         |
| `i_pos`      | `off_t`             | 表示要定位到的位置，通常是一个偏移量，单位为字节。           |

### 函数返回值

- **成功**：返回 `0`，表示定位操作成功完成。
- **失败**：返回 `-1`，表示定位操作失败，可能由于无效的偏移量或其他错误。
## sout_AccessOutRead {#sout_AccessOutRead}

```c
VLC_API ssize_t sout_AccessOutRead( sout_access_out_t *p_access, block_t *p_block );
```

### 描述
该函数用于从输出访问模块中读取数据块。它尝试从输出访问模块中读取数据，并将其存储在提供的 `block_t` 结构中。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_access`   | `sout_access_out_t*` | 指向输出访问模块的指针，表示要从中读取数据的模块。                     |
| `p_block`    | `block_t*`           | 指向 `block_t` 结构的指针，用于存储从输出访问模块中读取的数据块。      |

### 函数返回值
- 如果成功读取数据，返回读取的字节数。
- 如果发生错误或没有数据可读，返回 `-1`。
## sout_AccessOutWrite {#sout_AccessOutWrite}

```c
VLC_API ssize_t sout_AccessOutWrite( sout_access_out_t *p_access, block_t *p_buffer );
```

### 描述
该函数用于将数据块写入输出访问模块。它将一个 `block_t` 结构的数据块传递给指定的输出访问模块，并返回实际写入的字节数。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_access`   | `sout_access_out_t*` | 指向输出访问模块的指针，表示要写入的目标模块。                        |
| `p_buffer`   | `block_t*`           | 指向要写入的数据块的指针，包含要写入的数据及其相关信息。              |

### 函数返回值
- **成功**：返回实际写入的字节数（非负值）。
- **失败**：返回 `-1`，表示写入失败。
## sout_AccessOutControl {#sout_AccessOutControl}

```c
VLC_API int sout_AccessOutControl( sout_access_out_t *p_access, int i_query, ... );
```

### 描述
该函数用于控制流输出访问模块。它允许通过查询和参数来控制流输出访问模块的行为。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_access`   | `sout_access_out_t*` | 指向流输出访问模块的指针，表示要控制的模块。                         |
| `i_query`    | `int`               | 查询类型，表示要执行的控制操作。具体查询类型取决于模块的实现。       |
| `...`        | `...`               | 可变参数列表，根据不同的查询类型传递不同的参数。                     |

### 函数返回值
- `0`：操作成功。
- `-1`：操作失败。

该函数根据不同的查询类型返回不同的结果，具体返回值取决于模块的实现。
## sout_AccessOutCanControlPace {#sout_AccessOutCanControlPace}

```c
static inline bool sout_AccessOutCanControlPace( sout_access_out_t *p_ao )
```

### 函数描述
该函数用于检查是否可以通过 `sout_AccessOutControl` 函数控制输出流的节奏（pace）。如果可以控制节奏，则返回 `true`，否则返回 `false`。

### 函数参数说明

| 参数名 | 类型                | 描述                         |
|--------|---------------------|------------------------------|
| `p_ao` | `sout_access_out_t*` | 指向输出流访问对象的指针。   |

### 函数返回值
- **`true`**: 如果可以通过 `sout_AccessOutControl` 函数控制输出流的节奏。
- **`false`**: 如果无法控制输出流的节奏。
## sout_MuxDeleteStream {#sout_MuxDeleteStream}

```c
VLC_API void sout_MuxDeleteStream( sout_mux_t *p_mux, sout_input_t *p_input );
```

### 描述
该函数用于从多路复用器中删除一个流。

### 函数参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|----------------------------------------------------------------------|
| `p_mux`   | `sout_mux_t *` | 指向多路复用器对象的指针。该对象表示正在使用的多路复用器。           |
| `p_input` | `sout_input_t *` | 指向要删除的输入流的指针。该对象表示要从多路复用器中删除的输入流。 |

### 函数返回值
该函数没有返回值。
## sout_MuxDelete {#sout_MuxDelete}

```c
VLC_API void sout_MuxDelete( sout_mux_t *p_mux );
```

### 描述
该函数用于删除一个流复用器（muxer）。它释放与给定流复用器相关的所有资源，并将其从系统中移除。

### 函数参数说明

| 参数名 | 类型       | 描述                                                         |
|--------|------------|--------------------------------------------------------------|
| p_mux  | sout_mux_t*| 指向要删除的流复用器对象的指针。该对象将被释放并从系统中移除。|

### 函数返回值
该函数没有返回值。
## sout_MuxSendBuffer {#sout_MuxSendBuffer}

```c
VLC_API int sout_MuxSendBuffer( sout_mux_t *p_mux, sout_input_t *p_input, block_t *p_buffer );
```

### 函数描述
该函数用于将数据块发送到输出复用器（muxer）。它将指定的数据块传递给复用器的输入流，以便进行进一步的处理和复用。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| `p_mux`   | `sout_mux_t *` | 指向输出复用器对象的指针，表示要发送数据块的目标复用器。 |
| `p_input` | `sout_input_t *` | 指向输入流对象的指针，表示数据块所属的输入流。 |
| `p_buffer`| `block_t *`    | 指向数据块对象的指针，表示要发送的数据块。 |

### 函数返回值

- **`0`**: 表示数据块成功发送到复用器。
- **`-1`**: 表示发送数据块时发生错误。
## sout_MuxGetStream {#sout_MuxGetStream}

```c
VLC_API int sout_MuxGetStream(sout_mux_t *p_mux, int i_blocks, mtime_t *pi_dts);
```

### 描述
该函数用于从多路复用器（muxer）中获取流数据。它允许从多路复用器中读取指定数量的块（blocks），并返回这些块的时间戳（DTS）。

### 函数参数说明

| 参数名       | 类型       | 描述                                                                 |
|--------------|------------|--------------------------------------------------------------------|
| `p_mux`      | `sout_mux_t *` | 指向多路复用器对象的指针。多路复用器用于将多个输入流合并为一个输出流。 |
| `i_blocks`   | `int`      | 要获取的块的数量。指定要从多路复用器中读取的块的数量。               |
| `pi_dts`     | `mtime_t *` | 指向存储时间戳（DTS）的变量的指针。函数将返回这些块的时间戳。        |

### 函数返回值

- **返回值为正数**：表示成功获取的块的数量。返回值可能小于或等于 `i_blocks`，具体取决于多路复用器中可用的块的数量。
- **返回值为0**：表示没有可用的块。
- **返回值为负数**：表示发生了错误。具体的负数值可能表示不同的错误类型，需要根据具体的错误码进行处理。
## sout_MuxControl {#sout_MuxControl}

```c
static inline int sout_MuxControl( sout_mux_t *p_mux, int i_query, ... )
```

### 函数描述
`sout_MuxControl` 函数用于向多路复用器（muxer）发送控制查询。该函数通过可变参数列表传递查询参数，并调用多路复用器的控制函数来处理查询。

### 函数参数说明

| 参数名   | 类型       | 描述                                                                 |
|----------|------------|--------------------------------------------------------------------|
| `p_mux`  | `sout_mux_t *` | 指向多路复用器对象的指针，表示要进行控制操作的多路复用器。            |
| `i_query`| `int`        | 控制查询的类型，表示要执行的具体控制操作。                            |
| `...`    | `...`        | 可变参数列表，包含控制查询所需的额外参数。                            |

### 函数返回值
- `i_result`：函数的返回值，表示控制查询的结果。返回值的具体含义取决于 `i_query` 的类型和多路复用器的实现。通常情况下，返回值为 0 表示操作成功，非 0 值表示操作失败或出现错误。
## sout_StreamChainDelete {#sout_StreamChainDelete}

```c
VLC_API void sout_StreamChainDelete(sout_stream_t *p_first, sout_stream_t *p_last);
```

### 描述
该函数用于删除一个流链。流链是由多个流模块组成的链式结构，通常用于处理多媒体数据的输出。`sout_StreamChainDelete` 函数会释放链中所有模块的资源，并删除整个链。

### 函数参数说明

| 参数名       | 类型            | 描述                                                                 |
|--------------|-----------------|----------------------------------------------------------------------|
| `p_first`    | `sout_stream_t*` | 指向流链中第一个模块的指针。如果链中只有一个模块，`p_last` 应为 `NULL`。 |
| `p_last`     | `sout_stream_t*` | 指向流链中最后一个模块的指针。如果链中只有一个模块，可以为 `NULL`。     |

### 函数返回值
该函数没有返回值。
## sout_StreamIdDel {#sout_StreamIdDel}

```c
static inline int sout_StreamIdDel( sout_stream_t *s, sout_stream_id_sys_t *id )
```

### 函数描述
该函数用于从流中删除指定的流ID。它通过调用流结构中的 `pf_del` 函数指针来实现删除操作。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `s`    | `sout_stream_t *` | 指向流结构的指针，表示要操作的流。 |
| `id`   | `sout_stream_id_sys_t *` | 指向要删除的流ID的指针。 |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - 如果成功删除流ID，则返回 `0`。
  - 如果删除失败，则返回一个非零值，表示错误代码。
## sout_StreamIdSend {#sout_StreamIdSend}

```c
static inline int sout_StreamIdSend(sout_stream_t *s, sout_stream_id_sys_t *id, block_t *b)
{
    return s->pf_send(s, id, b);
}
```

### 描述
该函数用于将数据块发送到指定的流ID。它通过调用 `s->pf_send` 函数来实现数据的发送。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `s` | `sout_stream_t *` | 指向 `sout_stream_t` 结构体的指针，表示流对象。 |
| `id` | `sout_stream_id_sys_t *` | 指向 `sout_stream_id_sys_t` 结构体的指针，表示流ID。 |
| `b` | `block_t *` | 指向 `block_t` 结构体的指针，表示要发送的数据块。 |

### 函数返回值
该函数返回 `s->pf_send` 函数的返回值，具体返回值取决于 `s->pf_send` 函数的实现。通常情况下，返回值为 `0` 表示成功，非零值表示失败。
## sout_EncoderCreate {#sout_EncoderCreate}

```c
VLC_API encoder_t * sout_EncoderCreate( vlc_object_t *obj );
```

### 描述
该函数用于创建一个新的编码器实例。编码器实例用于将输入的媒体数据编码为指定的格式。

### 函数参数说明

| 参数名 | 类型          | 描述                                                         |
| ------ | ------------- | ------------------------------------------------------------ |
| obj    | vlc_object_t* | 指向 VLC 对象的指针，通常是 `vlc_object_t` 类型的实例。该对象用于管理编码器的生命周期和资源。 |

### 函数返回值
- **成功**：返回一个指向新创建的 `encoder_t` 结构体的指针。
- **失败**：返回 `NULL`，表示编码器创建失败。可能的原因包括内存不足或初始化错误。
## sout_AnnounceUnRegister {#sout_AnnounceUnRegister}

```c
VLC_API int sout_AnnounceUnRegister(vlc_object_t *p_this, session_descriptor_t *p_session);
```

### 描述
该函数用于注销一个会话描述符。它从流输出模块中移除指定的会话描述符，并释放相关资源。

### 函数参数说明

| 参数名       | 类型                  | 描述                                                                 |
|--------------|-----------------------|--------------------------------------------------------------------------|
| `p_this`     | `vlc_object_t *`       | VLC 对象指针，通常是调用该函数的模块的指针。                             |
| `p_session`  | `session_descriptor_t*`| 指向要注销的会话描述符的指针。该描述符将被从流输出模块中移除并释放。   |

### 函数返回值

- **返回值为 `0`**: 表示会话描述符成功注销。
- **返回值为 `-1`**: 表示注销操作失败，可能是由于会话描述符无效或未注册。
## sdp_AddMedia {#sdp_AddMedia}

```c
VLC_API char * sdp_AddMedia(char **sdp, const char *type, const char *protocol, int dport, unsigned pt, bool bw_indep, unsigned bw, const char *ptname, unsigned clockrate, unsigned channels, const char *fmtp);
```

### 函数描述
该函数用于向现有的 SDP（Session Description Protocol）描述中添加一个新的媒体描述。SDP 是一种用于描述多媒体会话的协议，通常用于在网络中传输音频和视频数据。

### 函数参数说明

| 参数名     | 类型          | 描述                                                                 |
|------------|---------------|--------------------------------------------------------------------------|
| `sdp`      | `char **`     | 指向 SDP 描述字符串的指针的指针。函数将修改此字符串以包含新的媒体描述。|
| `type`     | `const char *`| 媒体类型，例如 "audio" 或 "video"。                                  |
| `protocol` | `const char *`| 媒体传输协议，例如 "RTP/AVP" 或 "UDP"。                              |
| `dport`    | `int`         | 媒体数据传输的目标端口号。                                           |
| `pt`       | `unsigned`    | 媒体负载类型（Payload Type）。                                        |
| `bw_indep` | `bool`        | 带宽指示器是否独立。如果为 `true`，表示带宽独立；否则为 `false`。     |
| `bw`       | `unsigned`    | 带宽值，单位为 kbps。                                                 |
| `ptname`   | `const char *`| 负载类型的名称，例如 "PCMU" 或 "H264"。                               |
| `clockrate`| `unsigned`    | 媒体时钟速率，例如音频的采样率。                                      |
| `channels` | `unsigned`    | 媒体通道数，例如音频的声道数。                                        |
| `fmtp`     | `const char *`| 格式特定参数（Format-specific parameters），用于描述媒体的附加信息。  |

### 函数返回值
- 如果成功添加媒体描述，函数返回指向新 SDP 描述字符串的指针。
- 如果发生错误（例如内存分配失败），函数返回 `NULL`。
## sout_instance_t {#sout_instance_t}

```c
struct sout_instance_t
{
    VLC_COMMON_MEMBERS

    char *psz_sout;

    int i_out_pace_nocontrol;

    vlc_mutex_t lock;
    sout_stream_t *p_stream;
};
```

### 描述
`sout_instance_t` 结构体定义了一个流输出实例。该结构体包含了与流输出相关的各种成员变量，用于管理和控制流输出的行为。

### 成员变量说明

| 成员变量名            | 类型          | 描述                                                                 |
|-----------------------|---------------|--------------------------------------------------------------------------|
| `VLC_COMMON_MEMBERS`   | 宏定义        | VLC 公共成员，包含一些通用的成员变量和函数指针。                        |
| `psz_sout`             | `char *`      | 指向流输出配置字符串的指针。                                             |
| `i_out_pace_nocontrol` | `int`         | 无法控制空间输出的计数。                                                 |
| `lock`                 | `vlc_mutex_t` | 用于同步访问的互斥锁。                                                   |
| `p_stream`             | `sout_stream_t *` | 指向流输出流的指针，用于管理和控制流输出的具体行为。 |

### 返回值
该结构体定义了一个数据结构，没有返回值。
## sout_access_out_t {#sout_access_out_t}

```c
struct sout_access_out_t
{
    VLC_COMMON_MEMBERS

    module_t                *p_module;
    char                    *psz_access;

    char                    *psz_path;
    sout_access_out_sys_t   *p_sys;
    int                     (*pf_seek)( sout_access_out_t *, off_t );
    ssize_t                 (*pf_read)( sout_access_out_t *, block_t * );
    ssize_t                 (*pf_write)( sout_access_out_t *, block_t * );
    int                     (*pf_control)( sout_access_out_t *, int, va_list );

    config_chain_t          *p_cfg;
};
```

### 描述
`sout_access_out_t` 结构体用于定义流输出访问的接口。它包含了与流输出访问相关的各种成员和函数指针，用于处理流的读取、写入、定位和控制操作。

### 成员说明

| 成员名称       | 类型                        | 描述                                                                 |
|----------------|-----------------------------|----------------------------------------------------------------------|
| `p_module`     | `module_t*`                 | 指向模块的指针，用于加载和卸载模块。                                   |
| `psz_access`   | `char*`                     | 访问方法的名称，例如 "file" 或 "http"。                                |
| `psz_path`     | `char*`                     | 访问路径，例如文件路径或 URL。                                        |
| `p_sys`        | `sout_access_out_sys_t*`    | 指向访问输出系统特定数据的指针。                                       |
| `pf_seek`      | `int (*)(sout_access_out_t*, off_t)` | 指向定位函数的指针，用于在流中定位到指定位置。                         |
| `pf_read`      | `ssize_t (*)(sout_access_out_t*, block_t*)` | 指向读取函数的指针，用于从流中读取数据。                               |
| `pf_write`     | `ssize_t (*)(sout_access_out_t*, block_t*)` | 指向写入函数的指针，用于向流中写入数据。                               |
| `pf_control`   | `int (*)(sout_access_out_t*, int, va_list)` | 指向控制函数的指针，用于执行与流相关的控制操作。                       |
| `p_cfg`        | `config_chain_t*`           | 指向配置链表的指针，用于存储与访问输出相关的配置选项。                 |

### 返回值
该结构体本身不返回值，它定义了一个接口，具体的函数指针指向的函数会根据实现返回相应的值。例如：

- `pf_seek` 返回定位操作的结果，成功时返回 `0`，失败时返回负值。
- `pf_read` 返回读取的字节数，如果读取失败则返回 `-1`。
- `pf_write` 返回写入的字节数，如果写入失败则返回 `-1`。
- `pf_control` 返回控制操作的结果，成功时返回 `0`，失败时返回负值。
## sout_mux_t {#sout_mux_t}

```c
struct sout_mux_t
{
    VLC_COMMON_MEMBERS
    module_t            *p_module;

    sout_instance_t     *p_sout;

    char                *psz_mux;
    config_chain_t          *p_cfg;

    sout_access_out_t   *p_access;

    int                 (*pf_addstream)( sout_mux_t *, sout_input_t * );
    int                 (*pf_delstream)( sout_mux_t *, sout_input_t * );
    int                 (*pf_mux)      ( sout_mux_t * );
    int                 (*pf_control)  ( sout_mux_t *, int, va_list );

    int                 i_nb_inputs;
    sout_input_t        **pp_inputs;

    sout_mux_sys_t      *p_sys;

    bool  b_add_stream_any_time;
    bool  b_waiting_stream;
    mtime_t     i_add_stream_start;
};
```

### 描述
`sout_mux_t` 结构体定义了一个多路复用器（Muxer）的结构。多路复用器用于将多个输入流合并成一个输出流。该结构体包含了多路复用器的各种属性和操作函数。

### 成员变量说明

| 成员变量名                | 类型                  | 描述                                                                 |
|---------------------------|-----------------------|--------------------------------------------------------------------------|
| `VLC_COMMON_MEMBERS`       | -                     | VLC 公共成员，包含一些通用的字段和方法。                                  |
| `p_module`                 | `module_t*`           | 指向当前模块的指针。                                                     |
| `p_sout`                   | `sout_instance_t*`    | 指向输出实例的指针。                                                     |
| `psz_mux`                  | `char*`               | 多路复用器的名称。                                                       |
| `p_cfg`                    | `config_chain_t*`     | 配置链表，包含多路复用器的配置选项。                                     |
| `p_access`                 | `sout_access_out_t*`  | 指向访问输出模块的指针。                                                 |
| `pf_addstream`             | `int (*)(sout_mux_t*, sout_input_t*)` | 添加流的函数指针。 |
| `pf_delstream`             | `int (*)(sout_mux_t*, sout_input_t*)` | 删除流的函数指针。 |
| `pf_mux`                   | `int (*)(sout_mux_t*)` | 执行多路复用的函数指针。                                                 |
| `pf_control`               | `int (*)(sout_mux_t*, int, va_list)` | 控制多路复用器的函数指针。 |
| `i_nb_inputs`              | `int`                 | 输入流的个数。                                                           |
| `pp_inputs`                | `sout_input_t**`      | 指向输入流数组的指针。                                                   |
| `p_sys`                    | `sout_mux_sys_t*`     | 多路复用器的私有数据结构。                                               |
| `b_add_stream_any_time`    | `bool`                | 是否允许在任何时间添加流。                                               |
| `b_waiting_stream`         | `bool`                | 是否正在等待流。                                                         |
| `i_add_stream_start`       | `mtime_t`             | 添加第一个流后的开始时间。                                               |

### 返回值
该结构体本身没有返回值，因为它是一个定义多路复用器的数据结构。具体的返回值取决于结构体中函数指针所指向的函数。
## sout_input_t {#sout_input_t}

```c
struct sout_input_t
{
    es_format_t     *p_fmt;
    block_fifo_t    *p_fifo;
    void            *p_sys;
};
```

### 描述
`sout_input_t` 结构体用于定义流输出模块的输入参数。它包含了与输入流相关的格式、FIFO（先进先出队列）以及系统特定的数据。

### 结构体成员说明

| 成员变量 | 类型 | 描述 |
|----------|------|------|
| `p_fmt`  | `es_format_t*` | 指向 `es_format_t` 结构体的指针，用于描述输入流的格式。 |
| `p_fifo` | `block_fifo_t*` | 指向 `block_fifo_t` 结构体的指针，表示输入数据的FIFO队列。 |
| `p_sys`  | `void*`        | 指向系统特定数据的指针，用于存储与输入相关的额外信息。 |
## sout_stream_t {#sout_stream_t}

```c
struct sout_stream_t
{
    VLC_COMMON_MEMBERS

    module_t          *p_module;
    sout_instance_t   *p_sout;

    char              *psz_name;
    config_chain_t        *p_cfg;
    sout_stream_t     *p_next;

    /* add, remove a stream */
    sout_stream_id_sys_t *(*pf_add)( sout_stream_t *, es_format_t * );
    int               (*pf_del)( sout_stream_t *, sout_stream_id_sys_t * );
    /* manage a packet */
    int               (*pf_send)( sout_stream_t *, sout_stream_id_sys_t *, block_t* );

    sout_stream_sys_t *p_sys;
    bool pace_nocontrol;
};
```

### 描述
`sout_stream_t` 结构体定义了一个流输出模块的上下文。它包含了与流输出相关的各种成员变量和函数指针，用于管理流的添加、删除和数据包的发送。

### 成员变量说明

| 成员变量          | 类型                      | 描述                                                                 |
|-------------------|---------------------------|--------------------------------------------------------------------------|
| `p_module`        | `module_t *`              | 指向当前模块的指针。                                                     |
| `p_sout`          | `sout_instance_t *`       | 指向流输出实例的指针。                                                   |
| `psz_name`        | `char *`                  | 流的名称。                                                               |
| `p_cfg`           | `config_chain_t *`        | 配置链表，用于存储流的配置参数。                                         |
| `p_next`          | `sout_stream_t *`         | 指向下一个流输出模块的指针。                                             |
| `pf_add`          | `sout_stream_id_sys_t *(*)(sout_stream_t *, es_format_t *)` | 添加流的函数指针。 |
| `pf_del`          | `int (*)(sout_stream_t *, sout_stream_id_sys_t *)` | 删除流的函数指针。 |
| `pf_send`         | `int (*)(sout_stream_t *, sout_stream_id_sys_t *, block_t *)` | 发送数据包的函数指针。 |
| `p_sys`           | `sout_stream_sys_t *`     | 指向流输出系统特定数据的指针。                                           |
| `pace_nocontrol`  | `bool`                    | 指示是否控制流的速率。                                                   |

### 函数指针说明

#### `pf_add`
- **描述**: 添加一个流。
- **参数**:
  - `sout_stream_t *`: 指向当前流输出模块的指针。
  - `es_format_t *`: 指向流的格式描述的指针。
- **返回值**: 返回一个 `sout_stream_id_sys_t` 类型的指针，表示添加的流。

#### `pf_del`
- **描述**: 删除一个流。
- **参数**:
  - `sout_stream_t *`: 指向当前流输出模块的指针。
  - `sout_stream_id_sys_t *`: 指向要删除的流的指针。
- **返回值**: 返回一个整数，表示删除操作的结果。通常返回 `0` 表示成功，其他值表示失败。

#### `pf_send`
- **描述**: 发送一个数据包。
- **参数**:
  - `sout_stream_t *`: 指向当前流输出模块的指针。
  - `sout_stream_id_sys_t *`: 指向目标流的指针。
  - `block_t *`: 指向要发送的数据包的指针。
- **返回值**: 返回一个整数，表示发送操作的结果。通常返回 `0` 表示成功，其他值表示失败。
