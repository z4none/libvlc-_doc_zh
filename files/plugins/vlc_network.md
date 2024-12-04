## net_Socket {#net_Socket}

```c
int net_Socket (vlc_object_t *obj, int family, int socktype, int proto);
```

### 描述
该函数用于创建一个网络套接字。它是一个可移植的网络层通信函数，支持多种协议族、套接字类型和协议。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| `obj`     | `vlc_object_t*` | VLC 对象指针，通常用于日志记录和错误处理。                               |
| `family`  | `int`         | 协议族，例如 `AF_INET` 表示 IPv4，`AF_INET6` 表示 IPv6，`AF_UNIX` 表示 Unix 域套接字。 |
| `socktype`| `int`         | 套接字类型，例如 `SOCK_STREAM` 表示流套接字，`SOCK_DGRAM` 表示数据报套接字。 |
| `proto`   | `int`         | 协议类型，例如 `IPPROTO_TCP` 表示 TCP 协议，`IPPROTO_UDP` 表示 UDP 协议。 |

### 函数返回值
- **成功**：返回一个有效的套接字描述符（非负整数）。
- **失败**：返回 `-1`，并设置 `errno` 以指示错误类型。可能的错误包括但不限于：
  - `EAFNOSUPPORT`：不支持指定的地址族。
  - `EINVAL`：无效的参数。
  - `EMFILE`：进程的文件描述符表已满。
  - `ENFILE`：系统的文件描述符表已满。
  - `ENOBUFS` 或 `ENOMEM`：内存不足。
  - `EPROTONOSUPPORT`：不支持指定的协议。
## net_Connect {#net_Connect}

```c
VLC_API int net_Connect(vlc_object_t *p_this, const char *psz_host, int i_port, int socktype, int protocol);
```

### 描述
该函数用于在指定的主机和端口上建立网络连接。它支持多种套接字类型和协议，并返回一个套接字描述符。

### 函数参数说明

| 参数名      | 类型          | 描述                                                                 |
|-------------|---------------|--------------------------------------------------------------------------|
| `p_this`    | `vlc_object_t*` | VLC 对象指针，通常用于日志记录和错误处理。                                |
| `psz_host`  | `const char*`  | 目标主机的域名或 IP 地址。                                              |
| `i_port`    | `int`          | 目标主机的端口号。                                                       |
| `socktype`  | `int`          | 套接字类型，如 `SOCK_STREAM`（TCP）或 `SOCK_DGRAM`（UDP）。               |
| `protocol`  | `int`          | 使用的协议，如 `IPPROTO_TCP` 或 `IPPROTO_UDP`。                          |

### 函数返回值
- **成功**：返回一个有效的套接字描述符。
- **失败**：返回 `-1`，并设置 `errno` 以指示错误类型。可能的错误包括：
  - `EACCES`：权限不足。
  - `EADDRINUSE`：地址已被使用。
  - `ECONNREFUSED`：连接被拒绝。
  - `ETIMEDOUT`：连接超时。
  - 其他网络相关的错误。
## net_Listen {#net_Listen}

```c
VLC_API int * net_Listen(vlc_object_t *p_this, const char *psz_host, int i_port, int socktype, int protocol);
```

### 描述
该函数用于在指定的主机和端口上监听网络连接。它创建一个套接字并绑定到指定的地址，然后开始监听传入的连接。

### 函数参数说明

| 参数名     | 类型           | 描述                                                                 |
|------------|----------------|--------------------------------------------------------------------------|
| `p_this`   | `vlc_object_t *` | VLC 对象指针，通常是调用该函数的对象。                                     |
| `psz_host` | `const char *`  | 主机名或 IP 地址的字符串。如果为 `NULL`，则表示监听所有可用的网络接口。 |
| `i_port`   | `int`           | 要监听的端口号。                                                         |
| `socktype` | `int`           | 套接字类型，如 `SOCK_STREAM` 或 `SOCK_DGRAM`。                           |
| `protocol` | `int`           | 协议类型，如 `IPPROTO_TCP` 或 `IPPROTO_UDP`。                            |

### 函数返回值
- 成功时，返回一个指向整数数组的指针，数组中的每个元素表示一个监听套接字的文件描述符。
- 如果失败，返回 `NULL`，并且可以通过 `vlc_strerror_c()` 获取错误信息。
## net_ConnectTCP {#net_ConnectTCP}

```c
static inline int net_ConnectTCP(vlc_object_t *obj, const char *host, int port)
{
    return net_Connect(obj, host, port, SOCK_STREAM, IPPROTO_TCP);
}
```

### 描述
`net_ConnectTCP` 函数用于通过 TCP 协议连接到指定的主机和端口。该函数是 `net_Connect` 函数的封装，专门用于 TCP 连接。

### 函数参数说明

| 参数名 | 类型          | 描述                                                                 |
|--------|---------------|--------------------------------------------------------------------------|
| obj    | vlc_object_t* | VLC 对象指针，通常是 `vlc_object_t` 类型的实例。                         |
| host   | const char*   | 目标主机的 IP 地址或主机名。                                             |
| port   | int           | 目标主机的端口号。                                                       |

