## image_HandlerDelete {#image_HandlerDelete}

```c
VLC_API void image_HandlerDelete(image_handler_t *p_image);
```

### 描述
该函数用于删除图像处理器对象。它释放与图像处理器相关的所有资源，并将其从内存中删除。

### 函数参数说明

| 参数名       | 类型               | 描述                                                         |
|--------------|--------------------|--------------------------------------------------------------|
| `p_image`    | `image_handler_t *` | 指向要删除的图像处理器对象的指针。该指针在函数调用后将无效。 |

### 函数返回值
该函数没有返回值。
## image_Type2Fourcc {#image_Type2Fourcc}

```c
VLC_API vlc_fourcc_t image_Type2Fourcc( const char *psz_name );
```

### 描述

该函数将图像类型的名称转换为对应的 FourCC 代码。FourCC 代码是一个四字符代码，用于标识图像或视频的格式。

### 函数参数说明

| 参数名      | 类型        | 描述                                                                 |
|-------------|-------------|----------------------------------------------------------------------|
| `psz_name`  | `const char *` | 指向图像类型名称的字符串指针。该名称通常是一个字符串，表示图像的格式。 |

### 函数返回值

- 如果成功，返回对应的 FourCC 代码。
- 如果输入的图像类型名称无效或未找到对应的 FourCC 代码，返回 `0`。
## image_Ext2Fourcc {#image_Ext2Fourcc}

```c
VLC_API vlc_fourcc_t image_Ext2Fourcc( const char *psz_name );
```

### 描述
该函数将图像文件扩展名转换为对应的 FourCC 代码。FourCC 代码是一个四字符代码，用于标识图像格式。

### 函数参数说明

| 参数名     | 类型        | 描述                                                                 |
|------------|-------------|----------------------------------------------------------------------|
| `psz_name` | `const char *` | 指向图像文件扩展名的指针，扩展名应以点号（`.`）开头，例如 `.png`。 |

### 函数返回值
- 如果成功，返回对应的 FourCC 代码。
- 如果扩展名无效或不支持，返回 `0`。
## image_Mime2Fourcc {#image_Mime2Fourcc}

```c
VLC_API vlc_fourcc_t image_Mime2Fourcc( const char *psz_mime );
```

### 描述
该函数将 MIME 类型字符串转换为对应的 FourCC 代码。FourCC 代码是一个四字符代码，用于标识图像格式。

### 函数参数说明

| 参数名     | 类型        | 描述                                                         |
|------------|-------------|--------------------------------------------------------------|
| `psz_mime` | `const char*` | 指向 MIME 类型字符串的指针，表示要转换的图像格式。 |

### 函数返回值
- 如果成功，返回对应的 FourCC 代码。
- 如果 MIME 类型无效或不支持，返回 `0`。
