## vlc_mime_Ext2Mime {#vlc_mime_Ext2Mime}

```c
VLC_API const char * vlc_mime_Ext2Mime( const char *psz_url );
```

### 描述
该函数用于根据给定的 URL 获取对应的 MIME 类型。它通过解析 URL 中的文件扩展名来确定 MIME 类型。

### 函数参数说明

| 参数名     | 类型        | 描述                                                                 |
|------------|-------------|----------------------------------------------------------------------|
| `psz_url`  | `const char *` | 输入的 URL 字符串，函数将根据该 URL 中的文件扩展名来确定 MIME 类型。 |

### 函数返回值
- 如果成功找到对应的 MIME 类型，函数返回一个指向 MIME 类型字符串的指针。
- 如果无法确定 MIME 类型，函数返回 `NULL`。
