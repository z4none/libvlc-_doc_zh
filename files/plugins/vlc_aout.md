## aout_CheckChannelReorder {#aout_CheckChannelReorder}

```c
VLC_API unsigned aout_CheckChannelReorder( const uint32_t *pi_chan_order_in, const uint32_t *pi_chan_order_out,
                                           uint32_t mask, uint8_t *table );
```

### 函数描述
该函数计算从 `pi_chan_order_in` 到 `pi_chan_order_out` 所需的重新排序。如果 `pi_chan_order_in` 或 `pi_chan_order_out` 为 `NULL`，则假定请求的是 VLC 内部（WG4）顺序。

### 函数参数说明

| 参数名               | 类型          | 描述                                                                 |
|----------------------|---------------|--------------------------------------------------------------------------|
| `pi_chan_order_in`   | `const uint32_t *` | 输入通道顺序的指针。如果为 `NULL`，则假定使用 VLC 内部（WG4）顺序。 |
| `pi_chan_order_out`  | `const uint32_t *` | 输出通道顺序的指针。如果为 `NULL`，则假定使用 VLC 内部（WG4）顺序。 |
| `mask`               | `uint32_t`        | 通道掩码，用于指定需要重新排序的通道。                               |
| `table`              | `uint8_t *`       | 用于存储重新排序表的指针。                                           |

### 函数返回值
- 返回值为 `unsigned` 类型，表示重新排序后的通道数。
## aout_ChannelReorder {#aout_ChannelReorder}

```c
VLC_API void aout_ChannelReorder(void *buf, size_t samples, unsigned channels, const uint8_t *order, vlc_fourcc_t format);
```

### 描述
该函数用于对音频缓冲区中的通道进行重新排序。它根据给定的通道顺序数组 `order` 对音频数据进行重新排列。

### 函数参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|--------------------------------------------------------------------------|
| `buf`     | `void *`       | 指向音频缓冲区的指针，该缓冲区包含需要重新排序的音频数据。                   |
| `samples` | `size_t`       | 音频缓冲区中的样本数。每个通道的样本数相同。                                 |
| `channels`| `unsigned`     | 音频缓冲区中的通道数。                                                     |
| `order`   | `const uint8_t *` | 指向通道顺序数组的指针。该数组的长度应等于 `channels`，每个元素表示目标通道的索引。 |
| `format`  | `vlc_fourcc_t` | 音频数据的格式，用于确定每个样本的大小和存储方式。                           |

### 函数返回值
该函数没有返回值。
## aout_Interleave {#aout_Interleave}

```c
VLC_API void aout_Interleave(void *dst, const void *const *planes,
                             unsigned samples, unsigned channels,
                             vlc_fourcc_t fourcc);
```

### 描述
该函数用于将多个音频声道的数据交错存储到一个目标缓冲区中。它将每个声道的音频样本交错排列，以便在多声道音频处理中使用。

### 函数参数说明

| 参数名    | 类型                | 描述                                                                 |
|-----------|---------------------|----------------------------------------------------------------------|
| dst       | void*               | 目标缓冲区，用于存储交错后的音频数据。                               |
| planes    | const void* const*  | 指向多个声道音频数据数组的指针数组，每个指针指向一个声道的音频数据。 |
| samples   | unsigned            | 每个声道的音频样本数量。                                             |
| channels  | unsigned            | 音频声道的数量。                                                     |
| fourcc    | vlc_fourcc_t        | 音频数据的格式标识符（FourCC），用于指定音频数据的格式。             |

### 函数返回值
该函数没有返回值（void）。
## aout_Deinterleave {#aout_Deinterleave}

```c
VLC_API void aout_Deinterleave(void *dst, const void *src, unsigned samples,
                               unsigned channels, vlc_fourcc_t fourcc);
```