### 函数返回值
- **成功**：返回一个非负的文件描述符，表示连接成功。
- **失败**：返回 `-1`，表示连接失败。
## net_AcceptSingle {#net_AcceptSingle}

```c
VLC_API int net_AcceptSingle(vlc_object_t *obj, int lfd);
```

### 描述
该函数用于接受一个单一的网络连接。它从指定的监听文件描述符（`lfd`）中接受一个连接，并返回一个新的文件描述符，该描述符用于与客户端进行通信。

### 函数参数说明

| 参数名 | 类型          | 描述                                                         |
| ------ | ------------- | ------------------------------------------------------------ |
| obj    | vlc_object_t* | VLC 对象指针，通常是 `libvlc` 实例的上下文对象。              |
| lfd    | int           | 监听文件描述符，表示正在监听的网络端口。                     |

### 函数返回值
- **成功**：返回一个新的文件描述符，该描述符用于与客户端进行通信。
- **失败**：返回 `-1`，并设置 `errno` 以指示错误类型。可能的错误包括但不限于：
  - `EAGAIN` 或 `EWOULDBLOCK`：没有连接请求，且监听文件描述符是非阻塞的。
  - `EBADF`：文件描述符无效。
  - `EINTR`：系统调用被信号中断。
  - `EMFILE`：进程的文件描述符表已满。
  - `ENFILE`：系统的文件描述符表已满。
  - `ENOBUFS` 或 `ENOMEM`：内存不足。
  - `ENOTSOCK`：文件描述符不是一个套接字。
  - `EOPNOTSUPP`：套接字不支持 `accept` 操作。
  - `EPROTO`：协议错误。
  - `ECONNABORTED`：连接被客户端中止。
## net_Accept {#net_Accept}

```c
VLC_API int net_Accept( vlc_object_t *p_this, int *p_fd );
```

