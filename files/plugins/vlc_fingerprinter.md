## vlc_gc_incref {#vlc_gc_incref}

```c
void vlc_gc_incref(vlc_object_t *p_item);
```

### 描述
该函数用于增加给定对象的引用计数。引用计数用于跟踪对象的使用情况，当引用计数为零时，对象可以被安全地释放。

### 函数参数说明

| 参数名    | 类型            | 描述                 |
|-----------|-----------------|----------------------|
| `p_item`  | `vlc_object_t*` | 需要增加引用计数的对象指针 |

### 函数返回值
该函数没有返回值。
## vlc_array_init {#vlc_array_init}

```c
void vlc_array_init( vlc_array_t *p_array );
```

### 描述
该函数用于初始化一个 `vlc_array_t` 类型的数组。初始化后的数组为空，并且可以安全地用于后续的插入、删除和遍历操作。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| `p_array` | `vlc_array_t*` | 指向要初始化的 `vlc_array_t` 类型数组的指针。初始化后，该数组将为空。|

### 函数返回值
该函数没有返回值。
## fingerprint_request_Delete {#fingerprint_request_Delete}

```c
static inline void fingerprint_request_Delete( fingerprint_request_t *p_f )
```

### 函数描述
该函数用于删除指纹请求对象，并释放与其相关的所有资源。它会减少与请求关联的媒体项的引用计数，释放指纹结果中的字符串和元数据数组中的所有元数据，最后释放指纹请求对象本身。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_f`  | `fingerprint_request_t*` | 指向要删除的指纹请求对象的指针。 |

### 函数返回值
该函数没有返回值。
## fingerprinter_Destroy {#fingerprinter_Destroy}

```c
VLC_API void fingerprinter_Destroy( fingerprinter_thread_t *p_fingerprint );
```

### 函数描述
该函数用于销毁指纹识别线程对象。销毁后，该对象将不再可用。

### 函数参数说明
| 参数名          | 类型                    | 描述                                                                 |
|-----------------|-------------------------|----------------------------------------------------------------------|
| `p_fingerprint` | `fingerprinter_thread_t*` | 指向要销毁的指纹识别线程对象的指针。销毁后，该指针将不再有效。 |

### 函数返回值
该函数没有返回值。
## fingerprint_request_t {#fingerprint_request_t}

```c
struct fingerprint_request_t
{
    input_item_t *p_item;
    unsigned int i_duration; /* track length hint in seconds, 0 if unkown */
    struct
    {
        char *psz_fingerprint;
        vlc_array_t metas_array;
    } results;
};
```

### 描述
`fingerprint_request_t` 结构体用于表示指纹请求的相关信息。它包含了输入项、音轨长度提示以及结果信息。

### 成员说明

| 成员变量       | 类型           | 描述                                                                 |
|----------------|----------------|----------------------------------------------------------------------|
| `p_item`       | `input_item_t*`| 指向输入项的指针，表示要进行指纹分析的媒体项。                       |
| `i_duration`   | `unsigned int` | 音轨长度的提示，以秒为单位。如果未知，则为0。                        |
| `results`      | `struct`       | 包含指纹分析结果的结构体。                                           |
| `results.psz_fingerprint` | `char*` | 指向指纹字符串的指针，表示分析得到的指纹。                           |
| `results.metas_array`    | `vlc_array_t` | 包含元数据数组的结构体，表示与指纹相关的元数据。                     |

### 返回值
该结构体本身不返回值，它用于存储和传递指纹请求的相关信息。
## fingerprinter_thread_t {#fingerprinter_thread_t}

```c
struct fingerprinter_thread_t
{
    VLC_COMMON_MEMBERS

    /* Specific interfaces */
    fingerprinter_sys_t * p_sys;

    module_t *   p_module;
    void ( *pf_run ) ( struct fingerprinter_thread_t * );

    void ( *pf_enqueue ) ( struct fingerprinter_thread_t *f, fingerprint_request_t *r );
    fingerprint_request_t * ( *pf_getresults ) ( struct fingerprinter_thread_t *f );
    void ( *pf_apply ) ( fingerprint_request_t *, int i_resultid );
};
```

### 描述
`fingerprinter_thread_t` 结构体定义了一个指纹识别线程的结构。该结构体包含了与指纹识别相关的特定接口和成员变量。

### 成员变量说明

| 成员变量名 | 类型 | 描述 |
|------------|------|------|
| `VLC_COMMON_MEMBERS` | - | VLC 公共成员，通常包含一些通用的成员变量和函数指针。 |
| `p_sys` | `fingerprinter_sys_t *` | 指向指纹识别系统结构体的指针，用于存储与指纹识别相关的系统数据。 |
| `p_module` | `module_t *` | 指向模块结构体的指针，用于标识当前使用的模块。 |
| `pf_run` | `void ( * )( struct fingerprinter_thread_t * )` | 指向运行指纹识别线程的函数指针。 |
| `pf_enqueue` | `void ( * )( struct fingerprinter_thread_t *, fingerprint_request_t * )` | 指向将指纹识别请求加入队列的函数指针。 |
| `pf_getresults` | `fingerprint_request_t * ( * )( struct fingerprinter_thread_t * )` | 指向获取指纹识别结果的函数指针。 |
| `pf_apply` | `void ( * )( fingerprint_request_t *, int )` | 指向应用指纹识别结果的函数指针。 |

### 返回值
该结构体本身不返回值，它是一个定义了指纹识别线程相关接口和成员变量的结构体。