### 描述
该函数用于将交错音频数据解交错为非交错格式。交错音频数据是指所有声道的样本在内存中交错排列，例如，对于双声道音频，样本的排列顺序为：左声道样本1，右声道样本1，左声道样本2，右声道样本2，依此类推。解交错后，每个声道的样本将分别存储在不同的内存区域中。

### 参数说明

| 参数名    | 类型           | 描述                                                                 |
|-----------|----------------|--------------------------------------------------------------------------|
| dst       | `void *`       | 目标缓冲区指针，用于存储解交错后的音频数据。每个声道的数据将依次存储在 `dst` 指向的内存区域中。 |
| src       | `const void *` | 源缓冲区指针，指向需要解交错的交错音频数据。                              |
| samples   | `unsigned`     | 每个声道的样本数量。                                                     |
| channels  | `unsigned`     | 声道数量。                                                              |
| fourcc    | `vlc_fourcc_t` | 音频数据的格式标识符（FourCC），用于指定音频数据的格式，例如 `VLC_CODEC_FL32` 表示 32 位浮点音频数据。 |

### 返回值
该函数没有返回值。
## aout_CheckChannelExtraction {#aout_CheckChannelExtraction}

```c
VLC_API bool aout_CheckChannelExtraction( int *pi_selection, uint32_t *pi_layout, int *pi_channels, const uint32_t pi_order_dst[AOUT_CHAN_MAX], const uint32_t *pi_order_src, int i_channels );
```

### 函数描述

该函数将计算从 `pi_order_src[]` 中给定类型的 `i_channels` 转换为 `pi_order_dst` 描述的顺序所需的提取参数，并将其存储在 `pi_selection` 中。此外，它还会设置以下内容：

- `*pi_channels` 表示将提取的通道数量，该数量可能小于（在无法理解通道类型的情况下）或等于 `i_channels`。
- 通道的布局（`*pi_layout`）。

如果确实需要通道提取，函数将返回 `true`，在这种情况下，必须使用 `aout_ChannelExtract`。

**注意**：
- 当源可能包含 VLC 无法理解的通道类型时，必须使用此函数。在这种情况下，`pi_order_src[]` 必须设置为 `0`。
- 如果多个通道具有相同的类型，也必须使用此函数。

### 函数参数说明

| 参数名          | 类型                | 描述                                                                 |
|-----------------|---------------------|----------------------------------------------------------------------|
| `pi_selection`  | `int *`             | 存储提取参数的数组。                                                 |
| `pi_layout`     | `uint32_t *`        | 存储通道布局的指针。                                                 |
| `pi_channels`   | `int *`             | 存储提取的通道数量的指针。                                           |
| `pi_order_dst`  | `const uint32_t[AOUT_CHAN_MAX]` | 目标通道顺序的数组。                                         |
| `pi_order_src`  | `const uint32_t *`  | 源通道顺序的数组。                                                   |
| `i_channels`    | `int`               | 源通道的数量。                                                       |

### 函数返回值

- **`true`**：如果确实需要通道提取，返回 `true`，在这种情况下，必须使用 `aout_ChannelExtract`。
- **`false`**：如果不需要通道提取，返回 `false`。
## aout_ChannelExtract {#aout_ChannelExtract}

```c
VLC_API void aout_ChannelExtract( void *p_dst, int i_dst_channels, const void *p_src, int i_src_channels, int i_sample_count, const int *pi_selection, int i_bits_per_sample );
```

### 描述
该函数使用 `aout_CheckChannelExtraction` 创建的参数来实际执行声道提取操作。

注意：
- 此函数不支持就地操作（`p_dst` 和 `p_src` 不能重叠）。
- 仅支持每样本 8、16、24、32、64 位的数据。

### 参数说明

