## var_Create 

```c
VLC_API int var_Create( vlc_object_t *p_this, const char *psz_name, int i_type );
```

### 描述

该函数用于在指定的 VLC 对象中创建一个新的变量。变量可以是整数、布尔值、字符串等类型。如果变量已经存在，则不会重新创建，而是返回成功状态。

### 函数参数说明

| 参数名       | 类型           | 描述                                                                 |
|--------------|----------------|--------------------------------------------------------------------------|
| `p_this`     | `vlc_object_t *` | 指向 VLC 对象的指针，变量将在这个对象中创建。                            |
| `psz_name`   | `const char *`  | 变量的名称，用于标识该变量。                                             |
| `i_type`     | `int`           | 变量的类型，可以是 `VLC_VAR_INTEGER`、`VLC_VAR_BOOL`、`VLC_VAR_STRING` 等。 |

### 函数返回值

- `0`：成功创建或变量已存在。
- `-1`：创建变量失败。
## var_Destroy {#var_Destroy}

```c
VLC_API int var_Destroy( vlc_object_t *p_this, const char *psz_name );
```

### 描述
`var_Destroy` 函数用于销毁（删除）一个在 `vlc_object_t` 对象中定义的变量。该变量由其名称 `psz_name` 指定。

### 函数参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|--------------------------------------------------------------------------|
| `p_this`  | `vlc_object_t *` | 指向 `vlc_object_t` 对象的指针，表示变量所属的对象。                  |
| `psz_name`| `const char *`  | 指向变量名称的指针，表示要销毁的变量的名称。                          |

### 函数返回值
- `0`：成功销毁变量。
- `-1`：变量不存在或销毁失败。
## var_Change {#var_Change}

```c
VLC_API int var_Change( vlc_object_t *p_this, const char *psz_name, int i_query, vlc_value_t *p_val, vlc_value_t *p_val2 );
```

### 描述
`var_Change` 函数用于修改或查询变量的值。它允许对变量执行各种操作，如设置新值、获取当前值、增加或减少变量的值等。

### 函数参数说明

| 参数名       | 类型           | 描述                                                                 |
|--------------|----------------|--------------------------------------------------------------------------|
| `p_this`     | `vlc_object_t*`| 指向 VLC 对象的指针，通常是 `libvlc` 实例或其子对象。                      |
| `psz_name`   | `const char*`  | 变量的名称，用于标识要操作的变量。                                        |
| `i_query`    | `int`          | 操作类型，指定要执行的操作。常见的操作包括 `VLC_VAR_SETVALUE`、`VLC_VAR_GETVALUE` 等。 |
| `p_val`      | `vlc_value_t*` | 指向 `vlc_value_t` 结构的指针，用于存储或传递变量的值。                   |
| `p_val2`     | `vlc_value_t*` | 指向 `vlc_value_t` 结构的指针，用于传递第二个值（例如在范围操作中）。     |

### 函数返回值
- `0`：操作成功。
- `-1`：操作失败，通常是因为变量不存在或操作类型不支持。
## var_Set {#var_Set}

```c
VLC_API int var_Set( vlc_object_t *p_this, const char *psz_name, vlc_value_t val );
```

### 描述
该函数用于设置指定对象的变量值。它将变量 `psz_name` 的值设置为 `val`，并触发相应的回调函数（如果有的话）。

### 函数参数说明

| 参数名       | 类型           | 描述                                                                 |
|--------------|----------------|--------------------------------------------------------------------------|
| `p_this`     | `vlc_object_t *` | 指向要设置变量的对象的指针。                                             |
| `psz_name`   | `const char *`  | 要设置的变量的名称。                                                     |
| `val`        | `vlc_value_t`   | 要设置的变量的新值。                                                     |

### 函数返回值

- `0`：成功设置变量值。
- `-1`：设置变量值失败。可能的原因包括变量不存在或类型不匹配。
## var_Get {#var_Get}

```c
VLC_API int var_Get(vlc_object_t *p_this, const char *psz_name, vlc_value_t *p_val);
```

### 描述
该函数用于从指定的 VLC 对象中获取一个变量的值。变量可以是整数、浮点数、字符串、布尔值等类型。获取的值将被存储在 `vlc_value_t` 结构体中。

### 函数参数说明

| 参数名      | 类型            | 描述                                                                 |
|-------------|-----------------|----------------------------------------------------------------------|
| `p_this`    | `vlc_object_t *` | 指向 VLC 对象的指针，表示要从哪个对象中获取变量值。                  |
| `psz_name`  | `const char *`  | 指向变量名称的字符串指针，表示要获取的变量的名称。                   |
| `p_val`     | `vlc_value_t *` | 指向 `vlc_value_t` 结构体的指针，用于存储获取到的变量值。            |

### 函数返回值

- **返回值为 0**：表示成功获取变量值。
- **返回值为 -1**：表示获取变量值失败，可能是由于变量不存在或其他错误。
## var_SetChecked {#var_SetChecked}

```c
VLC_API int var_SetChecked( vlc_object_t *p_this, const char *psz_name, int i_type, vlc_value_t val );
```

### 描述
该函数用于设置一个变量的值，并检查该变量的类型是否与提供的值类型匹配。如果类型不匹配，函数将返回错误。

### 函数参数说明

| 参数名       | 类型          | 描述                                                                 |
|--------------|---------------|--------------------------------------------------------------------------|
| `p_this`     | `vlc_object_t *` | 指向 VLC 对象的指针，该对象包含要设置的变量。                            |
| `psz_name`   | `const char *`  | 要设置的变量的名称。                                                     |
| `i_type`     | `int`           | 变量的类型。该类型必须与 `val` 的类型匹配。                              |
| `val`        | `vlc_value_t`   | 要设置的变量的值。该值的类型必须与 `i_type` 指定的类型一致。             |

### 函数返回值

- `0`：成功设置变量的值。
- `-1`：变量类型不匹配或设置失败。
## var_GetChecked {#var_GetChecked}

```c
VLC_API int var_GetChecked( vlc_object_t *p_this, const char *psz_name, int i_type, vlc_value_t *p_val );
```

