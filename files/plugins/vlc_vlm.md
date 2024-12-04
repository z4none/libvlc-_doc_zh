## vlm_New {#vlm_New}

```c
VLC_API vlm_t * vlm_New( vlc_object_t *p_parent );
```

### 函数描述
该函数用于创建一个新的 VLM（VideoLAN Manager）实例。VLM 是 VLC 媒体播放器中的一个模块，用于管理和控制多个媒体流。

### 函数参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|----------------------------------------------------------------------|
| `p_parent`| `vlc_object_t*`| 指向父对象的指针，通常是 `libvlc` 实例。该对象用于管理 VLM 的生命周期。|

### 函数返回值
- 成功时，返回指向新创建的 `vlm_t` 实例的指针。
- 如果创建失败，返回 `NULL`。
## vlm_Delete {#vlm_Delete}

```c
VLC_API void vlm_Delete( vlm_t * );
```

### 函数描述
该函数用于删除一个 VLM（VideoLAN Manager）实例。调用此函数后，VLM 实例将被销毁，不再可用。

### 函数参数说明

| 参数名 | 类型   | 描述               |
|--------|--------|--------------------|
| vlm    | vlm_t* | 指向 VLM 实例的指针 |

### 函数返回值
该函数没有返回值。
## vlm_ExecuteCommand {#vlm_ExecuteCommand}

```c
VLC_API int vlm_ExecuteCommand( vlm_t *p_vlm, const char *psz_command, vlm_message_t **pp_message );
```

### 描述
该函数用于在VLM（VideoLAN Manager）实例上执行一个命令。命令字符串会被解析并执行，结果以消息的形式返回。

### 函数参数说明

| 参数名       | 类型              | 描述                                                                 |
|--------------|-------------------|----------------------------------------------------------------------|
| `p_vlm`      | `vlm_t *`         | VLM实例的指针。该指针指向一个有效的VLM实例，命令将在此实例上执行。   |
| `psz_command`| `const char *`    | 要执行的命令字符串。命令字符串应当符合VLM的命令语法。                |
| `pp_message` | `vlm_message_t **`| 指向消息指针的指针。函数执行后，该指针将指向返回的消息对象。         |

### 函数返回值

- **`0`**: 命令成功执行。
- **`-1`**: 命令执行失败。可能的原因包括命令字符串格式错误、VLM实例无效或内部错误。

返回值为`0`时，`pp_message`将指向一个包含命令执行结果的消息对象。如果返回值为`-1`，`pp_message`可能为`NULL`或包含错误信息。
## vlm_Control {#vlm_Control}

```c
VLC_API int vlm_Control( vlm_t *p_vlm, int i_query, ... );
```

### 描述
`vlm_Control` 函数用于向 VLM（VideoLAN Manager）发送控制命令。通过该函数，可以对 VLM 进行各种操作，如添加、删除、播放、暂停媒体等。

### 函数参数说明

| 参数名   | 类型   | 描述                                                                 |
|----------|--------|----------------------------------------------------------------------|
| `p_vlm`  | `vlm_t*` | VLM 实例的指针。`vlm_t` 是 VLM 的结构体类型，表示一个 VLM 实例。 |
| `i_query`| `int`  | 控制命令的类型。不同的命令对应不同的整数值。                     |
| `...`    | `...`  | 可变参数列表，根据 `i_query` 的不同，可能需要传递额外的参数。   |

### 函数返回值
- **成功**：返回 `0`。
- **失败**：返回 `-1`，表示操作失败。具体的错误信息可以通过 VLC 的错误处理机制获取。
## vlm_MessageSimpleNew {#vlm_MessageSimpleNew}

```c
VLC_API vlm_message_t * vlm_MessageSimpleNew( const char * );
```

### 描述
该函数用于创建一个简单的 VLM 消息对象。消息对象包含一个字符串，通常用于传递简单的文本信息。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `const char *` | 输入 | 消息内容字符串 |

### 函数返回值
- 成功时，返回一个指向新创建的 `vlm_message_t` 对象的指针。
- 如果内存分配失败或其他错误发生，返回 `NULL`。
## vlm_MessageAdd {#vlm_MessageAdd}

```c
VLC_API vlm_message_t * vlm_MessageAdd( vlm_message_t *p_parent, vlm_message_t *p_child );
```

### 函数描述
该函数用于将一个 `vlm_message_t` 结构体（子消息）添加到另一个 `vlm_message_t` 结构体（父消息）中。

### 函数参数说明

