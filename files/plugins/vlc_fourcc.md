## vlc_fourcc_GetCodec {#vlc_fourcc_GetCodec}

```c
VLC_API vlc_fourcc_t vlc_fourcc_GetCodec( int i_cat, vlc_fourcc_t i_fourcc );
```

### 描述
该函数返回与特定ES类别中的fourcc相关联的编解码器。如果找不到对应的编解码器，函数将返回给定的fourcc。如果找到了对应的编解码器，它将始终是上面定义的`VLC_CODEC_`之一。如果不知道ES类别，可以使用`UNKNOWN_ES`。

### 参数说明

| 参数名   | 类型          | 描述                                                         |
|----------|---------------|--------------------------------------------------------------|
| `i_cat`  | `int`         | ES类别，用于指定编解码器的类别。如果不知道类别，可以使用`UNKNOWN_ES`。 |
| `i_fourcc` | `vlc_fourcc_t` | 输入的fourcc值，用于查找对应的编解码器。                     |

### 返回值
- 如果找到了对应的编解码器，返回值将是`VLC_CODEC_`之一。
- 如果没有找到对应的编解码器，返回值将是输入的`i_fourcc`。
## vlc_fourcc_GetCodecFromString {#vlc_fourcc_GetCodecFromString}

```c
VLC_API vlc_fourcc_t vlc_fourcc_GetCodecFromString( int i_cat, const char *psz_fourcc );
```

### 描述
该函数返回与存储在以零结尾的字符串中的 fourcc 相关联的编解码器。如果字符串为 `NULL` 或不包含恰好 4 个字符，则返回 0，否则其行为类似于 `vlc_fourcc_GetCodec`。该函数提供了一种便利的方式来获取编解码器。

### 函数参数说明

| 参数名       | 类型          | 描述                                                         |
| ------------ | ------------- | ------------------------------------------------------------ |
| `i_cat`      | `int`         | 编解码器类别，用于指定编解码器的类型。                       |
| `psz_fourcc` | `const char*` | 指向以零结尾的字符串的指针，该字符串包含 fourcc 码。         |

### 函数返回值
- **返回值类型**: `vlc_fourcc_t`
- **返回值说明**:
  - 如果 `psz_fourcc` 为 `NULL` 或字符串长度不等于 4，则返回 `0`。
  - 否则，返回与 `psz_fourcc` 相关联的编解码器。
## vlc_fourcc_GetCodecAudio {#vlc_fourcc_GetCodecAudio}

```c
VLC_API vlc_fourcc_t vlc_fourcc_GetCodecAudio( vlc_fourcc_t i_fourcc, int i_bits );
```

### 函数描述
该函数将给定的 fourcc 转换为音频编解码器（如果可能）。支持转换的 fourcc 包括 `aflt`、`araw/pcm`、`twos` 和 `sowt`。如果检测到不兼容的 `i_bits`，则返回 0。其他 fourcc 将通过 `vlc_fourcc_GetCodec` 进行转换，并且不会检查 `i_bits`。

### 函数参数说明
| 参数名   | 类型          | 描述                                                                 |
|----------|---------------|--------------------------------------------------------------------|
| `i_fourcc` | `vlc_fourcc_t` | 输入的 fourcc 值，用于指定音频编解码器的标识符。                        |
| `i_bits`  | `int`         | 音频的位深度，用于检查与 fourcc 的兼容性。如果检测到不兼容的位深度，函数将返回 0。 |

### 函数返回值
- **返回值类型**: `vlc_fourcc_t`
- **返回值说明**:
  - 如果 `i_fourcc` 是 `aflt`、`araw/pcm`、`twos` 或 `sowt`，并且 `i_bits` 是兼容的，则返回相应的音频编解码器。
  - 如果 `i_fourcc` 是其他值，则通过 `vlc_fourcc_GetCodec` 进行转换，并返回相应的音频编解码器。
  - 如果 `i_bits` 不兼容，则返回 0。
## vlc_fourcc_GetDescription {#vlc_fourcc_GetDescription}

```c
VLC_API const char * vlc_fourcc_GetDescription( int i_cat, vlc_fourcc_t i_fourcc );
```

### 函数描述
该函数返回给定 fourcc 的描述，如果未找到则返回 NULL。如果不知道 ES 类别，可以使用 `UNKNOWN_ES`。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| `i_cat`   | `int`         | ES 类别。如果不知道类别，可以使用 `UNKNOWN_ES`。                       |
| `i_fourcc`| `vlc_fourcc_t`| 要获取描述的 fourcc 值。                                                |

