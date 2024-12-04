## config_PutInt {#config_PutInt}

```c
VLC_API void config_PutInt(vlc_object_t *p_this, const char *psz_name, int64_t i_value);
```

### 描述

该函数用于将一个整数值写入到配置中。它接受一个 `vlc_object_t` 类型的对象指针、一个字符串名称和一个整数值作为参数。

### 函数参数说明

| 参数名       | 类型          | 描述                                                                 |
|--------------|---------------|--------------------------------------------------------------------------|
| `p_this`     | `vlc_object_t *` | VLC 对象指针，通常是当前模块或对象的指针。                              |
| `psz_name`   | `const char *`  | 配置项的名称，用于标识要写入的配置项。                                  |
| `i_value`    | `int64_t`       | 要写入配置项的整数值。                                                  |

### 函数返回值

该函数没有返回值（`void`）。
## config_PutFloat {#config_PutFloat}

```c
VLC_API void config_PutFloat(vlc_object_t *p_this, const char *psz_name, float f_value);
```

### 函数描述
该函数用于将一个浮点数值写入到配置中。它将指定的浮点数值存储在指定的配置项中。

### 函数参数说明

| 参数名       | 类型          | 描述                                                         |
|--------------|---------------|--------------------------------------------------------------|
| `p_this`     | `vlc_object_t *` | VLC 对象指针，通常是 `libvlc` 实例或其子对象。               |
| `psz_name`   | `const char *`  | 配置项的名称，用于标识要写入的配置项。                       |
| `f_value`    | `float`         | 要写入的浮点数值。                                           |

### 函数返回值
该函数没有返回值（`void`）。
## config_PutPsz {#config_PutPsz}

```c
VLC_API void config_PutPsz(vlc_object_t *p_this, const char *psz_name, const char *psz_value);
```

### 描述

该函数用于将一个字符串值写入到配置项中。它接受一个 `vlc_object_t` 类型的对象指针、配置项的名称以及要写入的字符串值。

### 函数参数说明

| 参数名       | 类型            | 描述                                                                 |
|--------------|-----------------|----------------------------------------------------------------------|
| `p_this`     | `vlc_object_t *` | VLC 对象指针，通常是 `vlc_object_t` 类型的实例。                      |
| `psz_name`   | `const char *`  | 配置项的名称，表示要写入的配置项的键。                               |
| `psz_value`  | `const char *`  | 要写入的字符串值，表示要设置的配置项的值。                           |

### 函数返回值

该函数没有返回值（`void`）。
## config_SaveConfigFile {#config_SaveConfigFile}

```c
VLC_API int config_SaveConfigFile( vlc_object_t *p_this );
```

### 描述
该函数用于将当前的配置保存到配置文件中。它会将所有配置选项写入到配置文件中，以便在下次启动时加载。

### 函数参数说明

| 参数名    | 类型           | 描述                                                         |
|-----------|----------------|--------------------------------------------------------------|
| `p_this`  | `vlc_object_t*`| 指向当前 VLC 对象的指针。该对象用于获取配置文件的路径等信息。|

### 函数返回值
- **返回值为 `0`**：表示配置文件成功保存。
- **返回值为 `-1`**：表示保存配置文件时发生错误。
## config_ResetAll {#config_ResetAll}

```c
VLC_API void config_ResetAll( vlc_object_t * );
```

### 描述
该函数用于重置所有配置选项为它们的默认值。它会清除所有用户定义的配置，并将所有配置选项恢复到它们的初始状态。

### 函数参数说明

| 参数名        | 类型           | 描述                                                         |
|---------------|----------------|--------------------------------------------------------------|
| `vlc_object_t *` | `vlc_object_t *` | 指向 VLC 对象的指针，通常是 `libvlc_instance_t` 或 `vlc_player_t` 等对象。 |

### 函数返回值
该函数没有返回值。
## config_AddIntf {#config_AddIntf}

```c
VLC_API void config_AddIntf( vlc_object_t *p_this, const char *psz_module );
```

### 描述
该函数用于向VLC对象添加一个接口模块。接口模块通常用于与用户交互，例如通过图形用户界面（GUI）或命令行界面（CLI）。