### 描述
该函数用于从指定的 VLC 对象中获取一个变量的值，并检查该变量的类型是否与预期类型匹配。如果类型匹配，则返回变量的值；否则返回错误。

### 函数参数说明

| 参数名       | 类型           | 描述                                                                 |
|--------------|----------------|--------------------------------------------------------------------------|
| `p_this`     | `vlc_object_t *` | 指向 VLC 对象的指针，从中获取变量值。                                      |
| `psz_name`   | `const char *`  | 变量的名称，用于标识要获取的变量。                                         |
| `i_type`     | `int`           | 预期的变量类型，用于检查获取的变量类型是否匹配。                           |
| `p_val`      | `vlc_value_t *` | 指向 `vlc_value_t` 结构的指针，用于存储获取的变量值。                      |

### 函数返回值

- **返回值为 `0`**：表示成功获取变量值，并且变量类型与预期类型匹配。
- **返回值为 `-1`**：表示获取变量值失败，或者变量类型与预期类型不匹配。
## var_GetAndSet {#var_GetAndSet}

```c
VLC_API int var_GetAndSet( vlc_object_t *p_this, const char *psz_name, int i_type, vlc_value_t *p_val );
```

### 描述

该函数用于获取并设置一个变量的值。它首先获取指定变量的当前值，然后根据传入的类型和值进行设置。

### 函数参数说明

| 参数名       | 类型            | 描述                                                                 |
|--------------|-----------------|----------------------------------------------------------------------|
| `p_this`     | `vlc_object_t *` | VLC 对象指针，指向包含变量的对象。                                    |
| `psz_name`   | `const char *`  | 变量名称，指定要获取和设置的变量的名称。                              |
| `i_type`     | `int`           | 变量的类型，指定要设置的值的类型。                                    |
| `p_val`      | `vlc_value_t *` | 指向 `vlc_value_t` 结构的指针，用于存储获取的值和设置的新值。        |

### 函数返回值

- `0`：成功获取并设置了变量的值。
- `-1`：获取或设置变量值时发生错误。
## var_Inherit {#var_Inherit}

```c
VLC_API int var_Inherit( vlc_object_t *p_this, const char *psz_name, int i_type, vlc_value_t *p_val );
```

### 描述
该函数用于从对象中继承变量。它尝试从对象的父对象中继承指定名称的变量，并将其值存储在 `p_val` 中。如果变量不存在，则返回错误。

### 函数参数说明

| 参数名       | 类型           | 描述                                                                 |
|--------------|----------------|--------------------------------------------------------------------------|
| `p_this`     | `vlc_object_t *` | 指向当前对象的指针，函数将从该对象的父对象中继承变量。                   |
| `psz_name`   | `const char *`  | 要继承的变量的名称。                                                   |
| `i_type`     | `int`           | 变量的类型。该类型必须与 `vlc_value_t` 结构中的类型匹配。               |
| `p_val`      | `vlc_value_t *` | 指向 `vlc_value_t` 结构的指针，用于存储继承的变量的值。                 |

### 函数返回值

- **成功**：返回 `VLC_SUCCESS`，表示变量成功继承，并且 `p_val` 中存储了继承的值。
- **失败**：返回 `VLC_EGENERIC`，表示变量未找到或类型不匹配。
## var_FreeList {#var_FreeList}

```c
VLC_API void var_FreeList( vlc_value_t *p_list, vlc_value_t *p_val );
```

### 描述
该函数用于释放由 `var_GetList` 或 `var_Change` 返回的列表和值。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| `p_list`  | `vlc_value_t*` | 指向要释放的列表的指针。如果为 `NULL`，则忽略该参数。                   |
| `p_val`   | `vlc_value_t*` | 指向要释放的值的指针。如果为 `NULL`，则忽略该参数。                     |

### 函数返回值
该函数没有返回值。
## var_AddCallback {#var_AddCallback}

```c
VLC_API int var_AddCallback( vlc_object_t *p_this, const char *psz_variable, vlc_callback_t callback, void *p_data );
```

### 描述
`var_AddCallback` 函数用于向指定的 VLC 对象中的变量添加回调函数。当该变量的值发生变化时，注册的回调函数将被调用。

### 函数参数说明

| 参数名        | 类型              | 描述                                                                 |
|---------------|-------------------|--------------------------------------------------------------------------|
| `p_this`      | `vlc_object_t *`  | 指向 VLC 对象的指针，回调函数将与此对象相关联。                         |
| `psz_variable`| `const char *`    | 指向变量名称的字符串指针，回调函数将与此变量相关联。                   |
| `callback`    | `vlc_callback_t`  | 指向回调函数的指针，当变量的值发生变化时，该函数将被调用。             |
| `p_data`      | `void *`          | 指向用户数据的指针，该数据将在回调函数被调用时传递给回调函数。         |

### 函数返回值

- **成功**：返回 `0`，表示回调函数已成功添加到指定的变量。
- **失败**：返回非零值，表示添加回调函数失败。可能的原因包括变量不存在或内存分配失败。
## var_DelCallback {#var_DelCallback}

```c
VLC_API int var_DelCallback( vlc_object_t *p_obj, const char *psz_name, vlc_callback_t pf_callback, void *p_data );
```

### 描述
该函数用于删除先前通过 `var_AddCallback` 注册的变量回调。回调函数 `pf_callback` 和数据指针 `p_data` 必须与注册时使用的完全相同。

### 函数参数说明

| 参数名        | 类型              | 描述                                                                 |
|---------------|-------------------|--------------------------------------------------------------------------|
| `p_obj`       | `vlc_object_t *`  | 指向 VLC 对象的指针，该对象包含要删除回调的变量。                         |
| `psz_name`    | `const char *`    | 变量的名称，指定要删除回调的变量。                                       |
| `pf_callback` | `vlc_callback_t`  | 指向要删除的回调函数的指针。                                             |
| `p_data`      | `void *`          | 传递给回调函数的数据指针，必须与注册时使用的数据指针相同。                 |

### 函数返回值

- **返回值为 `0`**：表示成功删除了回调。
- **返回值为 `-1`**：表示未找到匹配的回调，删除失败。
## var_TriggerCallback {#var_TriggerCallback}

