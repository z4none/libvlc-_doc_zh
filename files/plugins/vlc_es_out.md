## es_out_Add {#es_out_Add}

```c
static inline es_out_id_t * es_out_Add( es_out_t *out, const es_format_t *fmt )
{
    return out->pf_add( out, fmt );
}
```

### 函数描述
该函数用于向输出模块添加一个新的元素流（ES）。它通过调用输出模块的 `pf_add` 函数来实现这一功能。

### 函数参数说明

| 参数名 | 类型           | 描述                                                         |
|--------|----------------|--------------------------------------------------------------|
| out    | es_out_t *     | 指向输出模块的指针，表示要添加元素流的输出模块。             |
| fmt    | const es_format_t * | 指向元素流格式的指针，表示要添加的元素流的格式信息。 |

### 函数返回值
该函数返回一个指向 `es_out_id_t` 类型的指针，表示新添加的元素流的标识符。如果添加成功，返回的指针将指向有效的元素流标识符；如果添加失败，返回的指针可能为 `NULL`。
## es_out_Send {#es_out_Send}

```c
static inline int es_out_Send( es_out_t *out, es_out_id_t *id, block_t *p_block )
{
    return out->pf_send( out, id, p_block );
}
```

### 函数描述
该函数用于将一个数据块发送到指定的输出流。它通过调用 `out` 结构体中的 `pf_send` 函数指针来实现发送操作。

### 函数参数说明

| 参数名   | 类型        | 描述                                                                 |
|----------|-------------|----------------------------------------------------------------------|
| `out`    | `es_out_t*` | 指向 `es_out_t` 结构体的指针，表示输出流。                           |
| `id`     | `es_out_id_t*` | 指向 `es_out_id_t` 结构体的指针，表示要发送数据块的目标输出流标识符。 |
| `p_block`| `block_t*`  | 指向 `block_t` 结构体的指针，表示要发送的数据块。                     |

### 函数返回值
该函数返回 `pf_send` 函数指针的返回值。通常情况下，返回值为 `0` 表示成功，其他值表示失败。具体返回值的含义取决于 `pf_send` 函数的实现。
## es_out_vaControl {#es_out_vaControl}

```c
static inline int es_out_vaControl( es_out_t *out, int i_query, va_list args )
{
    return out->pf_control( out, i_query, args );
}
```

### 描述
该函数是一个内联函数，用于通过可变参数列表 (`va_list`) 对 `es_out_t` 对象进行控制操作。它调用了 `es_out_t` 结构体中的 `pf_control` 函数指针来执行具体的控制操作。

### 参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `out` | `es_out_t *` | 指向 `es_out_t` 结构体的指针，表示要进行控制操作的对象。 |
| `i_query` | `int` | 控制操作的类型，具体操作类型由 `i_query` 的值决定。 |
| `args` | `va_list` | 可变参数列表，包含控制操作所需的额外参数。 |

### 返回值
该函数返回 `pf_control` 函数的返回值，具体返回值取决于 `pf_control` 函数的实现。通常情况下，返回值可能表示操作的成功或失败状态。
## es_out_Control {#es_out_Control}

```c
static inline int es_out_Control( es_out_t *out, int i_query, ... )
```

### 描述
`es_out_Control` 函数是一个内联函数，用于控制 `es_out_t` 类型的输出对象。它通过可变参数列表来传递控制命令和相关参数，并将这些参数传递给 `es_out_vaControl` 函数进行处理。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `out` | `es_out_t *` | 指向 `es_out_t` 类型的输出对象的指针。 |
| `i_query` | `int` | 控制命令的标识符，用于指定要执行的操作。 |
| `...` | `va_list` | 可变参数列表，包含与控制命令相关的参数。 |

### 函数返回值
`es_out_Control` 函数的返回值是 `es_out_vaControl` 函数的返回值。具体返回值取决于 `i_query` 参数指定的控制命令及其执行结果。通常情况下，返回值为 `0` 表示操作成功，非零值表示操作失败或出现错误。
## es_out_Delete {#es_out_Delete}

```c
static inline void es_out_Delete( es_out_t *p_out )
```

### 函数描述
该函数用于删除一个 `es_out_t` 类型的对象。它调用了 `p_out` 对象的 `pf_destroy` 函数指针来执行销毁操作。

### 函数参数说明

| 参数名 | 类型       | 描述               |
|--------|------------|--------------------|
| `p_out`| `es_out_t*`| 指向要删除的 `es_out_t` 对象的指针。|

### 函数返回值
该函数没有返回值。
