## vlc_tls_SessionHandshake {#vlc_tls_SessionHandshake}

```c
int vlc_tls_SessionHandshake(vlc_tls_t *session, const char *host, const char *serv);
```

### 描述
该函数用于执行TLS会话的握手过程。它负责在客户端和服务器之间建立安全的TLS连接。握手过程包括交换证书、协商加密算法和密钥等步骤。

### 函数参数说明

| 参数名   | 类型          | 描述                                                         |
|----------|---------------|--------------------------------------------------------------|
| session  | vlc_tls_t *   | 指向TLS会话对象的指针，表示当前的TLS连接。                   |
| host     | const char *  | 目标主机的名称，用于证书验证和服务器名称指示（SNI）。        |
| serv     | const char *  | 目标服务的名称，通常是端口号或服务名称（如"https"）。        |

### 函数返回值

- **0**: 表示TLS握手成功完成，连接已建立并可以进行安全通信。
- **负值**: 表示握手过程中发生了错误，连接未能成功建立。具体的错误码取决于实现，通常表示网络错误、证书验证失败或其他TLS协议错误。
## vlc_tls_SessionDelete {#vlc_tls_SessionDelete}

```c
VLC_API void vlc_tls_SessionDelete(vlc_tls_t *);
```

### 描述
该函数用于删除一个 TLS 会话。它释放与给定 TLS 会话相关的所有资源。

### 函数参数说明

| 参数名       | 类型       | 描述                                                         |
|--------------|------------|--------------------------------------------------------------|
| `vlc_tls_t *` | `vlc_tls_t`| 指向要删除的 TLS 会话的指针。该指针在函数调用后将不再有效。|

### 函数返回值
该函数没有返回值。
## vlc_tls_Delete {#vlc_tls_Delete}

```c
VLC_API void vlc_tls_Delete(vlc_tls_creds_t *);
```

### 描述
该函数用于删除TLS（传输层安全）凭证对象。它释放与给定TLS凭证对象相关联的所有资源。

### 函数参数说明

| 参数名            | 类型               | 描述                                                                 |
|-------------------|--------------------|--------------------------------------------------------------------------|
| `vlc_tls_creds_t *` | `vlc_tls_creds_t *` | 指向要删除的TLS凭证对象的指针。该对象将被释放，并且不能再使用。 |

### 函数返回值
该函数没有返回值。
## vlc_tls_ServerAddCA {#vlc_tls_ServerAddCA}

```c
int vlc_tls_ServerAddCA(vlc_tls_creds_t *srv, const char *path);
```

### 描述
该函数用于向服务器添加一个证书颁发机构（CA）证书。CA证书用于验证客户端证书的合法性。

### 函数参数说明

| 参数名 | 类型                | 描述                                                                 |
|--------|---------------------|----------------------------------------------------------------------|
| srv    | vlc_tls_creds_t*    | TLS 服务器凭证对象指针，表示要添加 CA 证书的服务器。                  |
| path   | const char*         | 包含 CA 证书的文件路径。该文件应包含一个或多个 PEM 编码的 CA 证书。 |

### 函数返回值

- **0**：成功添加 CA 证书。
- **-1**：添加 CA 证书失败，可能由于文件路径无效或文件内容格式错误。
## vlc_tls_ServerAddCRL {#vlc_tls_ServerAddCRL}

```c
int vlc_tls_ServerAddCRL(vlc_tls_creds_t *srv, const char *path);
```

### 描述
该函数用于向TLS服务器添加证书吊销列表（CRL）。CRL文件的路径由`path`参数指定。

### 函数参数说明

| 参数名 | 类型                | 描述                                                         |
| ------ | ------------------- | ------------------------------------------------------------ |
| srv    | `vlc_tls_creds_t *` | 指向TLS服务器凭证结构的指针，该结构包含TLS服务器的配置信息。 |
| path   | `const char *`      | 指向CRL文件路径的字符串指针，该文件包含被吊销的证书列表。    |