| 参数名            | 类型        | 描述                                                                 |
|-------------------|-------------|--------------------------------------------------------------------------|
| `p_dst`           | `void *`    | 目标缓冲区，用于存储提取后的音频数据。                                       |
| `i_dst_channels`  | `int`       | 目标缓冲区的声道数。                                                         |
| `p_src`           | `const void *` | 源缓冲区，包含原始音频数据。                                               |
| `i_src_channels`  | `int`       | 源缓冲区的声道数。                                                         |
| `i_sample_count`  | `int`       | 样本数量，表示要处理的样本总数。                                             |
| `pi_selection`    | `const int *` | 声道选择数组，指示从源声道中提取哪些声道到目标缓冲区。                       |
| `i_bits_per_sample` | `int`       | 每个样本的位数，支持 8、16、24、32、64 位。                                 |

### 返回值
该函数没有返回值。
## aout_FormatNbChannels {#aout_FormatNbChannels}

```c
static inline unsigned aout_FormatNbChannels(const audio_sample_format_t *fmt)
```

### 函数描述
该函数用于计算音频格式中物理通道的数量。它通过计算 `fmt->i_physical_channels` 中的位数来确定通道的数量。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `fmt` | `const audio_sample_format_t *` | 指向音频采样格式结构的指针，包含音频格式的详细信息。 |

### 函数返回值
该函数返回 `fmt->i_physical_channels` 中设置的位数，即物理通道的数量。返回值类型为 `unsigned`。
## aout_FormatPrepare {#aout_FormatPrepare}

```c
VLC_API void aout_FormatPrepare( audio_sample_format_t * p_format );
```

### 描述
该函数用于准备音频样本格式。它确保音频格式具有有效的通道掩码和通道布局。如果通道掩码无效，函数将尝试从通道数中推导出合适的通道掩码。如果通道布局无效，函数将尝试从通道掩码中推导出合适的通道布局。

### 函数参数说明

| 参数名       | 类型                     | 描述                                                                 |
|--------------|--------------------------|--------------------------------------------------------------------------|
| `p_format`   | `audio_sample_format_t *` | 指向 `audio_sample_format_t` 结构的指针，该结构包含要准备的音频样本格式。 |

### 函数返回值
该函数没有返回值。
## aout_FormatPrint {#aout_FormatPrint}

```c
VLC_API void aout_FormatPrint(vlc_object_t *obj, const char *indent, const audio_sample_format_t *fmt);
```

### 函数描述
该函数用于在 VLC 对象的日志中打印音频样本格式的详细信息。它将音频格式的各个参数（如采样率、通道数、样本格式等）以可读的格式输出到日志中。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `obj` | `vlc_object_t *` | VLC 对象指针，通常是音频输出模块的对象。 |
| `indent` | `const char *` | 用于缩进的字符串，通常是空格或制表符，用于格式化输出。 |
| `fmt` | `const audio_sample_format_t *` | 指向音频样本格式结构的指针，包含要打印的音频格式信息。 |

### 函数返回值
该函数没有返回值（`void`）。
## aout_VolumeGet {#aout_VolumeGet}

```c
VLC_API float aout_VolumeGet(audio_output_t *aout);
```

### 描述
该函数用于获取音频输出的当前音量。音量值以浮点数形式返回，范围通常为0.0到2.0，其中1.0表示原始音量，0.0表示静音，2.0表示原始音量的两倍。

### 函数参数说明

| 参数名    | 类型               | 描述                                                                 |
|-----------|--------------------|--------------------------------------------------------------------------|
| `aout`    | `audio_output_t *` | 指向音频输出对象的指针，该对象表示当前的音频输出设备或流。 |

### 函数返回值
- **返回值类型**: `float`
- **返回值说明**:
  - 返回当前音频输出的音量值，范围通常为0.0到2.0。
  - 如果音频输出设备未初始化或发生错误，可能返回0.0或其他错误值。
## aout_VolumeSet {#aout_VolumeSet}

```c
VLC_API int aout_VolumeSet(audio_output_t *aout, float volume);
```

### 函数描述

