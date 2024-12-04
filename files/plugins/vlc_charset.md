## vlc_iconv_close {#vlc_iconv_close}

```c
VLC_API int vlc_iconv_close( vlc_iconv_t );
```

### 描述

该函数用于关闭之前通过 `vlc_iconv_open` 打开的字符集转换描述符。关闭描述符后，它将不再可用。

### 函数参数说明

| 参数名       | 类型        | 描述                                                         |
|--------------|-------------|--------------------------------------------------------------|
| `vlc_iconv_t`| `vlc_iconv_t`| 要关闭的字符集转换描述符。该描述符必须是通过 `vlc_iconv_open` 成功打开的。|

### 函数返回值

- **成功**：返回 `0`，表示描述符已成功关闭。
- **失败**：返回 `-1`，表示关闭描述符时发生错误。可能的错误原因包括描述符无效或系统资源不足。
## utf8_vfprintf {#utf8_vfprintf}

```c
VLC_API int utf8_vfprintf( FILE *stream, const char *fmt, va_list ap );
```

### 描述
该函数用于将格式化的 UTF-8 字符串输出到指定的文件流中。它类似于标准的 `vfprintf` 函数，但专门处理 UTF-8 编码的字符串。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `stream` | `FILE*` | 指向目标文件流的指针，格式化的字符串将输出到该文件流中。 |
| `fmt` | `const char*` | 格式化字符串，指定输出的格式。 |
| `ap` | `va_list` | 可变参数列表，包含要输出的实际数据。 |

### 函数返回值
- 如果函数成功执行，返回输出的字符数（不包括终止的空字符）。
- 如果发生错误，返回一个负值。
## EnsureUTF8 {#EnsureUTF8}

```c
VLC_API char * EnsureUTF8( char * str );
```

### 描述

该函数确保给定的字符串是有效的 UTF-8 编码。如果字符串不是有效的 UTF-8 编码，函数会尝试将其转换为 UTF-8 编码。如果转换失败，函数将返回一个空字符串。

### 函数参数说明

| 参数名 | 类型   | 描述                                                         |
| ------ | ------ | ------------------------------------------------------------ |
| `str`  | `char *` | 输入字符串，需要确保其为有效的 UTF-8 编码。如果字符串不是 UTF-8 编码，函数会尝试将其转换为 UTF-8 编码。 |

### 函数返回值

- **成功**：返回一个指向转换后的 UTF-8 字符串的指针。
- **失败**：如果转换失败，返回一个指向空字符串的指针。
## WideCharToMultiByte {#WideCharToMultiByte}

```c
int WideCharToMultiByte(
    UINT CodePage,
    DWORD dwFlags,
    LPCWSTR lpWideCharStr,
    int cchWideChar,
    LPSTR lpMultiByteStr,
    int cbMultiByte,
    LPCSTR lpDefaultChar,
    LPBOOL lpUsedDefaultChar
);
```

### 函数描述
`WideCharToMultiByte` 函数将宽字符字符串转换为多字节字符串。该函数使用指定的代码页将宽字符字符串转换为多字节字符串。如果目标代码页不支持某些字符，可以使用默认字符替换这些字符。

### 函数参数说明

| 参数名            | 类型        | 描述                                                                 |
|-------------------|-------------|----------------------------------------------------------------------|
| `CodePage`        | `UINT`      | 指定用于转换的代码页。常见的值包括 `CP_UTF8` 表示 UTF-8 编码。       |
| `dwFlags`         | `DWORD`     | 控制转换的标志。通常设置为 `0`。                                      |
| `lpWideCharStr`   | `LPCWSTR`   | 指向要转换的宽字符字符串的指针。                                     |
| `cchWideChar`     | `int`       | 指定宽字符字符串的长度。如果为 `-1`，则字符串被视为以 null 结尾。    |
| `lpMultiByteStr`  | `LPSTR`     | 指向接收转换后的多字节字符串的缓冲区的指针。                         |
| `cbMultiByte`     | `int`       | 指定多字节字符串缓冲区的大小（以字节为单位）。                       |
| `lpDefaultChar`   | `LPCSTR`    | 指向默认字符的指针。如果目标代码页不支持某些字符，则使用此字符替换。 |
| `lpUsedDefaultChar` | `LPBOOL`   | 指向一个标志的指针，指示是否使用了默认字符。                         |

### 函数返回值
- 如果函数成功，返回值是写入多字节字符串缓冲区的字节数（不包括终止的 null 字符）。
- 如果函数失败，返回值为 `0`。可以通过调用 `GetLastError` 获取更多错误信息。
## MultiByteToWideChar {#MultiByteToWideChar}

```c
int MultiByteToWideChar(
    UINT    CodePage,
    DWORD   dwFlags,
    LPCSTR  lpMultiByteStr,
    int     cbMultiByte,
    LPWSTR  lpWideCharStr,
    int     cchWideChar
);
```

### 描述
`MultiByteToWideChar` 函数将多字节字符串转换为宽字符（Unicode）字符串。该函数使用指定的代码页将多字节字符串映射到宽字符字符串。如果目标缓冲区足够大，则该函数还会将结果字符串写入目标缓冲区。

