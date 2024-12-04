## free {#free}

```c
void free(void *p_ar);
```

### 描述
`free` 函数用于释放之前通过 `malloc`、`calloc` 或 `realloc` 函数分配的内存空间。释放后的内存空间可以被重新分配。如果传入的指针为 `NULL`，则 `free` 函数不会执行任何操作。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_ar` | `void *` | 指向要释放的内存块的指针。如果为 `NULL`，则函数不执行任何操作。 |

### 函数返回值
`free` 函数没有返回值。
## free {#free}

```c
void free(void *ptr);
```

### 描述
`free` 函数用于释放之前通过 `malloc`、`calloc`、`realloc` 等函数分配的内存空间。调用 `free` 后，指向该内存的指针将不再有效，继续使用该指针可能会导致未定义行为。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `ptr` | `void *` | 指向要释放的内存块的指针。如果 `ptr` 为 `NULL`，则 `free` 函数不执行任何操作。 |

### 函数返回值
`free` 函数没有返回值。
## TAB_FIND {#TAB_FIND}

```c
void TAB_FIND(int *count, TAB *tab, void *p, int *i_index);
```

### 描述
`TAB_FIND` 函数用于在给定的 `TAB` 结构中查找指定的指针 `p`，并返回找到的元素数量和索引位置。

### 函数参数说明

| 参数名   | 类型      | 描述                                                                 |
|----------|-----------|----------------------------------------------------------------------|
| count    | int*      | 输出参数，返回找到的元素数量。                                       |
| tab      | TAB*      | 输入参数，指向要查找的 `TAB` 结构的指针。                            |
| p        | void*     | 输入参数，指向要查找的指针。                                         |
| i_index  | int*      | 输出参数，返回找到的元素的索引位置。如果未找到，则返回 `-1`。        |

### 函数返回值
该函数没有返回值（`void`）。查找结果通过 `count` 和 `i_index` 参数返回。

- `count`：返回找到的元素数量。
- `i_index`：返回找到的元素的索引位置。如果未找到，则返回 `-1`。
## free {#free}

```c
void free(void *ptr);
```

### 描述
`free` 函数用于释放之前通过 `malloc`、`calloc`、`realloc` 等函数分配的内存空间。调用 `free` 后，指向该内存的指针将变为无效，不应再使用。

### 函数参数说明

| 参数名 | 类型    | 描述                                                                 |
|--------|---------|--------------------------------------------------------------------------|
| `ptr`  | `void*` | 指向要释放的内存块的指针。如果 `ptr` 为 `NULL`，则 `free` 函数不执行任何操作。 |

### 函数返回值
`free` 函数没有返回值。
## 二分查找函数 {#binary_search}

```c
while( low <= high ) {
    int mid = (low + high) / 2; /* Just don't care about 2^30 tables */
    zetype mid_val = entries[mid] elem;
    if( mid_val < key )
        low = mid + 1;
    else if ( mid_val > key )
        high = mid - 1;
    else
    {
        answer = mid;
        break;
    }
}
```

### 描述
该函数实现了一个二分查找算法。它通过不断将查找范围缩小一半来快速定位目标值。如果找到目标值，则返回其在数组中的索引；如果未找到，则继续缩小范围直到查找范围为空。

### 参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| low    | int  | 查找范围的下界索引 |
| high   | int  | 查找范围的上界索引 |
| entries| zetype[] | 包含查找目标的数组 |
| key    | zetype | 要查找的目标值 |
| answer | int  | 存储找到的目标值索引 |

### 返回值
- 如果找到目标值，`answer` 将被设置为该值在数组中的索引，并且函数通过 `break` 语句退出循环。
- 如果未找到目标值，`answer` 将保持未初始化状态，查找范围将缩小到空，循环结束。
## _ARRAY_ALLOC {#_ARRAY_ALLOC}

```c
#define _ARRAY_ALLOC(array, newsize) {                                      \
    (array).i_alloc = newsize;                                              \
    (array).p_elems = realloc( (array).p_elems, (array).i_alloc *           \
                               sizeof(*(array).p_elems) );                  \
    if( !(array).p_elems ) abort();                                         \
}
```

### 描述
该宏用于重新分配数组的内存空间。它根据传入的新大小 `newsize` 调整数组 `array` 的内存分配，并确保数组的元素指针 `p_elems` 指向重新分配后的内存。如果内存分配失败，程序将中止。

### 参数说明

| 参数名   | 类型   | 描述                                                         |
|----------|--------|--------------------------------------------------------------|
| `array`  | `struct` | 指向数组结构的指针，该结构包含 `i_alloc` 和 `p_elems` 成员。 |
| `newsize`| `size_t` | 新的数组大小，表示数组元素的数量。                           |

### 返回值
该宏没有返回值。如果内存分配失败，程序将调用 `abort()` 函数中止执行。
## _ARRAY_GROW1 {#_ARRAY_GROW1}

```c
define _ARRAY_GROW1(array) {                                               \
    if( (array).i_alloc < 10 )                                              \
        _ARRAY_ALLOC(array, 10 )                                            \
    else if( (array).i_alloc == (array).i_size )                            \
        _ARRAY_ALLOC(array, (int)(array.i_alloc * 1.5) )                    \
}
```

### 描述
`_ARRAY_GROW1` 宏用于动态扩展数组的内存分配。如果数组的分配大小 `i_alloc` 小于 10，则将其扩展到 10。如果数组的分配大小等于当前大小 `i_size`，则将其扩展到当前分配大小的 1.5 倍。

### 函数参数说明
| 参数名 | 类型 | 描述 |
|--------|------|------|
| `array` | `struct` | 需要扩展内存的数组结构体。 |

### 函数返回值
该宏没有返回值。它通过调用 `_ARRAY_ALLOC` 宏来修改数组的内存分配。
## _ARRAY_GROW1 {#_ARRAY_GROW1}

```c
void _ARRAY_GROW1(void *array);
```

### 描述
该函数用于扩展数组的容量，确保数组至少有一个额外的空间可用。如果数组当前的容量不足以容纳新的元素，函数会自动分配更多的内存空间。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `array` | `void *` | 指向需要扩展容量的数组的指针。 |

### 函数返回值
该函数没有返回值。如果内存分配失败，函数会触发一个错误，通常会导致程序终止。
## _ARRAY_GROW1 {#_ARRAY_GROW1}

```c
void _ARRAY_GROW1(void *array);
```

### 描述
该函数用于扩展数组的容量，确保数组至少有一个额外的空间可用。如果数组的当前容量不足以容纳新的元素，函数会自动分配更多的内存空间。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `array` | `void *` | 指向需要扩展容量的数组的指针。 |

### 函数返回值
该函数没有返回值。
## _ARRAY_SHRINK {#_ARRAY_SHRINK}

```c
define _ARRAY_SHRINK(array) {                                              \
    if( (array).i_size > 10 && (array).i_size < (int)((array).i_alloc / 1.5) ) {  \
        _ARRAY_ALLOC(array, (array).i_size + 5);                            \
    }                                                                       \
}
```

### 描述
该宏用于收缩数组的分配空间。当数组的当前大小大于10且小于分配空间的1.5倍时，重新分配数组的空间，使其大小为当前大小加上5。

### 函数参数说明
| 参数名 | 类型 | 描述 |
|--------|------|------|
| `array` | `ARRAY` | 需要收缩的数组结构体 |

### 函数返回值
该宏没有返回值。它通过重新分配数组的空间来调整数组的大小。
## _ARRAY_SHRINK(array) {#_ARRAY_SHRINK}

```c
void _ARRAY_SHRINK(void *array);
```

### 描述
该函数用于收缩数组，使其占用内存空间与实际存储元素所需空间相匹配。通过调用此函数，可以释放数组中未使用的内存，从而减少内存占用。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| array  | void* | 指向需要收缩的数组的指针。 |

### 函数返回值
该函数没有返回值。
## FOREACH_ARRAY {#FOREACH_ARRAY}

```c
#define FOREACH_ARRAY( item, array ) { \
    int fe_idx; \
    for( fe_idx = 0 ; fe_idx < (array).i_size ; fe_idx++ ) \
    { \
        item = (array).p_elems[fe_idx]; \
    } \
}
```

### 描述
`FOREACH_ARRAY` 是一个宏定义，用于遍历数组中的每个元素。它通过一个循环来遍历数组，并将每个元素赋值给指定的变量 `item`。

### 参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `item` | 变量 | 用于存储数组中当前元素的变量。 |
| `array` | 结构体 | 包含数组元素的结构体，结构体中应包含 `i_size` 和 `p_elems` 两个成员。 |

### 返回值
该宏没有返回值，它通过修改传入的 `item` 变量来传递结果。

---

## FOREACH_END {#FOREACH_END}

```c
#define FOREACH_END() }
```

### 描述
`FOREACH_END` 是一个宏定义，用于结束 `FOREACH_ARRAY` 宏的循环体。它实际上是一个空的宏，仅用于语法上的闭合。

### 参数说明
无参数。

### 返回值
无返回值。
## vlc_array_init {#vlc_array_init}

```c
static inline void vlc_array_init(vlc_array_t *p_array)
```

### 函数描述
该函数用于初始化一个 `vlc_array_t` 类型的数组。它通过将数组的所有成员设置为零来初始化数组。

### 函数参数说明

| 参数名    | 类型        | 描述               |
|-----------|-------------|--------------------|
| `p_array` | `vlc_array_t*` | 指向要初始化的 `vlc_array_t` 类型数组的指针。 |

### 函数返回值
该函数没有返回值。
## vlc_array_clear {#vlc_array_clear}

```c
static inline void vlc_array_clear(vlc_array_t *p_array)
```

### 函数描述
该函数用于清空一个 `vlc_array_t` 类型的数组。它首先释放数组中元素的内存，然后将整个数组结构体清零。

### 函数参数说明

| 参数名   | 类型          | 描述                   |
|----------|---------------|------------------------|
| `p_array`| `vlc_array_t*`| 指向要清空的 `vlc_array_t` 结构体的指针。|

### 函数返回值
该函数没有返回值。
## vlc_array_new {#vlc_array_new}

```c
static inline vlc_array_t * vlc_array_new( void )
```

### 函数描述
该函数用于创建一个新的 `vlc_array_t` 结构体，并返回其指针。如果内存分配成功，函数会初始化该数组。

### 函数参数说明
| 参数名 | 类型 | 描述 |
|--------|------|------|
| 无     | void | 无参数 |

### 函数返回值
- **成功**：返回一个指向新创建的 `vlc_array_t` 结构体的指针。
- **失败**：如果内存分配失败，返回 `NULL`。
## vlc_array_destroy {#vlc_array_destroy}

```c
static inline void vlc_array_destroy(vlc_array_t *p_array)
```

### 函数描述
该函数用于销毁一个 `vlc_array_t` 类型的数组。首先会清空数组中的所有元素，然后释放数组本身的内存。如果传入的指针为 `NULL`，则函数直接返回，不执行任何操作。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| `p_array` | `vlc_array_t*` | 指向要销毁的 `vlc_array_t` 类型数组的指针。如果为 `NULL`，则函数直接返回。 |

### 函数返回值
该函数没有返回值。
## vlc_array_count {#vlc_array_count}

```c
static inline int vlc_array_count(vlc_array_t *p_array)
```

### 函数描述
该函数用于获取 `vlc_array_t` 结构体中元素的数量。

### 函数参数说明

| 参数名    | 类型          | 描述               |
|-----------|---------------|--------------------|
| `p_array` | `vlc_array_t*` | 指向 `vlc_array_t` 结构体的指针，表示要获取元素数量的数组。 |

### 函数返回值
该函数返回 `p_array` 结构体中元素的数量，即 `p_array->i_count` 的值。返回值类型为 `int`。
## vlc_array_item_at_index {#vlc_array_item_at_index}

```c
static inline void *vlc_array_item_at_index(vlc_array_t *p_array, int i_index)
```

### 描述
该函数用于获取 `vlc_array_t` 数组中指定索引位置的元素。

### 函数参数说明

| 参数名    | 类型          | 描述                                       |
|-----------|---------------|--------------------------------------------|
| `p_array` | `vlc_array_t*` | 指向 `vlc_array_t` 数组的指针，表示要操作的数组。 |
| `i_index` | `int`         | 要获取的元素在数组中的索引位置。             |

### 函数返回值
该函数返回指向数组中指定索引位置的元素的指针。如果索引超出数组范围，行为未定义。
## vlc_array_index_of_item {#vlc_array_index_of_item}

```c
static inline int vlc_array_index_of_item(vlc_array_t *p_array, void *item)
{
    int i;
    for(i = 0; i < p_array->i_count; i++)
    {
        if(p_array->pp_elems[i] == item)
            return i;
    }
    return -1;
}
```

### 函数描述
该函数用于在 `vlc_array_t` 类型的数组中查找指定元素的索引。如果找到该元素，则返回其在数组中的索引；如果未找到，则返回 `-1`。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| `p_array` | `vlc_array_t*` | 指向要搜索的 `vlc_array_t` 类型数组的指针。                              |
| `item`    | `void*`       | 指向要查找的元素的指针。如果数组中存在该元素，则返回其在数组中的索引。 |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - 如果找到指定的元素，返回其在数组中的索引（从 `0` 开始）。
  - 如果未找到指定的元素，返回 `-1`。
## vlc_array_insert {#vlc_array_insert}

```c
static inline void vlc_array_insert(vlc_array_t *p_array, void *p_elem, int i_index);
```

### 描述
该函数用于将一个元素插入到 `vlc_array_t` 数组的指定位置。插入操作会调整数组的大小，并将新元素放置在指定的索引位置。

### 函数参数说明

| 参数名    | 类型        | 描述                                                                 |
|-----------|-------------|----------------------------------------------------------------------|
| `p_array` | `vlc_array_t*` | 指向要操作的 `vlc_array_t` 数组的指针。                                |
| `p_elem`  | `void*`       | 指向要插入的元素的指针。                                               |
| `i_index` | `int`         | 要插入元素的索引位置。如果 `i_index` 大于数组当前的大小，则元素会被插入到数组的末尾。 |

### 函数返回值
该函数没有返回值。
## vlc_array_append {#vlc_array_append}

```c
static inline void vlc_array_append(vlc_array_t *p_array, void *p_elem)
```

### 函数描述
`vlc_array_append` 函数用于将一个元素追加到数组的末尾。该函数通过调用 `vlc_array_insert` 函数实现，将元素插入到数组的最后一个位置。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| `p_array` | `vlc_array_t*` | 指向要操作的数组的指针。该数组必须已经初始化。                           |
| `p_elem`  | `void*`       | 指向要追加到数组末尾的元素的指针。该元素可以是任意类型的指针。           |

### 函数返回值
该函数没有返回值。
## array_remove {#array_remove}

```c
void array_remove(array_t *p_array, int i_index);
```

### 描述
该函数用于从数组中移除指定索引位置的元素。如果数组中只有一个元素且被移除后，数组将被清空并释放内存。

### 函数参数说明

| 参数名    | 类型      | 描述                                                         |
|-----------|-----------|--------------------------------------------------------------|
| `p_array` | `array_t*`| 指向要操作的数组的指针。                                     |
| `i_index` | `int`     | 要移除的元素的索引位置。如果索引小于0，则不会执行任何操作。 |

### 函数返回值
该函数没有返回值。
## hash_string {#hash_string}

```c
unsigned int hash_string(const char *psz_string)
{
    unsigned int i_hash = 0;

    if( psz_string )
    {
        while( *psz_string )
        {
            i_hash += *psz_string++;
            i_hash += i_hash << 10;
            i_hash ^= i_hash >> 8;
        }
    }

    return i_hash;
}
```

### 函数描述
该函数用于计算一个字符串的哈希值。它通过遍历字符串中的每个字符，并使用特定的位运算来更新哈希值，最终返回计算得到的哈希值。

### 函数参数说明

| 参数名       | 类型          | 描述                                                                 |
|--------------|---------------|--------------------------------------------------------------------------|
| `psz_string` | `const char*` | 指向要计算哈希值的字符串的指针。如果为 `NULL`，则函数返回 `0`。 |

### 函数返回值
- **返回值类型**: `unsigned int`
- **返回值说明**:
  - 如果 `psz_string` 为 `NULL`，则返回 `0`。
  - 否则，返回计算得到的字符串的哈希值。
## vlc_dictionary_init {#vlc_dictionary_init}

```c
static inline void vlc_dictionary_init(vlc_dictionary_t *p_dict, int i_size)
{
    p_dict->p_entries = NULL;

    if (i_size > 0)
    {
        p_dict->p_entries = (vlc_dictionary_entry_t **)calloc(i_size, sizeof(*p_dict->p_entries));
        if (!p_dict->p_entries)
            i_size = 0;
    }
    p_dict->i_size = i_size;
}
```

### 函数描述
该函数用于初始化一个 `vlc_dictionary_t` 类型的字典结构。它分配了字典的初始内存空间，并设置字典的大小。如果分配内存失败，字典的大小将被设置为0。

### 函数参数说明

| 参数名   | 类型                | 描述                                                                 |
|----------|---------------------|----------------------------------------------------------------------|
| `p_dict` | `vlc_dictionary_t*` | 指向要初始化的字典结构的指针。                                       |
| `i_size` | `int`               | 字典的初始大小。如果大于0，函数将尝试分配相应大小的内存空间。       |

### 函数返回值
该函数没有返回值。
## vlc_dictionary_clear {#vlc_dictionary_clear}

```c
void vlc_dictionary_clear(vlc_dictionary_t *p_dict, void (*pf_free)(void *, void *), void *p_obj);
```

### 描述
该函数用于清空一个 `vlc_dictionary_t` 结构体，并释放字典中所有条目的内存。如果提供了 `pf_free` 函数指针，该函数将被调用来释放每个条目的值。字典中的键和条目本身也会被释放。

### 函数参数说明

| 参数名       | 类型                        | 描述                                                                 |
|--------------|-----------------------------|----------------------------------------------------------------------|
| `p_dict`     | `vlc_dictionary_t *`        | 指向要清空的字典结构的指针。                                         |
| `pf_free`    | `void (*)(void *, void *)`   | 指向用于释放字典条目值的函数的指针。如果为 `NULL`，则不释放条目值。 |
| `p_obj`      | `void *`                    | 传递给 `pf_free` 函数的额外参数。                                    |

### 函数返回值
该函数没有返回值。
## free {#free}

```c
void free(void *ptr);
```

### 描述
`free` 函数用于释放之前通过 `malloc`、`calloc` 或 `realloc` 函数分配的内存空间。调用 `free` 后，指针 `ptr` 所指向的内存空间将被释放，可以被重新分配。如果 `ptr` 为 `NULL`，则 `free` 函数不执行任何操作。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `ptr`  | `void *` | 指向要释放的内存块的指针。如果 `ptr` 为 `NULL`，则函数不执行任何操作。 |

### 函数返回值
`free` 函数没有返回值。
## vlc_dictionary_has_key {#vlc_dictionary_has_key}

```c
static inline int vlc_dictionary_has_key(const vlc_dictionary_t *p_dict, const char *psz_key)
```

### 函数描述
该函数用于检查给定的字典中是否存在指定的键。如果字典中存在该键，则返回非零值；否则返回零。

### 函数参数说明

| 参数名       | 类型                    | 描述                                                                 |
|--------------|-------------------------|----------------------------------------------------------------------|
| `p_dict`     | `const vlc_dictionary_t*` | 指向要检查的 `vlc_dictionary_t` 结构体的指针。                        |
| `psz_key`    | `const char*`           | 指向要检查的键的字符串指针。                                         |

### 函数返回值
- **非零值**：表示字典中存在指定的键。
- **0**：表示字典中不存在指定的键。
## vlc_dictionary_value_for_key {#vlc_dictionary_value_for_key}

```c
static inline void *
vlc_dictionary_value_for_key( const vlc_dictionary_t * p_dict, const char * psz_key )
```

### 描述
该函数用于从 `vlc_dictionary_t` 结构中根据给定的键查找对应的值。如果找到匹配的键，则返回对应的值；否则返回 `kVLCDictionaryNotFound`。

### 函数参数说明

| 参数名       | 类型                   | 描述                                                                 |
|--------------|------------------------|--------------------------------------------------------------------------|
| `p_dict`     | `const vlc_dictionary_t *` | 指向 `vlc_dictionary_t` 结构的指针，表示要查找的字典。               |
| `psz_key`    | `const char *`          | 指向要查找的键的字符串指针。                                           |

### 函数返回值
- **`void *`**: 返回值为指向找到的值的指针。如果未找到匹配的键，则返回 `kVLCDictionaryNotFound`。
## vlc_dictionary_keys_count {#vlc_dictionary_keys_count}

```c
static inline int vlc_dictionary_keys_count( const vlc_dictionary_t * p_dict )
```

### 描述
该函数用于计算并返回字典中键的数量。它遍历字典中的所有条目，并统计键的总数。

### 函数参数说明

| 参数名       | 类型                  | 描述                                       |
|--------------|-----------------------|--------------------------------------------|
| `p_dict`     | `const vlc_dictionary_t *` | 指向要计算键数量的字典的指针。 |

### 函数返回值
- 返回值为整数类型，表示字典中键的数量。
- 如果字典为空（即 `p_dict->p_entries` 为 `NULL`），则返回 `0`。
- 否则，返回字典中所有键的总数。
## vlc_dictionary_all_keys {#vlc_dictionary_all_keys}

```c
static inline char **
vlc_dictionary_all_keys( const vlc_dictionary_t * p_dict )
```

### 函数描述
该函数用于获取字典中所有键的列表。它返回一个字符串数组，其中包含字典中所有键的副本。数组的最后一个元素为 `NULL`，表示数组的结束。

### 函数参数说明

| 参数名       | 类型                    | 描述                                                                 |
|--------------|-------------------------|----------------------------------------------------------------------|
| `p_dict`     | `const vlc_dictionary_t*` | 指向要获取键列表的字典的指针。该字典必须已经初始化并且包含有效的数据。 |

### 函数返回值
- **成功**：返回一个字符串数组，其中包含字典中所有键的副本。数组的最后一个元素为 `NULL`。
- **失败**：如果内存分配失败，返回 `NULL`。
## vlc_dictionary_init {#vlc_dictionary_init}

```c
void vlc_dictionary_init( vlc_dictionary_t *p_dict, int i_preallocate );
```

### 描述
该函数用于初始化一个 `vlc_dictionary_t` 结构体。初始化后的字典是空的，并且可以根据需要预分配内存。

### 函数参数说明

| 参数名          | 类型                | 描述                                                                 |
|-----------------|---------------------|----------------------------------------------------------------------|
| `p_dict`        | `vlc_dictionary_t*` | 指向要初始化的 `vlc_dictionary_t` 结构体的指针。                     |
| `i_preallocate` | `int`               | 预分配的内存块数。如果设置为 0，则不进行预分配；否则，字典将预分配指定数量的内存块。 |

### 函数返回值
该函数没有返回值。
## vlc_dictionary_init {#vlc_dictionary_init}

```c
void vlc_dictionary_init( vlc_dictionary_t *p_dict, unsigned int i_size );
```

### 描述
该函数用于初始化一个 `vlc_dictionary_t` 结构体。它为字典分配初始内存，并设置字典的大小。

### 函数参数说明

| 参数名    | 类型                | 描述                                                         |
|-----------|---------------------|--------------------------------------------------------------|
| `p_dict`  | `vlc_dictionary_t*` | 指向要初始化的 `vlc_dictionary_t` 结构体的指针。             |
| `i_size`  | `unsigned int`      | 字典的初始大小。如果为 0，则使用默认大小。                   |

### 函数返回值
该函数没有返回值。
## __vlc_dictionary_insert {#__vlc_dictionary_insert}

```c
void __vlc_dictionary_insert(vlc_dictionary_t *p_dict, const char *psz_key, void *p_value, bool b_rebuild);
```

### 描述
该函数用于将一个键值对插入到字典中。如果字典中已经存在相同的键，则该键的值将被更新为新值。如果字典需要重新构建（例如在插入大量数据后），可以通过设置 `b_rebuild` 参数来触发重新构建操作。

### 函数参数说明

| 参数名    | 类型                | 描述                                                                 |
|-----------|---------------------|----------------------------------------------------------------------|
| p_dict    | vlc_dictionary_t*   | 指向要插入键值对的字典的指针。                                       |
| psz_key   | const char*         | 要插入的键，字符串类型。                                             |
| p_value   | void*               | 与键关联的值，可以是任意类型的指针。                                 |
| b_rebuild | bool                | 如果为 `true`，则在插入后触发字典的重新构建操作；如果为 `false`，则不触发。 |

### 函数返回值
该函数没有返回值（`void`）。
## vlc_dictionary_clear {#vlc_dictionary_clear}

```c
void vlc_dictionary_clear(vlc_dictionary_t *p_dict, void (*pf_free_data)(void *), void *p_data);
```

### 描述
该函数用于清空一个 `vlc_dictionary_t` 类型的字典，并释放字典中所有键值对所占用的内存。如果提供了 `pf_free_data` 函数指针，该函数将被调用以释放每个键值对中的数据部分。`p_data` 参数将作为 `pf_free_data` 函数的额外参数传递。

### 函数参数说明

| 参数名        | 类型                     | 描述                                                                 |
|---------------|--------------------------|--------------------------------------------------------------------------|
| `p_dict`      | `vlc_dictionary_t *`     | 指向要清空的字典的指针。                                               |
| `pf_free_data`| `void (*)(void *)`       | 可选的函数指针，用于释放字典中每个键值对的数据部分。如果为 `NULL`，则不会释放数据。 |
| `p_data`      | `void *`                 | 传递给 `pf_free_data` 函数的额外参数。如果 `pf_free_data` 为 `NULL`，则该参数无效。 |

### 函数返回值
该函数没有返回值。
## vlc_dictionary_insert {#vlc_dictionary_insert}

```c
static inline void vlc_dictionary_insert(vlc_dictionary_t *p_dict, const char *psz_key, void *p_value)
```

### 函数描述
该函数用于向 `vlc_dictionary_t` 类型的字典中插入一个键值对。如果字典中已经存在相同的键，则该键的值将被更新为新的值。

### 函数参数说明

| 参数名    | 类型                | 描述                                                                 |
|-----------|---------------------|----------------------------------------------------------------------|
| `p_dict`  | `vlc_dictionary_t*` | 指向要插入键值对的字典的指针。                                       |
| `psz_key` | `const char*`       | 要插入的键，类型为字符串。                                           |
| `p_value` | `void*`             | 与键关联的值，类型为指针。可以是任意类型的数据。                     |

### 函数返回值
该函数没有返回值（`void`）。
## free {#free}

```c
void free(void *ptr);
```

### 描述
`free` 函数用于释放之前通过 `malloc`、`calloc`、`realloc` 或 `aligned_alloc` 函数分配的内存空间。调用 `free` 后，指针 `ptr` 所指向的内存空间将被释放，可以被重新分配。如果 `ptr` 为 `NULL`，则 `free` 函数不执行任何操作。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `ptr`  | `void *` | 指向要释放的内存块的指针。如果 `ptr` 为 `NULL`，则函数不执行任何操作。 |

### 函数返回值
`free` 函数没有返回值。
## free {#free}

```c
void free(void *p_entry);
```

### 描述
`free` 函数用于释放之前通过 `malloc`、`calloc` 或 `realloc` 函数分配的内存块。调用 `free` 后，指向该内存块的指针将变为无效，不应再被引用。

### 函数参数说明

| 参数名   | 类型        | 描述                                                                 |
|----------|-------------|----------------------------------------------------------------------|
| `p_entry`| `void *`    | 指向要释放的内存块的指针。如果 `p_entry` 为 `NULL`，则 `free` 函数不执行任何操作。 |

### 函数返回值
`free` 函数没有返回值。
## vlc_delete_all {#vlc_delete_all}

```cpp
void vlc_delete_all( T &container )
{
    typename T::iterator it = container.begin();
    while ( it != container.end() )
    {
        delete *it;
        ++it;
    }
    container.clear();
}
```

### 函数描述
该函数用于删除容器中的所有元素，并清空容器。它通过迭代器遍历容器中的每个元素，并使用 `delete` 操作符释放每个元素的内存。最后，调用容器的 `clear` 方法清空容器。

### 函数参数说明

| 参数名    | 类型 | 描述                                                                 |
|-----------|------|--------------------------------------------------------------------------|
| container | T&   | 需要删除所有元素并清空的容器。容器类型 `T` 必须支持 `begin()` 和 `end()` 方法，并且其元素类型必须是可以使用 `delete` 操作符释放的指针类型。 |

### 函数返回值
该函数没有返回值（`void`）。