该函数用于设置音频输出的音量。音量值以浮点数表示，范围通常为0.0到2.0，其中1.0表示正常音量，0.0表示静音，2.0表示两倍音量。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `aout` | `audio_output_t *` | 指向音频输出对象的指针，表示要设置音量的音频输出设备。 |
| `volume` | `float` | 要设置的音量值，范围通常为0.0到2.0。 |

### 函数返回值

- `0`：成功设置音量。
- `非0`：设置音量失败，返回值表示错误代码。
## aout_MuteGet {#aout_MuteGet}

```c
VLC_API int aout_MuteGet(audio_output_t *);
```

### 描述
该函数用于获取音频输出的静音状态。它返回一个整数值，表示当前音频输出是否处于静音状态。

### 函数参数说明

| 参数名            | 类型               | 描述                                                                 |
|-------------------|--------------------|--------------------------------------------------------------------------|
| `audio_output_t *` | `audio_output_t *` | 指向音频输出对象的指针，表示要查询静音状态的音频输出设备。 |

### 函数返回值

- **返回值为 0**：表示音频输出当前未处于静音状态。
- **返回值为 1**：表示音频输出当前处于静音状态。
- **返回值为负数**：表示获取静音状态时发生了错误。
## aout_MuteSet {#aout_MuteSet}

```c
VLC_API int aout_MuteSet(audio_output_t *aout, bool mute);
```

### 描述
该函数用于设置音频输出的静音状态。如果 `mute` 参数为 `true`，则音频输出将被静音；如果为 `false`，则取消静音。

### 函数参数说明

| 参数名 | 类型          | 描述                                                                 |
|--------|---------------|--------------------------------------------------------------------------|
| aout   | audio_output_t* | 指向音频输出对象的指针，表示要设置静音状态的音频输出。 |
| mute   | bool          | 布尔值，表示是否将音频输出静音。`true` 表示静音，`false` 表示取消静音。 |

### 函数返回值

- `0`：成功设置或取消静音。
- `非0`：设置或取消静音失败。
## aout_DeviceSet {#aout_DeviceSet}

```c
VLC_API int aout_DeviceSet(audio_output_t *p_aout, const char *psz_id);
```

### 描述
该函数用于设置音频输出设备的ID。它允许用户选择特定的音频输出设备进行播放。

### 函数参数说明

| 参数名     | 类型                | 描述                                                                 |
|------------|---------------------|----------------------------------------------------------------------|
| `p_aout`   | `audio_output_t *`  | 指向音频输出对象的指针，表示当前的音频输出设备。                     |
| `psz_id`   | `const char *`      | 指向设备ID字符串的指针，表示要设置的音频输出设备的唯一标识符。       |

### 函数返回值

- `0`：成功设置音频输出设备。
- `-1`：设置音频输出设备失败。
## aout_DevicesList {#aout_DevicesList}

```c
VLC_API int aout_DevicesList(audio_output_t *p_aout, char ***pp_names, char ***pp_descs);
```

### 描述
该函数用于获取音频输出设备的列表。它返回一个包含设备名称和描述的字符串数组。

### 函数参数说明

| 参数名    | 类型                | 描述                                                                 |
|-----------|---------------------|----------------------------------------------------------------------|
| `p_aout`  | `audio_output_t *`  | 指向音频输出对象的指针，表示要查询的音频输出设备。                   |
| `pp_names`| `char ***`          | 指向字符串数组的指针，用于存储设备名称列表。函数执行后，该数组将包含设备名称。|
| `pp_descs`| `char ***`          | 指向字符串数组的指针，用于存储设备描述列表。函数执行后，该数组将包含设备描述。|

### 函数返回值

- **返回值为 `0`**：表示函数成功执行，设备列表已成功获取并存储在 `pp_names` 和 `pp_descs` 中。
- **返回值为 `-1`**：表示函数执行失败，可能是由于内存分配失败或其他错误。
## aout_VolumeReport {#aout_VolumeReport}

