## httpd_HostDelete {#httpd_HostDelete}

```c
VLC_API void httpd_HostDelete(httpd_host_t *host);
```

### 描述
该函数用于删除一个 HTTP 服务器主机。调用此函数后，指定的主机将被销毁，并且所有与之相关的资源将被释放。

### 参数说明

| 参数名 | 类型          | 描述                 |
|--------|---------------|----------------------|
| host   | httpd_host_t* | 指向要删除的 HTTP 服务器主机的指针。 |

### 返回值
该函数没有返回值。
## httpd_UrlCatch {#httpd_UrlCatch}

```c
VLC_API int httpd_UrlCatch(httpd_url_t *url, int i_msg, httpd_callback_t callback, httpd_callback_sys_t *sys);
```

### 描述
该函数用于在指定的 URL 上注册一个回调函数。当 HTTP 服务器接收到与该 URL 相关的特定消息时，将调用该回调函数。

### 参数说明

| 参数名    | 类型                  | 描述                                                                 |
|-----------|-----------------------|--------------------------------------------------------------------------|
| `url`     | `httpd_url_t *`       | 指向要注册回调的 URL 结构体的指针。                                     |
| `i_msg`   | `int`                 | 指定要捕获的消息类型。通常是 HTTP 请求类型，如 `HTTPD_MSG_HEAD` 或 `HTTPD_MSG_GET`。 |
| `callback`| `httpd_callback_t`    | 回调函数指针，当指定消息类型被捕获时将调用此函数。                     |
| `sys`     | `httpd_callback_sys_t *` | 指向回调函数使用的系统特定数据的指针。                                 |

### 返回值
- `0`：成功注册回调函数。
- `-1`：注册失败，可能是由于参数错误或内部错误。
## httpd_UrlDelete {#httpd_UrlDelete}

```c
VLC_API void httpd_UrlDelete(httpd_url_t *);
```

### 描述
该函数用于删除一个 HTTP 服务器中的 URL。删除后，该 URL 将不再可用。

### 函数参数说明

| 参数名        | 类型          | 描述               |
|---------------|---------------|--------------------|
| `httpd_url_t *` | `httpd_url_t *` | 指向要删除的 URL 结构体的指针。 |

### 函数返回值
该函数没有返回值。
## httpd_ClientIP {#httpd_ClientIP}

```c
VLC_API char* httpd_ClientIP( const httpd_client_t *cl, char *ip, int *port );
```

### 描述
该函数用于获取HTTP客户端的IP地址和端口号。它将客户端的IP地址和端口号存储在提供的缓冲区中。

### 函数参数说明

| 参数名 | 类型                  | 描述                                                                 |
|--------|-----------------------|--------------------------------------------------------------------------|
| cl     | const httpd_client_t* | 指向HTTP客户端结构的指针，表示要获取IP地址和端口号的客户端。 |
| ip     | char*                 | 用于存储客户端IP地址的缓冲区。缓冲区的大小应足够大以容纳IP地址。 |
| port   | int*                  | 用于存储客户端端口号的整数指针。如果不需要端口号，可以传递NULL。 |

### 函数返回值
- 返回值为`ip`参数的值，即存储客户端IP地址的缓冲区的指针。
- 如果函数执行成功，`ip`缓冲区将包含客户端的IP地址，`port`指针（如果非NULL）将包含客户端的端口号。
- 如果函数执行失败（例如，客户端结构无效），返回值可能为NULL或未定义的值。
## httpd_ServerIP {#httpd_ServerIP}

```c
VLC_API char* httpd_ServerIP( const httpd_client_t *cl, char *ip, int *port );
```

### 描述
该函数用于获取HTTP客户端的服务器IP地址和端口号。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| cl | `const httpd_client_t *` | HTTP客户端结构体指针 |
| ip | `char *` | 用于存储服务器IP地址的字符串缓冲区 |
| port | `int *` | 用于存储服务器端口号的整数指针 |

### 函数返回值
- 返回值为 `ip` 指针，即存储服务器IP地址的字符串缓冲区的指针。
- 如果成功获取服务器IP地址和端口号，`ip` 和 `port` 将被填充相应的值。
- 如果失败，返回值可能为 `NULL`，或者 `ip` 和 `port` 中的值可能未被正确填充。
## httpd_FileDelete {#httpd_FileDelete}

```c
VLC_API httpd_file_sys_t * httpd_FileDelete( httpd_file_t * );
```

### 描述
该函数用于删除一个 HTTP 文件对象。它返回一个指向 `httpd_file_sys_t` 结构的指针，该结构包含了与文件系统相关的信息。

### 函数参数说明

| 参数名        | 类型           | 描述                                                                 |
|---------------|----------------|--------------------------------------------------------------------------|
| `httpd_file_t *` | `httpd_file_t *` | 指向要删除的 HTTP 文件对象的指针。该对象通常是通过 `httpd_FileNew` 函数创建的。 |

### 函数返回值
- 如果成功删除文件对象，函数返回一个指向 `httpd_file_sys_t` 结构的指针，该结构包含了与文件系统相关的信息。
- 如果删除失败（例如，传入的指针为 `NULL`），函数返回 `NULL`。
## httpd_HandlerDelete {#httpd_HandlerDelete}

```c
VLC_API httpd_handler_sys_t * httpd_HandlerDelete( httpd_handler_t * );
```

### 描述
该函数用于删除一个 HTTP 处理程序。它释放与给定 `httpd_handler_t` 结构体相关的资源，并返回该结构体的系统特定部分。

### 函数参数说明

