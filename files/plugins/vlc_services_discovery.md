## vlc_sd_control {#vlc_sd_control}

```c
static inline int vlc_sd_control( services_discovery_t *p_sd, int i_control, va_list args )
```

### 描述
该函数用于在服务发现（Service Discovery）中发起一个请求。它通过调用服务发现对象的控制函数来执行指定的命令，并传递相应的参数列表。

### 函数参数说明

| 参数名      | 类型                | 描述                                                                 |
|-------------|---------------------|----------------------------------------------------------------------|
| `p_sd`      | `services_discovery_t*` | 服务发现对象的指针，表示要进行操作的服务发现实例。                   |
| `i_control` | `int`               | 要执行的命令，表示具体的操作类型。                                   |
| `args`      | `va_list`           | 可变参数列表，包含传递给命令的参数。                                 |

### 函数返回值
- **`VLC_SUCCESS`**: 表示操作成功。
- **`VLC_EGENERIC`**: 表示操作失败，通常是因为服务发现对象的控制函数未定义。
## vlc_sd_Start {#vlc_sd_Start}

```c
VLC_API bool vlc_sd_Start( services_discovery_t * );
```

### 函数描述
该函数用于启动服务发现模块。它初始化并启动指定的服务发现模块，使其开始发现可用的服务。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `services_discovery_t *` | `services_discovery_t *` | 指向服务发现模块的指针，表示要启动的服务发现模块。 |

### 函数返回值
- **`true`**: 表示服务发现模块成功启动。
- **`false`**: 表示服务发现模块启动失败。
## vlc_sd_Stop {#vlc_sd_Stop}

```c
VLC_API void vlc_sd_Stop( services_discovery_t *p_sd );
```

### 描述
该函数用于停止服务发现模块。调用此函数后，服务发现模块将停止发现新的服务，并且不再接收新的服务通知。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_sd` | `services_discovery_t *` | 指向服务发现模块的指针。 |

### 函数返回值
该函数没有返回值。
## vlc_sd_Destroy {#vlc_sd_Destroy}

```c
VLC_API void vlc_sd_Destroy( services_discovery_t *p_sd );
```

### 函数描述
该函数用于销毁一个服务发现模块（services discovery module）。它释放与服务发现模块相关的所有资源，并将其从 VLC 媒体播放器中移除。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_sd` | `services_discovery_t *` | 指向要销毁的服务发现模块的指针。 |

### 函数返回值
该函数没有返回值。
## vlc_sd_StopAndDestroy {#vlc_sd_StopAndDestroy}

```c
static inline void vlc_sd_StopAndDestroy( services_discovery_t * p_this )
```

### 描述
该函数用于停止并销毁服务发现。它首先调用 `vlc_sd_Stop` 函数停止服务发现，然后调用 `vlc_sd_Destroy` 函数销毁服务发现。

### 函数参数说明

| 参数名       | 类型                    | 描述                       |
|--------------|-------------------------|----------------------------|
| `p_this`     | `services_discovery_t *` | 指向服务发现对象的指针     |

### 函数返回值
该函数没有返回值。
## services_discovery_AddItem {#services_discovery_AddItem}

```c
VLC_API void services_discovery_AddItem( services_discovery_t * p_this, input_item_t * p_item, const char * psz_category );
```

### 描述
该函数用于向服务发现模块发布关于其项目的更新。关于 `psz_category` 参数，它是一种遗留方式，用于向项目添加信息。为了获得更多选项，可以直接在输入项目上设置（元）数据。

### 参数说明

| 参数名        | 类型                  | 描述                                                                 |
|---------------|-----------------------|--------------------------------------------------------------------------|
| `p_this`      | `services_discovery_t *` | 指向服务发现模块的指针，表示当前服务发现模块的实例。                     |
| `p_item`      | `input_item_t *`       | 指向要添加的输入项目的指针，表示要添加到服务发现模块中的项目。           |
| `psz_category`| `const char *`        | 指向类别字符串的指针，表示项目的类别。这是一个遗留字段，建议直接设置元数据。 |

### 返回值
该函数没有返回值。
## services_discovery_RemoveItem {#services_discovery_RemoveItem}

```c
VLC_API void services_discovery_RemoveItem( services_discovery_t * p_this, input_item_t * p_item );
```

### 函数描述
该函数用于从服务发现模块中移除一个输入项。当服务发现模块不再提供某个输入项时，应调用此函数。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_this`     | `services_discovery_t *` | 指向服务发现模块实例的指针。                                           |
| `p_item`     | `input_item_t *`        | 指向要移除的输入项的指针。该输入项应是之前通过 `services_discovery_AddItem` 添加的。 |

### 函数返回值
该函数没有返回值。
## services_discovery_RemoveAll {#services_discovery_RemoveAll}

```c
VLC_API void services_discovery_RemoveAll( services_discovery_t * p_sd );
```

### 描述
该函数用于从服务发现模块中移除所有已发现的服务。调用此函数后，服务发现模块将不再提供任何服务。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_sd` | `services_discovery_t *` | 指向服务发现模块的指针，表示要移除所有服务的模块。 |

### 函数返回值
该函数没有返回值。
## vlc_sd_probe_Add {#vlc_sd_probe_Add}

```c
VLC_API int vlc_sd_probe_Add(vlc_probe_t *probe, const char *name, const char *longname, int category);
```

### 描述
该函数用于向探测器添加一个新的服务发现（SD）探测项。探测项用于在启动时检测可用的服务发现模块。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| `probe`   | `vlc_probe_t*` | 指向 `vlc_probe_t` 结构的指针，表示要添加探测项的探测器。                |
| `name`    | `const char*` | 探测项的名称，通常是服务发现模块的简称。                                 |
| `longname`| `const char*` | 探测项的详细名称，通常是服务发现模块的全称。                             |
| `category`| `int`         | 探测项的类别，表示该探测项所属的类别（例如音频、视频、网络等）。         |

### 函数返回值

- `0`：成功添加探测项。
- `-1`：添加探测项失败。
## services_discovery_t {#services_discovery_t}

```c
struct services_discovery_t
{
    VLC_COMMON_MEMBERS
    module_t *          p_module;             /**< Loaded module */
    vlc_event_manager_t event_manager;         /**< Event manager */
    char *psz_name;                           /**< Main name of the SD */
    config_chain_t *p_cfg;                    /**< Configuration for the SD */
    int ( *pf_control ) ( services_discovery_t *, int, va_list );
    services_discovery_sys_t *p_sys;          /**< Custom private data */
};
```

### 描述
`services_discovery_t` 结构体用于构建服务发现模块（SD模块）。它包含了加载的模块、事件管理器、服务发现的主名称、配置信息、控制函数以及自定义的私有数据。

### 成员说明

| 成员变量          | 类型                          | 描述                                                                 |
|-------------------|-------------------------------|--------------------------------------------------------------------------|
| `p_module`        | `module_t *`                  | 加载的模块。                                                           |
| `event_manager`   | `vlc_event_manager_t`         | 事件管理器。应通过设置器访问，而不是在核心外部直接访问。               |
| `psz_name`        | `char *`                      | 服务发现的主名称。                                                     |
| `p_cfg`           | `config_chain_t *`            | 服务发现的配置信息。                                                   |
| `pf_control`      | `int (*)(services_discovery_t *, int, va_list)` | 控制函数。参见 `services_discovery_command_e`。 |
| `p_sys`           | `services_discovery_sys_t *`  | 自定义的私有数据。                                                     |

### 返回值
该结构体本身没有返回值，因为它是一个定义结构体。
