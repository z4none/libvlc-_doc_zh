## vlc_avcodec_lock {#vlc_avcodec_lock}

```c
static inline void vlc_avcodec_lock (void)
```

### 函数描述
该函数用于锁定与 `libavcodec` 相关的全局互斥锁。通过调用 `vlc_global_lock` 函数，确保在访问 `libavcodec` 库时线程安全。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| 无     | 无   | 无   |

### 函数返回值
该函数没有返回值。
## vlc_avcodec_unlock {#vlc_avcodec_unlock}

```c
static inline void vlc_avcodec_unlock (void)
```

### 描述
该函数用于释放 `VLC_AVCODEC_MUTEX` 全局锁。

### 函数参数说明
| 参数名 | 类型 | 描述 |
|--------|------|------|
| 无     | 无   | 无   |

### 函数返回值
该函数没有返回值。