### 描述
`net_Accept` 函数用于接受一个网络连接。它从监听套接字中接受一个新的连接，并将新连接的文件描述符存储在 `p_fd` 指向的变量中。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_this` | `vlc_object_t *` | VLC 对象指针，通常是 `libvlc` 实例。 |
| `p_fd` | `int *` | 指向整数的指针，用于存储新连接的文件描述符。 |

### 函数返回值

- **成功**：返回 `0`，并且 `p_fd` 指向的变量将被设置为新连接的文件描述符。
- **失败**：返回 `-1`，并且 `p_fd` 指向的变量不会被修改。可能的错误包括：
  - 监听套接字没有准备好接受连接。
  - 系统资源不足，无法创建新的连接。
  - 其他网络相关的错误。
## net_ConnectDgram {#net_ConnectDgram}

```c
VLC_API int net_ConnectDgram( vlc_object_t *p_this, const char *psz_host, int i_port, int hlim, int proto );
```

### 描述
该函数用于创建一个数据报套接字并连接到指定的主机和端口。它支持UDP协议，并允许设置跳数限制（hlim）。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| p_this    | vlc_object_t* | VLC对象指针，通常是调用该函数的模块或对象。                             |
| psz_host  | const char*   | 目标主机的IP地址或主机名。                                             |
| i_port    | int           | 目标主机的端口号。                                                     |
| hlim      | int           | 跳数限制（Hop Limit），用于设置数据包的最大跳数。                       |
| proto     | int           | 协议类型，通常为`IPPROTO_UDP`，表示使用UDP协议。                       |

### 函数返回值
- **成功**：返回一个非负的文件描述符（socket descriptor），表示成功创建并连接的套接字。
- **失败**：返回`-1`，表示连接失败。可以通过`vlc_strerror_c()`获取具体的错误信息。
## net_ConnectUDP {#net_ConnectUDP}

```c
static inline int net_ConnectUDP(vlc_object_t *obj, const char *host, int port, int hlim)
{
    return net_ConnectDgram(obj, host, port, hlim, IPPROTO_UDP);
}
```

### 描述
`net_ConnectUDP` 函数用于通过 UDP 协议连接到指定的主机和端口。它是一个内联函数，实际上调用了 `net_ConnectDgram` 函数，并指定了协议为 `IPPROTO_UDP`。

### 函数参数说明

| 参数名 | 类型          | 描述                                                                 |
|--------|---------------|--------------------------------------------------------------------------|
| obj    | vlc_object_t* | VLC 对象指针，通常是 `vlc_object_t` 类型的实例。                          |
| host   | const char*   | 目标主机的 IP 地址或主机名。                                             |
| port   | int           | 目标主机的端口号。                                                       |
| hlim   | int           | 跳数限制（Hop Limit），用于控制数据包在网络中的最大跳数。                 |

### 函数返回值
- **成功**：返回一个非负整数，表示连接成功。
- **失败**：返回一个负数，表示连接失败。具体的错误码可以通过 `vlc_errmsg` 函数获取。
## net_OpenDgram {#net_OpenDgram}

```c
VLC_API int net_OpenDgram( vlc_object_t *p_this, const char *psz_bind, int i_bind, const char *psz_server, int i_server, int proto );
```

### 函数描述

`net_OpenDgram` 函数用于打开一个数据报套接字（UDP 或 DCCP）。它允许绑定到一个本地地址和端口，并连接到一个远程服务器地址和端口。

### 函数参数说明

| 参数名       | 类型           | 描述                                                                 |
|--------------|----------------|--------------------------------------------------------------------------|
| `p_this`     | `vlc_object_t*`| VLC 对象指针，通常是 `vlc_object_t` 类型的指针。                          |
| `psz_bind`   | `const char*`  | 要绑定的本地地址字符串。如果为 `NULL`，则使用通配符地址。                  |
| `i_bind`     | `int`          | 要绑定的本地端口号。如果为 `0`，则使用随机端口。                           |
| `psz_server` | `const char*`  | 要连接的远程服务器地址字符串。如果为 `NULL`，则不连接到任何服务器。         |
| `i_server`   | `int`          | 要连接的远程服务器端口号。如果为 `0`，则不连接到任何服务器。                |
| `proto`      | `int`          | 协议类型，可以是 `IPPROTO_UDP` 或 `IPPROTO_DCCP`。                         |

### 函数返回值

- 成功时返回一个非负的文件描述符（socket descriptor）。
- 失败时返回 `-1`，并设置 `errno` 以指示错误类型。
## net_ListenUDP1 {#net_ListenUDP1}

```c
static inline int net_ListenUDP1(vlc_object_t *obj, const char *host, int port)
{
    return net_OpenDgram(obj, host, port, NULL, 0, IPPROTO_UDP);
}
```

### 描述
`net_ListenUDP1` 函数用于在指定的主机和端口上监听 UDP 数据报。该函数是一个内联函数，它调用了 `net_OpenDgram` 函数来实现 UDP 监听功能。

### 函数参数说明

| 参数名 | 类型          | 描述                                                                 |
|--------|---------------|--------------------------------------------------------------------------|
| obj    | vlc_object_t* | VLC 对象指针，通常是 `vlc_object_t` 类型的实例，用于传递上下文信息。 |
| host   | const char*   | 主机地址字符串，指定要监听的主机地址。如果为 `NULL`，则监听所有地址。 |
| port   | int           | 端口号，指定要监听的端口号。                                           |

### 函数返回值
- **成功**：返回一个非负整数，表示成功打开的 UDP 套接字。
- **失败**：返回一个负数，表示打开 UDP 套接字失败。具体的错误码可以通过 VLC 的错误处理机制获取。
## net_ListenClose {#net_ListenClose}

```c
VLC_API void net_ListenClose( int *fd );
```

### 描述
`net_ListenClose` 函数用于关闭一个网络监听套接字。该函数会关闭指定的套接字，并释放与之相关的资源。

### 函数参数说明

| 参数名 | 类型  | 描述                                                                 |
|--------|-------|----------------------------------------------------------------------|
| fd     | int*  | 指向要关闭的套接字文件描述符的指针。函数执行后，该指针将被设置为 `NULL`。 |

### 函数返回值
该函数没有返回值。
## net_Subscribe {#net_Subscribe}

```c
int net_Subscribe(vlc_object_t *obj, int fd, const struct sockaddr *addr, socklen_t addrlen);
```

### 描述
该函数用于订阅一个网络套接字。它将指定的套接字描述符 `fd` 与给定的地址 `addr` 关联起来，并将其添加到 VLC 对象 `obj` 的网络订阅列表中。

### 函数参数说明

| 参数名   | 类型                | 描述                                                                 |
|----------|---------------------|----------------------------------------------------------------------|
| `obj`    | `vlc_object_t *`    | VLC 对象指针，通常是 `libvlc_instance_t` 或 `libvlc_media_player_t`。 |
| `fd`     | `int`               | 要订阅的网络套接字描述符。                                           |
| `addr`   | `const struct sockaddr *` | 指向套接字地址结构的指针，表示要订阅的网络地址。                     |
| `addrlen`| `socklen_t`         | 地址结构的长度。                                                     |

### 函数返回值

- **成功**：返回 `0`，表示套接字已成功订阅。
- **失败**：返回 `-1`，并设置 `errno` 以指示错误原因。可能的错误包括：
  - `EINVAL`：无效的参数。
  - `ENOMEM`：内存不足。
  - `EACCES`：权限不足。
  - `EADDRINUSE`：地址已被使用。
## net_SetCSCov {#net_SetCSCov}

```c
VLC_API int net_SetCSCov( int fd, int sendcov, int recvcov );
```

### 描述
该函数用于设置套接字的发送和接收缓冲区的大小。`fd` 参数是套接字的文件描述符，`sendcov` 和 `recvcov` 分别是要设置的发送和接收缓冲区的大小。

### 函数参数说明

| 参数名   | 类型 | 描述                                                         |
|----------|------|--------------------------------------------------------------|
| `fd`     | `int`| 套接字的文件描述符。                                         |
| `sendcov`| `int`| 要设置的发送缓冲区的大小，单位为字节。                       |
| `recvcov`| `int`| 要设置的接收缓冲区的大小，单位为字节。                       |

### 函数返回值

- **成功**：返回 `0`，表示成功设置了套接字的发送和接收缓冲区大小。
- **失败**：返回 `-1`，表示设置失败。可能的原因包括但不限于：
  - 文件描述符无效。
  - 缓冲区大小设置超出系统限制。
  - 权限不足，无法设置缓冲区大小。
## net_Read {#net_Read}

```c
VLC_API ssize_t net_Read( vlc_object_t *p_this, int fd, const v_socket_t *, void *p_data, size_t i_data, bool b_retry );
```

### 函数描述
`net_Read` 函数用于从网络套接字中读取数据。它是一个通用的网络读取函数，可以在不同的网络操作中使用。该函数会尝试从指定的文件描述符 `fd` 中读取 `i_data` 字节的数据，并将其存储在 `p_data` 指向的缓冲区中。如果 `b_retry` 为 `true`，函数会在读取失败时重试。

### 函数参数说明

| 参数名   | 类型           | 描述                                                                 |
|----------|----------------|----------------------------------------------------------------------|
| `p_this` | `vlc_object_t*` | VLC 对象指针，通常用于日志记录和错误处理。                           |
| `fd`     | `int`          | 文件描述符，表示要从中读取数据的网络套接字。                         |
| `p_data` | `void*`        | 指向存储读取数据的缓冲区的指针。                                     |
| `i_data` | `size_t`       | 要读取的字节数。                                                     |
| `b_retry`| `bool`         | 如果为 `true`，则在读取失败时重试；如果为 `false`，则在失败时立即返回。|

### 函数返回值
- 如果成功读取数据，返回实际读取的字节数。
- 如果读取失败并且 `b_retry` 为 `false`，返回 `-1`。
- 如果读取失败并且 `b_retry` 为 `true`，函数会重试，直到成功读取数据或发生不可恢复的错误。
- 如果发生不可恢复的错误，返回 `-1`。
## net_Write {#net_Write}

```c
VLC_API ssize_t net_Write( vlc_object_t *p_this, int fd, const v_socket_t *, const void *p_data, size_t i_data );
```

### 函数描述
`net_Write` 函数用于通过网络套接字发送数据。它将指定数量的数据写入到指定的文件描述符中。

### 函数参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|--------------------------------------------------------------------------|
| `p_this`  | `vlc_object_t*` | VLC 对象指针，通常用于日志记录和错误处理。                                 |
| `fd`      | `int`          | 文件描述符，表示要写入数据的网络套接字。                                   |
| `v_socket`| `const v_socket_t*` | 套接字结构体指针，通常用于网络操作。 |
| `p_data`  | `const void*`  | 指向要发送的数据的指针。                                                 |
| `i_data`  | `size_t`       | 要发送的数据的字节数。                                                   |

### 函数返回值
- 成功时，返回实际写入的字节数。
- 如果发生错误，返回 `-1`，并设置 `errno` 以指示错误类型。
## net_Gets {#net_Gets}

```c
VLC_API char * net_Gets( vlc_object_t *p_this, int fd, const v_socket_t * );
```

### 描述
该函数用于从指定的文件描述符 `fd` 中读取一行数据，并返回一个以 null 结尾的字符串。读取的数据会自动分配内存，调用者需要在使用完毕后释放该内存。

### 函数参数说明

| 参数名       | 类型           | 描述                                                                 |
|--------------|----------------|--------------------------------------------------------------------------|
| `p_this`     | `vlc_object_t*` | VLC 对象指针，通常用于日志记录和错误处理。                               |
| `fd`         | `int`          | 文件描述符，表示要从中读取数据的网络套接字。                             |
| `v_socket_t*`| `const`        | 指向套接字结构的指针，通常用于网络操作。该参数在函数中未使用，可以传 `NULL`。 |

### 函数返回值

- **成功**：返回一个以 null 结尾的字符串，表示读取的一行数据。调用者需要在使用完毕后调用 `free()` 释放该内存。
- **失败**：返回 `NULL`，表示读取失败。可能的原因包括文件描述符无效、网络错误或内存分配失败。
## net_vaPrintf {#net_vaPrintf}

```c
VLC_API ssize_t net_vaPrintf( vlc_object_t *p_this, int fd, const v_socket_t *, const char *psz_fmt, va_list args );
```

### 描述
`net_vaPrintf` 函数用于通过网络套接字发送格式化的字符串。它类似于 `vsnprintf`，但直接将格式化的输出发送到指定的文件描述符 `fd`。

### 函数参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|--------------------------------------------------------------------------|
| `p_this`  | `vlc_object_t*` | VLC 对象指针，通常用于日志记录和错误处理。                                |
| `fd`      | `int`          | 目标文件描述符，通常是一个网络套接字。                                    |
| `v_socket`| `const v_socket_t*` | 指向套接字结构的指针，通常为 `NULL`。 |
| `psz_fmt` | `const char*`  | 格式化字符串，类似于 `printf` 中的格式字符串。                            |
| `args`    | `va_list`      | 可变参数列表，包含要格式化的参数。                                        |

### 函数返回值

- **成功**：返回发送的字节数。
- **失败**：返回 `-1`，并设置 `errno` 以指示错误类型。可能的错误包括：
  - `EAGAIN` 或 `EWOULDBLOCK`：套接字设置为非阻塞模式，且当前不可写。
  - `EINTR`：操作被信号中断。
  - `EPIPE`：连接已关闭。
  - 其他网络相关的错误。
## getaddrinfo {#getaddrinfo}

```c
VLC_API int getaddrinfo(const char *node, const char *service,
                        const struct addrinfo *hints, struct addrinfo **res);