```c
static inline void aout_VolumeReport(audio_output_t *aout, float volume)
{
    aout->event.volume_report(aout, volume);
}
```

### 函数描述
该函数用于向核心和用户界面报告音频音量的配置变化。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `aout` | `audio_output_t *` | 指向音频输出对象的指针，表示当前的音频输出设备。 |
| `volume` | `float` | 表示当前配置的音频音量，通常是一个0到1之间的浮点数，其中0表示静音，1表示最大音量。 |

### 函数返回值
该函数没有返回值（`void`）。
## aout_MuteReport {#aout_MuteReport}

```c
static inline void aout_MuteReport(audio_output_t *aout, bool mute)
{
    aout->event.mute_report(aout, mute);
}
```

### 描述
该函数用于向核心和用户界面报告静音标志的变化。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| aout | audio_output_t* | 指向音频输出对象的指针，表示当前的音频输出设备。 |
| mute | bool | 布尔值，表示当前的静音状态。`true` 表示静音，`false` 表示取消静音。 |

### 函数返回值
该函数没有返回值。
## aout_PolicyReport {#aout_PolicyReport}

```c
static inline void aout_PolicyReport(audio_output_t *aout, bool cork)
{
    aout->event.policy_report(aout, cork);
}
```

### 函数描述
报告音频策略状态。如果 `cork` 为 `true`，则请求一个 cork（暂停）；如果 `cork` 为 `false`，则撤销任何待处理的 cork。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `aout` | `audio_output_t *` | 指向音频输出对象的指针。 |
| `cork` | `bool` | 如果为 `true`，请求一个 cork（暂停）；如果为 `false`，撤销任何待处理的 cork。 |

### 函数返回值
该函数没有返回值。
## aout_DeviceReport {#aout_DeviceReport}

```c
static inline void aout_DeviceReport(audio_output_t *aout, const char *id)
{
    aout->event.device_report(aout, id);
}
```

### 描述
该函数用于报告输出设备的变更。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| aout | `audio_output_t *` | 指向音频输出对象的指针 |
| id | `const char *` | 设备标识符 |

### 函数返回值
该函数没有返回值。
## aout_HotplugReport {#aout_HotplugReport}

```c
static inline void aout_HotplugReport(audio_output_t *aout,
                                      const char *id, const char *name)
{
    aout->event.hotplug_report(aout, id, name);
}
```

### 函数描述
报告设备热插拔事件。

### 函数参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| aout | audio_output_t* | 音频输出对象指针 |
| id | const char* | 设备ID |
| name | const char* | 可读的设备名称（热拔出时为NULL） |

### 函数返回值
该函数没有返回值。
## aout_GainRequest {#aout_GainRequest}

```c
static inline int aout_GainRequest(audio_output_t *aout, float gain)
{
    return aout->event.gain_request(aout, gain);
}
```

### 函数描述
请求更改软件音频放大倍数。

### 函数参数说明
| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| aout | audio_output_t* | 音频输出对象指针 |
| gain | float | 线性振幅增益（必须为正数） |

### 函数返回值
- 返回 `aout->event.gain_request(aout, gain)` 的执行结果。
- 具体返回值取决于 `aout->event.gain_request` 函数的实现。

### 警告
- 增益值超过 1.0 可能会导致溢出和失真。
## aout_RestartRequest {#aout_RestartRequest}

```c
static inline void aout_RestartRequest(audio_output_t *aout, unsigned mode)
```

### 函数描述
该函数用于请求音频输出模块重新启动。它会调用音频输出对象中的 `restart_request` 事件处理函数，并传递指定的模式参数。

### 函数参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `aout` | `audio_output_t *` | 指向音频输出对象的指针，表示要操作的音频输出模块。 |
| `mode` | `unsigned` | 重新启动的模式，具体含义由实现定义。 |

### 函数返回值
该函数没有返回值。
## aout_ChannelsRestart {#aout_ChannelsRestart}

