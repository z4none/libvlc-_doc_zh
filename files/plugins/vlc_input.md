## vlc_seekpoint_Delete {#vlc_seekpoint_Delete}

```c
static inline void vlc_seekpoint_Delete(seekpoint_t *point)
```

### 函数描述
该函数用于删除一个 `seekpoint_t` 结构体实例，并释放其占用的内存。如果传入的指针为 `NULL`，则函数直接返回，不执行任何操作。

### 函数参数说明

| 参数名 | 类型        | 描述                                                                 |
|--------|-------------|--------------------------------------------------------------------|
| point  | seekpoint_t*| 指向要删除的 `seekpoint_t` 结构体的指针。如果为 `NULL`，函数将直接返回。|

### 函数返回值
该函数没有返回值。
## vlc_input_title_Delete {#vlc_input_title_Delete}

```c
static inline void vlc_input_title_Delete( input_title_t *t )
```

### 描述
该函数用于删除一个 `input_title_t` 结构体及其相关资源。如果传入的指针为 `NULL`，则函数直接返回，不执行任何操作。

### 函数参数说明

| 参数名 | 类型           | 描述                                                                 |
|--------|----------------|--------------------------------------------------------------------------|
| `t`    | `input_title_t*` | 指向要删除的 `input_title_t` 结构体的指针。如果为 `NULL`，则函数不执行任何操作。 |

### 函数返回值
该函数没有返回值。
## vlc_seekpoint_Duplicate {#vlc_seekpoint_Duplicate}

```c
seekpoint_t* vlc_seekpoint_Duplicate( const seekpoint_t* p_src );
```

