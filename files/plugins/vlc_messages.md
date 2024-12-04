## vlc_vaLog {#vlc_vaLog}

```c
VLC_API void vlc_vaLog(vlc_object_t *obj, int type,
                       const char *module, const char *format, va_list ap);
```

### 描述
`vlc_vaLog` 函数用于记录日志消息。它允许将格式化的日志消息记录到 VLC 日志系统中。该函数是 `vlc_log` 函数的变体，接受 `va_list` 参数，以便在需要时处理可变数量的参数。

### 函数参数说明

| 参数名  | 类型          | 描述                                                                 |
|---------|---------------|----------------------------------------------------------------------|
| `obj`   | `vlc_object_t *` | 指向日志消息所属的 VLC 对象的指针。如果为 `NULL`，则使用全局对象。 |
| `type`  | `int`         | 日志消息的类型，通常是 `VLC_MSG_*` 常量之一。                       |
| `module`| `const char *`| 记录日志消息的模块名称。                                           |
| `format`| `const char *`| 日志消息的格式字符串，类似于 `printf` 的格式字符串。               |
| `ap`    | `va_list`     | 可变参数列表，包含要插入到格式字符串中的参数。                     |

### 函数返回值
该函数没有返回值。