```c
VLC_API int var_TriggerCallback( vlc_object_t *p_obj, const char *psz_name );
```

### 描述
该函数用于触发与指定变量关联的回调函数。当某个变量的值发生变化时，可能会注册一个回调函数来处理该变化。调用此函数将强制触发该回调函数，即使变量的值没有实际改变。

### 函数参数说明

| 参数名    | 类型          | 描述                                                         |
|-----------|---------------|--------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 指向包含变量的对象的指针。该对象通常是一个 `vlc_object_t` 类型的实例。 |
| `psz_name`| `const char*`  | 指向变量名称的指针。该名称用于标识要触发回调的变量。           |

### 函数返回值

- **返回值类型**: `int`
- **返回值说明**:
  - `0`: 成功触发回调函数。
  - `非0值`: 触发回调函数失败，可能是因为指定的变量不存在或没有注册回调函数。
## var_SetInteger {#var_SetInteger}

```c
static inline int var_SetInteger( vlc_object_t *p_obj, const char *psz_name, int64_t i )
```

### 描述
设置一个整数变量的值。

### 函数参数说明

| 参数名    | 类型           | 描述                                                         |
|-----------|----------------|--------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 持有该变量的对象。                                           |
| `psz_name`| `const char*`  | 变量的名称。                                                 |
| `i`       | `int64_t`      | 变量的新整数值。                                             |

### 函数返回值
- 返回 `var_SetChecked` 函数的返回值，表示操作是否成功。通常情况下，返回 `0` 表示成功，非零值表示失败。
## var_SetBool {#var_SetBool}

```c
static inline int var_SetBool( vlc_object_t *p_obj, const char *psz_name, bool b )
{
    vlc_value_t val;
    val.b_bool = b;
    return var_SetChecked( p_obj, psz_name, VLC_VAR_BOOL, val );
}
```

### 函数描述
设置一个布尔变量的值。

### 函数参数说明
| 参数名    | 类型           | 描述                   |
|-----------|----------------|------------------------|
| `p_obj`   | `vlc_object_t*` | 持有该变量的对象       |
| `psz_name`| `const char*`  | 变量的名称             |
| `b`       | `bool`         | 变量的新布尔值         |

### 函数返回值
- 返回值为 `int` 类型。
- 返回值的具体含义依赖于 `var_SetChecked` 函数的返回值。通常情况下，返回值为 `0` 表示成功，非零值表示失败。
## var_SetTime {#var_SetTime}

```c
static inline int var_SetTime( vlc_object_t *p_obj, const char *psz_name, int64_t i )
{
    vlc_value_t val;
    val.i_time = i;
    return var_SetChecked( p_obj, psz_name, VLC_VAR_TIME, val );
}
```

### 描述
设置一个时间变量的值。

### 函数参数说明

| 参数名    | 类型          | 描述                         |
|-----------|---------------|------------------------------|
| `p_obj`   | `vlc_object_t*` | 持有该变量的对象             |
| `psz_name`| `const char*`  | 变量的名称                   |
| `i`       | `int64_t`      | 该变量的新时间值             |

### 函数返回值
- 返回值为 `int` 类型。
- 如果成功设置时间变量的值，则返回 `var_SetChecked` 函数的返回值。
- 具体返回值取决于 `var_SetChecked` 函数的实现。
## var_SetCoords {#var_SetCoords}

```c
static inline int var_SetCoords(vlc_object_t *obj, const char *name, int32_t x, int32_t y)
```

### 描述
该函数用于设置一个变量的坐标值。它将指定的 `x` 和 `y` 坐标值赋给变量，并通过 `var_SetChecked` 函数进行设置。

### 参数说明

| 参数名 | 类型          | 描述                                                         |
| ------ | ------------- | ------------------------------------------------------------ |
| obj    | vlc_object_t* | VLC 对象指针，表示要操作的对象。                             |
| name   | const char*   | 变量的名称，表示要设置的变量的名称。                         |
| x      | int32_t       | 要设置的 `x` 坐标值。                                        |
| y      | int32_t       | 要设置的 `y` 坐标值。                                        |

### 返回值
- **成功**：返回 `var_SetChecked` 函数的返回值，通常为 `0`。
- **失败**：返回 `var_SetChecked` 函数的返回值，可能为非零值，表示设置失败。
## var_SetFloat {#var_SetFloat}

```c
static inline int var_SetFloat( vlc_object_t *p_obj, const char *psz_name, float f )
{
    vlc_value_t val;
    val.f_float = f;
    return var_SetChecked( p_obj, psz_name, VLC_VAR_FLOAT, val );
}
```

### 函数描述
设置一个浮点变量的值。

### 函数参数说明
| 参数名    | 类型           | 描述                         |
|-----------|----------------|------------------------------|
| `p_obj`   | `vlc_object_t*`| 持有该变量的对象             |
| `psz_name`| `const char*`  | 变量的名称                   |
| `f`       | `float`        | 要设置的新浮点值             |

### 函数返回值
- 成功时返回 `0`。
- 失败时返回非零值。
## var_SetString {#var_SetString}

```c
static inline int var_SetString( vlc_object_t *p_obj, const char *psz_name, const char *psz_string )
{
    vlc_value_t val;
    val.psz_string = (char *)psz_string;
    return var_SetChecked( p_obj, psz_name, VLC_VAR_STRING, val );
}
```

### 函数描述
设置一个字符串变量的值。

### 函数参数说明
| 参数名      | 类型           | 描述                         |
|-------------|----------------|------------------------------|
| `p_obj`     | `vlc_object_t*`| 持有该变量的对象             |
| `psz_name`  | `const char*`  | 变量的名称                   |
| `psz_string`| `const char*`  | 变量的新字符串值             |

### 函数返回值
- 返回 `var_SetChecked` 函数的返回值，表示操作是否成功。通常情况下，返回 `0` 表示成功，非零值表示失败。
## var_SetAddress {#var_SetAddress}

```c
static inline int var_SetAddress( vlc_object_t *p_obj, const char *psz_name, void *ptr )
{
    vlc_value_t val;
    val.p_address = ptr;
    return var_SetChecked( p_obj, psz_name, VLC_VAR_ADDRESS, val );
}
```

