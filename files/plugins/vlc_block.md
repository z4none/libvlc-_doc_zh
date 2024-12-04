## block_Alloc {#block_Alloc}

```c
block_t *block_Alloc(size_t size);
```

### 描述
创建一个具有请求大小（>= 0）的新块，如果失败则返回 NULL。

### 参数说明
| 参数名 | 类型   | 描述                   |
|--------|--------|------------------------|
| size   | size_t | 请求的块大小（>= 0）   |

### 返回值
- 成功时返回新创建的 `block_t` 指针。
- 失败时返回 `NULL`。

## block_Release 

```c
void block_Release(block_t *block);
```

### 描述
释放由 `block_Alloc` 分配的块。

### 参数说明
| 参数名 | 类型    | 描述                   |
|--------|---------|------------------------|
| block  | block_t | 要释放的块指针         |

### 返回值
无返回值。

## block_Realloc {#block_Realloc}

```c
void block_Realloc(block_t *block, ssize_t i_pre, size_t i_body);
```

### 描述
重新分配一个块，支持在头部插入或跳过字节，以及调整主体大小。

### 参数说明
| 参数名 | 类型    | 描述                                                                 |
|--------|---------|----------------------------------------------------------------------|
| block  | block_t | 要重新分配的块指针                                                   |
| i_pre  | ssize_t | 如果 > 0，表示在主体前插入的字节数；如果 < 0，表示跳过的主体字节数 |
| i_body | size_t  | 最终的主体大小（>= 0）                                               |

### 返回值
无返回值。

## block_Duplicate {#block_Duplicate}

```c
block_t *block_Duplicate(const block_t *block);
```

### 描述
创建一个块的副本。

### 参数说明
| 参数名 | 类型       | 描述                   |
|--------|------------|------------------------|
| block  | block_t    | 要复制的块指针         |

### 返回值
- 成功时返回新创建的 `block_t` 指针，该指针是原块的副本。
- 失败时返回 `NULL`。

## block_Init {#block_Init}

```c
void block_Init(block_t *block, void *data, size_t size);
```

### 描述
初始化一个块，设置其数据指针和大小。

### 参数说明
| 参数名 | 类型    | 描述                   |
|--------|---------|------------------------|
| block  | block_t | 要初始化的块指针       |
| data   | void*   | 块的数据指针           |
| size   | size_t  | 块的大小               |

### 返回值
无返回值。
## block_CopyProperties 

```c
static inline void block_CopyProperties(block_t *dst, block_t *src)
{
    dst->i_flags   = src->i_flags;
    dst->i_nb_samples = src->i_nb_samples;
    dst->i_dts     = src->i_dts;
    dst->i_pts     = src->i_pts;
    dst->i_length  = src->i_length;
}
```

### 函数描述
该函数用于将源 `block_t` 结构体中的属性复制到目标 `block_t` 结构体中。复制的属性包括标志位、样本数量、解码时间戳（DTS）、显示时间戳（PTS）以及块的长度。

### 函数参数说明

| 参数名 | 类型   | 描述               |
|--------|--------|--------------------|
| `dst`  | `block_t*` | 目标 `block_t` 结构体指针，用于接收复制的属性。 |
| `src`  | `block_t*` | 源 `block_t` 结构体指针，包含要复制的属性。 |

### 函数返回值
该函数没有返回值（`void`）。
## block_CopyProperties 

```c
void block_CopyProperties( block_t *p_dup, const block_t *p_block );
```

### 描述
该函数用于将一个 `block_t` 结构体的属性复制到另一个 `block_t` 结构体中。复制的内容包括数据指针、数据大小、引用计数等信息。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| `p_dup`   | `block_t *`   | 目标 `block_t` 结构体指针，用于接收复制的属性。                         |
| `p_block` | `const block_t *` | 源 `block_t` 结构体指针，其属性将被复制到 `p_dup` 中。 |

### 函数返回值
该函数没有返回值（`void`）。
## memcpy {#memcpy}

```c
void *memcpy(void *dest, const void *src, size_t n);
```

### 描述
`memcpy` 函数用于将 `src` 指向的内存区域中的 `n` 个字节复制到 `dest` 指向的内存区域中。该函数不会检查 `src` 中的空字符（'\0'），它只是盲目地复制 `n` 个字节。`dest` 和 `src` 指向的内存区域不应重叠，如果需要处理重叠的内存区域，应使用 `memmove` 函数。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `dest` | `void *` | 目标内存区域的指针，复制后的数据将存储在这里。 |
| `src` | `const void *` | 源内存区域的指针，从中复制数据。 |
| `n` | `size_t` | 要复制的字节数。 |

