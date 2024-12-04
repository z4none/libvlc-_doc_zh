## vlc_probe_add {#vlc_probe_add}

```c
static inline int vlc_probe_add(vlc_probe_t *obj, const void *data, size_t len)
{
    char *tab = (char *)realloc (obj->list, (obj->count + 1) * len);

    if (unlikely(tab == NULL))
        return VLC_ENOMEM;
    memcpy(tab + (obj->count * len), data, len);
    obj->list = tab;
    obj->count++;
    return VLC_SUCCESS;
}
```

### 函数描述
该函数用于向 `vlc_probe_t` 对象中添加数据。它会将传入的数据复制到对象的列表中，并更新列表的长度。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `obj`  | `vlc_probe_t *` | 指向 `vlc_probe_t` 对象的指针，表示要操作的探针对象。 |
| `data` | `const void *`  | 指向要添加的数据的指针。 |
| `len`  | `size_t`        | 要添加的数据的长度。 |

### 函数返回值

- `VLC_SUCCESS`：数据成功添加到 `vlc_probe_t` 对象中。
- `VLC_ENOMEM`：内存分配失败，无法添加数据。
## vlc_probe_t {#vlc_probe_t}

```c
struct vlc_probe_t {
    VLC_COMMON_MEMBERS

    void  *list;
    size_t count;
};
```

### 描述
`vlc_probe_t` 结构体用于表示一个探测器对象。它包含了与探测器相关的通用成员以及探测器列表和列表中元素的数量。

### 成员说明

| 成员名       | 类型    | 描述                                                                 |
|--------------|---------|--------------------------------------------------------------------------|
| VLC_COMMON_MEMBERS | -       | 包含与 VLC 对象相关的通用成员，具体内容未在此处定义。 |
| list         | `void*` | 指向探测器列表的指针，列表中存储了探测器相关的数据。 |
| count        | `size_t`| 探测器列表中元素的数量。                                             |

### 返回值
该结构体本身没有返回值，它是一个用于存储数据的结构体定义。