### 参数说明

| 参数名          | 类型    | 描述                                                                 |
|-----------------|---------|--------------------------------------------------------------------------|
| `CodePage`      | `UINT`  | 指定用于解释多字节字符串的代码页。常见的值包括 `CP_UTF8` 表示 UTF-8。 |
| `dwFlags`       | `DWORD` | 指定控制转换的标志。通常设置为 `0`。                                   |
| `lpMultiByteStr`| `LPCSTR`| 指向要转换的多字节字符串的指针。                                       |
| `cbMultiByte`   | `int`   | 指定多字节字符串的长度（以字节为单位）。如果为 `-1`，则字符串被视为以 null 结尾。 |
| `lpWideCharStr` | `LPWSTR`| 指向接收转换后的宽字符字符串的缓冲区的指针。如果为 `NULL`，则函数返回所需的缓冲区大小。 |
| `cchWideChar`   | `int`   | 指定 `lpWideCharStr` 缓冲区的大小（以字符为单位）。如果为 `0`，则函数不执行转换，只返回所需的缓冲区大小。 |

### 返回值
- 如果函数成功，返回值是写入 `lpWideCharStr` 缓冲区的字符数（不包括终止的 null 字符）。
- 如果 `lpWideCharStr` 为 `NULL` 或 `cchWideChar` 为 `0`，则返回值是转换输入字符串所需的字符数（包括终止的 null 字符）。
- 如果函数失败，返回值为 `0`。可以通过调用 `GetLastError` 获取扩展的错误信息。
## convert_to_wide {#convert_to_wide}

```c
char* convert_to_wide(int len) {
    if (len == 0) {
        free(wide);
        return NULL;
    }
}
```

### 描述
该函数用于将输入的长度 `len` 转换为宽字符格式。如果输入的长度为 0，则释放内存并返回 `NULL`。

### 参数说明
| 参数名 | 类型 | 描述 |
|--------|------|------|
| `len`  | `int` | 输入的长度值，用于判断是否需要释放内存。 |

### 返回值
- **`NULL`**: 如果输入的长度 `len` 为 0，函数将释放内存并返回 `NULL`。
- **其他情况**: 该函数未明确说明其他情况下的返回值。
## WideCharToMultiByte {#WideCharToMultiByte}

```c
int WideCharToMultiByte(
    UINT    CodePage,
    DWORD   dwFlags,
    LPCWSTR lpWideCharStr,
    int     cchWideChar,
    LPSTR   lpMultiByteStr,
    int     cbMultiByte,
    LPCSTR  lpDefaultChar,
    LPBOOL  lpUsedDefaultChar
);
```

### 函数描述
`WideCharToMultiByte` 函数将宽字符字符串转换为多字节字符串。该函数使用指定的代码页将宽字符字符串转换为多字节字符串，并可以选择性地使用默认字符替换无法映射的字符。

### 函数参数说明

| 参数名            | 类型     | 描述                                                                 |
|-------------------|----------|--------------------------------------------------------------------------|
| `CodePage`        | `UINT`   | 指定用于转换的代码页。常用的代码页包括 `CP_ACP`（系统默认的 ANSI 代码页）和 `CP_UTF8`（UTF-8 代码页）。 |
| `dwFlags`         | `DWORD`  | 指定转换选项的标志。通常设置为 `0`。 |
| `lpWideCharStr`   | `LPCWSTR`| 指向要转换的宽字符字符串的指针。 |
| `cchWideChar`     | `int`    | 指定 `lpWideCharStr` 中宽字符的数量。如果为 `-1`，则表示字符串以 null 结尾。 |
| `lpMultiByteStr`  | `LPSTR`  | 指向接收转换后的多字节字符串的缓冲区的指针。如果为 `NULL`，则函数返回所需的缓冲区大小。 |
| `cbMultiByte`     | `int`    | 指定 `lpMultiByteStr` 缓冲区的大小（以字节为单位）。如果为 `0`，则函数返回所需的缓冲区大小。 |
| `lpDefaultChar`   | `LPCSTR` | 指向用于替换无法映射的字符的默认字符的指针。如果为 `NULL`，则使用系统默认字符。 |
| `lpUsedDefaultChar` | `LPBOOL` | 指向一个布尔值的指针，用于指示是否使用了默认字符。如果为 `NULL`，则不返回此信息。 |

### 函数返回值
- 如果函数成功，返回值是写入 `lpMultiByteStr` 缓冲区的字节数（不包括终止的 null 字符）。
- 如果 `lpMultiByteStr` 为 `NULL` 且 `cbMultiByte` 为 `0`，则返回值是转换字符串所需的字节数（包括终止的 null 字符）。
- 如果函数失败，返回值为 `0`。可以通过调用 `GetLastError` 获取扩展的错误信息。
## free {#free}

```c
void free(void *wide);
```