```

### 描述

`getaddrinfo` 函数用于将主机名和服务名转换为用于网络通信的地址信息。它支持IPv4和IPv6地址，并且可以处理主机名和服务名的多种表示形式。

### 函数参数说明

| 参数名   | 类型                | 描述                                                                 |
|----------|---------------------|----------------------------------------------------------------------|
| `node`   | `const char *`      | 主机名或IP地址字符串。可以是主机名（如 "www.example.com"）或点分十进制格式的IPv4地址（如 "192.0.2.1"），或冒号分隔的IPv6地址（如 "2001:db8::1"）。如果为 `NULL`，则返回所有接口的地址。 |
| `service`| `const char *`      | 服务名或端口号字符串。可以是服务名（如 "http"）或端口号（如 "80"）。如果为 `NULL`，则返回所有服务的地址。 |
| `hints`  | `const struct addrinfo *` | 指向 `addrinfo` 结构的指针，用于提供关于期望返回的地址类型的提示。可以为 `NULL`，表示没有特殊要求。 |
| `res`    | `struct addrinfo **` | 指向 `addrinfo` 结构指针的指针，用于存储返回的地址信息链表。调用者需要使用 `freeaddrinfo` 函数释放返回的链表。 |

### 函数返回值

- **成功**：返回 `0`，并且 `res` 指向一个包含地址信息的链表。
- **失败**：返回非零错误码，具体错误码含义如下：
  - `EAI_AGAIN`：名称解析暂时失败，稍后重试。
  - `EAI_BADFLAGS`：`hints` 参数中的标志无效。
  - `EAI_FAIL`：名称解析永久失败。
  - `EAI_FAMILY`：不支持请求的地址族。
  - `EAI_MEMORY`：内存不足。
  - `EAI_NONAME`：主机名或服务名未知。
  - `EAI_SERVICE`：请求的服务类型不支持请求的套接字类型。
  - `EAI_SOCKTYPE`：不支持请求的套接字类型。
  - `EAI_SYSTEM`：系统错误，具体错误码可以通过 `errno` 获取。
## freeaddrinfo {#freeaddrinfo}

```c
VLC_API void freeaddrinfo(struct addrinfo *ai);
```

### 描述
该函数用于释放由 `getaddrinfo` 函数分配的 `addrinfo` 结构链表的内存。调用 `freeaddrinfo` 后，`addrinfo` 结构及其所有相关联的 `addrinfo` 结构都将被释放，因此不应再访问这些结构。

### 函数参数说明

| 参数名 | 类型           | 描述                                                                 |
|--------|----------------|--------------------------------------------------------------------|
| `ai`   | `struct addrinfo*` | 指向由 `getaddrinfo` 返回的 `addrinfo` 结构链表的指针。 |

### 函数返回值
该函数没有返回值。
## getnameinfo {#getnameinfo}

```c
VLC_API int getnameinfo(const struct sockaddr *addr, socklen_t addrlen,
                        char *host, int hostlen, char *serv, int servlen, int flags);