### 函数描述
设置指针变量的值。

### 函数参数说明

| 参数名    | 类型           | 描述                     |
|-----------|----------------|--------------------------|
| `p_obj`   | `vlc_object_t*` | 持有变量的对象           |
| `psz_name`| `const char*`  | 变量的名称               |
| `ptr`     | `void*`        | 变量的新指针值           |

### 函数返回值
- 返回 `int` 类型，表示操作的结果。
  - 如果成功，返回值为 `var_SetChecked` 函数的返回值。
  - 如果失败，返回值为 `var_SetChecked` 函数的返回值。
## var_GetInteger {#var_GetInteger}

```c
static inline int64_t var_GetInteger( vlc_object_t *p_obj, const char *psz_name )
```

### 函数描述
获取一个整数值。

### 函数参数说明

| 参数名    | 类型           | 描述                   |
|-----------|----------------|------------------------|
| `p_obj`   | `vlc_object_t*` | 持有变量的对象         |
| `psz_name`| `const char*`  | 变量的名称             |

### 函数返回值
- 如果成功获取变量的整数值，则返回该整数值。
- 如果获取失败，则返回 `0`。
## var_GetBool {#var_GetBool}

```c
static inline bool var_GetBool( vlc_object_t *p_obj, const char *psz_name )
```

### 描述
获取一个布尔值。

### 函数参数说明

| 参数名    | 类型           | 描述                   |
|-----------|----------------|------------------------|
| `p_obj`   | `vlc_object_t*` | 持有变量的对象         |
| `psz_name`| `const char*`  | 变量的名称             |

### 函数返回值
- 如果成功获取到布尔值，则返回该布尔值。
- 如果获取失败，则返回 `false`。
## var_GetTime {#var_GetTime}

```c
static inline int64_t var_GetTime( vlc_object_t *p_obj, const char *psz_name )
```

### 描述
获取一个时间值。

### 函数参数说明

| 参数名    | 类型           | 描述                     |
|-----------|----------------|--------------------------|
| `p_obj`   | `vlc_object_t*` | 持有变量的对象           |
| `psz_name`| `const char*`  | 变量的名称               |

### 函数返回值
- 如果成功获取时间值，则返回该时间值。
- 如果获取失败，则返回 `0`。
## var_GetCoords {#var_GetCoords}

```c
static inline void var_GetCoords( vlc_object_t *obj, const char *name, int32_t *px, int32_t *py )
```

### 函数描述
该函数用于从指定的 VLC 对象中获取名为 `name` 的变量的坐标值。如果成功获取坐标值，则将其存储在 `px` 和 `py` 指向的变量中；如果获取失败，则将 `px` 和 `py` 设置为 0。

### 函数参数说明

| 参数名 | 类型        | 描述                                                         |
|--------|-------------|--------------------------------------------------------------|
| `obj`  | `vlc_object_t *` | 指向 VLC 对象的指针，从中获取变量值。                        |
| `name` | `const char *`  | 变量的名称，用于标识要获取的坐标值。                         |
| `px`   | `int32_t *`     | 指向 `int32_t` 类型的指针，用于存储获取到的 x 坐标值。       |
| `py`   | `int32_t *`     | 指向 `int32_t` 类型的指针，用于存储获取到的 y 坐标值。       |

### 函数返回值
该函数没有返回值（`void`）。如果成功获取坐标值，则 `px` 和 `py` 将被设置为相应的坐标值；如果获取失败，则 `px` 和 `py` 都将被设置为 0。
## var_GetFloat {#var_GetFloat}

```c
static inline float var_GetFloat( vlc_object_t *p_obj, const char *psz_name )
```

### 描述
获取一个浮点数值。

### 函数参数说明

| 参数名    | 类型            | 描述                   |
|-----------|-----------------|------------------------|
| `p_obj`   | `vlc_object_t*` | 持有变量的对象         |
| `psz_name`| `const char*`   | 变量的名称             |

### 函数返回值
- 如果成功获取到浮点数值，则返回该浮点数值。
- 如果获取失败，则返回 `0.0`。
## free {#free}

```c
void free(void *ptr);
```

### 描述
`free` 函数用于释放之前通过 `malloc`、`calloc`、`realloc` 等函数分配的内存空间。释放后的内存空间可以被重新分配。如果传入的指针为 `NULL`，则 `free` 函数不会执行任何操作。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `ptr`  | `void *` | 指向需要释放的内存空间的指针。如果为 `NULL`，则函数不执行任何操作。 |

### 函数返回值
`free` 函数没有返回值。
## var_IncInteger {#var_IncInteger}

```c
static inline int64_t var_IncInteger( vlc_object_t *p_obj, const char *psz_name )
{
    vlc_value_t val;
    val.i_int = 1;
    var_GetAndSet( p_obj, psz_name, VLC_VAR_INTEGER_ADD, &val );
    return val.i_int;
}
```

### 函数描述
该函数用于递增一个整数变量。它通过调用 `var_GetAndSet` 函数来实现对指定变量的递增操作。

### 函数参数说明

| 参数名    | 类型           | 描述                                                         |
|-----------|----------------|--------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 包含变量的对象指针。                                         |
| `psz_name`| `const char*`  | 要递增的变量的名称。                                         |

### 函数返回值
该函数返回递增后的整数值。由于在函数内部将 `val.i_int` 初始化为 1，并调用 `var_GetAndSet` 函数进行递增操作，因此返回值为递增后的整数值。
## var_DecInteger {#var_DecInteger}

```c
static inline int64_t var_DecInteger( vlc_object_t *p_obj, const char *psz_name )
{
    vlc_value_t val;
    val.i_int = -1;
    var_GetAndSet( p_obj, psz_name, VLC_VAR_INTEGER_ADD, &val );
    return val.i_int;
}
```

### 函数描述
该函数用于递减一个整数变量的值。它通过调用 `var_GetAndSet` 函数来实现对指定变量的递减操作。

### 函数参数说明

| 参数名    | 类型           | 描述                                                         |
|-----------|----------------|--------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 包含变量的对象指针。                                         |
| `psz_name`| `const char*`  | 要递减的变量的名称。                                         |

