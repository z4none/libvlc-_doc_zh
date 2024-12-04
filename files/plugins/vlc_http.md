## http_auth_Init {#http_auth_init}

```c
VLC_API void http_auth_Init( http_auth_t * );
```

### 描述
该函数用于初始化 HTTP 认证结构体。在使用 HTTP 认证功能之前，必须调用此函数来初始化 `http_auth_t` 结构体。

### 函数参数说明

| 参数名       | 类型          | 描述                                                         |
|--------------|---------------|--------------------------------------------------------------|
| `http_auth_t *` | `http_auth_t *` | 指向 `http_auth_t` 结构体的指针，该结构体将被初始化以用于 HTTP 认证。 |

### 函数返回值
该函数没有返回值。
## http_auth_Reset {#http_auth_reset}

```c
VLC_API void http_auth_Reset(http_auth_t *auth);
```

### 描述
该函数用于重置 HTTP 认证状态。它会清除之前存储的认证信息，使得认证状态回到初始状态。

### 函数参数说明

| 参数名 | 类型        | 描述                     |
|--------|-------------|--------------------------|
| auth   | http_auth_t*| 指向 HTTP 认证结构的指针 |

### 函数返回值
该函数没有返回值。
## http_auth_ParseWwwAuthenticateHeader {#http_auth_ParseWwwAuthenticateHeader}

```c
VLC_API void http_auth_ParseWwwAuthenticateHeader(vlc_object_t *p_this, http_auth_t *p_auth, const char *psz_header);
```

### 描述

该函数用于解析 HTTP 认证中的 `WWW-Authenticate` 头信息。它将解析后的认证信息存储在 `http_auth_t` 结构体中。

### 函数参数说明

| 参数名       | 类型           | 描述                                                                 |
|--------------|----------------|--------------------------------------------------------------------------|
| `p_this`     | `vlc_object_t*`| VLC 对象指针，通常是调用该函数的对象。                                    |
| `p_auth`     | `http_auth_t*` | 指向 `http_auth_t` 结构体的指针，用于存储解析后的认证信息。               |
| `psz_header` | `const char*`  | 指向 `WWW-Authenticate` 头信息的字符串，包含需要解析的认证信息。          |

### 函数返回值

该函数没有返回值（`void`）。
## http_auth_ParseAuthenticationInfoHeader {#http_auth_ParseAuthenticationInfoHeader}

```c
VLC_API int http_auth_ParseAuthenticationInfoHeader(
    vlc_object_t *p_this,
    http_auth_t *p_auth,
    const char *psz_username,
    const char *psz_password,
    const char *psz_header,
    const char *psz_method,
    const char *psz_url
);
```

### 描述
该函数用于解析 HTTP 认证信息头（Authentication-Info header）。它处理服务器返回的认证信息，并更新认证上下文。

### 函数参数说明

| 参数名        | 类型           | 描述                                                                 |
|---------------|----------------|--------------------------------------------------------------------------|
| `p_this`      | `vlc_object_t*`| VLC 对象指针，通常是 `vlc_object_t` 类型的指针。                          |
| `p_auth`      | `http_auth_t*` | HTTP 认证结构体指针，用于存储认证信息。                                  |
| `psz_username`| `const char*`  | 用户名，用于认证。如果不需要用户名，可以传入 `NULL`。                    |
| `psz_password`| `const char*`  | 密码，用于认证。如果不需要密码，可以传入 `NULL`。                        |
| `psz_header`  | `const char*`  | 认证信息头字符串，包含服务器返回的认证信息。                              |
| `psz_method`  | `const char*`  | HTTP 请求方法，如 `GET`、`POST` 等。                                     |
| `psz_url`     | `const char*`  | 请求的 URL。                                                            |

### 函数返回值

- **成功**：返回 `0`，表示认证信息解析成功，并且认证上下文已更新。
- **失败**：返回 `-1`，表示认证信息解析失败，可能是由于输入参数无效或认证信息格式不正确。