```

### 描述
`getnameinfo` 函数用于将套接字地址转换为相应的节点和服务名称。它类似于 `getaddrinfo`，但方向相反。该函数可以将 `sockaddr` 结构转换为可读的节点名称（通常是主机名）和服务名称（通常是端口号）。

### 函数参数说明

| 参数名   | 类型                  | 描述                                                                 |
|----------|-----------------------|--------------------------------------------------------------------------|
| `addr`   | `const struct sockaddr *` | 指向要转换的套接字地址结构的指针。                                       |
| `addrlen`| `socklen_t`            | `addr` 指向的套接字地址结构的长度。                                      |
| `host`   | `char *`               | 指向存储节点名称（主机名）的缓冲区的指针。如果不需要节点名称，可以传入 `NULL`。 |
| `hostlen`| `int`                 | `host` 缓冲区的长度。如果 `host` 为 `NULL`，则忽略此参数。                |
| `serv`   | `char *`               | 指向存储服务名称（端口号）的缓冲区的指针。如果不需要服务名称，可以传入 `NULL`。 |
| `servlen`| `int`                 | `serv` 缓冲区的长度。如果 `serv` 为 `NULL`，则忽略此参数。                |
| `flags`  | `int`                 | 控制函数行为的标志。常用的标志包括 `NI_NUMERICHOST`（返回数字形式的地址）和 `NI_NUMERICSERV`（返回数字形式的端口号）。 |

### 函数返回值
- **0**: 函数成功执行，节点名称和服务名称已成功存储在相应的缓冲区中。
- **非0**: 函数执行失败，返回值为错误代码，具体错误代码的含义可以参考相关文档或手册。
## vlc_getnameinfo {#vlc_getnameinfo}

```c
VLC_API int vlc_getnameinfo( const struct sockaddr *sa, int salen, char *host, int hostlen, int *port, int flags );
```

### 描述

该函数用于将套接字地址转换为相应的节点和服务名称。它类似于 `getnameinfo` 函数，但提供了一些额外的功能和错误处理。

### 函数参数说明

| 参数名   | 类型                | 描述                                                                 |
|----------|---------------------|----------------------------------------------------------------------|
| `sa`     | `const struct sockaddr *` | 指向要转换的套接字地址结构的指针。                                     |
| `salen`  | `int`               | 套接字地址结构的长度。                                                 |
| `host`   | `char *`            | 用于存储节点名称的缓冲区。如果不需要节点名称，可以传入 `NULL`。        |
| `hostlen`| `int`               | 节点名称缓冲区的长度。                                                 |
| `port`   | `int *`             | 用于存储端口号的指针。如果不需要端口号，可以传入 `NULL`。               |
| `flags`  | `int`               | 控制函数行为的标志。常用的标志包括 `NI_NUMERICHOST` 和 `NI_NUMERICSERV`。 |

### 函数返回值

- **成功**：返回 `0`，表示转换成功，节点名称和端口号（如果需要）已存储在相应的缓冲区中。
- **失败**：返回非零值，表示转换失败。可能的错误包括：
  - `EAI_AGAIN`：名称解析暂时失败，稍后重试。
  - `EAI_BADFLAGS`：标志无效。
  - `EAI_FAIL`：非暂时性错误。
  - `EAI_FAMILY`：不支持的地址族。
  - `EAI_MEMORY`：内存分配失败。
  - `EAI_NONAME`：节点或服务名称未知。
  - `EAI_OVERFLOW`：缓冲区溢出。
  - `EAI_SYSTEM`：系统错误，具体错误码可以通过 `errno` 获取。
## vlc_getaddrinfo {#vlc_getaddrinfo}

```c
VLC_API int vlc_getaddrinfo(const char *node, unsigned port,
                            const struct addrinfo *hints, struct addrinfo **res);