### 函数参数说明

| 参数名       | 类型           | 描述                                                         |
|--------------|----------------|--------------------------------------------------------------|
| `p_this`     | `vlc_object_t*` | 指向VLC对象的指针，通常是`libvlc`实例。                      |
| `psz_module` | `const char*`  | 指向接口模块名称的字符串。模块名称通常是接口模块的标识符。 |

### 函数返回值
该函数没有返回值。
## config_RemoveIntf {#config_RemoveIntf}

```c
VLC_API void config_RemoveIntf( vlc_object_t *p_this, const char *psz_name );
```

### 描述
该函数用于从配置中移除一个接口。它接受一个 `vlc_object_t` 类型的对象和一个字符串类型的接口名称作为参数，并从配置中移除指定的接口。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| `p_this`  | `vlc_object_t*` | VLC 对象指针，通常是调用该函数的对象。                                     |
| `psz_name`| `const char*`  | 要移除的接口名称。该字符串指定了要从配置中移除的接口。                     |

### 函数返回值
该函数没有返回值（`void`）。
## config_ChainParse {#config_ChainParse}

```c
VLC_API void config_ChainParse( vlc_object_t *, const char *psz_prefix, const char *const *ppsz_options, config_chain_t * );
```

### 描述
该函数将执行以下操作：
- 在数组 `ppsz_options` 中创建所有选项（使用 `var_Create`）。
- 解析给定的 `config_chain_t` 链表，并设置相应的值（使用 `var_Set`）。

选项名称将通过添加 `psz_prefix` 前缀来创建。

### 参数说明

| 参数名          | 类型                | 描述                                                                 |
|-----------------|---------------------|----------------------------------------------------------------------|
| `vlc_object_t *`| `vlc_object_t *`    | VLC 对象指针，用于操作选项。                                          |
| `psz_prefix`    | `const char *`      | 选项名称的前缀字符串。                                               |
| `ppsz_options`  | `const char *const *`| 包含选项名称的数组，这些选项将被创建并设置值。                       |
| `config_chain_t *` | `config_chain_t *` | 配置链表，包含需要解析和设置的配置项。                               |

### 返回值
该函数没有返回值（`void`）。
## config_ChainDestroy {#config_ChainDestroy}

```c
VLC_API void config_ChainDestroy(config_chain_t *p_list);
```

### 函数描述
该函数用于释放一个 `config_chain_t` 类型的链表（包括链表头）。

### 函数参数说明

| 参数名    | 类型            | 描述                     |
|-----------|-----------------|--------------------------|
| `p_list`  | `config_chain_t*` | 指向要释放的链表的头指针 |

### 函数返回值
该函数没有返回值。
## config_StringUnescape {#config_StringUnescape}

```c
VLC_API char * config_StringUnescape( char *psz_string );
```

### 描述
该函数用于在原地对字符串进行解码，并返回指向给定字符串的指针。与 `config_StringEscape` 不同，该函数不会分配任何内存。如果传入 `NULL` 作为参数，则不会执行任何操作，并返回 `NULL`。

以下序列将被解码（仅一次）：
- `\\`
- `\'`
- `\"`

### 参数说明

| 参数名       | 类型     | 描述                                                                 |
|--------------|----------|--------------------------------------------------------------------------|
| `psz_string` | `char *` | 需要解码的字符串。如果传入 `NULL`，则函数不会执行任何操作，并返回 `NULL`。 |

### 返回值
- **`char *`**: 返回指向解码后的字符串的指针。如果传入 `NULL` 作为参数，则返回 `NULL`。
## config_category_t {#config_category_t}

```c
struct config_category_t
{
    int         i_id;
    const char *psz_name;
    const char *psz_help;
};
```

### 描述
`config_category_t` 结构体用于定义配置类别。每个配置类别都有一个唯一的标识符 (`i_id`)、名称 (`psz_name`) 和帮助信息 (`psz_help`)。

### 结构体成员说明

| 成员变量 | 类型 | 描述 |
|----------|------|------|
| `i_id`   | `int` | 配置类别的唯一标识符。 |
| `psz_name` | `const char *` | 配置类别的名称。 |
| `psz_help` | `const char *` | 配置类别的帮助信息。 |
## module_config_t {#module_config_t}

