## dialog_VFatal {#dialog_VFatal}

```c
VLC_API void dialog_VFatal(vlc_object_t *p_obj, bool b_trusted, const char *psz_title, const char *psz_fmt, va_list args);
```

### 函数描述
`dialog_VFatal` 函数用于显示一个致命错误对话框。该对话框通常用于显示无法恢复的错误，例如系统错误或严重的应用程序错误。对话框的内容和标题可以通过参数进行自定义。

### 函数参数说明

| 参数名       | 类型          | 描述                                                                 |
|--------------|---------------|--------------------------------------------------------------------------|
| `p_obj`      | `vlc_object_t *` | VLC 对象指针，通常是当前的 VLC 对象实例。                               |
| `b_trusted`  | `bool`        | 指示对话框内容是否可信的布尔值。如果为 `true`，则内容被认为是可信的。 |
| `psz_title`  | `const char *` | 对话框的标题字符串。                                                   |
| `psz_fmt`    | `const char *` | 对话框内容的格式字符串，类似于 `printf` 的格式字符串。                 |
| `args`       | `va_list`     | 可变参数列表，用于填充 `psz_fmt` 中的格式化内容。                      |

### 函数返回值
该函数没有返回值（`void`）。
## dialog_Fatal {#dialog_Fatal}

```c
void dialog_Fatal(vlc_object_t *obj, const char *title, const char *fmt, ...);
```

### 描述
该函数用于显示一个致命错误对话框。它接受一个格式化的字符串 `fmt` 和可变参数列表，并将这些参数传递给 `dialog_VFatal` 函数以显示错误信息。

### 函数参数说明

| 参数名 | 类型           | 描述                                                         |
|--------|----------------|--------------------------------------------------------------|
| obj    | vlc_object_t * | VLC 对象指针，通常用于标识对话框的上下文。                   |
| title  | const char *   | 对话框的标题，用于显示在对话框的顶部。                       |
| fmt    | const char *   | 格式化字符串，用于指定错误信息的格式。                       |
| ...    | ...            | 可变参数列表，根据 `fmt` 中的格式化字符串传递相应的参数。    |

### 函数返回值
该函数没有返回值（`void`）。
## dialog_FatalWait {#dialog_FatalWait}

```c
void dialog_FatalWait(vlc_object_t *obj, const char *title, const char *fmt, ...);
```

### 函数描述
`dialog_FatalWait` 函数用于显示一个致命错误对话框，并在用户关闭对话框之前等待。该函数会显示一个带有标题和格式化消息的对话框，直到用户关闭对话框后才会继续执行后续代码。

### 函数参数说明

| 参数名 | 类型           | 描述                                                                 |
|--------|----------------|--------------------------------------------------------------------------|
| obj    | vlc_object_t * | VLC 对象指针，通常是当前的 VLC 对象实例。                               |
| title  | const char *   | 对话框的标题，显示在对话框的顶部。                                     |
| fmt    | const char *   | 格式化字符串，用于生成对话框中显示的消息内容。                         |
| ...    | ...            | 可变参数列表，根据 `fmt` 格式化字符串中的占位符，提供相应的参数值。     |

### 函数返回值
该函数没有返回值（返回类型为 `void`）。
## dialog_ProgressDestroy {#dialog_ProgressDestroy}

```c
VLC_API void dialog_ProgressDestroy(dialog_progress_bar_t *);
```

### 描述
该函数用于销毁一个进度条对话框。调用此函数后，进度条对话框将被销毁，相关的资源将被释放。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `dialog_progress_bar_t *` | `dialog_progress_bar_t *` | 指向要销毁的进度条对话框的指针。 |

### 函数返回值
该函数没有返回值。
## dialog_ProgressSet {#dialog_ProgressSet}

```c
VLC_API void dialog_ProgressSet(dialog_progress_bar_t *p_bar, const char *psz_text, float f_position);
```

### 描述

该函数用于更新进度条对话框的文本和进度位置。

### 函数参数说明

| 参数名        | 类型                    | 描述                                                                 |
|---------------|-------------------------|----------------------------------------------------------------------|
| `p_bar`       | `dialog_progress_bar_t*` | 指向进度条对话框对象的指针。                                         |
| `psz_text`    | `const char*`           | 要设置的文本字符串，用于显示在进度条对话框中。                       |
| `f_position`  | `float`                 | 进度条的位置，取值范围为 `0.0` 到 `1.0`，表示进度的百分比。          |

### 函数返回值

该函数没有返回值。
## dialog_ProgressCancelled {#dialog_ProgressCancelled}

```c
VLC_API bool dialog_ProgressCancelled(dialog_progress_bar_t *p_progress);
```

### 函数描述
该函数用于检查用户是否取消了进度条对话框。如果用户取消了进度条，函数将返回 `true`，否则返回 `false`。

### 函数参数说明

| 参数名        | 类型                    | 描述                                                                 |
|---------------|-------------------------|----------------------------------------------------------------------|
| `p_progress`  | `dialog_progress_bar_t*`| 指向 `dialog_progress_bar_t` 结构的指针，表示进度条对话框的实例。 |

### 函数返回值
- **`true`**: 如果用户取消了进度条对话框。
- **`false`**: 如果用户没有取消进度条对话框。
## dialog_Register {#dialog_Register}

```c
VLC_API int dialog_Register(vlc_object_t *);
```

### 描述
该函数用于注册对话框回调。它将当前对象注册为对话框回调的接收者。

### 函数参数说明

| 参数名        | 类型           | 描述                                                                 |
|---------------|----------------|--------------------------------------------------------------------------|
| `vlc_object_t *` | `vlc_object_t *` | 指向要注册为对话框回调接收者的 VLC 对象的指针。 |

### 函数返回值

- **成功时**：返回 `0`，表示对话框回调已成功注册。
- **失败时**：返回 `-1`，表示注册失败。
## dialog_Unregister {#dialog_Unregister}

```c
VLC_API int dialog_Unregister(vlc_object_t *p_obj);
```

### 描述
该函数用于注销对话框回调。它从指定的 VLC 对象中移除之前注册的对话框回调。

### 函数参数说明

| 参数名    | 类型           | 描述                                                         |
|-----------|----------------|--------------------------------------------------------------|
| `p_obj`   | `vlc_object_t*` | 指向要注销对话框回调的 VLC 对象的指针。                       |

### 函数返回值

- **返回值类型**: `int`
- **返回值说明**:
  - `0`: 成功注销对话框回调。
  - `-1`: 注销失败，可能是因为指定的对象没有注册对话框回调。
