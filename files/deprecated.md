## libvlc_playlist_play {#libvlc_playlist_play}

```c
void libvlc_playlist_play( libvlc_instance_t *p_instance, int i_id, int i_options, char **ppsz_options );
```

### 描述
开始播放（如果播放列表中有任何项目）。

可以为播放前添加到项目中的附加播放列表项目选项。

### 函数参数说明

| 参数名        | 类型                | 描述                                                                 |
|---------------|---------------------|----------------------------------------------------------------------|
| p_instance    | libvlc_instance_t*  | 播放列表实例                                                         |
| i_id          | int                 | 要播放的项目ID。如果这是一个负数，则会选择下一个项目。否则，将播放具有给定ID的项目。 |
| i_options     | int                 | 要添加到项目的选项数量                                               |
| ppsz_options  | char**              | 要添加到项目的选项                                                     |

### 函数返回值
该函数没有返回值。