### 描述
该函数用于复制一个 `seekpoint_t` 结构体。它创建一个新的 `seekpoint_t` 结构体，并将源 `seekpoint_t` 结构体的所有内容复制到新的结构体中。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_src` | `const seekpoint_t*` | 指向要复制的 `seekpoint_t` 结构体的指针。 |

### 函数返回值
- 如果成功，返回指向新创建的 `seekpoint_t` 结构体的指针。
- 如果内存分配失败，返回 `NULL`。
## function_name {#function_name}

```c
void function_name(int i_data, void *p_data, struct A *a);
```

### 函数描述
该函数用于根据输入的 `i_data` 值来分配内存，并将 `p_data` 中的数据复制到分配的内存中。如果 `i_data` 大于 0，则分配 `i_data` 大小的内存，并将 `p_data` 中的数据复制到 `a->p_data` 中。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `i_data` | `int` | 要分配的内存大小。如果 `i_data` 大于 0，则分配 `i_data` 大小的内存。 |
| `p_data` | `void *` | 指向要复制的数据的指针。如果 `p_data` 不为 `NULL`，则将其内容复制到新分配的内存中。 |
| `a` | `struct A *` | 指向结构体 `A` 的指针，该结构体包含一个指向分配内存的指针 `p_data`。 |

### 函数返回值
该函数没有返回值。
## vlc_input_attachment_New {#vlc_input_attachment_New}

```c
vlc_input_attachment_t *vlc_input_attachment_New(
    const char *psz_name,
    const char *psz_mime,
    const char *psz_description,
    const void *p_data,
    size_t i_data
);
```

### 描述
该函数用于创建一个新的输入附件（`vlc_input_attachment_t`）对象。输入附件通常用于存储与媒体文件相关的额外数据，例如字幕文件、封面图片等。

### 函数参数说明

| 参数名          | 类型            | 描述                                                                 |
|-----------------|-----------------|----------------------------------------------------------------------|
| `psz_name`      | `const char *`  | 附件的名称。                                                         |
| `psz_mime`      | `const char *`  | 附件的 MIME 类型。                                                   |
| `psz_description` | `const char *`  | 附件的描述信息。                                                     |
| `p_data`        | `const void *`  | 附件数据的指针。                                                     |
| `i_data`        | `size_t`        | 附件数据的大小（以字节为单位）。                                     |

### 函数返回值
- 成功时，返回一个指向新创建的 `vlc_input_attachment_t` 对象的指针。
- 如果内存分配失败或其他错误发生，返回 `NULL`。
## vlc_input_attachment_Delete {#vlc_input_attachment_Delete}

```c
static inline void vlc_input_attachment_Delete(input_attachment_t *a)
```

### 函数描述
该函数用于删除一个 `input_attachment_t` 结构体，并释放其所有相关内存。如果传入的指针为 `NULL`，则函数直接返回，不执行任何操作。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `a` | `input_attachment_t *` | 指向要删除的 `input_attachment_t` 结构体的指针。如果为 `NULL`，则函数不执行任何操作。 |

### 函数返回值
该函数没有返回值。
## input_Start {#input_Start}

```c
VLC_API int input_Start(input_thread_t *p_input);
```

### 描述
该函数用于启动输入线程。它初始化输入线程并开始处理输入流。

### 函数参数说明

| 参数名    | 类型             | 描述                                                         |
|-----------|------------------|--------------------------------------------------------------|
| `p_input` | `input_thread_t*` | 指向输入线程对象的指针，表示要启动的输入线程。               |

### 函数返回值

- **返回值为 0**：表示输入线程成功启动。
- **返回值为 -1**：表示输入线程启动失败。
## input_Stop {#input_Stop}

```c
VLC_API void input_Stop( input_thread_t *p_input, bool b_abort );
```

### 描述
该函数用于停止输入线程。如果 `b_abort` 为真，输入线程将被强制终止；否则，输入线程将正常停止。

### 函数参数说明

| 参数名    | 类型            | 描述                                                                 |
|-----------|-----------------|----------------------------------------------------------------------|
| `p_input` | `input_thread_t*` | 指向要停止的输入线程的指针。                                         |
| `b_abort` | `bool`           | 如果为真，输入线程将被强制终止；如果为假，输入线程将正常停止。       |

### 函数返回值
该函数没有返回值。
## input_Read {#input_Read}

```c
VLC_API int input_Read( vlc_object_t *p_this, input_item_t *p_item );
```

### 描述
该函数用于读取输入项（`input_item_t`）的内容。它从指定的输入项中读取数据，并返回读取操作的结果。

### 函数参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|----------------------------------------------------------------------|
| `p_this`  | `vlc_object_t*` | VLC 对象指针，通常是当前对象的指针。                                  |
| `p_item`  | `input_item_t*` | 指向要读取的输入项的指针。该输入项包含了要读取的媒体文件或其他资源。 |

### 函数返回值

- **成功**：返回 `0`，表示读取操作成功完成。
- **失败**：返回一个负数，表示读取操作失败。可能的错误码包括但不限于：
  - `-1`：表示输入项无效或无法读取。
  - `-2`：表示输入项的资源不可用或无法访问。
  - `-3`：表示其他未指定的错误。
## input_vaControl {#input_vaControl}

```c
VLC_API int input_vaControl( input_thread_t *p_input, int i_query, va_list args );
```

### 描述
`input_vaControl` 函数用于控制输入线程的各种操作。它通过传递不同的查询类型和参数来实现对输入线程的控制。

### 函数参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|----------------------------------------------------------------------|
| `p_input` | `input_thread_t *` | 指向输入线程的指针，表示要控制的输入线程。                               |
| `i_query` | `int`            | 查询类型，表示要执行的具体操作。不同的查询类型对应不同的操作。           |
| `args`    | `va_list`        | 可变参数列表，包含查询类型所需的参数。具体参数取决于查询类型。           |

### 函数返回值

- `0`：操作成功。
- `-1`：操作失败。

该函数根据不同的查询类型执行相应的操作，并返回操作的结果。如果操作成功，返回 `0`；如果操作失败，返回 `-1`。
## input_Control {#input_Control}

```c
VLC_API int input_Control( input_thread_t *p_input, int i_query, ... );
```

### 描述
`input_Control` 函数用于向输入线程发送控制命令。该函数允许用户通过传递不同的查询类型和参数来控制输入线程的行为。

### 函数参数说明

| 参数名       | 类型             | 描述                                                                 |
|--------------|------------------|--------------------------------------------------------------------------|
| `p_input`    | `input_thread_t*` | 指向输入线程的指针，表示要控制的输入线程。                                |
| `i_query`    | `int`            | 查询类型，表示要执行的控制命令。具体的查询类型由 VLC 内部定义。          |
| `...`        | `va_list`        | 可变参数列表，根据不同的查询类型传递相应的参数。                         |

### 函数返回值
- `0`：表示操作成功。
- `-1`：表示操作失败。具体的失败原因可能因查询类型和参数的不同而有所不同。
## input_Close {#input_Close}

```c
VLC_API void input_Close(input_thread_t *p_input);
```

### 描述
该函数用于关闭一个输入线程。它释放与输入线程相关的所有资源，并终止输入线程的执行。

### 函数参数说明

| 参数名    | 类型             | 描述                                                         |
|-----------|------------------|--------------------------------------------------------------|
| `p_input` | `input_thread_t*` | 指向要关闭的输入线程的指针。该指针在函数执行后将不再有效。 |

### 函数返回值
该函数没有返回值。
## input_Join {#input_Join}

```c
void input_Join(input_thread_t *thread);
```

### 描述
该函数用于等待输入线程的结束。它会阻塞调用线程，直到指定的输入线程完成其任务并退出。

### 函数参数说明

| 参数名   | 类型            | 描述                                       |
|----------|-----------------|--------------------------------------------|
| `thread` | `input_thread_t*` | 指向要等待的输入线程的指针。该线程必须已经启动。 |

### 函数返回值
该函数没有返回值。
## input_Release {#input_Release}

```c
void input_Release(input_thread_t *p_input);
```

### 函数描述
该函数用于释放输入线程资源。调用此函数后，输入线程将被释放，相关的资源将被清理。

### 函数参数说明

| 参数名    | 类型               | 描述                                                                 |
|-----------|--------------------|--------------------------------------------------------------------------|
| `p_input` | `input_thread_t *` | 指向要释放的输入线程的指针。该指针指向的输入线程将被释放并清理资源。 |

### 函数返回值
该函数没有返回值。
## input_GetState {#input_GetState}

```c
static inline input_state_e input_GetState( input_thread_t * p_input )
{
    input_state_e state = INIT_S;
    input_Control( p_input, INPUT_GET_STATE, &state );
    return state;
}
```

### 函数描述
该函数用于获取输入的当前状态。为了方便使用而提供。

### 函数参数说明

| 参数名    | 类型              | 描述                   |
|-----------|-------------------|------------------------|
| `p_input` | `input_thread_t *` | 指向输入线程的指针。    |

### 函数返回值
该函数返回当前输入的状态，返回值类型为 `input_state_e`。返回的具体状态值取决于输入的当前状态。
## free {#free}

```c
void free(void *pp_vout);
```

### 描述
`free` 函数用于释放先前通过 `malloc`、`calloc` 或 `realloc` 分配的内存空间。调用 `free` 后，指向该内存的指针将不再有效，不应再被引用。

### 函数参数说明

| 参数名   | 类型      | 描述                                                         |
|----------|-----------|--------------------------------------------------------------|
| `pp_vout`| `void*`   | 指向要释放的内存块的指针。如果传入 `NULL`，`free` 函数将不执行任何操作。 |

### 函数返回值
`free` 函数没有返回值。
## input_AddSubtitleOSD {#input_AddSubtitleOSD}

```c
static inline int input_AddSubtitleOSD( input_thread_t *p_input, const char *psz_url, bool b_check_extension, bool b_osd )
```

### 描述
该函数用于向输入源添加一个新的字幕源。为了方便使用而提供。

### 参数说明
| 参数名            | 类型            | 描述                                                                 |
|-------------------|-----------------|----------------------------------------------------------------------|
| `p_input`         | `input_thread_t*` | 输入线程对象的指针，表示要添加字幕的输入源。                         |
| `psz_url`         | `const char*`   | 字幕文件的URL或路径。                                                |
| `b_check_extension` | `bool`          | 是否检查文件扩展名以确定是否为字幕文件。                             |
| `b_osd`           | `bool`          | 是否在屏幕上显示字幕已添加的消息。                                   |

### 返回值
- 如果成功添加字幕，返回 `VLC_SUCCESS`。
- 如果添加字幕失败，返回相应的错误代码。
- 如果 `b_osd` 为 `false`，则直接返回 `i_result`，不会显示OSD消息。
## input_GetEsObjects {#input_GetEsObjects}

```c
static inline int input_GetEsObjects( input_thread_t *p_input, int i_id,
                                      vlc_object_t **pp_decoder,
                                      vout_thread_t **pp_vout, audio_output_t **pp_aout )
{
    return input_Control( p_input, INPUT_GET_ES_OBJECTS, i_id,
                          pp_decoder, pp_vout, pp_aout );
}
```

### 函数描述
该函数返回与一个 ES（Elementary Stream）相关联的对象。调用者必须释放所有非空的 `vlc_object_t` 对象，可以使用 `vlc_object_release` 函数来释放。如果不需要获取某个对象，可以将对应的指针设置为 `NULL`。

### 函数参数说明

| 参数名       | 类型                  | 描述                                                                 |
|--------------|-----------------------|--------------------------------------------------------------------------|
| `p_input`    | `input_thread_t*`     | 输入线程对象的指针。                                                     |
| `i_id`       | `int`                 | ES 的标识符。                                                           |
| `pp_decoder` | `vlc_object_t**`      | 指向解码器对象指针的指针。如果不需要获取解码器对象，可以将其设置为 `NULL`。 |
| `pp_vout`    | `vout_thread_t**`     | 指向视频输出线程对象指针的指针。如果不需要获取视频输出对象，可以将其设置为 `NULL`。 |
| `pp_aout`    | `audio_output_t**`    | 指向音频输出对象指针的指针。如果不需要获取音频输出对象，可以将其设置为 `NULL`。 |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - 如果成功获取相关对象，返回值为 `0`。
  - 如果发生错误，返回值为负数。
## input_GetPcrSystem {#input_GetPcrSystem}

```c
static inline int input_GetPcrSystem( input_thread_t *p_input, mtime_t *pi_system, mtime_t *pi_delay )
{
    return input_Control( p_input, INPUT_GET_PCR_SYSTEM, pi_system, pi_delay );
}
```

### 函数描述
该函数用于获取输入流的系统时间源（PCR）。它通过调用 `input_Control` 函数来实现，传递 `INPUT_GET_PCR_SYSTEM` 命令以获取系统时间和延迟时间。

### 函数参数说明

| 参数名      | 类型          | 描述                                                                 |
|-------------|---------------|--------------------------------------------------------------------------|
| `p_input`   | `input_thread_t *` | 指向输入线程对象的指针，表示要获取PCR的输入流。 |
| `pi_system` | `mtime_t *`       | 指向 `mtime_t` 类型的指针，用于存储系统时间。 |
| `pi_delay`  | `mtime_t *`       | 指向 `mtime_t` 类型的指针，用于存储延迟时间。 |

### 函数返回值
- **返回值为 0**：表示成功获取系统时间和延迟时间。
- **返回值为负数**：表示获取系统时间和延迟时间失败。
## input_ModifyPcrSystem {#input_ModifyPcrSystem}

```c
static inline int input_ModifyPcrSystem( input_thread_t *p_input, bool b_absolute, mtime_t i_system )
```

### 描述
该函数用于修改输入线程的PCR（Program Clock Reference）系统时间。通过指定是否使用绝对时间（`b_absolute`）以及新的系统时间（`i_system`），可以调整输入线程的PCR时间。

### 参数说明

| 参数名       | 类型          | 描述                                                                 |
|--------------|---------------|--------------------------------------------------------------------------|
| `p_input`    | `input_thread_t *` | 指向输入线程的指针，表示要修改的输入线程。                          |
| `b_absolute` | `bool`            | 布尔值，表示是否使用绝对时间。如果为`true`，则使用绝对时间；如果为`false`，则使用相对时间。 |
| `i_system`   | `mtime_t`         | 新的系统时间值，单位为微秒（µs）。                                      |

### 返回值
- **成功**：返回 `0`，表示PCR系统时间修改成功。
- **失败**：返回非零值，表示修改失败。可能的原因包括输入线程无效或参数错误。
## input_DecoderDelete {#input_DecoderDelete}

```c
VLC_API void input_DecoderDelete( decoder_t * );
```

### 描述
该函数用于删除一个解码器实例。它释放与解码器相关的所有资源，并将其从系统中移除。

### 函数参数说明

| 参数名    | 类型       | 描述                                                         |
|-----------|------------|--------------------------------------------------------------|
| `decoder` | `decoder_t*` | 指向要删除的解码器实例的指针。该指针在函数调用后将不再有效。 |

### 函数返回值
该函数没有返回值。
## input_DecoderDecode {#input_DecoderDecode}

```c
VLC_API void input_DecoderDecode( decoder_t *p_dec, block_t *p_block, bool b_do_pace );
```

### 描述
该函数用于将一个数据块（`block_t`）传递给解码器（`decoder_t`）进行解码。如果 `b_do_pace` 为真，函数会尝试控制解码速度以匹配输入速度。

### 函数参数说明

| 参数名     | 类型      | 描述                                                                 |
|------------|-----------|----------------------------------------------------------------------|
| `p_dec`    | `decoder_t*` | 指向解码器对象的指针，表示要使用的解码器。                             |
| `p_block`  | `block_t*`   | 指向数据块对象的指针，表示要解码的数据块。                             |
| `b_do_pace`| `bool`      | 布尔值，表示是否控制解码速度以匹配输入速度。如果为真，则进行速度控制。 |

### 函数返回值
该函数没有返回值（`void`）。
## input_resource_Release {#input_resource_Release}

```c
VLC_API void input_resource_Release( input_resource_t * );
```

### 描述
该函数用于释放输入资源。

### 参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `input_resource_t *` | `input_resource_t *` | 指向输入资源结构的指针 |

### 返回值
该函数没有返回值。
## input_resource_TerminateVout {#input_resource_TerminateVout}

```c
VLC_API void input_resource_TerminateVout( input_resource_t * );
```

### 函数描述
强制销毁视频输出（例如，当播放列表停止时）。

### 函数参数说明

| 参数名            | 类型               | 描述                 |
|-------------------|--------------------|----------------------|
| `input_resource_t *` | `input_resource_t *` | 指向输入资源的指针。 |

### 函数返回值
该函数没有返回值。
## input_resource_Terminate {#input_resource_Terminate}

```c
VLC_API void input_resource_Terminate( input_resource_t * );
```

### 函数描述
该函数释放所有资源（对象）。

### 函数参数说明

| 参数名            | 类型              | 描述                 |
|-------------------|-------------------|----------------------|
| `input_resource_t *` | `input_resource_t *` | 指向 `input_resource_t` 结构的指针，表示要释放的资源对象。 |

### 函数返回值
该函数没有返回值。
## input_resource_PutAout {#input_resource_PutAout}

```c
VLC_API void input_resource_PutAout( input_resource_t *p_resource, audio_output_t *p_aout );
```

### 函数描述
该函数用于保留或销毁音频输出。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| p_resource   | input_resource_t *  | 输入资源对象的指针，表示要操作的资源。                               |
| p_aout       | audio_output_t *    | 音频输出对象的指针，表示要保留或销毁的音频输出。                     |

### 函数返回值
该函数没有返回值。
## input_resource_ResetAout {#input_resource_ResetAout}

```c
VLC_API void input_resource_ResetAout( input_resource_t * );
```

### 函数描述
该函数用于防止现有的音频输出（如果有）被回收。

### 函数参数说明

| 参数名            | 类型               | 描述                                                                 |
|-------------------|--------------------|--------------------------------------------------------------------|
| `input_resource_t *` | `input_resource_t *` | 指向 `input_resource_t` 结构的指针，表示输入资源。 |

### 函数返回值
该函数没有返回值。
## seekpoint_t {#seekpoint_t}

```c
struct seekpoint_t
{
    int64_t i_byte_offset;
    int64_t i_time_offset;
    char    *psz_name;
};
```

### 描述
`seekpoint_t` 结构体用于表示一个查找点（seek point），这是章节（chapters）的泛化概念。查找点通常用于在媒体文件中快速定位到特定的位置。

### 成员说明

| 成员变量       | 类型    | 描述                                                                 |
|----------------|---------|--------------------------------------------------------------------------|
| `i_byte_offset` | `int64_t` | 表示查找点在文件中的字节偏移量。用于快速定位到文件中的特定字节位置。 |
| `i_time_offset` | `int64_t` | 表示查找点在媒体文件中的时间偏移量（以毫秒为单位）。用于快速定位到特定的时间点。 |
| `psz_name`      | `char*`   | 指向查找点的名称字符串的指针。名称可以用于标识或描述该查找点。       |

### 返回值
该结构体本身不返回任何值，它仅用于存储查找点的相关信息。
## input_attachment_t {#input_attachment_t}

```c
struct input_attachment_t
{
    char *psz_name;
    char *psz_mime;
    char *psz_description;

