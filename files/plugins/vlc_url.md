## decode_URI {#decode_URI}

```c
VLC_API char * decode_URI( char *psz );
```

### 描述
该函数用于解码一个 URI 编码的字符串。它将输入字符串中的百分号编码（例如 `%20` 表示空格）转换为相应的字符。

### 函数参数说明

| 参数名 | 类型   | 描述               |
|--------|--------|--------------------|
| `psz`  | `char *` | 指向需要解码的 URI 编码字符串的指针。 |

### 函数返回值
- 如果解码成功，返回指向解码后的字符串的指针。
- 如果解码失败，返回 `NULL`。
## vlc_UrlParse {#vlc_UrlParse}

```c
VLC_API void vlc_UrlParse(vlc_url_t *url, const char *str, unsigned char flags);
```

### 描述
该函数用于解析一个 URL 字符串，并将其分解为各个组成部分。解析后的结果存储在 `vlc_url_t` 结构体中。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `url` | `vlc_url_t *` | 指向 `vlc_url_t` 结构体的指针，用于存储解析后的 URL 信息。 |
| `str` | `const char *` | 要解析的 URL 字符串。 |
| `flags` | `unsigned char` | 解析标志，用于指定解析时的行为。 |

### 函数返回值
该函数没有返回值（`void`）。解析后的 URL 信息存储在传入的 `vlc_url_t` 结构体中。
## vlc_UrlClean {#vlc_UrlClean}

```c
VLC_API void vlc_UrlClean (vlc_url_t *);
```

### 描述
`vlc_UrlClean` 函数用于释放 `vlc_url_t` 结构体中分配的资源。调用此函数后，`vlc_url_t` 结构体中的所有字段将被重置为 `NULL` 或 `0`。

### 函数参数说明

| 参数名       | 类型       | 描述                                                                 |
|--------------|------------|--------------------------------------------------------------------|
| `p_url`      | `vlc_url_t*` | 指向 `vlc_url_t` 结构体的指针，该结构体包含需要清理的 URL 相关信息。 |

### 函数返回值
该函数没有返回值。
## vlc_url_t {#vlc_url_t}

```c
struct vlc_url_t
{
    char *psz_protocol;
    char *psz_username;
    char *psz_password;
    char *psz_host;
    unsigned i_port;
    char *psz_path;
    char *psz_option;

    char *psz_buffer; /* to be freed */
};
```

### 描述
`vlc_url_t` 结构体用于表示一个 URL 的各个组成部分。它包含了协议、用户名、密码、主机、端口、路径和选项等信息。`psz_buffer` 字段用于存储需要释放的缓冲区。

### 字段说明

| 字段名          | 类型       | 描述                                                                 |
|-----------------|------------|--------------------------------------------------------------------------|
| psz_protocol    | `char *`   | URL 的协议部分，例如 "http" 或 "ftp"。                                    |
| psz_username    | `char *`   | URL 中的用户名部分，用于身份验证。                                        |
| psz_password    | `char *`   | URL 中的密码部分，用于身份验证。                                          |
| psz_host        | `char *`   | URL 中的主机部分，表示服务器地址。                                        |
| i_port          | `unsigned` | URL 中的端口号，表示服务器的端口。                                        |
| psz_path        | `char *`   | URL 中的路径部分，表示资源的路径。                                        |
| psz_option      | `char *`   | URL 中的选项部分，表示附加的选项或查询参数。                              |
| psz_buffer      | `char *`   | 需要释放的缓冲区，通常用于存储解析后的 URL 数据。                         |

### 返回值
该结构体本身没有返回值，它用于存储和传递 URL 的各个部分信息。
