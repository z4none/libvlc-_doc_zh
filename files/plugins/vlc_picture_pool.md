## picture_pool_Delete {#picture_pool_Delete}

```c
VLC_API void picture_pool_Delete( picture_pool_t * );
```

### 描述
该函数用于销毁由 `picture_pool_New` 创建的图片池。在调用此函数之前，所有图片必须已经释放回池中。然后，池将释放这些图片。

### 参数说明

| 参数名          | 类型            | 描述                                                                 |
|-----------------|-----------------|----------------------------------------------------------------------|
| `picture_pool_t *` | `picture_pool_t *` | 指向要销毁的图片池的指针。在调用此函数之前，所有图片必须已经释放回池中。 |

### 返回值
该函数没有返回值。
## picture_pool_NonEmpty {#picture_pool_NonEmpty}

```c
VLC_API void picture_pool_NonEmpty( picture_pool_t *p_pool, bool reset );
```

### 描述
该函数强制下一次调用 `picture_pool_Get` 时返回一张图片，即使当前没有空闲的图片可用。如果 `reset` 参数为 `true`，所有图片将被标记为空闲状态。该函数通过释放最旧的使用中的图片来实现这一点（如果没有可用的图片）。请注意，该函数应谨慎使用，只有在需要修复某些 bug 时才可能需要使用它。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_pool` | `picture_pool_t *` | 指向图片池的指针 |
| `reset` | `bool` | 如果为 `true`，所有图片将被标记为空闲状态 |

### 返回值
该函数没有返回值。
## picture_pool_GetSize {#picture_pool_GetSize}

```c
VLC_API int picture_pool_GetSize(picture_pool_t *pool);
```

### 描述
该函数返回给定池的大小。

### 函数参数说明

| 参数名       | 类型              | 描述                 |
|--------------|-------------------|----------------------|
| `pool`       | `picture_pool_t *` | 指向图片池的指针     |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**: 返回给定池的大小。