### 函数返回值
该函数返回递减后的整数值。具体来说，返回值是递减后的整数值，即原值减去1。
## var_OrInteger {#var_OrInteger}

```c
static inline uint64_t var_OrInteger( vlc_object_t *obj, const char *name, unsigned v )
{
    vlc_value_t val;
    val.i_int = v;
    var_GetAndSet( obj, name, VLC_VAR_INTEGER_OR, &val );
    return val.i_int;
}
```

### 函数描述
该函数用于将一个整数值与指定变量的当前值进行按位或操作，并将结果存储回该变量。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `obj`  | `vlc_object_t *` | VLC 对象指针，指向包含变量的对象。 |
| `name` | `const char *` | 变量的名称，指定要操作的变量。 |
| `v`    | `unsigned` | 要与变量当前值进行按位或操作的整数值。 |

### 函数返回值
函数返回操作后的整数值。具体来说，返回值是变量当前值与传入的整数值 `v` 进行按位或操作后的结果。
## var_NAndInteger {#var_NAndInteger}

```c
static inline uint64_t var_NAndInteger( vlc_object_t *obj, const char *name, unsigned v )
{
    vlc_value_t val;
    val.i_int = v;
    var_GetAndSet( obj, name, VLC_VAR_INTEGER_NAND, &val );
    return val.i_int;
}
```

### 函数描述
该函数用于对指定对象的变量执行按位与非（NAND）操作，并将结果存储在变量中。具体来说，它首先获取指定变量的当前值，然后对该值与传入的整数 `v` 执行按位与非操作，最后将结果存储回变量中。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `obj`  | `vlc_object_t *` | VLC 对象指针，指向要操作的对象。 |
| `name` | `const char *`  | 变量名称，指定要操作的变量。 |
| `v`    | `unsigned`      | 要与变量当前值进行按位与非操作的整数。 |

### 函数返回值
函数返回执行按位与非操作后的结果，即变量的新值。返回值类型为 `uint64_t`。
## var_CreateGetInteger {#var_CreateGetInteger}

```c
static inline int64_t var_CreateGetInteger( vlc_object_t *p_obj, const char *psz_name )
{
    var_Create( p_obj, psz_name, VLC_VAR_INTEGER | VLC_VAR_DOINHERIT );
    return var_GetInteger( p_obj, psz_name );
}
```

### 描述
该函数用于创建一个继承的整数变量，并获取其值。

### 函数参数说明

| 参数名    | 类型           | 描述                                                         |
|-----------|----------------|--------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 持有变量的对象指针。                                         |
| `psz_name`| `const char*`  | 变量的名称。                                                 |

### 函数返回值
该函数返回创建的整数变量的值。如果变量不存在或创建失败，返回值可能为0或其他默认值，具体取决于 `var_GetInteger` 的实现。
## var_CreateGetBool {#var_CreateGetBool}

```c
static inline bool var_CreateGetBool( vlc_object_t *p_obj, const char *psz_name )
{
    var_Create( p_obj, psz_name, VLC_VAR_BOOL | VLC_VAR_DOINHERIT );
    return var_GetBool( p_obj, psz_name );
}
```

### 描述
该函数用于创建一个布尔类型的变量，并继承其值，然后获取该变量的值。

### 函数参数说明

| 参数名    | 类型           | 描述                                                         |
|-----------|----------------|--------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 持有该变量的对象。                                           |
| `psz_name`| `const char*`  | 变量的名称。                                                 |

### 函数返回值
该函数返回创建并继承的布尔类型变量的值。
## var_CreateGetTime {#var_CreateGetTime}

```c
static inline int64_t var_CreateGetTime( vlc_object_t *p_obj, const char *psz_name )
{
    var_Create( p_obj, psz_name, VLC_VAR_TIME | VLC_VAR_DOINHERIT );
    return var_GetTime( p_obj, psz_name );
}
```

### 描述
该函数用于创建一个带有继承属性的时间变量，并获取其值。

### 函数参数说明

| 参数名   | 类型           | 描述                                                         |
|----------|----------------|--------------------------------------------------------------|
| `p_obj`  | `vlc_object_t*`| 持有该变量的对象指针。                                       |
| `psz_name` | `const char*`  | 变量的名称。                                                 |

### 函数返回值
该函数返回创建的时间变量的值。返回值类型为 `int64_t`，表示时间值。
## var_CreateGetFloat {#var_CreateGetFloat}

```c
static inline float var_CreateGetFloat( vlc_object_t *p_obj, const char *psz_name )
{
    var_Create( p_obj, psz_name, VLC_VAR_FLOAT | VLC_VAR_DOINHERIT );
    return var_GetFloat( p_obj, psz_name );
}
```

### 描述
该函数用于创建一个继承自父对象的浮点型变量，并获取该变量的值。如果变量已经存在，则直接获取其值。

### 函数参数说明

| 参数名    | 类型           | 描述                                                         |
|-----------|----------------|--------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 持有变量的对象指针。                                         |
| `psz_name`| `const char*`  | 变量的名称，用于标识该变量。                                 |

### 函数返回值
该函数返回创建或获取的浮点型变量的值。如果变量不存在且无法创建，则返回值可能为默认值或未定义。
## var_Create 

```c
int var_Create( vlc_object_t *p_obj, const char *psz_name, int i_type );
```

### 描述
该函数用于在给定的 VLC 对象中创建一个新的变量。变量可以是字符串类型，并且可以选择是否继承自父对象。

### 函数参数说明

| 参数名    | 类型                | 描述                                                                 |
|-----------|---------------------|----------------------------------------------------------------------|
| `p_obj`   | `vlc_object_t *`    | 指向 VLC 对象的指针，变量将在这个对象中创建。                        |
| `psz_name`| `const char *`      | 变量的名称，字符串类型。                                             |
| `i_type`  | `int`               | 变量的类型。在这个例子中，`VLC_VAR_STRING` 表示字符串类型，`VLC_VAR_DOINHERIT` 表示继承自父对象。 |

### 函数返回值

- **成功**：返回 `VLC_SUCCESS`，表示变量创建成功。
- **失败**：返回 `VLC_EGENERIC`，表示变量创建失败。
## var_GetString 

