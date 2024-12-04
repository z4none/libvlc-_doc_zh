## libvlc_clearerr {#libvlc_clearerr}

```c
LIBVLC_API void libvlc_clearerr (void);
```

### 描述
清除当前线程的 LibVLC 错误状态。这是可选的。默认情况下，当发生新的错误时，错误状态会自动被覆盖，并在当前线程退出时被销毁。

### 参数说明
| 参数 | 类型 | 描述 |
|------|------|------|
| 无   |      |      |

### 返回值
该函数没有返回值。
## libvlc_new {#libvlc_new}

```c
LIBVLC_API libvlc_instance_t *
libvlc_new( int argc, const char *const *argv );
```

### 描述
创建并初始化一个 libvlc 实例。该函数接受一个类似于命令行参数的列表，这些参数会影响 LibVLC 实例的默认配置。

### 参数说明

| 参数名 | 类型                | 描述                                                                 |
|--------|---------------------|----------------------------------------------------------------------|
| argc   | int                 | 参数的数量（应为 0）                                                 |
| argv   | const char *const * | 参数列表（应为 NULL）                                                |

### 返回值
返回一个 libvlc 实例，如果发生错误则返回 NULL。
## libvlc_release {#libvlc_release}

```c
LIBVLC_API void libvlc_release( libvlc_instance_t *p_instance );
```

### 描述
减少 libvlc 实例的引用计数，并在引用计数达到零时销毁该实例。

### 参数说明
| 参数名        | 类型                | 描述                         |
|---------------|---------------------|------------------------------|
| `p_instance`  | `libvlc_instance_t*`| 要销毁的 libvlc 实例指针     |

### 返回值
该函数没有返回值。
## libvlc_retain {#libvlc_retain}

```c
LIBVLC_API void libvlc_retain( libvlc_instance_t *p_instance );
```

### 描述
增加 libvlc 实例的引用计数。在 `libvlc_new()` 返回后，初始引用计数为 1。

### 参数说明

| 参数名       | 类型                | 描述                   |
|--------------|---------------------|------------------------|
| `p_instance` | `libvlc_instance_t*` | 要引用的 libvlc 实例。 |

### 返回值
该函数没有返回值。
## libvlc_add_intf {#libvlc_add_intf}

```c
LIBVLC_API
int libvlc_add_intf( libvlc_instance_t *p_instance, const char *name );
```

### 描述
尝试为 libvlc 实例启动一个用户界面。

### 函数参数说明

| 参数名        | 类型                  | 描述                                                                 |
|---------------|-----------------------|--------------------------------------------------------------------------|
| `p_instance`  | `libvlc_instance_t*`  | libvlc 实例指针。                                                       |
| `name`        | `const char*`         | 界面名称，如果为 `NULL`，则使用默认界面。                               |

### 函数返回值
- **0**：成功启动用户界面。
- **-1**：启动用户界面时发生错误。
## libvlc_wait {#libvlc_wait}

```c
void libvlc_wait( libvlc_instance_t *p_instance );
```

### 描述
等待直到一个接口导致实例退出。在使用此函数之前，您应该至少启动一个接口，使用 `libvlc_add_intf()`。

### 函数参数说明

| 参数名        | 类型                | 描述                                                                 |
|---------------|---------------------|----------------------------------------------------------------------|
| `p_instance`  | `libvlc_instance_t*`| 要等待的 VLC 实例。                                                   |

### 函数返回值
该函数没有返回值。

### 警告
此函数浪费一个线程，基本上什么都不做。建议使用 `libvlc_set_exit_handler()` 代替。
## libvlc_set_user_agent {#libvlc_set_user_agent}

```c
LIBVLC_API
void libvlc_set_user_agent( libvlc_instance_t *p_instance,
                            const char *name, const char *http );
```

### 描述
设置应用程序名称。LibVLC 在需要时将其作为用户代理字符串传递给协议。

### 参数说明

| 参数名       | 类型                | 描述                                                         |
|--------------|---------------------|--------------------------------------------------------------|
| p_instance   | libvlc_instance_t*  | LibVLC 实例                                                  |
| name         | const char*         | 人类可读的应用程序名称，例如 "FooBar player 1.2.3"           |
| http         | const char*         | HTTP 用户代理字符串，例如 "FooBar/1.2.3 Python/2.6.0"        |

### 返回值
该函数没有返回值。
## libvlc_set_app_id {#libvlc_set_app_id}

```c
LIBVLC_API
void libvlc_set_app_id( libvlc_instance_t *p_instance, const char *id,
                        const char *version, const char *icon );
```

### 描述
设置应用程序的元信息。参见 `libvlc_set_user_agent()` 函数。

### 函数参数说明