### 描述
`free` 函数用于释放之前通过 `malloc`、`calloc` 或 `realloc` 函数分配的内存空间。调用 `free` 后，指向该内存的指针将不再有效，不应再使用。多次释放同一块内存会导致未定义行为。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `wide` | `void *` | 指向要释放的内存块的指针。如果 `wide` 为 `NULL`，则 `free` 函数不执行任何操作。 |

### 函数返回值
`free` 函数没有返回值。
## MultiByteToWideChar {#MultiByteToWideChar}

```c
int MultiByteToWideChar(
    UINT    CodePage,
    DWORD   dwFlags,
    LPCSTR  lpMultiByteStr,
    int     cbMultiByte,
    LPWSTR  lpWideCharStr,
    int     cchWideChar
);
```

### 描述
`MultiByteToWideChar` 函数将多字节字符串转换为宽字符（Unicode）字符串。它根据指定的代码页将多字节字符映射到相应的宽字符。

### 参数说明

| 参数名          | 类型    | 描述                                                                 |
|-----------------|---------|--------------------------------------------------------------------------|
| `CodePage`      | `UINT`  | 指定用于解释多字节字符串的代码页。常用的代码页包括 `CP_ACP`（系统默认的 ANSI 代码页）和 `CP_UTF8`（UTF-8 代码页）。 |
| `dwFlags`       | `DWORD` | 指定控制转换行为的标志。通常设置为 `0`。 |
| `lpMultiByteStr`| `LPCSTR`| 指向要转换的多字节字符串的指针。 |
| `cbMultiByte`   | `int`   | 指定多字节字符串的长度（以字节为单位）。如果该值为 `-1`，则函数会自动计算字符串长度（包括终止符）。 |
| `lpWideCharStr` | `LPWSTR`| 指向接收转换后的宽字符串的缓冲区。如果该值为 `NULL`，则函数返回所需的缓冲区大小。 |
| `cchWideChar`   | `int`   | 指定宽字符缓冲区的大小（以字符为单位）。如果该值为 `0`，则函数返回所需的缓冲区大小，而不执行实际转换。 |

### 返回值
- 如果函数成功，返回值是写入缓冲区的宽字符数（不包括终止符）。
- 如果 `lpWideCharStr` 为 `NULL` 且 `cchWideChar` 为 `0`，则返回值是转换整个字符串所需的宽字符数（包括终止符）。
- 如果函数失败，返回值为 `0`。可以通过调用 `GetLastError` 获取详细的错误信息。
## free {#free}

```c
void free(void *wide);
```

### 描述
`free` 函数用于释放由 `malloc`、`calloc`、`realloc` 或 `aligned_alloc` 分配的内存块。调用 `free` 后，指向该内存块的指针将变为无效，不应再使用。多次释放同一个内存块会导致未定义行为。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `wide` | `void *` | 指向要释放的内存块的指针。如果 `wide` 为 `NULL`，则 `free` 不执行任何操作。 |

### 函数返回值
`free` 函数没有返回值。
## LocaleFree {#LocaleFree}

```c
VLC_USED static inline void LocaleFree (const char *str)
{
    free ((char *)str);
}
```

### 描述
该函数用于释放通过 `Locale` 函数分配的字符串内存。它是一个内联函数，调用 `free` 函数来释放传入的字符串指针所指向的内存。

### 参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `str`  | `const char *` | 需要释放内存的字符串指针。 |

### 返回值
该函数没有返回值。
## utf8_encode {#utf8_encode}

```c
void utf8_encode(int c, char *utf8)
{
    if (c >= 0x80)
    {
        *(utf8++) = 0xC0 | (c >> 6);
        *(utf8++) = 0x80 | (c & 0x3F);
    }
}
```

### 描述
该函数用于将一个字符编码为 UTF-8 格式。如果输入的字符 `c` 大于等于 0x80，则将其转换为两个字节的 UTF-8 编码。

### 参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `c`    | `int` | 需要编码的字符。如果 `c` 大于等于 0x80，则将其转换为 UTF-8 编码。 |
| `utf8` | `char*` | 指向存储 UTF-8 编码结果的缓冲区的指针。 |

### 返回值
该函数没有返回值（`void`）。
## us_vasprintf {#us_vasprintf}

```c
VLC_API int us_vasprintf( char **, const char *, va_list );
```

### 描述
`us_vasprintf` 函数用于根据可变参数列表 (`va_list`) 生成格式化的字符串，并将结果存储在动态分配的内存中。这个函数类似于 `vasprintf`，但它使用 `us_*` 系列函数来处理字符串，确保字符串在不同字符集之间的转换正确。

### 函数参数说明

| 参数名       | 类型        | 描述                                                                 |
|--------------|-------------|----------------------------------------------------------------------|
| `char **`    | 输出        | 指向字符指针的指针，用于存储生成的格式化字符串的地址。               |
| `const char *` | 输入      | 格式化字符串，指定如何格式化可变参数列表中的参数。                   |
| `va_list`    | 输入        | 可变参数列表，包含要格式化的参数。                                   |

### 函数返回值
- **成功**：返回生成的字符串的长度（不包括终止的空字符）。
- **失败**：返回 `-1`，并且 `*` 指向的指针不会被修改。