### 函数返回值
- **成功**：返回给定 fourcc 的描述字符串。
- **未找到**：返回 `NULL`。
## vlc_fourcc_GetYUVFallback {#vlc_fourcc_GetYUVFallback}

```c
VLC_API const vlc_fourcc_t * vlc_fourcc_GetYUVFallback( vlc_fourcc_t );
```

### 函数描述
该函数返回一个以0结尾的YUV fourcc列表，这些fourcc按照给定色度的优先级顺序递减排列。函数始终返回一个非空的指针，该指针不需要被释放。

### 函数参数说明

| 参数名        | 类型          | 描述                                                                 |
|---------------|---------------|--------------------------------------------------------------------------|
| `vlc_fourcc_t`| `vlc_fourcc_t`| 输入的色度类型，函数将根据此色度返回相应的YUV fourcc列表。|

### 函数返回值
函数返回一个指向 `vlc_fourcc_t` 数组的指针，该数组以0结尾，表示YUV fourcc的优先级列表。返回的指针始终为非空，且不需要调用者释放。
## vlc_fourcc_GetRGBFallback {#vlc_fourcc_GetRGBFallback}

```c
VLC_API const vlc_fourcc_t * vlc_fourcc_GetRGBFallback( vlc_fourcc_t );
```

### 描述
该函数返回一个以0结尾的RGB fourcc列表，按优先级降序排列，适用于给定的色度。它总是返回一个非空的指针，该指针不需要被释放。

### 参数说明

| 参数名       | 类型          | 描述                                                                 |
|--------------|---------------|--------------------------------------------------------------------------|
| `vlc_fourcc_t` | `vlc_fourcc_t` | 输入的色度值，函数将根据此色度值返回相应的RGB fourcc列表。 |

### 返回值
该函数总是返回一个非空的指针，指向一个以0结尾的RGB fourcc列表。返回的指针不需要被释放。
## vlc_fourcc_IsYUV {#vlc_fourcc_IsYUV}

```c
VLC_API bool vlc_fourcc_IsYUV( vlc_fourcc_t );
```

### 函数描述
该函数用于判断给定的 `fourcc` 是否为 YUV 格式。如果是 YUV 格式，则返回 `true`，否则返回 `false`。

### 函数参数说明

| 参数名       | 类型          | 描述               |
|--------------|---------------|--------------------|
| `vlc_fourcc_t` | `vlc_fourcc_t` | 需要判断的 `fourcc` 值 |

### 函数返回值
- **`true`**: 如果给定的 `fourcc` 是 YUV 格式。
- **`false`**: 如果给定的 `fourcc` 不是 YUV 格式。
## vlc_fourcc_AreUVPlanesSwapped {#vlc_fourcc_AreUVPlanesSwapped}

```c
VLC_API bool vlc_fourcc_AreUVPlanesSwapped(vlc_fourcc_t fourcc1, vlc_fourcc_t fourcc2);
```

### 函数描述
该函数用于判断两个 `fourcc` 码是否在 U 和 V 平面互换的情况下等效。

### 函数参数说明

| 参数名  | 类型          | 描述                   |
|---------|---------------|------------------------|
| fourcc1 | vlc_fourcc_t  | 第一个 fourcc 码       |
| fourcc2 | vlc_fourcc_t  | 第二个 fourcc 码       |

### 函数返回值
- **true**: 如果两个 `fourcc` 码在 U 和 V 平面互换的情况下等效。
- **false**: 如果两个 `fourcc` 码在 U 和 V 平面互换的情况下不等效。
## vlc_fourcc_GetChromaDescription {#vlc_fourcc_GetChromaDescription}

```c
VLC_API const vlc_chroma_description_t * vlc_fourcc_GetChromaDescription( vlc_fourcc_t fourcc );
```

### 函数描述
该函数返回一个描述请求的 `fourcc` 的 `vlc_chroma_description_t` 结构体，如果未找到则返回 `NULL`。

### 函数参数说明

| 参数名  | 类型          | 描述                                                                 |
|---------|---------------|--------------------------------------------------------------------------|
| fourcc  | vlc_fourcc_t  | 要查询的 `fourcc` 值，用于获取对应的 `vlc_chroma_description_t` 结构体。|

### 函数返回值
- **成功**：返回一个指向 `vlc_chroma_description_t` 结构体的指针，该结构体描述了请求的 `fourcc`。
- **未找到**：返回 `NULL`，表示未找到与 `fourcc` 对应的 `vlc_chroma_description_t` 结构体。