| 参数名    | 类型            | 描述                                                                 |
|-----------|-----------------|----------------------------------------------------------------------|
| `p_parent`| `vlm_message_t*`| 指向父消息结构体的指针，子消息将被添加到该结构体中。                  |
| `p_child` | `vlm_message_t*`| 指向子消息结构体的指针，该结构体将被添加到父消息中。                  |

### 函数返回值
- 如果成功，返回指向父消息结构体的指针 `p_parent`。
- 如果失败，返回 `NULL`。
## vlm_MessageDelete {#vlm_MessageDelete}

```c
VLC_API void vlm_MessageDelete( vlm_message_t * );
```

### 函数描述
该函数用于删除一个 `vlm_message_t` 类型的消息对象。调用此函数后，消息对象将被释放并从内存中删除。

### 函数参数说明

| 参数名          | 类型             | 描述                                                                 |
|-----------------|------------------|--------------------------------------------------------------------------|
| `vlm_message_t*` | `vlm_message_t*` | 指向要删除的 `vlm_message_t` 类型消息对象的指针。该对象将被释放并删除。 |

### 函数返回值
该函数没有返回值。
## vlm_media_Init {#vlm_media_Init}

```c
static inline void vlm_media_Init( vlm_media_t *p_media )
```

### 描述
初始化一个 `vlm_media_t` 实例。该函数会将传入的 `vlm_media_t` 结构体初始化为默认状态，包括设置无效的 ID、清空输入和选项列表、设置输出为空、禁用 VOD 模式以及禁用广播循环。

### 函数参数说明

| 参数名    | 类型          | 描述               |
|-----------|---------------|--------------------|
| `p_media` | `vlm_media_t*` | 需要初始化的 `vlm_media_t` 实例指针。 |

### 函数返回值
该函数没有返回值。
## vod_copy {#vod_copy}

```c
if( p_src->b_vod )
{
    if( p_src->vod.psz_mux )
        p_dst->vod.psz_mux = strdup( p_src->vod.psz_mux );
}
```

### 描述
该函数用于复制 `p_src` 结构体中的 `vod` 相关信息到 `p_dst` 结构体中。具体来说，如果 `p_src` 结构体中的 `b_vod` 标志为真，并且 `vod.psz_mux` 字段不为空，则将 `p_src->vod.psz_mux` 字段的值复制到 `p_dst->vod.psz_mux` 字段中。

### 参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_src` | `struct` | 源结构体指针，包含需要复制的 `vod` 信息。 |
| `p_dst` | `struct` | 目标结构体指针，用于存储复制的 `vod` 信息。 |

### 返回值
该函数没有显式的返回值。操作成功时，`p_dst->vod.psz_mux` 将被设置为 `p_src->vod.psz_mux` 的副本；如果 `p_src->b_vod` 为假或 `p_src->vod.psz_mux` 为空，则 `p_dst->vod.psz_mux` 将保持不变。
## vlm_media_Clean {#vlm_media_Clean}

```c
static inline void vlm_media_Clean( vlm_media_t *p_media )
```

### 函数描述
清理并释放与 `vlm_media_t` 实例关联的内存。你仍然需要使用 `vlm_media_Delete()` 释放 `p_media` 本身。

### 函数参数说明

| 参数名   | 类型          | 描述                   |
|----------|---------------|------------------------|
| `p_media`| `vlm_media_t*`| 需要清理的 `vlm_media_t` 实例。|

### 函数返回值
该函数没有返回值。
## vlm_media_Init {#vlm_media_Init}

```c
void vlm_media_Init( vlm_media_t *p_media );
```

### 函数描述
`vlm_media_Init` 函数用于初始化一个 `vlm_media_t` 结构体。该函数会将 `vlm_media_t` 结构体中的所有成员变量设置为默认值。

### 函数参数说明

| 参数名   | 类型          | 描述                                                         |
|----------|---------------|--------------------------------------------------------------|
| `p_media`| `vlm_media_t*`| 指向 `vlm_media_t` 结构体的指针，该结构体将被初始化为默认值。|

### 函数返回值
该函数没有返回值。
## vlm_media_Delete {#vlm_media_Delete}

```c
static inline void vlm_media_Delete( vlm_media_t *p_media )
```

### 函数描述
删除一个 `vlm_media_t` 实例。

### 函数参数说明

| 参数名   | 类型          | 描述                   |
|----------|---------------|------------------------|
| `p_media`| `vlm_media_t*`| 要删除的 `vlm_media_t` 实例 |