| 参数名       | 类型                | 描述                                                         |
|--------------|---------------------|--------------------------------------------------------------|
| p_instance   | libvlc_instance_t*  | LibVLC 实例                                                  |
| id           | const char*         | Java 风格的应用程序标识符，例如 "com.acme.foobar"            |
| version      | const char*         | 应用程序版本号，例如 "1.2.3"                                 |
| icon         | const char*         | 应用程序图标名称，例如 "foobar"                              |

### 函数返回值
该函数没有返回值。
## libvlc_get_version {#libvlc_get_version}

```c
LIBVLC_API const char * libvlc_get_version(void);
```

### 描述
获取 libvlc 的版本信息。例如："1.1.0-git The Luggage"。

### 参数说明
| 参数名 | 类型 | 描述 |
| ------ | ---- | ---- |
| 无     | void | 无参数 |

### 返回值
返回一个包含 libvlc 版本信息的字符串。
## libvlc_get_compiler {#libvlc_get_compiler}

```c
LIBVLC_API const char * libvlc_get_compiler(void);
```

### 描述
获取 libvlc 编译器的版本信息。

示例："gcc version 4.2.3 (Ubuntu 4.2.3-2ubuntu6)"

### 参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| 无 | 无 | 无 |

### 返回值
返回一个包含 libvlc 编译器版本的字符串。
## libvlc_get_changeset {#libvlc_get_changeset}

```c
LIBVLC_API const char * libvlc_get_changeset(void);
```

### 描述
获取 libvlc 的变更集。

示例："aa9bce0bc4"

### 参数说明
无参数。

### 返回值
返回一个包含 libvlc 变更集的字符串。
## libvlc_free {#libvlc_free}

```c
LIBVLC_API void libvlc_free( void *ptr );
```

### 描述
释放由 LibVLC 函数返回的堆分配内存。如果你知道你使用的底层 C 运行时与 LibVLC 实现相同，那么你可以直接调用 ANSI C 的 `free()` 函数。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| ptr | `void *` | 需要释放的指针 |

### 返回值
该函数没有返回值。
## libvlc_event_attach {#libvlc_event_attach}

```c
LIBVLC_API int libvlc_event_attach( libvlc_event_manager_t *p_event_manager,
                                    libvlc_event_type_t i_event_type,
                                    libvlc_callback_t f_callback,
                                    void *user_data );
```

### 描述
注册一个事件通知。

### 函数参数说明

| 参数名            | 类型                     | 描述                                                                 |
|-------------------|--------------------------|--------------------------------------------------------------------|
| p_event_manager   | libvlc_event_manager_t*  | 要附加的事件管理器。通常通过 `vlc_my_object_event_manager()` 获取，其中 `my_object` 是你想要监听的对象。 |
| i_event_type      | libvlc_event_type_t      | 想要监听的事件类型。                                                     |
| f_callback        | libvlc_callback_t        | 当 `i_event_type` 事件发生时要调用的函数。                                 |
| user_data         | void*                    | 用户提供的数据，随事件一起传递。                                           |

### 函数返回值
- **0**：成功。
- **ENOMEM**：错误，内存不足。
## libvlc_event_detach {#libvlc_event_detach}

```c
LIBVLC_API void libvlc_event_detach( libvlc_event_manager_t *p_event_manager,
                                     libvlc_event_type_t i_event_type,
                                     libvlc_callback_t f_callback,
                                     void *p_user_data );
```

### 描述
该函数用于取消事件通知的注册。通过指定事件管理器、事件类型、回调函数以及用户提供的数据，可以取消之前注册的事件通知。

### 函数参数说明

| 参数名            | 类型                      | 描述                                                                 |
|-------------------|---------------------------|--------------------------------------------------------------------------|
| p_event_manager   | libvlc_event_manager_t*   | 事件管理器对象，用于管理事件通知。                                       |
| i_event_type      | libvlc_event_type_t       | 要取消注册的事件类型。                                                   |
| f_callback        | libvlc_callback_t         | 当指定事件类型发生时要调用的回调函数。                                   |
| p_user_data       | void*                     | 用户提供的数据，这些数据将与事件一起传递给回调函数。                     |

### 函数返回值
该函数没有返回值。
## libvlc_event_type_name {#libvlc_event_type_name}

```c
LIBVLC_API const char * libvlc_event_type_name( libvlc_event_type_t event_type );
```

### 描述
获取事件类型的名称。

### 函数参数说明

| 参数名       | 类型                  | 描述                   |
|--------------|-----------------------|------------------------|
| event_type   | libvlc_event_type_t   | 所需的事件类型         |

### 函数返回值
返回事件类型的名称。如果传入的事件类型无效，则返回 `NULL`。
## libvlc_log_get_context {#libvlc_log_get_context}

```c
LIBVLC_API void libvlc_log_get_context(const libvlc_log_t *ctx,
                       const char **module, const char **file, unsigned *line);
```