```c
struct module_config_t
{
    uint8_t     i_type;                        /* Configuration type */
    char        i_short;               /* Optional short option name */
    unsigned    b_advanced:1;                     /* Advanced option */
    unsigned    b_internal:1;          /* Hidden from prefs and help */
    unsigned    b_unsaveable:1;       /* Not stored in configuration */
    unsigned    b_safe:1;       /* Safe in web plugins and playlists */
    unsigned    b_removed:1;                           /* Deprecated */

    char *psz_type;                                 /* Configuration subtype */
    char *psz_name;                                           /* Option name */
    char *psz_text;             /* Short comment on the configuration option */
    char *psz_longtext;          /* Long comment on the configuration option */

    module_value_t value;                                    /* Option value */
    module_value_t orig;
    module_value_t min;
    module_value_t max;

    /* Values list */
    uint16_t list_count;                                /* Options list size */
    union
    {
        char **psz;               /* List of possible values for the option */
        int   *i;
        vlc_string_list_cb psz_cb;
        vlc_integer_list_cb i_cb;
    } list;
    char **list_text;                      /* Friendly names for list values */
};
```

### 描述
`module_config_t` 结构体用于定义模块的配置选项。每个配置选项包含类型、名称、描述、值等信息，并且可以有可选的短选项名称、子类型、以及是否为高级选项、内部选项、不可保存选项、安全选项或已废弃选项的标志。

### 成员说明

| 成员名称       | 类型                  | 描述                                                                 |
|----------------|-----------------------|--------------------------------------------------------------------------|
| `i_type`       | `uint8_t`             | 配置类型。                                                             |
| `i_short`      | `char`                | 可选的短选项名称。                                                     |
| `b_advanced`   | `unsigned` (1 bit)    | 是否为高级选项。                                                       |
| `b_internal`   | `unsigned` (1 bit)    | 是否为内部选项，隐藏在偏好设置和帮助中。                               |
| `b_unsaveable` | `unsigned` (1 bit)    | 是否为不可保存选项，不存储在配置中。                                   |
| `b_safe`       | `unsigned` (1 bit)    | 是否为安全选项，适用于网页插件和播放列表。                             |
| `b_removed`    | `unsigned` (1 bit)    | 是否为已废弃选项。                                                     |
| `psz_type`     | `char *`              | 配置子类型。                                                           |
| `psz_name`     | `char *`              | 选项名称。                                                             |
| `psz_text`     | `char *`              | 配置选项的简短注释。                                                   |
| `psz_longtext` | `char *`              | 配置选项的详细注释。                                                   |
| `value`        | `module_value_t`      | 选项的当前值。                                                         |
| `orig`         | `module_value_t`      | 选项的原始值。                                                         |
| `min`          | `module_value_t`      | 选项的最小值。                                                         |
| `max`          | `module_value_t`      | 选项的最大值。                                                         |
| `list_count`   | `uint16_t`            | 选项列表的大小。                                                       |
| `list`         | `union`               | 选项的可能值列表，可以是字符串列表、整数列表或回调函数。               |
| `list_text`    | `char **`             | 选项列表中值的友好名称。                                               |

### 返回值
该结构体没有返回值，因为它是一个定义配置选项的结构体。
## config_chain_t {#config_chain_t}

```c
struct config_chain_t
{
    config_chain_t *p_next;
    char *psz_name;
    char *psz_value;
};
```

### 描述
`config_chain_t` 结构体用于表示配置链中的一个元素。每个元素包含一个指向链中下一个元素的指针、一个选项名称和一个选项值。

### 结构体成员说明

| 成员变量 | 类型 | 描述 |
|----------|------|------|
| `p_next` | `config_chain_t *` | 指向链中下一个 `config_chain_t` 元素的指针。 |
| `psz_name` | `char *` | 指向选项名称的字符串指针。 |
| `psz_value` | `char *` | 指向选项值的字符串指针。 |

### 返回值
该结构体没有返回值，因为它是一个定义，而不是一个函数。