```c
char *var_GetString( vlc_object_t *p_obj, const char *psz_name );
```

### 描述
该函数用于从 VLC 对象中获取一个字符串类型的变量值。它通过变量名 `psz_name` 在对象 `p_obj` 中查找对应的字符串值，并返回该字符串的指针。

### 函数参数说明

| 参数名    | 类型            | 描述                                                                 |
|-----------|-----------------|----------------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 指向 VLC 对象的指针，表示要从哪个对象中获取变量值。                  |
| `psz_name`| `const char*`   | 指向变量名的指针，表示要获取的变量的名称。                           |

### 函数返回值
- 成功时，返回指向字符串值的指针。
- 如果变量不存在或不是字符串类型，返回 `NULL`。

注意：返回的字符串指针是动态分配的，调用者需要在使用完毕后调用 `free()` 释放内存。
## var_Create 

```c
int var_Create( vlc_object_t *p_obj, const char *psz_name, int i_type );
```

### 描述
该函数用于在指定的 VLC 对象中创建一个新的变量。变量可以是字符串类型，并且可以选择是否继承自父对象。

### 函数参数说明

| 参数名    | 类型            | 描述                                                                 |
|-----------|-----------------|----------------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 指向 VLC 对象的指针，新变量将在这个对象中创建。                      |
| `psz_name`| `const char*`   | 变量的名称，用于标识新创建的变量。                                   |
| `i_type`  | `int`           | 变量的类型。在这个例子中，`i_type` 被设置为 `VLC_VAR_STRING | VLC_VAR_DOINHERIT`，表示变量是字符串类型并且继承自父对象。 |

### 函数返回值
- 成功时返回 `VLC_SUCCESS`。
- 如果发生错误，返回 `VLC_EGENERIC`。
## var_GetNonEmptyString 

```c
char *var_GetNonEmptyString( vlc_object_t *p_obj, const char *psz_name );
```

### 描述
该函数用于从 VLC 对象中获取一个非空的字符串变量。如果指定的变量不存在或为空字符串，函数将返回 `NULL`。

### 函数参数说明

| 参数名    | 类型            | 描述                                                                 |
|-----------|-----------------|----------------------------------------------------------------------|
| `p_obj`   | `vlc_object_t *` | 指向 VLC 对象的指针，从中获取变量。                                  |
| `psz_name`| `const char *`  | 指向变量名称的字符串指针，用于指定要获取的变量。                     |

### 函数返回值
- **成功**：返回指向非空字符串的指针。
- **失败**：如果变量不存在或为空字符串，返回 `NULL`。
## var_Create 

```c
int var_Create( vlc_object_t *p_obj, const char *psz_name, int i_type );
```

### 描述
`var_Create` 函数用于在给定的 VLC 对象中创建一个新的变量。该变量可以是不同类型的，具体类型由 `i_type` 参数指定。如果变量已经存在，函数将返回错误。

### 函数参数说明

| 参数名    | 类型            | 描述                                                                 |
|-----------|-----------------|----------------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 指向要创建变量的 VLC 对象的指针。                                    |
| `psz_name`| `const char*`   | 要创建的变量的名称，以空字符结尾的字符串。                           |
| `i_type`  | `int`           | 变量的类型，可以是 `VLC_VAR_ADDRESS`、`VLC_VAR_DOINHERIT` 等类型的组合。|

### 函数返回值
- `0`：成功创建变量。
- `-1`：如果变量已经存在，或者创建变量时发生错误。
## var_GetAddress {#var_GetAddress}

```c
void* var_GetAddress( vlc_object_t *p_obj, const char *psz_name );
```

### 描述
该函数用于获取指定对象中变量的地址。它返回一个指向变量的指针，该变量由其名称标识。

### 函数参数说明

| 参数名    | 类型            | 描述                                                                 |
|-----------|-----------------|----------------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 指向要查询的对象的指针。                                             |
| `psz_name`| `const char*`   | 指向以空字符结尾的字符串的指针，该字符串包含要获取地址的变量的名称。|

### 函数返回值
- **返回值类型**: `void*`
- **返回值说明**:
  - 如果成功，返回指向指定变量的指针。
  - 如果指定的变量不存在，返回 `NULL`。
## var_CreateGetIntegerCommand {#var_CreateGetIntegerCommand}

```c
static inline int64_t var_CreateGetIntegerCommand( vlc_object_t *p_obj, const char *psz_name )
```

### 描述
创建一个继承的整数命令变量，并获取其值。

### 函数参数说明

| 参数名    | 类型           | 描述                         |
|-----------|----------------|------------------------------|
| `p_obj`   | `vlc_object_t*` | 持有变量的对象               |
| `psz_name`| `const char*`  | 变量的名称                   |

### 函数返回值
返回创建的整数变量的值。
## var_CreateGetBoolCommand {#var_CreateGetBoolCommand}

```c
static inline bool var_CreateGetBoolCommand( vlc_object_t *p_obj, const char *psz_name )
{
    var_Create( p_obj, psz_name, VLC_VAR_BOOL | VLC_VAR_DOINHERIT | VLC_VAR_ISCOMMAND );
    return var_GetBool( p_obj, psz_name );
}
```

### 描述
创建一个布尔类型的命令变量，并继承其值，然后获取该变量的值。

### 函数参数说明

| 参数名   | 类型           | 描述                     |
|----------|----------------|--------------------------|
| `p_obj`  | `vlc_object_t*` | 持有变量的对象           |
| `psz_name` | `const char*`  | 变量的名称               |

### 函数返回值
返回创建并继承的布尔类型变量的值。
## var_CreateGetTimeCommand {#var_CreateGetTimeCommand}

```c
static inline int64_t var_CreateGetTimeCommand( vlc_object_t *p_obj, const char *psz_name )
```

### 描述
该函数用于创建一个带有继承属性的时间命令变量，并获取其值。

### 函数参数说明

| 参数名    | 类型           | 描述                                                         |
|-----------|----------------|--------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 持有变量的对象指针。                                         |
| `psz_name`| `const char*`  | 变量的名称。                                                 |

### 函数返回值
该函数返回创建的时间命令变量的值。返回值类型为 `int64_t`，表示时间值。
## var_CreateGetFloatCommand {#var_CreateGetFloatCommand}