```

### 描述

该函数用于解析主机名和服务名，并将结果存储在 `addrinfo` 结构中。它类似于标准的 `getaddrinfo` 函数，但具有一些额外的功能和错误处理。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `node` | `const char *` | 要解析的主机名或 IP 地址字符串。 |
| `port` | `unsigned` | 要解析的服务名或端口号。 |
| `hints` | `const struct addrinfo *` | 指向 `addrinfo` 结构的指针，包含了解析的提示信息。可以为 `NULL`。 |
| `res` | `struct addrinfo **` | 指向 `addrinfo` 结构指针的指针，用于存储解析结果。 |

### 函数返回值

- **成功**：返回 `0`，并且 `res` 指向一个链表，链表中的每个节点都包含一个解析后的地址信息。
- **失败**：返回非零值，表示解析失败。可能的错误包括：
  - `EAI_AGAIN`：临时性错误，稍后重试。
  - `EAI_BADFLAGS`：`hints` 参数中的标志无效。
  - `EAI_FAIL`：永久性失败。
  - `EAI_FAMILY`：不支持的地址族。
  - `EAI_MEMORY`：内存不足。
  - `EAI_NONAME`：主机名或服务名未知。
  - `EAI_SERVICE`：不支持的服务类型。
  - `EAI_SOCKTYPE`：不支持的套接字类型。
  - `EAI_SYSTEM`：系统错误，具体错误码可以通过 `errno` 获取。
## is_multicast_address {#is_multicast_address}

```c
bool is_multicast_address(const struct sockaddr *addr, socklen_t len);
```

### 描述
该函数用于判断给定的网络地址是否为多播地址。根据地址的协议族（IPv4 或 IPv6），函数会分别检查地址是否属于多播地址范围。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `addr` | `const struct sockaddr *` | 指向要检查的网络地址结构的指针。 |
| `len`  | `socklen_t` | 地址结构的长度。 |

### 函数返回值
- **`true`**: 如果地址是多播地址。
- **`false`**: 如果地址不是多播地址，或者地址结构的长度不足以包含完整的地址信息。
## net_GetSockAddress {#net_GetSockAddress}

```c
static inline int net_GetSockAddress(int fd, char *address, int *port)
{
    struct sockaddr_storage addr;
    socklen_t addrlen = sizeof(addr);

    return getsockname(fd, (struct sockaddr *)&addr, &addrlen)
        || vlc_getnameinfo((struct sockaddr *)&addr, addrlen, address,
                           NI_MAXNUMERICHOST, port, NI_NUMERICHOST)
        ? VLC_EGENERIC : 0;
}
```

### 函数描述
该函数用于获取套接字的地址和端口号。它首先通过 `getsockname` 函数获取套接字的本端地址信息，然后使用 `vlc_getnameinfo` 函数将地址信息转换为可读的字符串格式，并提取端口号。

### 函数参数说明

| 参数名   | 类型   | 描述                                                                 |
|----------|--------|--------------------------------------------------------------------------|
| `fd`     | `int`  | 套接字文件描述符，用于指定要获取地址信息的套接字。                     |
| `address`| `char *` | 用于存储获取到的地址信息的字符串缓冲区。                             |
| `port`   | `int *` | 用于存储获取到的端口号的指针。                                         |

### 函数返回值
- **`0`**: 函数执行成功，地址和端口号已成功获取并存储在 `address` 和 `port` 中。
- **`VLC_EGENERIC`**: 函数执行失败，可能是由于 `getsockname` 或 `vlc_getnameinfo` 调用失败。
## net_GetPeerAddress {#net_GetPeerAddress}

```c
static inline int net_GetPeerAddress(int fd, char *address, int *port)
```

### 描述
该函数用于获取与指定文件描述符 `fd` 关联的对等方的地址和端口。它通过调用 `getpeername` 函数获取对等方的地址信息，然后使用 `vlc_getnameinfo` 函数将地址信息转换为可读的字符串格式，并存储在 `address` 和 `port` 参数中。

### 函数参数说明

| 参数名   | 类型    | 描述                                                                 |
|----------|---------|----------------------------------------------------------------------|
| `fd`     | `int`   | 文件描述符，表示与对等方连接的套接字。                                 |
| `address`| `char*` | 指向字符数组的指针，用于存储对等方的地址（以字符串形式）。             |
| `port`   | `int*`  | 指向整数的指针，用于存储对等方的端口号。                               |

### 函数返回值

- **`0`**: 函数成功执行，对等方的地址和端口已成功获取并存储在 `address` 和 `port` 中。
- **`VLC_EGENERIC`**: 函数执行失败，可能是由于 `getpeername` 或 `vlc_getnameinfo` 调用失败。
## net_GetPort {#net_GetPort}

```c
static inline uint16_t net_GetPort(const struct sockaddr *addr)
```

### 函数描述
`net_GetPort` 函数用于从给定的 `sockaddr` 结构体中提取端口号。根据地址族的不同（IPv4 或 IPv6），函数会返回相应的端口号。如果地址族不支持或未指定，函数将返回 0。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `addr` | `const struct sockaddr *` | 指向 `sockaddr` 结构体的指针，包含要提取端口号的地址信息。 |

### 函数返回值
- **返回值类型**: `uint16_t`
- **返回值说明**:
  - 如果 `addr` 的地址族为 `AF_INET`，则返回 IPv4 地址的端口号。
  - 如果 `addr` 的地址族为 `AF_INET6`，则返回 IPv6 地址的端口号。
  - 如果 `addr` 的地址族既不是 `AF_INET` 也不是 `AF_INET6`，则返回 0。
## net_SetPort {#net_SetPort}

```c
static inline void net_SetPort(struct sockaddr *addr, uint16_t port)
```

### 函数描述
该函数用于设置网络地址结构中的端口号。根据地址结构的不同类型（IPv4 或 IPv6），函数会将端口号设置到相应的字段中。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `addr` | `struct sockaddr *` | 指向网络地址结构的指针，可以是 IPv4 或 IPv6 地址结构。 |
| `port` | `uint16_t` | 要设置的端口号。 |

### 函数返回值
该函数没有返回值。
## iovec 结构体定义 {#iovec}

```c
struct iovec {
    void  *iov_base;
    size_t iov_len;
};
```

### 描述
`iovec` 结构体用于描述一个内存块，通常用于分散/聚集 I/O 操作。`iov_base` 指向内存块的起始地址，`iov_len` 表示内存块的长度。

### 成员说明

| 成员名   | 类型   | 描述                                       |
|----------|--------|--------------------------------------------|
| `iov_base` | `void *` | 指向内存块的起始地址。                     |
| `iov_len`  | `size_t` | 内存块的长度，以字节为单位。               |

### 返回值
该结构体本身没有返回值，它用于描述内存块的信息。
## msghdr 结构体定义 {#msghdr}

```c
struct msghdr {
    void         *msg_name;
    size_t        msg_namelen;
    struct iovec *msg_iov;
    size_t        msg_iovlen;
    void         *msg_control;
    size_t        msg_controllen;
    int           msg_flags;
};
```

### 结构体描述
`msghdr` 结构体用于在套接字通信中传递消息。它包含了消息的地址信息、数据缓冲区、控制信息以及相关的标志。

### 结构体成员说明

| 成员名称        | 类型         | 描述                                                                 |
|-----------------|--------------|--------------------------------------------------------------------------|
| `msg_name`      | `void *`     | 指向消息目标地址的指针。对于无连接的套接字（如 UDP），这是必需的。对于面向连接的套接字（如 TCP），通常为 `NULL`。 |
| `msg_namelen`   | `size_t`     | `msg_name` 指向的地址结构的长度。                                        |
| `msg_iov`       | `struct iovec *` | 指向 `iovec` 结构体数组的指针，用于描述消息的数据缓冲区。                |
| `msg_iovlen`    | `size_t`     | `msg_iov` 数组中的元素个数。                                             |
| `msg_control`   | `void *`     | 指向辅助数据的指针，通常用于传递控制信息（如文件描述符）。              |
| `msg_controllen`| `size_t`     | `msg_control` 指向的辅助数据缓冲区的长度。                               |
| `msg_flags`     | `int`        | 消息标志，用于指示消息的属性或状态。                                    |

### 返回值
该结构体本身没有返回值，它用于在函数调用中传递消息相关的信息。
## virtual_socket_t {#virtual_socket_t}

```c
struct virtual_socket_t
{
    void *p_sys;
    int (*pf_recv) ( void *, void *, size_t );
    int (*pf_send) ( void *, const void *, size_t );
};
```

### 描述
`virtual_socket_t` 结构体用于表示一个虚拟套接字，包含了与网络层进行读写操作的函数指针。

### 成员说明

| 成员名   | 类型                          | 描述                                                                 |
|----------|-------------------------------|--------------------------------------------------------------------------|
| p_sys    | `void *`                      | 指向系统特定数据的指针，用于内部管理。                                     |
| pf_recv  | `int (*)(void *, void *, size_t)` | 指向接收数据的函数指针。该函数从套接字接收数据，并将其存储在指定的缓冲区中。 |
| pf_send  | `int (*)(void *, const void *, size_t)` | 指向发送数据的函数指针。该函数将指定缓冲区中的数据发送到套接字。           |

### 函数指针说明

#### pf_recv
```c
int (*pf_recv) ( void *p_this, void *p_data, size_t i_data );
```

| 参数名   | 类型      | 描述                                                                 |
|----------|-----------|--------------------------------------------------------------------------|
| p_this   | `void *`  | 指向当前 `virtual_socket_t` 结构体的指针。                               |
| p_data   | `void *`  | 指向接收数据的缓冲区的指针。                                             |
| i_data   | `size_t`  | 缓冲区的大小，表示期望接收的最大字节数。                                 |

**返回值**：
- 成功时返回实际接收的字节数。
- 失败时返回负值，表示错误代码。

#### pf_send
```c
int (*pf_send) ( void *p_this, const void *p_data, size_t i_data );
```

| 参数名   | 类型          | 描述                                                                 |
|----------|---------------|--------------------------------------------------------------------------|
| p_this   | `void *`      | 指向当前 `virtual_socket_t` 结构体的指针。                               |
| p_data   | `const void *`| 指向要发送数据的缓冲区的指针。                                           |
| i_data   | `size_t`      | 要发送的数据的字节数。                                                   |

**返回值**：
- 成功时返回实际发送的字节数。
- 失败时返回负值，表示错误代码。
## in6_addr {#in6_addr}

```c
struct in6_addr
{
    uint8_t s6_addr[16];
};
```

### 描述
`in6_addr` 结构体用于表示 IPv6 地址。尽管 OS/2 目前不支持 IPv6，但为了编译的目的，仍然声明了这个结构体。

### 结构体成员说明

| 成员名称 | 类型    | 描述               |
|----------|---------|--------------------|
| s6_addr  | uint8_t[16] | 一个包含 16 个字节的数组，用于存储 IPv6 地址的 128 位值。 |

### 返回值
该结构体没有返回值，因为它是一个数据结构定义。
## struct sockaddr_in6 {#struct_sockaddr_in6}

```c
struct sockaddr_in6 {
    uint8_t         sin6_len;
    uint8_t         sin6_family;
    uint16_t        sin6_port;
    uint32_t        sin6_flowinfo;
    struct in6_addr sin6_addr;
    uint32_t        sin6_scope_id;
};
```

### 描述
`struct sockaddr_in6` 结构体用于表示 IPv6 地址和端口号。它通常用于网络编程中，特别是在使用 IPv6 协议时。

### 结构体成员说明

| 成员名        | 类型           | 描述                                                                 |
|---------------|----------------|--------------------------------------------------------------------------|
| `sin6_len`    | `uint8_t`      | 结构体的长度。在某些系统中，这个字段用于表示结构体的总长度。         |
| `sin6_family` | `uint8_t`      | 地址族，通常设置为 `AF_INET6`，表示 IPv6 地址族。                     |
| `sin6_port`   | `uint16_t`     | 端口号，网络字节序。                                                   |
| `sin6_flowinfo` | `uint32_t`   | 流信息，用于标识特定的流。通常在 IPv6 扩展头中使用。                   |
| `sin6_addr`   | `struct in6_addr` | IPv6 地址，通常是一个 128 位的地址。                                    |
| `sin6_scope_id` | `uint32_t`   | 范围标识符，用于标识 IPv6 地址的范围（例如，链路本地地址的范围）。     |

### 返回值
该结构体没有返回值，因为它是一个定义，而不是一个函数。