### 函数返回值

- **成功**：返回`0`，表示CRL已成功添加到TLS服务器。
- **失败**：返回`-1`，表示添加CRL失败。可能的原因包括文件路径无效、文件格式错误或内存分配失败等。
## vlc_tls {#vlc_tls}

```c
struct vlc_tls
{
    VLC_COMMON_MEMBERS

    vlc_tls_sys_t *sys;

    struct virtual_socket_t sock;
    int  (*handshake) (vlc_tls_t *, const char *host, const char *service);
};
```

### 描述
`vlc_tls` 结构体用于表示一个 TLS 会话。它包含了与 TLS 会话相关的系统特定数据、虚拟套接字以及握手函数。

### 成员说明

| 成员名称         | 类型                          | 描述                                                                 |
|------------------|-------------------------------|--------------------------------------------------------------------------|
| `VLC_COMMON_MEMBERS` | 宏定义                        | 包含 VLC 对象的通用成员，如引用计数、锁等。                                |
| `sys`            | `vlc_tls_sys_t *`              | 指向 TLS 会话的系统特定数据的指针。                                        |
| `sock`           | `struct virtual_socket_t`      | 表示虚拟套接字，用于网络通信。                                             |
| `handshake`      | `int (*)(vlc_tls_t *, const char *host, const char *service)` | 指向握手函数的指针，用于在 TLS 会话中执行握手操作。 |

### 返回值
该结构体本身不返回值，但其中的 `handshake` 函数返回一个整数值，表示握手操作的结果：

- `0`：握手成功。
- `负值`：握手失败，返回值为错误码。
## vlc_tls_creds 结构定义 {#vlc_tls_creds}

```c
struct vlc_tls_creds
{
    VLC_COMMON_MEMBERS

    module_t  *module;
    vlc_tls_creds_sys_t *sys;

    int (*add_CA) (vlc_tls_creds_t *, const char *path);
    int (*add_CRL) (vlc_tls_creds_t *, const char *path);

    int (*open) (vlc_tls_creds_t *, vlc_tls_t *, int fd, const char *host);
    void (*close) (vlc_tls_creds_t *, vlc_tls_t *);
};
```

### 描述
`vlc_tls_creds` 结构体用于存储 TLS 凭证（证书、私钥和信任设置）。它包含了与 TLS 凭证相关的模块、系统数据以及一些操作函数。

### 成员函数说明

#### add_CA
```c
int (*add_CA) (vlc_tls_creds_t *, const char *path);
```
- **描述**: 添加一个证书颁发机构（CA）文件。
- **参数**:
  - `vlc_tls_creds_t *`: TLS 凭证对象。
  - `const char *path`: CA 文件的路径。
- **返回值**:
  - 成功时返回 0。
  - 失败时返回负值。

#### add_CRL
```c
int (*add_CRL) (vlc_tls_creds_t *, const char *path);
```
- **描述**: 添加一个证书吊销列表（CRL）文件。
- **参数**:
  - `vlc_tls_creds_t *`: TLS 凭证对象。
  - `const char *path`: CRL 文件的路径。
- **返回值**:
  - 成功时返回 0。
  - 失败时返回负值。

#### open
```c
int (*open) (vlc_tls_creds_t *, vlc_tls_t *, int fd, const char *host);
```
- **描述**: 打开一个 TLS 连接。
- **参数**:
  - `vlc_tls_creds_t *`: TLS 凭证对象。
  - `vlc_tls_t *`: TLS 对象。
  - `int fd`: 文件描述符。
  - `const char *host`: 主机名。
- **返回值**:
  - 成功时返回 0。
  - 失败时返回负值。

#### close
```c
void (*close) (vlc_tls_creds_t *, vlc_tls_t *);
```
- **描述**: 关闭一个 TLS 连接。
- **参数**:
  - `vlc_tls_creds_t *`: TLS 凭证对象。
  - `vlc_tls_t *`: TLS 对象。
- **返回值**:
  - 无返回值。