```c
static inline float var_CreateGetFloatCommand( vlc_object_t *p_obj, const char *psz_name )
```

### 描述
创建一个带有继承属性的浮点型命令变量，并获取其值。

### 函数参数说明

| 参数名    | 类型          | 描述                     |
|-----------|---------------|--------------------------|
| `p_obj`   | `vlc_object_t*` | 持有变量的对象           |
| `psz_name`| `const char*`  | 变量的名称               |

### 函数返回值
返回创建的浮点型变量的值。
## var_Create 

```c
int var_Create( vlc_object_t *p_obj, const char *psz_name, int i_type );
```

### 描述
该函数用于在VLC对象中创建一个新的变量。变量可以是字符串类型，并且支持继承和命令功能。

### 函数参数说明

| 参数名    | 类型            | 描述                                                         |
|-----------|-----------------|--------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 指向VLC对象的指针，变量将在这个对象中创建。                  |
| `psz_name`| `const char*`   | 变量的名称，字符串类型。                                     |
| `i_type`  | `int`           | 变量的类型，可以是 `VLC_VAR_STRING`、`VLC_VAR_DOINHERIT` 和 `VLC_VAR_ISCOMMAND` 的组合。 |

### 函数返回值
- 成功时返回 `VLC_SUCCESS`。
- 如果变量已经存在，则返回 `VLC_EGENERIC`。
- 如果参数无效或内存分配失败，则返回 `VLC_ENOMEM`。
## var_GetString 

```c
char *var_GetString( vlc_object_t *p_obj, const char *psz_name );
```

### 描述
该函数用于从指定的 VLC 对象中获取一个字符串类型的变量值。它通过变量名来检索字符串值，并返回该字符串的指针。

### 函数参数说明

| 参数名    | 类型            | 描述                                                                 |
|-----------|-----------------|----------------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 指向 VLC 对象的指针，从中获取变量值。                                |
| `psz_name`| `const char*`   | 指向变量名的指针，指定要获取的变量。                                 |

### 函数返回值
- **成功**：返回一个指向字符串值的指针。该字符串是动态分配的，调用者需要在使用完毕后调用 `free()` 释放内存。
- **失败**：如果指定的变量不存在或不是字符串类型，函数将返回 `NULL`。
## var_Create 

```c
int var_Create( vlc_object_t *p_obj, const char *psz_name, int i_type );
```

### 描述
`var_Create` 函数用于在给定的 VLC 对象中创建一个新的变量。该变量可以是字符串类型，并且可以继承自父对象，同时也可以被标记为命令。

### 函数参数说明

| 参数名    | 类型            | 描述                                                         |
|-----------|-----------------|--------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 指向 VLC 对象的指针，新变量将在这个对象中创建。              |
| `psz_name`| `const char*`   | 新变量的名称，必须是一个以空字符结尾的字符串。               |
| `i_type`  | `int`           | 变量的类型，可以是 `VLC_VAR_STRING`、`VLC_VAR_DOINHERIT` 和 `VLC_VAR_ISCOMMAND` 的组合。 |

### 函数返回值
- 如果变量成功创建，函数返回 `VLC_SUCCESS`。
- 如果发生错误，函数返回 `VLC_EGENERIC`。
## var_GetNonEmptyString 

```c
char *var_GetNonEmptyString( vlc_object_t *p_obj, const char *psz_name );
```

### 描述
该函数用于从指定的 VLC 对象中获取一个非空的字符串变量。如果变量不存在或为空字符串，函数将返回 `NULL`。

### 函数参数说明

| 参数名    | 类型            | 描述                                                                 |
|-----------|-----------------|----------------------------------------------------------------------|
| `p_obj`   | `vlc_object_t *` | 指向 VLC 对象的指针，从中获取变量。                                  |
| `psz_name`| `const char *`  | 指向字符串的指针，表示要获取的变量的名称。                           |

### 函数返回值
- **成功**：返回一个指向非空字符串的指针。
- **失败**：如果变量不存在或为空字符串，返回 `NULL`。
## var_CountChoices {#var_CountChoices}

```c
static inline int var_CountChoices( vlc_object_t *p_obj, const char *psz_name )
```

### 描述
该函数用于获取指定变量的选择项数量。它通过调用 `var_Change` 函数并传入 `VLC_VAR_CHOICESCOUNT` 操作码来实现。如果操作成功，函数将返回选择项的数量；否则，返回 0。

### 参数说明

| 参数名    | 类型           | 描述                                                         |
|-----------|----------------|--------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 指向 VLC 对象的指针，该对象包含需要查询的变量。              |
| `psz_name`| `const char*`  | 指向变量名称的字符串指针，表示需要查询选择项数量的变量名称。 |

### 返回值
- **成功**：返回指定变量的选择项数量。
- **失败**：返回 0，表示查询失败或变量没有选择项。
## var_ToggleBool {#var_ToggleBool}

```c
static inline bool var_ToggleBool( vlc_object_t *p_obj, const char *psz_name )
```

### 函数描述
该函数用于切换指定对象中布尔类型变量的值。它会获取当前变量的值并将其取反，然后返回切换后的值。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 指向 VLC 对象的指针，该对象包含需要操作的变量。                        |
| `psz_name`| `const char*`  | 指向变量名称的字符串指针，指定需要切换的布尔类型变量的名称。          |

### 函数返回值
该函数返回切换后的布尔值：
- 如果切换后的值为 `true`，则返回 `true`。
- 如果切换后的值为 `false`，则返回 `false`。
## var_InheritBool {#var_InheritBool}

```c
static inline bool var_InheritBool( vlc_object_t *obj, const char *name )
```

### 描述
该函数用于从 `vlc_object_t` 对象中继承一个布尔类型的变量。如果继承失败，则返回 `false`。

### 函数参数说明

| 参数名 | 类型           | 描述                                                         |
|--------|----------------|--------------------------------------------------------------|
| obj    | vlc_object_t * | 指向 `vlc_object_t` 对象的指针，表示要从中继承变量的对象。 |
| name   | const char *   | 要继承的变量的名称。                                         |