### 函数返回值
`memcpy` 函数返回 `dest` 的值，即目标内存区域的指针。
## block_Release 

```c
static inline void block_Release(block_t *p_block)
{
    p_block->pf_release(p_block);
}
```

### 描述
该函数用于释放一个 `block_t` 类型的对象。它调用 `p_block` 结构体中的 `pf_release` 函数指针来释放该对象。

### 函数参数说明

| 参数名    | 类型      | 描述                     |
|-----------|-----------|--------------------------|
| `p_block` | `block_t*` | 指向要释放的 `block_t` 对象的指针。 |

### 函数返回值
该函数没有返回值。
## block_Cleanup {#block_Cleanup}

```c
static inline void block_Cleanup(void *block)
```

### 函数描述
`block_Cleanup` 函数用于释放一个块（block）的资源。它将传入的 `block` 指针转换为 `block_t` 类型，并调用 `block_Release` 函数来释放该块。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `block` | `void *` | 指向要释放的块的指针。 |

### 函数返回值
该函数没有返回值。
## block_ChainAppend {#block_ChainAppend}

```c
static inline void block_ChainAppend( block_t **pp_list, block_t *p_block )
```

### 描述
将一个块追加到链表的最后一个块。尽量避免在大数据量的情况下使用此函数，因为它非常慢，建议使用 `block_ChainLastAppend`。`p_block` 可以为 `NULL`。

### 函数参数说明

| 参数名    | 类型      | 描述                                                         |
|-----------|-----------|--------------------------------------------------------------|
| `pp_list` | `block_t**` | 指向链表头指针的指针，表示要追加块的链表。                   |
| `p_block` | `block_t*`  | 要追加到链表末尾的块。可以为 `NULL`。                        |

### 函数返回值
该函数没有返回值。
## block_ChainLastAppend {#block_ChainLastAppend}

```c
static inline void block_ChainLastAppend(block_t ***ppp_last, block_t *p_block)
```

### 描述
该函数用于将一个 `block_t` 结构体追加到链表的末尾。函数会更新链表的最后一个节点的指针，使其指向新追加的节点，并更新 `ppp_last` 指针，使其指向链表的最后一个节点的 `p_next` 指针。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| `ppp_last`| `block_t ***` | 指向链表最后一个节点的 `p_next` 指针的指针的指针。函数会更新这个指针，使其指向链表的最后一个节点的 `p_next` 指针。 |
| `p_block` | `block_t *`   | 要追加到链表末尾的 `block_t` 结构体指针。 |

### 函数返回值
该函数没有返回值。
## block_ChainRelease 

```c
static inline void block_ChainRelease(block_t *p_block)
```

### 描述
该函数用于释放一个链表中的所有块（block）。它会遍历链表中的每个块，并调用 `block_Release` 函数来释放每个块，直到链表中的所有块都被释放。

### 函数参数说明

| 参数名   | 类型    | 描述                                                                 |
|----------|---------|--------------------------------------------------------------------------|
| `p_block` | `block_t*` | 指向链表中第一个块的指针。函数将从该块开始，依次释放链表中的所有块。 |

### 函数返回值
该函数没有返回值。
## block_ChainExtract 

```c
static size_t block_ChainExtract(block_t *p_list, void *p_data, size_t i_max)
```

### 函数描述
该函数用于从链表中提取数据块，并将数据复制到指定的内存区域。函数会遍历链表中的每个数据块，直到达到最大复制限制或链表结束。

### 函数参数说明

| 参数名  | 类型     | 描述                                                                 |
|---------|----------|----------------------------------------------------------------------|
| p_list  | block_t* | 指向链表头部的指针，链表中的每个节点包含一个数据块。                 |
| p_data  | void*    | 指向目标内存区域的指针，用于存储从链表中提取的数据。                 |
| i_max   | size_t   | 最大复制字节数，函数将尝试从链表中提取不超过此数量的数据。           |

### 函数返回值
- **size_t**: 返回实际复制的字节数。
  - 如果链表为空或 `i_max` 为 0，则返回 0。
  - 否则，返回实际从链表中提取并复制到 `p_data` 中的字节数。
## block_ChainProperties 

```c
static inline void block_ChainProperties(block_t *p_list, int *pi_count, size_t *pi_size, mtime_t *pi_length)
```

### 函数描述
该函数用于计算链表中所有块的总大小、总长度以及块的数量。它遍历链表中的每个块，累加每个块的缓冲区大小和长度，并统计块的数量。最后，将计算结果存储在传入的指针参数中。

### 函数参数说明