| 参数名            | 类型               | 描述                                                                 |
|-------------------|--------------------|--------------------------------------------------------------------------|
| `httpd_handler_t *` | `httpd_handler_t *` | 指向要删除的 HTTP 处理程序结构体的指针。该结构体包含处理程序的相关信息。 |

### 函数返回值
- 返回值类型：`httpd_handler_sys_t *`
  - 如果成功删除处理程序，则返回与该处理程序关联的系统特定部分（`httpd_handler_sys_t` 结构体）。
  - 如果传入的 `httpd_handler_t` 指针为 `NULL`，则函数可能返回 `NULL` 或执行失败。
  - 如果删除过程中发生错误，函数也可能返回 `NULL`。
## httpd_RedirectDelete {#httpd_RedirectDelete}

```c
VLC_API void httpd_RedirectDelete( httpd_redirect_t * );
```

### 描述
该函数用于删除一个 HTTP 重定向对象。调用此函数后，重定向对象将被释放，并且不能再使用。

### 函数参数说明

| 参数名            | 类型               | 描述                                                                 |
|-------------------|--------------------|----------------------------------------------------------------------|
| `httpd_redirect_t *` | `httpd_redirect_t *` | 指向要删除的 HTTP 重定向对象的指针。该对象将被释放，并且不能再使用。 |

### 函数返回值
该函数没有返回值。
## httpd_StreamDelete {#httpd_StreamDelete}

```c
VLC_API void httpd_StreamDelete(httpd_stream_t *stream);
```

### 函数描述
该函数用于删除一个 HTTP 流。它会释放与该流相关的所有资源，并将其从 HTTP 服务器中移除。

### 函数参数说明

| 参数名   | 类型              | 描述                                                                 |
|----------|-------------------|----------------------------------------------------------------------|
| `stream` | `httpd_stream_t *` | 指向要删除的 HTTP 流的指针。该指针在函数调用后将不再有效，应避免后续使用。 |

### 函数返回值
该函数没有返回值。
## httpd_StreamHeader {#httpd_StreamHeader}

```c
VLC_API int httpd_StreamHeader(httpd_stream_t *p_stream, uint8_t *p_data, int i_data);
```

### 描述
该函数用于向HTTP流中添加头部数据。它允许用户将自定义的头部数据附加到HTTP流中，以便在客户端请求时发送。

### 函数参数说明

| 参数名    | 类型          | 描述                                                         |
|-----------|---------------|--------------------------------------------------------------|
| p_stream  | httpd_stream_t* | 指向HTTP流对象的指针，表示要操作的HTTP流。                   |
| p_data    | uint8_t*       | 指向要添加的头部数据的指针。                                 |
| i_data    | int           | 头部数据的长度（以字节为单位）。                             |

### 函数返回值

- **0**: 成功添加头部数据。
- **-1**: 添加头部数据失败，可能是由于内存不足或其他内部错误。
## httpd_StreamSend {#httpd_StreamSend}

```c
VLC_API int httpd_StreamSend(httpd_stream_t *p_stream, const block_t *p_block);
```

### 函数描述
该函数用于将数据块发送到HTTP流中。它将指定的数据块附加到流的缓冲区中，并根据需要触发HTTP响应。

### 函数参数说明

| 参数名      | 类型            | 描述                                                                 |
|-------------|-----------------|----------------------------------------------------------------------|
| `p_stream`  | `httpd_stream_t*` | 指向要发送数据的HTTP流的指针。                                       |
| `p_block`   | `const block_t*`  | 指向要发送的数据块的指针。数据块通常包含要发送的数据及其相关元数据。 |

### 函数返回值
- `0`：成功发送数据块。
- `-1`：发送数据块失败。可能的原因包括流未正确初始化或数据块为空。
## httpd_StreamSetHTTPHeaders {#httpd_StreamSetHTTPHeaders}

```c
VLC_API int httpd_StreamSetHTTPHeaders(httpd_stream_t *stream, httpd_header *headers, size_t i_headers);
```

### 描述
该函数用于设置HTTP流的HTTP头。它允许用户为特定的HTTP流设置自定义的HTTP头。

### 函数参数说明

| 参数名      | 类型            | 描述                                                                 |
|-------------|-----------------|----------------------------------------------------------------------|
| `stream`    | `httpd_stream_t*` | 指向要设置HTTP头的HTTP流的指针。                                     |
| `headers`   | `httpd_header*`  | 指向包含HTTP头的数组的指针。每个`httpd_header`结构体包含一个头名称和一个头值。 |
| `i_headers` | `size_t`         | HTTP头的数量，即`headers`数组的大小。                                |

### 函数返回值

- `0`：成功设置HTTP头。
- `-1`：设置HTTP头失败，可能是因为`stream`为`NULL`或`headers`数组无效。
## httpd_MsgGet {#httpd_MsgGet}

```c
VLC_API const char * httpd_MsgGet( const httpd_message_t *p_msg, const char *psz_name );
```

### 描述
该函数用于从 `httpd_message_t` 结构体中获取指定名称的字符串。如果未找到指定名称的字符串，则返回空字符串。返回的字符串不会被分配内存。

### 参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_msg`      | `const httpd_message_t *` | 指向 `httpd_message_t` 结构体的指针，表示要从中获取字符串的消息对象。 |
| `psz_name`   | `const char *`      | 指向要查找的字符串名称的指针。                                       |

### 返回值
- **`const char *`**: 返回指向指定名称字符串的指针。如果未找到指定名称的字符串，则返回空字符串 `""`。返回的字符串不会被分配内存，因此不需要释放。