### 函数返回值
- **返回值类型**: `bool`
- **返回值说明**:
  - 如果成功继承布尔类型的变量，则返回该变量的值。
  - 如果继承失败，则返回 `false`。
## var_InheritInteger {#var_InheritInteger}

```c
static inline int64_t var_InheritInteger( vlc_object_t *obj, const char *name )
```

### 描述
该函数用于从 `vlc_object_t` 对象中继承一个整数类型的变量。如果继承失败，则返回默认值 `0`。

### 函数参数说明

| 参数名 | 类型          | 描述                                                         |
|--------|---------------|--------------------------------------------------------------|
| obj    | vlc_object_t* | 指向 `vlc_object_t` 对象的指针，表示要从中继承变量的对象。 |
| name   | const char*   | 要继承的变量的名称。                                         |

### 函数返回值
- **成功**：返回继承的整数值。
- **失败**：返回 `0`。
## var_InheritFloat {#var_InheritFloat}

```c
static inline float var_InheritFloat(vlc_object_t *obj, const char *name)
{
    vlc_value_t val;

    if (var_Inherit(obj, name, VLC_VAR_FLOAT, &val))
        val.f_float = 0.;
    return val.f_float;
}
```

### 函数描述
`var_InheritFloat` 函数用于从 `vlc_object_t` 对象中继承一个浮点数变量。如果继承失败，则返回默认值 `0.0`。

### 函数参数说明

| 参数名 | 类型           | 描述                                                                 |
|--------|----------------|--------------------------------------------------------------------------|
| `obj`  | `vlc_object_t*` | 指向 `vlc_object_t` 对象的指针，表示要从其中继承变量的对象。 |
| `name` | `const char*`  | 要继承的变量的名称。                                                 |

### 函数返回值
- **返回值类型**: `float`
- **返回值说明**:
  - 如果成功继承变量，则返回该变量的浮点数值。
  - 如果继承失败，则返回 `0.0`。
## vlc_value_t_cleanup {#vlc_value_t_cleanup}

```c
else if( val.psz_string && !*val.psz_string )
{
    free( val.psz_string );
    val.psz_string = NULL;
}
```

### 描述
该函数用于清理 `vlc_value_t` 结构体中的字符串成员 `psz_string`。如果 `psz_string` 不为空且其内容为空字符串（即 `*val.psz_string` 为假），则释放 `psz_string` 所指向的内存，并将 `psz_string` 设置为 `NULL`。

### 函数参数说明

| 参数名       | 类型          | 描述                                                                 |
|--------------|---------------|--------------------------------------------------------------------------|
| `val`        | `vlc_value_t` | 包含字符串成员 `psz_string` 的结构体，需要进行清理操作。 |

### 函数返回值
该函数没有返回值。它直接修改传入的 `vlc_value_t` 结构体中的 `psz_string` 成员。
## var_InheritTime {#var_InheritTime}

```c
static inline mtime_t var_InheritTime( vlc_object_t *obj, const char *name )
{
    vlc_value_t val;

    if( var_Inherit( obj, name, VLC_VAR_TIME, &val ) )
        val.i_time = 0;
    return val.i_time;
}
```

### 函数描述
`var_InheritTime` 函数用于从 `vlc_object_t` 对象中继承一个时间变量。它通过调用 `var_Inherit` 函数来获取指定名称的时间变量，并将其转换为 `mtime_t` 类型的时间值。如果继承过程中发生错误，函数将返回 `0`。

### 函数参数说明

| 参数名 | 类型          | 描述                                                                 |
|--------|---------------|--------------------------------------------------------------------|
| `obj`  | `vlc_object_t*` | 指向 `vlc_object_t` 对象的指针，表示要从其中继承变量的对象。       |
| `name` | `const char*`  | 指向字符串的指针，表示要继承的变量的名称。                         |

### 函数返回值
- **`mtime_t`**: 返回继承的时间值。如果继承过程中发生错误，返回 `0`。
## var_InheritURational {#var_InheritURational}

```c
VLC_API int var_InheritURational( vlc_object_t *p_this, unsigned *num, unsigned *den, const char *var );
```

### 描述

该函数用于从变量中继承一个无符号的有理数（分子和分母）。它从指定的变量中提取分子和分母，并将它们存储在提供的指针中。

### 函数参数说明

| 参数名   | 类型           | 描述                                                                 |
|----------|----------------|--------------------------------------------------------------------------|
| `p_this` | `vlc_object_t *` | VLC 对象指针，通常是 `vlc_object_t` 类型的实例。                        |
| `num`    | `unsigned *`    | 指向无符号整数的指针，用于存储提取的分子。                             |
| `den`    | `unsigned *`    | 指向无符号整数的指针，用于存储提取的分母。                             |
| `var`    | `const char *`  | 字符串指针，指向要从中提取有理数的变量名称。                           |

### 函数返回值

- **返回值为 0**：表示成功从变量中提取了有理数，并且分子和分母已正确存储在 `num` 和 `den` 指向的内存中。
- **返回值为 -1**：表示提取有理数失败，可能是因为变量不存在或变量值格式不正确。
## var_LocationParse {#var_LocationParse}

```c
VLC_API int var_LocationParse(vlc_object_t *p_this, const char *mrl, const char *prefix);
```

### 描述

该函数用于解析一个媒体资源定位符（MRL）并将其转换为变量。它将解析后的值存储在 `p_this` 对象的变量中，变量名由 `prefix` 参数指定。

### 函数参数说明

| 参数名   | 类型           | 描述                                                                 |
|----------|----------------|----------------------------------------------------------------------|
| `p_this` | `vlc_object_t*` | 指向 VLC 对象的指针，解析后的值将存储在该对象的变量中。               |
| `mrl`    | `const char*`  | 要解析的媒体资源定位符（MRL）字符串。                                |
| `prefix` | `const char*`  | 变量名的前缀，解析后的值将存储在以该前缀命名的变量中。               |

### 函数返回值

- **成功**：返回 `0`，表示解析成功，并且变量已成功存储在 `p_this` 对象中。
- **失败**：返回 `-1`，表示解析失败，可能是由于 MRL 格式不正确或内存分配失败等原因。
