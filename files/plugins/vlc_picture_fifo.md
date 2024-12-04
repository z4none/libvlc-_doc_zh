## picture_fifo_Delete {#picture_fifo_Delete}

```c
VLC_API void picture_fifo_Delete( picture_fifo_t * );
```

### 描述
该函数用于销毁由 `picture_fifo_New` 创建的 FIFO（先进先出队列）。FIFO 中的所有图片都将通过 `picture_Release` 函数释放。

### 函数参数说明

| 参数名          | 类型            | 描述                                                                 |
|-----------------|-----------------|----------------------------------------------------------------------|
| `picture_fifo_t *` | `picture_fifo_t *` | 指向要销毁的 FIFO 的指针。该指针指向的 FIFO 对象将被销毁并释放。 |

### 函数返回值
该函数没有返回值。
## picture_fifo_Push {#picture_fifo_Push}

```c
VLC_API void picture_fifo_Push( picture_fifo_t *fifo, picture_t *picture );
```

### 函数描述
该函数将一个 `picture_t` 对象保存到 `fifo` 中。

### 函数参数说明

| 参数名   | 类型           | 描述                         |
|----------|----------------|------------------------------|
| `fifo`   | `picture_fifo_t*` | 指向 `picture_fifo_t` 结构的指针，表示 FIFO 队列。 |
| `picture`| `picture_t*`      | 指向 `picture_t` 结构的指针，表示要保存的图片。 |

### 函数返回值
该函数没有返回值。
## picture_fifo_Flush {#picture_fifo_Flush}

```c
VLC_API void picture_fifo_Flush( picture_fifo_t *fifo, mtime_t date, bool flush_before );
```

### 函数描述
该函数释放 FIFO 中所有日期早于或等于给定日期的图片（如果 `flush_before` 为真），或者释放所有日期晚于或等于给定日期的图片（如果 `flush_before` 为假）。FIFO 中的所有图片都将通过 `picture_Release` 函数释放。

### 函数参数说明

| 参数名        | 类型          | 描述                                                                 |
|---------------|---------------|--------------------------------------------------------------------------|
| `fifo`        | `picture_fifo_t *` | 指向要操作的图片 FIFO 的指针。                                         |
| `date`        | `mtime_t`         | 用于比较的日期值。                                                     |
| `flush_before`| `bool`            | 如果为真，释放所有日期早于或等于 `date` 的图片；如果为假，释放所有日期晚于或等于 `date` 的图片。 |

### 函数返回值
该函数没有返回值。
## picture_fifo_OffsetDate {#picture_fifo_OffsetDate}

```c
VLC_API void picture_fifo_OffsetDate( picture_fifo_t *fifo, mtime_t delta );
```

### 函数描述
该函数用于对图片队列中的所有图片的时间戳应用一个增量。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `fifo` | `picture_fifo_t *` | 指向图片队列的指针，表示要操作的图片队列。 |
| `delta` | `mtime_t` | 时间增量，表示要应用到每个图片时间戳上的时间差。 |

### 函数返回值
该函数没有返回值。