### 函数返回值
该函数没有返回值。
## vlm_media_Copy {#vlm_media_Copy}

```c
void vlm_media_Copy( vlm_media_t *p_dst, const vlm_media_t *p_src );
```

### 描述
该函数用于将一个 `vlm_media_t` 结构体的内容复制到另一个 `vlm_media_t` 结构体中。源结构体 `p_src` 的内容将被复制到目标结构体 `p_dst` 中。

### 函数参数说明

| 参数名 | 类型                | 描述                                                                 |
|--------|---------------------|----------------------------------------------------------------------|
| p_dst  | `vlm_media_t *`     | 目标 `vlm_media_t` 结构体指针，用于接收复制的内容。                   |
| p_src  | `const vlm_media_t *` | 源 `vlm_media_t` 结构体指针，包含将被复制的内容。                     |

### 函数返回值
该函数没有返回值（`void`）。
## vlm_media_instance_Init {#vlm_media_instance_Init}

```c
static inline void vlm_media_instance_Init( vlm_media_instance_t *p_instance )
```

### 函数描述
该函数用于初始化 `vlm_media_instance_t` 结构体。它将 `p_instance` 指向的结构体清零，并设置其初始值。

### 函数参数说明

| 参数名       | 类型                    | 描述                                       |
|--------------|-------------------------|--------------------------------------------|
| `p_instance` | `vlm_media_instance_t*` | 指向要初始化的 `vlm_media_instance_t` 结构体的指针。 |

### 函数返回值
该函数没有返回值。
## vlm_media_instance_Clean {#vlm_media_instance_Clean}

```c
static inline void vlm_media_instance_Clean( vlm_media_instance_t *p_instance )
```

### 函数描述
清理 `vlm_media_instance_t` 结构体。

### 函数参数说明
| 参数名       | 类型                    | 描述                     |
|--------------|-------------------------|--------------------------|
| `p_instance` | `vlm_media_instance_t*` | 需要清理的 `vlm_media_instance_t` 结构体指针。 |

### 函数返回值
该函数没有返回值。
## vlm_media_instance_Init {#vlm_media_instance_Init}

```c
void vlm_media_instance_Init( vlm_media_instance_t *p_instance );
```

### 函数描述
该函数用于初始化一个 `vlm_media_instance_t` 结构体实例。初始化过程会将实例中的所有成员变量设置为默认值。

### 函数参数说明

| 参数名       | 类型                    | 描述                                                                 |
|--------------|-------------------------|----------------------------------------------------------------------|
| `p_instance` | `vlm_media_instance_t*` | 指向要初始化的 `vlm_media_instance_t` 结构体实例的指针。             |

### 函数返回值
该函数没有返回值。
## vlm_media_instance_Delete {#vlm_media_instance_Delete}

```c
static inline void vlm_media_instance_Delete( vlm_media_instance_t *p_instance )
{
    vlm_media_instance_Clean( p_instance );
    free( p_instance );
}
```

### 描述
删除一个 `vlm_media_instance_t` 实例。

### 函数参数说明

| 参数名       | 类型                    | 描述                       |
|--------------|-------------------------|----------------------------|
| `p_instance` | `vlm_media_instance_t*` | 要删除的 `vlm_media_instance_t` 实例 |

### 函数返回值
该函数没有返回值。
## vlm_message_t {#vlm_message_t}

```c
struct vlm_message_t
{
    char *psz_name;         /*< message name */
    char *psz_value;        /*< message value */

    int           i_child;  /*< number of child messages */
    vlm_message_t **child;  /*< array of vlm_message_t */
};
```

### 描述
`vlm_message_t` 结构体用于表示一个消息节点。父节点可以是 `( name_of_the_command , NULL )`，或者在错误情况下是 `( name_of_the_command , message_error )`。如果一个节点有子节点，它不应该有值（即 `psz_value` 为 `NULL`）。

### 字段说明

| 字段名       | 类型            | 描述                                                                 |
|--------------|-----------------|----------------------------------------------------------------------|
| `psz_name`   | `char *`        | 消息的名称。                                                         |
| `psz_value`  | `char *`        | 消息的值。如果节点有子节点，则该值应为 `NULL`。                       |
| `i_child`    | `int`           | 子消息的数量。                                                       |
| `child`      | `vlm_message_t **` | 指向子消息数组的指针。每个子消息也是一个 `vlm_message_t` 结构体。    |

### 返回值
该结构体本身没有返回值，它是一个用于存储消息信息的结构体定义。
