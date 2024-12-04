## vlc_event_manager_init {#vlc_event_manager_init}

```c
void vlc_event_manager_init(vlc_event_manager_t *p_em, void *p_obj, libvlc_object_t *p_parent);
```

### 描述
该函数用于初始化事件管理器。事件管理器用于管理与对象相关的事件。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_em` | `vlc_event_manager_t *` | 指向事件管理器结构的指针，该结构将被初始化。 |
| `p_obj` | `void *` | 指向与事件管理器关联的对象的指针。 |
| `p_parent` | `libvlc_object_t *` | 指向父对象的指针，通常是 `libvlc_object_t` 类型的对象。 |

### 函数返回值
该函数没有返回值。
## vlc_event_send {#vlc_event_send}

```c
void vlc_event_send(vlc_event_manager_t *p_event_manager, vlc_event_t *event);
```

### 描述
该函数用于向事件管理器发送一个事件。事件管理器会通知所有注册的监听器，并将事件传递给它们。

### 函数参数说明

| 参数名称            | 类型                    | 描述                                                                 |
|---------------------|-------------------------|----------------------------------------------------------------------|
| `p_event_manager`   | `vlc_event_manager_t*`  | 指向事件管理器对象的指针，事件将通过该管理器发送。                   |
| `event`             | `vlc_event_t*`          | 指向要发送的事件对象的指针，包含事件的类型和相关数据。               |

### 函数返回值
该函数没有返回值。
## vlc_event_manager_register_event_type {#vlc_event_manager_register_event_type}

```c
VLC_API int vlc_event_manager_register_event_type( vlc_event_manager_t * p_em,
                                                   vlc_event_type_t event_type );
```

### 函数描述
该函数用于通知特定的事件管理器（`vlc_event_manager_t`）它将处理指定的事件类型（`vlc_event_type_t`）。

### 函数参数说明

| 参数名       | 类型                  | 描述                                                                 |
|--------------|-----------------------|--------------------------------------------------------------------------|
| `p_em`       | `vlc_event_manager_t *` | 指向事件管理器对象的指针，表示要注册事件类型的事件管理器。 |
| `event_type` | `vlc_event_type_t`     | 要注册的事件类型。                                               |

### 函数返回值
- **成功**：返回 `0`。
- **失败**：返回非零值，表示注册事件类型失败。
