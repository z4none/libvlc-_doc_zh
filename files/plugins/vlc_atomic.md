## __sync_synchronize {#__sync_synchronize}

```c
void __sync_synchronize(void);
```

### 描述
`__sync_synchronize` 函数用于在多处理器系统中强制执行内存屏障（memory barrier）。内存屏障确保在屏障之前的所有内存操作（读取和写入）在屏障之后的任何内存操作开始之前完成。这通常用于同步多个处理器之间的内存访问，以防止由于编译器优化或处理器乱序执行导致的内存操作顺序问题。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| 无     | 无   | 无参数 |

### 函数返回值
该函数没有返回值。
## vlc_global_lock 

```c
void vlc_global_lock(unsigned);
```

### 描述
该函数用于获取全局锁。全局锁用于保护全局变量和共享资源，以防止多线程环境下的竞争条件。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `VLC_ATOMIC_MUTEX` | `unsigned` | 全局锁的标识符。通常是一个预定义的常量，用于指定要获取的锁。 |

### 函数返回值
该函数没有返回值。
## vlc_global_unlock 

```c
void vlc_global_unlock(unsigned);
```

### 描述
`vlc_global_unlock` 函数用于释放全局锁。该函数是 `vlc_global_lock` 的对应函数，用于在多线程环境中保护全局变量的访问。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `VLC_ATOMIC_MUTEX` | `unsigned` | 全局锁的标识符。通常是一个预定义的常量，用于指定要释放的锁。 |

### 函数返回值
该函数没有返回值。
## vlc_global_lock 

```c
void vlc_global_lock(unsigned);
```

### 描述
该函数用于获取全局锁。全局锁用于保护全局变量和共享资源，以防止多线程环境下的竞争条件。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `VLC_ATOMIC_MUTEX` | `unsigned` | 全局锁的标识符。通常是一个预定义的常量，用于指定要获取的锁。 |

### 函数返回值
该函数没有返回值。
## vlc_global_unlock 

```c
void vlc_global_unlock(unsigned);
```

### 描述
该函数用于释放全局锁。它与 `vlc_global_lock` 函数配对使用，用于管理全局资源的并发访问。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `VLC_ATOMIC_MUTEX` | `unsigned` | 表示要释放的全局锁的标识符。 |

### 函数返回值
该函数没有返回值。
## vlc_global_lock 

```c
void vlc_global_lock(unsigned);
```

### 描述
该函数用于获取全局锁。它接受一个参数，该参数是一个全局锁的索引。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `VLC_ATOMIC_MUTEX` | `unsigned` | 全局锁的索引，用于指定要获取的锁。 |

### 函数返回值
该函数没有返回值。
## vlc_global_unlock 

```c
void vlc_global_unlock(int);
```

### 描述
该函数用于解锁全局锁。全局锁用于保护 VLC 中的全局变量和状态。解锁操作会释放之前通过 `vlc_global_lock` 获取的锁。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `VLC_ATOMIC_MUTEX` | `int` | 表示要解锁的全局锁的标识符。通常情况下，`VLC_ATOMIC_MUTEX` 是一个预定义的常量，用于指定特定的全局锁。 |

### 函数返回值
该函数没有返回值。
## vlc_global_lock {#vlc_global_lock}

```c
void vlc_global_lock(unsigned);
```

### 描述
该函数用于获取全局锁。它确保在多线程环境中，对共享资源的访问是线程安全的。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `VLC_ATOMIC_MUTEX` | `unsigned` | 全局锁的标识符。用于指定要获取的锁。 |

### 函数返回值
该函数没有返回值。
## vlc_global_unlock 

```c
void vlc_global_unlock(VLC_ATOMIC_MUTEX);
```

### 描述
该函数用于释放全局锁。它接受一个原子互斥锁作为参数，并释放该锁。

### 函数参数说明

| 参数名           | 类型              | 描述                   |
|------------------|-------------------|------------------------|
| VLC_ATOMIC_MUTEX | VLC_ATOMIC_MUTEX  | 要释放的全局原子互斥锁 |

### 函数返回值
该函数没有返回值。
## vlc_global_lock 

```c
void vlc_global_lock(unsigned);
```

### 描述
该函数用于获取全局锁。全局锁用于保护全局变量和共享资源，以防止多线程环境下的竞争条件。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `VLC_ATOMIC_MUTEX` | `unsigned` | 全局锁的标识符。通常是一个预定义的常量，用于指定要获取的锁。 |

### 函数返回值
该函数没有返回值。
## vlc_global_unlock 

```c
void vlc_global_unlock(unsigned);
```

### 描述
该函数用于释放全局锁。它接受一个参数，该参数指定了要释放的锁的索引。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `VLC_ATOMIC_MUTEX` | `unsigned` | 要释放的全局锁的索引。 |

### 函数返回值
该函数没有返回值。
## vlc_atomic_init_float {#vlc_atomic_init_float}

```c
static inline void vlc_atomic_init_float(vlc_atomic_float *var, float f)
{
    union { float f; uint32_t i; } u;
    u.f = f;
    atomic_init(var, u.i);
}
```

### 描述
该函数用于初始化一个 `vlc_atomic_float` 类型的变量，并将其初始值设置为指定的浮点数 `f`。函数内部使用了一个联合体来将浮点数转换为整数表示，然后通过 `atomic_init` 函数将该整数初始化到原子变量中。

### 参数说明

| 参数名 | 类型            | 描述                                         |
|--------|-----------------|----------------------------------------------|
| `var`  | `vlc_atomic_float*` | 指向要初始化的 `vlc_atomic_float` 类型变量的指针。 |
| `f`    | `float`            | 要初始化的浮点数值。                           |

### 返回值
该函数没有返回值。
## vlc_atomic_load_float {#vlc_atomic_load_float}

```c
static inline float vlc_atomic_load_float(vlc_atomic_float *atom)
{
    union { float f; uint32_t i; } u;
    u.i = atomic_load(atom);
    return u.f;
}
```

### 描述
该函数用于从原子变量中检索单精度浮点数。它通过原子操作加载原子变量的值，并将其转换为浮点数返回。

### 函数参数说明

| 参数名 | 类型            | 描述                 |
|--------|-----------------|----------------------|
| atom   | vlc_atomic_float* | 指向原子浮点数的指针 |

### 函数返回值
该函数返回从原子变量中加载的单精度浮点数值。
## vlc_atomic_store_float {#vlc_atomic_store_float}

```c
static inline void vlc_atomic_store_float(vlc_atomic_float *atom, float f)
{
    union { float f; uint32_t i; } u;
    u.f = f;
    atomic_store(atom, u.i);
}
```

### 描述
该函数用于将单精度浮点数存储到原子变量中。它通过将浮点数转换为整数形式，然后使用原子操作将其存储到指定的原子变量中。

### 函数参数说明

| 参数名 | 类型            | 描述                         |
|--------|-----------------|------------------------------|
| atom   | vlc_atomic_float* | 指向要存储浮点数的原子变量的指针 |
| f      | float           | 要存储的单精度浮点数值         |

### 函数返回值
该函数没有返回值（`void`）。