| 参数名    | 类型    | 描述                                                                 |
|-----------|---------|--------------------------------------------------------------------------|
| `p_list`  | `block_t*` | 指向链表头部的指针，链表中的每个节点代表一个块。                         |
| `pi_count`| `int*`    | 指向整数的指针，用于存储链表中块的总数量。如果为 `NULL`，则忽略该参数。 |
| `pi_size` | `size_t*` | 指向 `size_t` 类型的指针，用于存储链表中所有块的总大小。如果为 `NULL`，则忽略该参数。 |
| `pi_length` | `mtime_t*` | 指向 `mtime_t` 类型的指针，用于存储链表中所有块的总长度。如果为 `NULL`，则忽略该参数。 |

### 函数返回值
该函数没有返回值。所有计算结果通过传入的指针参数返回。
## block_ChainProperties 

```c
void block_ChainProperties(p_list, NULL, &i_total, &i_length);
```

### 描述
该函数用于获取区块链的属性信息。它通过传入一个链表 `p_list` 来收集区块链的属性，并将总属性数量和当前属性长度分别存储在 `i_total` 和 `i_length` 中。

### 函数参数说明

| 参数名   | 类型    | 描述                                                                 |
|----------|---------|----------------------------------------------------------------------|
| `p_list` | `p_list`| 指向链表的指针，用于存储区块链的属性信息。                            |
| `NULL`   | `NULL`  | 保留参数，当前未使用。                                                |
| `i_total`| `int*`  | 指向整数的指针，用于存储区块链属性的总数量。                          |
| `i_length`| `int*`  | 指向整数的指针，用于存储当前已收集的区块链属性的长度。                |

### 函数返回值
该函数没有返回值（`void`）。
## block_ChainExtract 

```c
void block_ChainExtract( p_list, g->p_buffer, g->i_buffer );
```

### 描述
该函数用于从链表中提取数据块。它将链表中的数据提取到指定的缓冲区中，并根据缓冲区的大小进行适当的处理。

### 参数说明

| 参数名       | 类型       | 描述                                                         |
|--------------|------------|--------------------------------------------------------------|
| `p_list`     | `p_list_t` | 指向链表的指针，表示要从中提取数据的链表。                   |
| `g->p_buffer`| `void*`    | 指向目标缓冲区的指针，用于存储从链表中提取的数据。           |
| `g->i_buffer`| `int`      | 目标缓冲区的大小，表示缓冲区可以存储的最大字节数。           |

### 返回值
该函数没有返回值（`void`）。
## block_ChainRelease 

```c
void block_ChainRelease(void *p_list);
```