```c
static inline int aout_ChannelsRestart (vlc_object_t *obj, const char *varname,
                            vlc_value_t oldval, vlc_value_t newval, void *data)
```

### 函数描述
该函数用于重新启动音频输出通道。它通过调用 `aout_RestartRequest` 函数来请求重新启动音频输出，并传递 `AOUT_RESTART_OUTPUT` 标志。该函数通常在音频输出通道的配置发生变化时被调用。

### 函数参数说明

| 参数名   | 类型           | 描述                                                                 |
|----------|----------------|--------------------------------------------------------------------|
| `obj`    | `vlc_object_t*` | VLC 对象指针，通常是 `audio_output_t` 类型的对象。                    |
| `varname`| `const char*`  | 变量名称，当前函数中未使用。                                         |
| `oldval` | `vlc_value_t`  | 旧的变量值，当前函数中未使用。                                       |
| `newval` | `vlc_value_t`  | 新的变量值，当前函数中未使用。                                       |
| `data`   | `void*`        | 附加数据指针，当前函数中未使用。                                     |

### 函数返回值
该函数始终返回 `0`，表示操作成功。
## aout_FiltersDelete {#aout_FiltersDelete}

```c
VLC_API void aout_FiltersDelete(vlc_object_t *obj, aout_filters_t *filters);
```

### 描述
该函数用于删除音频输出过滤器。它会释放与给定 `aout_filters_t` 结构体相关的所有资源，并将其内部指针设置为 `NULL`。

### 函数参数说明

| 参数名   | 类型           | 描述                                                         |
|----------|----------------|--------------------------------------------------------------|
| `obj`    | `vlc_object_t*` | VLC 对象指针，通常是 `vlc_object_t` 类型的指针。             |
| `filters`| `aout_filters_t*` | 指向 `aout_filters_t` 结构体的指针，表示要删除的音频过滤器。 |

### 函数返回值
该函数没有返回值。
## aout_FiltersAdjustResampling {#aout_FiltersAdjustResampling}

```c
VLC_API bool aout_FiltersAdjustResampling(aout_filters_t *p_filters, int i_offset);
```

### 描述
该函数用于调整音频滤波器的重采样偏移量。它允许在音频输出过程中动态调整重采样偏移，以适应不同的音频处理需求。

### 函数参数说明

| 参数名       | 类型            | 描述                                                                 |
|--------------|-----------------|----------------------------------------------------------------------|
| `p_filters`  | `aout_filters_t*` | 指向音频滤波器结构体的指针，表示要调整的音频滤波器。                  |
| `i_offset`   | `int`           | 重采样偏移量，表示要应用的重采样调整值。正值表示加速，负值表示减速。 |

### 函数返回值

- **`true`**: 表示重采样调整成功。
- **`false`**: 表示重采样调整失败，可能是由于参数无效或其他内部错误。
## aout_filter_RequestVout {#aout_filter_RequestVout}

```c
VLC_API vout_thread_t * aout_filter_RequestVout( filter_t *p_filter, vout_thread_t *p_vout, video_format_t *p_fmt );
```

### 函数描述
该函数用于请求一个新的视频输出（Vout）线程。它通常在音频滤镜需要显示视频时调用。如果当前的视频输出线程不满足要求，该函数会请求一个新的视频输出线程。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_filter`   | `filter_t *`        | 指向当前滤镜的指针。该滤镜可能需要一个新的视频输出线程。             |
| `p_vout`     | `vout_thread_t *`   | 指向当前视频输出线程的指针。如果为 `NULL`，则表示没有当前视频输出线程。 |
| `p_fmt`      | `video_format_t *`  | 指向视频格式的指针。该格式描述了所需的视频输出线程的格式。           |

### 函数返回值
- 如果成功请求到一个新的视频输出线程，则返回该视频输出线程的指针。
- 如果无法请求到新的视频输出线程，则返回 `NULL`。
