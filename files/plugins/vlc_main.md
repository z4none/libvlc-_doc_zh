## libvlc_int_t {#libvlc_int_t}

```c
struct libvlc_int_t
{
    VLC_COMMON_MEMBERS

    /* Structure storing the action name / key associations */
    const struct hotkey *p_hotkeys;
};
```

### 描述
`libvlc_int_t` 结构体是一个 LibVLC 实例，用于 libvlc 核心和插件。该结构体包含了 LibVLC 实例的常见成员，并且存储了动作名称与按键关联的结构。

### 成员说明

| 成员名称       | 类型                | 描述                                                                 |
|----------------|---------------------|----------------------------------------------------------------------|
| VLC_COMMON_MEMBERS | （未指定）          | LibVLC 实例的常见成员，具体内容未在此处详细说明。                     |
| p_hotkeys       | `const struct hotkey *` | 指向存储动作名称与按键关联的结构的指针。该结构体用于管理按键与特定动作的映射关系。 |

### 返回值
该结构体定义不涉及返回值，因为它是一个数据结构定义，而不是函数。
