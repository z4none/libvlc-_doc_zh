## audio_volume {#audio_volume}

```c
struct audio_volume
{
    VLC_COMMON_MEMBERS

    vlc_fourcc_t format; /**< Audio samples format */
    void (*amplify)(audio_volume_t *, block_t *, float); /**< Amplifier */
};
```

### 描述
`audio_volume` 结构体用于表示音频音量相关的信息。它包含了音频样本的格式以及一个用于放大音频的函数指针。

### 成员说明

| 成员变量 | 类型 | 描述 |
|----------|------|------|
| `format` | `vlc_fourcc_t` | 音频样本的格式。 |
| `amplify` | `void (*)(audio_volume_t *, block_t *, float)` | 一个函数指针，用于放大音频。该函数接受一个 `audio_volume_t` 结构体指针、一个 `block_t` 结构体指针和一个浮点数（放大倍数）作为参数。 |

### 返回值
该结构体没有返回值，因为它是一个定义数据结构的声明。
