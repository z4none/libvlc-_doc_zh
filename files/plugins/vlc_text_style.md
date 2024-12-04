## text_style_New {#text_style_New}

```c
VLC_API text_style_t * text_style_New( void );
```

### 描述
创建一个默认的文本样式。

### 函数参数说明
| 参数名 | 类型 | 描述 |
|--------|------|------|
| void   | void | 无参数 |

### 函数返回值
- **成功**：返回一个指向新创建的 `text_style_t` 结构体的指针。
- **失败**：返回 `NULL`。
## text_style_Copy {#text_style_Copy}

```c
VLC_API text_style_t * text_style_Copy( text_style_t *p_dst, const text_style_t *p_src );
```

### 描述
该函数用于将一个文本样式复制到另一个文本样式中。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_dst` | `text_style_t *` | 目标文本样式，用于接收复制的样式 |
| `p_src` | `const text_style_t *` | 源文本样式，包含要复制的样式 |

### 函数返回值
- 返回 `p_dst`，即目标文本样式的指针。如果复制成功，`p_dst` 将包含与 `p_src` 相同的样式信息。
## text_style_Duplicate {#text_style_Duplicate}

```c
VLC_API text_style_t * text_style_Duplicate( const text_style_t * );
```

### 函数描述
复制一个文本样式。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `text_style_t *` | `const text_style_t *` | 指向要复制的文本样式的指针。 |

### 函数返回值
- 成功时，返回指向新复制的文本样式的指针。
- 失败时，返回 `NULL`。
## text_style_Delete {#text_style_Delete}

```c
VLC_API void text_style_Delete( text_style_t * );
```

### 描述
该函数用于删除由 `text_style_New` 或 `text_style_Duplicate` 创建的文本样式。

### 函数参数说明

| 参数名        | 类型          | 描述                   |
|---------------|---------------|------------------------|
| `text_style_t *` | `text_style_t *` | 指向要删除的文本样式对象的指针。 |

### 函数返回值
该函数没有返回值。