    int  i_data;
    void *p_data;
};
```

### 描述
`input_attachment_t` 结构体用于表示输入附件的相关信息。它包含了附件的名称、MIME 类型、描述、数据大小以及数据指针。

### 成员变量说明

| 成员变量          | 类型        | 描述                                                                 |
|-------------------|-------------|--------------------------------------------------------------------------|
| `psz_name`        | `char *`    | 附件的名称，通常是一个字符串指针。                                     |
| `psz_mime`        | `char *`    | 附件的 MIME 类型，描述附件的格式，通常是一个字符串指针。               |
| `psz_description` | `char *`    | 附件的描述信息，通常是一个字符串指针，用于提供附件的额外信息。         |
| `i_data`          | `int`       | 附件数据的大小，以字节为单位。                                         |
| `p_data`          | `void *`    | 指向附件数据的指针，通常是一个指向附件数据的内存地址。                 |

### 返回值
该结构体本身不返回值，它用于存储和传递附件的相关信息。
## input_thread_t {#input_thread_t}

```c
struct input_thread_t
{
    VLC_COMMON_MEMBERS

    bool b_error;
    bool b_eof;
    bool b_preparsing;
    bool b_dead;

    input_thread_private_t *p;
};
```

### 描述
`input_thread_t` 结构体表示一个输入线程。该结构体大部分是私有的，只有公共字段是只读的。必须使用辅助函数来修改它们。

### 字段说明

| 字段名         | 类型    | 描述                                                                 |
|----------------|---------|--------------------------------------------------------------------------|
| `b_error`      | `bool`  | 表示输入线程是否发生错误。                                             |
| `b_eof`        | `bool`  | 表示输入线程是否到达文件末尾。                                         |
| `b_preparsing` | `bool`  | 表示输入线程是否正在进行预解析。                                       |
| `b_dead`       | `bool`  | 表示输入线程是否已终止。                                               |
| `p`            | `input_thread_private_t*` | 指向私有数据的指针，外部无法访问。 |

### 备注
所有其他数据都是 `input_thread_t` 的私有数据。你不能在 `src/input` 之外访问它。
