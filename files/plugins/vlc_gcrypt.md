## gcry_vlc_mutex_init {#gcry_vlc_mutex_init}

```c
static int gcry_vlc_mutex_init(void **p_sys)
```

### 函数描述
该函数用于初始化一个 VLC 互斥锁，并将其存储在指定的系统指针中。如果内存分配失败，函数将返回错误代码。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_sys` | `void **` | 指向系统指针的指针，用于存储初始化的互斥锁。 |

### 函数返回值

- `VLC_SUCCESS`：如果互斥锁成功初始化并存储在 `p_sys` 中。
- `ENOMEM`：如果内存分配失败，无法创建互斥锁。
## gcry_vlc_mutex_destroy {#gcry_vlc_mutex_destroy}

```c
static int gcry_vlc_mutex_destroy(void **p_sys)
```

### 函数描述
该函数用于销毁一个由 `p_sys` 指向的互斥锁，并释放相关的内存。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_sys` | `void **` | 指向互斥锁的指针的指针。该指针指向的内存将被销毁并释放。 |

### 函数返回值
- `VLC_SUCCESS`：表示互斥锁成功销毁。
## gcry_vlc_mutex_lock {#gcry_vlc_mutex_lock}

```c
static int gcry_vlc_mutex_lock( void **p_sys )
```

### 函数描述
该函数用于锁定一个互斥锁（mutex）。它通过调用 `vlc_mutex_lock` 函数来实现锁定操作，并返回 `VLC_SUCCESS` 表示操作成功。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_sys` | `void **` | 指向互斥锁对象的指针的指针。该指针指向的内存区域存储了互斥锁对象的地址。 |

### 函数返回值
- **`VLC_SUCCESS`**: 表示互斥锁成功锁定。
## gcry_vlc_mutex_unlock {#gcry_vlc_mutex_unlock}

```c
static int gcry_vlc_mutex_unlock(void **lock)
```

### 函数描述
该函数用于解锁一个互斥锁。它将调用 `vlc_mutex_unlock` 函数来解锁由 `lock` 参数指向的互斥锁，并返回 `VLC_SUCCESS` 表示操作成功。

### 函数参数说明

| 参数名 | 类型      | 描述                                                                 |
|--------|-----------|--------------------------------------------------------------------------|
| lock   | `void **` | 指向互斥锁的指针的指针。该指针指向的互斥锁将被解锁。 |

### 函数返回值
- **`VLC_SUCCESS`**: 表示互斥锁成功解锁。
## vlc_gcrypt_init {#vlc_gcrypt_init}

```c
static inline void vlc_gcrypt_init (void)
```

### 函数描述
初始化 gcrypt 并设置适当的锁定机制。

### 函数参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| 无 | 无 | 无 |

### 函数返回值
该函数没有返回值。