### 描述
该函数用于获取日志消息的调试信息，包括发出消息的VLC模块名称以及消息在源代码中的位置。如果模块名称或文件名未知，则返回的模块名称和文件名将为NULL。同样，如果行号未知，则返回的行号将为零。

### 参数说明

| 参数名 | 类型 | 输入/输出 | 描述 |
| --- | --- | --- | --- |
| `ctx` | `const libvlc_log_t *` | 输入 | 消息上下文（作为传递给 `libvlc_log_cb` 回调的参数） |
| `module` | `const char **` | 输出 | 模块名称存储（或NULL）[OUT] |
| `file` | `const char **` | 输出 | 源代码文件名存储（或NULL）[OUT] |
| `line` | `unsigned *` | 输出 | 源代码文件行号存储（或NULL）[OUT] |

### 返回值
该函数没有返回值。返回的模块名称和源代码文件名（如果非NULL）仅在日志回调返回之前有效。
## libvlc_log_get_object {#libvlc_log_get_object}

```c
LIBVLC_API void libvlc_log_get_object(const libvlc_log_t *ctx,
                        const char **name, const char **header, uintptr_t *id);
```

### 描述
获取关于日志消息的VLC对象信息：发出消息的VLC对象的类型名称、对象头（如果有）以及一个临时唯一的对象标识符。这些信息主要用于**手动**故障排除。

返回的类型名称如果未知，可能是“generic”，但不能为NULL。如果未设置，返回的头将为NULL；在当前版本中，头用于区分VLM输入。如果消息未与任何VLC对象关联，返回的对象ID将为零。

### 参数说明

| 参数   | 类型               | 输入/输出 | 描述                                                                 |
|--------|--------------------|-----------|----------------------------------------------------------------------|
| ctx    | const libvlc_log_t*| 输入      | 消息上下文（作为传递给 `libvlc_log_cb` 回调的参数）                    |
| name   | const char**       | 输出      | 对象名称存储（或NULL）[OUT]                                           |
| header | const char**       | 输出      | 对象头存储（或NULL）[OUT]                                             |
| id     | uintptr_t*         | 输出      | 对象标识符存储（或NULL）[OUT]                                         |

### 返回值
该函数没有返回值。
## libvlc_log_unset {#libvlc_log_unset}

```c
LIBVLC_API void libvlc_log_unset( libvlc_instance_t * );
```

### 描述
取消设置 LibVLC 实例的日志回调。这通常是不需要的：当实例被销毁时，回调会隐式取消设置。此函数将等待任何挂起的回调调用完成（如果在回调内部调用，则会导致死锁）。

### 参数说明

| 参数名        | 类型                | 描述                   |
|---------------|---------------------|------------------------|
| p_instance    | libvlc_instance_t * | LibVLC 实例指针        |

### 返回值
该函数没有返回值。
## libvlc_log_set {#libvlc_log_set}

```c
LIBVLC_API void libvlc_log_set( libvlc_instance_t *p_instance,
                                libvlc_log_cb cb, void *data );
```

### 描述
设置LibVLC实例的日志回调函数。该函数是线程安全的：它会等待任何正在进行的回调调用完成。

注意：某些日志消息（尤其是调试消息）在LibVLC初始化时发出。这些消息无法通过此接口捕获。

警告：如果在回调函数中调用此函数，可能会发生死锁。

### 参数说明

| 参数名       | 类型                | 描述                                                         |
|--------------|---------------------|--------------------------------------------------------------|
| `p_instance` | `libvlc_instance_t*` | LibVLC实例指针                                               |
| `cb`         | `libvlc_log_cb`      | 回调函数指针                                                 |
| `data`       | `void*`              | 传递给回调函数的透明数据指针                                 |

### 返回值
该函数没有返回值。
## libvlc_log_set_file {#libvlc_log_set_file}

```c
LIBVLC_API void libvlc_log_set_file( libvlc_instance_t *p_instance, FILE *stream );
```

