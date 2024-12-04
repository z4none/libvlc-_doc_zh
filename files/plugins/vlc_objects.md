## vlc_object_hold {#vlc_object_hold}

```c
VLC_API void * vlc_object_hold( vlc_object_t * );
```

### 描述
该函数用于增加 `vlc_object_t` 对象的引用计数。调用此函数后，对象的引用计数会增加，从而防止对象在引用计数归零时被销毁。

### 函数参数说明

| 参数名          | 类型           | 描述                                                         |
|-----------------|----------------|--------------------------------------------------------------|
| `vlc_object_t *` | `vlc_object_t*` | 指向要增加引用计数的 `vlc_object_t` 对象的指针。             |

### 函数返回值
该函数返回传入的 `vlc_object_t` 对象的指针。如果传入的指针为 `NULL`，则返回 `NULL`。
## vlc_object_release {#vlc_object_release}

```c
VLC_API void vlc_object_release(vlc_object_t *obj);
```

### 函数描述
`vlc_object_release` 函数用于释放先前通过 `vlc_object_hold` 或 `vlc_custom_create` 获取的 VLC 对象。释放对象后，该对象将不再可用。

### 函数参数说明

| 参数名 | 类型          | 描述                                                                 |
|--------|---------------|--------------------------------------------------------------------------|
| obj    | vlc_object_t* | 指向要释放的 VLC 对象的指针。如果 `obj` 为 `NULL`，则函数不执行任何操作。 |

### 函数返回值
该函数没有返回值。
## vlc_list_release {#vlc_list_release}

```c
VLC_API void vlc_list_release(vlc_list_t *list);
```

### 函数描述
`vlc_list_release` 函数用于释放一个 `vlc_list_t` 类型的列表对象。调用此函数后，列表对象及其所有相关资源将被释放。

### 函数参数说明

| 参数名 | 类型        | 描述                                                                 |
|--------|-------------|--------------------------------------------------------------------------|
| list   | vlc_list_t* | 指向要释放的 `vlc_list_t` 类型列表对象的指针。如果为 `NULL`，函数将不执行任何操作。 |

### 函数返回值
该函数没有返回值。
## vlc_object_alive {#vlc_object_alive}

```c
VLC_API VLC_USED VLC_DEPRECATED bool vlc_object_alive (vlc_object_t *);
```

### 描述
该函数用于检查一个 VLC 对象是否仍然存活。它返回一个布尔值，指示对象是否仍然有效。

### 函数参数说明

| 参数名        | 类型          | 描述                         |
|---------------|---------------|------------------------------|
| vlc_object_t* | vlc_object_t* | 指向要检查的 VLC 对象的指针 |

### 函数返回值
- **true**: 如果对象仍然存活。
- **false**: 如果对象不再存活。
## vlc_object_t {#vlc_object_t}

```c
struct vlc_object_t
{
    VLC_COMMON_MEMBERS
};
```

### 描述
`vlc_object_t` 是 VLC 对象的主要结构体。它非常简单，只包含 `VLC_COMMON_MEMBERS` 宏定义的成员。

### 参数说明
此结构体没有参数。

### 返回值
此结构体定义不涉及返回值。