### 描述
该函数用于释放链表 `p_list` 的内存。调用此函数后，`p_list` 所占用的内存将被释放，不再可用。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_list` | `void *` | 指向需要释放的链表的指针。 |

### 函数返回值
该函数没有返回值。
## block_FifoRelease {#block_FifoRelease}

```c
VLC_API void block_FifoRelease( block_fifo_t * );
```

### 函数描述
`block_FifoRelease` 函数用于释放一个 `block_fifo_t` 类型的队列。调用此函数后，队列及其所有内容将被释放，队列将不再可用。

### 函数参数说明

| 参数名        | 类型          | 描述                                                                 |
|---------------|---------------|--------------------------------------------------------------------------|
| `block_fifo_t *` | `block_fifo_t *` | 指向要释放的 `block_fifo_t` 类型队列的指针。此队列及其所有内容将被释放。 |

### 函数返回值
该函数没有返回值。
## block_FifoPace {#block_FifoPace}

```c
VLC_API void block_FifoPace( block_fifo_t *fifo, size_t max_depth, size_t max_size );
```

### 描述
该函数用于调整块队列（`block_fifo_t`）的深度和大小限制。它允许用户设置队列的最大深度和最大大小，以控制队列的增长。

### 函数参数说明

| 参数名     | 类型          | 描述                                                         |
|------------|---------------|--------------------------------------------------------------|
| `fifo`     | `block_fifo_t*` | 指向要调整的块队列的指针。                                   |
| `max_depth`| `size_t`       | 队列的最大深度（即队列中允许的最大块数）。                   |
| `max_size` | `size_t`       | 队列的最大大小（即队列中所有块的总字节数）。                 |

### 函数返回值
该函数没有返回值。
## block_FifoEmpty {#block_FifoEmpty}

```c
VLC_API void block_FifoEmpty( block_fifo_t * );
```

### 描述
该函数用于清空一个 `block_fifo_t` 类型的队列。它会释放队列中的所有块，并重置队列的状态。

### 函数参数说明

| 参数名         | 类型          | 描述                                                         |
|----------------|---------------|--------------------------------------------------------------|
| `block_fifo_t*`| `block_fifo_t*`| 指向要清空的 `block_fifo_t` 类型队列的指针。|

### 函数返回值
该函数没有返回值。
## block_FifoPut {#block_FifoPut}

```c
VLC_API size_t block_FifoPut(block_fifo_t *p_fifo, block_t *p_block);
```

### 描述
该函数用于将一个数据块（`block_t`）放入一个先进先出队列（`block_fifo_t`）中。如果队列已满，函数将阻塞直到有空间可用。

### 函数参数说明

| 参数名   | 类型          | 描述                                                                 |
|----------|---------------|--------------------------------------------------------------------------|
| `p_fifo` | `block_fifo_t*` | 指向要放入数据块的先进先出队列的指针。                                     |
| `p_block`| `block_t*`     | 指向要放入队列的数据块的指针。如果为 `NULL`，则函数不会执行任何操作。 |

### 函数返回值

- 如果成功将数据块放入队列，函数返回队列中当前的数据块数量。
- 如果 `p_block` 为 `NULL`，函数返回队列中当前的数据块数量，但不会将 `NULL` 放入队列。
- 如果发生错误（例如内存不足），函数返回 `0`。
## block_FifoWake {#block_FifoWake}

```c
VLC_API void block_FifoWake(block_fifo_t *fifo);
```

### 函数描述
`block_FifoWake` 函数用于唤醒等待在给定 FIFO 队列上的所有线程。通常在向 FIFO 队列中添加数据后调用此函数，以通知等待数据的线程可以继续执行。

### 函数参数说明

| 参数名 | 类型          | 描述                                                         |
|--------|---------------|--------------------------------------------------------------|
| `fifo` | `block_fifo_t*` | 指向要唤醒的 FIFO 队列的指针。该队列通常用于存储 `block_t` 类型的数据块。 |

### 函数返回值
该函数没有返回值。
## block_FifoShow {#block_FifoShow}

```c
VLC_API block_t * block_FifoShow( block_fifo_t * );
```

### 描述
该函数用于查看 `block_fifo_t` 队列中的下一个块（block），但不会将其从队列中移除。

### 函数参数说明

| 参数名          | 类型          | 描述                                                                 |
|-----------------|---------------|--------------------------------------------------------------------------|
| `block_fifo_t *` | `block_fifo_t`| 指向 `block_fifo_t` 结构体的指针，表示要查看的块队列。|

### 函数返回值
- 如果队列中有块，则返回指向该块的指针。
- 如果队列为空，则返回 `NULL`。
## block_t {#block_t}

```c
struct block_t
{
    block_t    *p_next;

    uint8_t    *p_buffer; /**< Payload start */
    size_t      i_buffer; /**< Payload length */
    uint8_t    *p_start; /**< Buffer start */
    size_t      i_size; /**< Buffer total size */

    uint32_t    i_flags;
    unsigned    i_nb_samples; /* Used for audio */

    mtime_t     i_pts;
    mtime_t     i_dts;
    mtime_t     i_length;

    /* Rudimentary support for overloading block (de)allocation. */
    block_free_t pf_release;
};
```

### 描述
`block_t` 结构体用于表示一个数据块，通常用于媒体数据的传输和处理。它包含了数据块的元数据和实际数据。

### 参数说明

| 参数名       | 类型          | 描述                                                                 |
|--------------|---------------|--------------------------------------------------------------------------|
| `p_next`     | `block_t*`    | 指向下一个数据块的指针，用于链表结构。                                       |
| `p_buffer`   | `uint8_t*`    | 指向有效载荷（数据）的起始位置。                                             |
| `i_buffer`   | `size_t`      | 有效载荷的长度。                                                           |
| `p_start`    | `uint8_t*`    | 指向缓冲区的起始位置。                                                     |
| `i_size`     | `size_t`      | 缓冲区的总大小。                                                           |
| `i_flags`    | `uint32_t`    | 标志位，用于表示数据块的属性或状态。                                         |
| `i_nb_samples` | `unsigned`   | 用于音频数据的样本数量。                                                   |
| `i_pts`      | `mtime_t`     | 表示数据块的显示时间戳（Presentation Time Stamp）。                        |
| `i_dts`      | `mtime_t`     | 表示数据块的解码时间戳（Decoding Time Stamp）。                            |
| `i_length`   | `mtime_t`     | 表示数据块的长度。                                                         |
| `pf_release` | `block_free_t`| 指向释放数据块的函数指针，用于自定义数据块的释放操作。                     |

### 返回值
该结构体本身不返回值，它用于存储数据块的相关信息。