### 描述
设置日志记录到文件。该函数允许将 libvlc 实例的日志输出重定向到一个文件中。文件指针必须以写入模式打开，并且在调用 `libvlc_log_unset()` 之前必须保持有效。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_instance` | `libvlc_instance_t*` | libvlc 实例指针，表示要设置日志的 libvlc 实例。                      |
| `stream`     | `FILE*`              | 以写入模式打开的文件指针，用于接收日志输出。该指针在 `libvlc_log_unset()` 调用之前必须保持有效。 |

### 函数返回值
该函数没有返回值。
## libvlc_get_log_verbosity {#libvlc_get_log_verbosity}

```c
LIBVLC_DEPRECATED LIBVLC_API
unsigned libvlc_get_log_verbosity( const libvlc_instance_t *p_instance );
```

### 描述
该函数始终返回 -1。此函数仅用于向后兼容。

### 函数参数说明

| 参数名        | 类型                   | 描述         |
|---------------|------------------------|--------------|
| `p_instance`  | `const libvlc_instance_t *` | 忽略的参数 |

### 函数返回值
该函数始终返回 -1。
## libvlc_set_log_verbosity {#libvlc_set_log_verbosity}

```c
LIBVLC_DEPRECATED LIBVLC_API
void libvlc_set_log_verbosity( libvlc_instance_t *p_instance, unsigned level );
```

### 描述
此函数不执行任何操作。它仅用于向后兼容。

### 函数参数说明

| 参数名       | 类型                | 描述         |
|--------------|---------------------|--------------|
| `p_instance` | `libvlc_instance_t*` | 忽略的参数   |
| `level`      | `unsigned`           | 忽略的参数   |

### 函数返回值
此函数没有返回值。
## libvlc_log_close {#libvlc_log_close}

```c
void libvlc_log_close( libvlc_log_t *p_log );
```

### 描述
释放由 `libvlc_log_open()` 分配的内存。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| ------ | ---- | ---- |
| `p_log` | `libvlc_log_t *` | libvlc 日志实例或 `NULL` |

### 函数返回值
该函数没有返回值。
## libvlc_log_count {#libvlc_log_count}

```c
LIBVLC_DEPRECATED LIBVLC_API
unsigned libvlc_log_count( const libvlc_log_t *p_log );
```

### 描述
该函数始终返回零。它仅用于向后兼容。

### 参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| p_log | const libvlc_log_t* | 被忽略的参数 |

### 返回值
该函数始终返回零。
## libvlc_log_clear {#libvlc_log_clear}

```c
LIBVLC_DEPRECATED LIBVLC_API
void libvlc_log_clear( libvlc_log_t *p_log );
```

### 描述
这个函数什么都不做。它仅用于向后兼容。

### 参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| p_log | libvlc_log_t* | 被忽略的参数 |

### 返回值
该函数没有返回值。
## libvlc_log_iterator_free {#libvlc_log_iterator_free}

```c
void libvlc_log_iterator_free( libvlc_log_iterator_t *p_iter );
```

### 描述
释放由 `libvlc_log_get_iterator()` 分配的内存。

### 函数参数说明

| 参数名   | 类型                    | 描述                                                                 |
|----------|-------------------------|----------------------------------------------------------------------|
| `p_iter` | `libvlc_log_iterator_t*` | libvlc 日志迭代器，或 `NULL`。如果传入 `NULL`，函数将不执行任何操作。 |

### 函数返回值
该函数没有返回值。
## libvlc_log_iterator_has_next {#libvlc_log_iterator_has_next}

```c
LIBVLC_DEPRECATED LIBVLC_API
int libvlc_log_iterator_has_next( const libvlc_log_iterator_t *p_iter );
```

### 函数描述
该函数始终返回零。它仅用于向后兼容。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| p_iter | const libvlc_log_iterator_t* | 被忽略的参数 |

### 函数返回值
该函数始终返回零。
## libvlc_module_description_list_release {#libvlc_module_description_list_release}

```c
LIBVLC_API
void libvlc_module_description_list_release( libvlc_module_description_t *p_list );
```

### 函数描述
释放模块描述列表。

### 函数参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `p_list` | `libvlc_module_description_t*` | 要释放的模块描述列表 |

### 函数返回值
该函数没有返回值。
## libvlc_clock {#libvlc_clock}

```c
LIBVLC_API
int64_t libvlc_clock(void);
```

### 描述
该函数返回由 LibVLC 定义的当前时间，单位为微秒。时间单调递增（不受时区变化和 RTC 调整的影响）。时间的起始点是任意的，但在整个系统中是一致的（例如系统启动后的时间，系统启动后的时间）。

### 参数说明
| 参数名 | 类型 | 描述 |
| ------ | ---- | ---- |
| void   |      | 无参数 |

### 返回值
该函数返回一个 `int64_t` 类型的值，表示当前时间，单位为微秒。返回值的具体含义如下：

- **正值**：表示当前时间，单位为微秒。
- **负值**：表示错误或未定义的情况（尽管在正常情况下不应返回负值）。
## libvlc_delay {#libvlc_delay}

```c
static inline int64_t libvlc_delay(int64_t pts)
{
    return pts - libvlc_clock();
}
```

### 描述
该函数返回直到某个时间戳的延迟（以微秒为单位）。如果时间戳在过去，则返回负值；如果时间戳在未来，则返回正值。

### 参数说明
| 参数名 | 类型   | 描述               |
|--------|--------|--------------------|
| pts    | int64_t| 目标时间戳（微秒） |

### 返回值
- **负值**：如果时间戳在过去。
- **正值**：如果时间戳在未来。
