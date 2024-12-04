## playlist_Lock {#playlist_Lock}

```c
VLC_API void playlist_Lock( playlist_t *p_playlist );
```

### 描述
该函数用于锁定播放列表。锁定后，其他线程将无法访问或修改播放列表，直到解锁为止。

### 函数参数说明

| 参数名       | 类型        | 描述                 |
|--------------|-------------|----------------------|
| `p_playlist` | `playlist_t*` | 指向要锁定的播放列表的指针。 |

### 函数返回值
该函数没有返回值。
## playlist_Unlock {#playlist_Unlock}

```c
VLC_API void playlist_Unlock( playlist_t *p_playlist );
```

### 描述
该函数用于解锁播放列表对象。播放列表对象是一个线程安全的对象，因此在对其进行操作之前需要先锁定它。当操作完成后，应该调用此函数来解锁播放列表对象，以便其他线程可以访问它。

### 函数参数说明

| 参数名       | 类型        | 描述                                                         |
|--------------|-------------|--------------------------------------------------------------|
| `p_playlist` | `playlist_t*` | 指向要解锁的播放列表对象的指针。该对象在操作之前应该已经被锁定。 |

### 函数返回值
该函数没有返回值。
## playlist_AssertLocked {#playlist_AssertLocked}

```c
VLC_API void playlist_AssertLocked( playlist_t * );
```

### 描述
该函数用于断言播放列表已被锁定。如果播放列表未被锁定，则会导致运行时错误。

### 函数参数说明

| 参数名       | 类型       | 描述                 |
|--------------|------------|----------------------|
| `playlist_t *` | `playlist_t*` | 指向播放列表对象的指针。 |

### 函数返回值
该函数没有返回值。如果播放列表未被锁定，则会导致运行时错误。
## playlist_Deactivate {#playlist_Deactivate}

```c
VLC_API void playlist_Deactivate( playlist_t *p_playlist );
```

### 函数描述
该函数用于停用播放列表。停用播放列表意味着停止当前播放的媒体，并清理播放列表中的所有项目。

### 函数参数说明

| 参数名       | 类型        | 描述                                                         |
|--------------|-------------|--------------------------------------------------------------|
| `p_playlist` | `playlist_t*` | 指向要停用的播放列表对象的指针。该对象通常由 `libvlc_playlist_new` 创建。 |

### 函数返回值
该函数没有返回值。
## playlist_Control {#playlist_Control}

```c
VLC_API int playlist_Control( playlist_t *p_playlist, int i_query, bool b_locked, ... );
```

### 描述
该函数用于执行播放列表操作。如果播放列表中有内容，则可以执行播放列表操作。可能的查询操作在 `vlc_common.h` 中列出。

### 函数参数说明

| 参数名       | 类型      | 描述                                                                 |
|--------------|-----------|--------------------------------------------------------------------------|
| `p_playlist` | `playlist_t*` | 要执行命令的播放列表。                                                 |
| `i_query`    | `int`       | 要执行的命令。可能的查询操作在 `vlc_common.h` 中列出。                 |
| `b_locked`   | `bool`      | 如果播放列表在进入此函数时被锁定，则为 `TRUE`。                        |
| `...`        | `variable`  | 可变数量的参数，具体取决于 `i_query` 的值。                             |

### 函数返回值
- `VLC_SUCCESS`：操作成功。
- 其他值：操作失败，返回错误代码。
## playlist_GetNodeDuration {#playlist_GetNodeDuration}

```c
VLC_API mtime_t playlist_GetNodeDuration( playlist_item_t * );
```

### 函数描述
获取节点中所有项目的总时长。

### 函数参数说明

| 参数名            | 类型              | 描述                   |
|-------------------|-------------------|------------------------|
| `playlist_item_t *` | `playlist_item_t*` | 指向播放列表节点的指针 |

### 函数返回值
- 返回值类型：`mtime_t`
  - 返回节点中所有项目的总时长（以微秒为单位）。如果节点为空或无效，返回值可能为0。
## playlist_Clear {#playlist_Clear}

```c
VLC_API void playlist_Clear( playlist_t *, bool );
```

### 描述
该函数用于清空播放列表。如果播放列表在进入函数时被锁定，则参数 `b_locked` 应设置为 `TRUE`。

### 函数参数说明

| 参数名    | 类型      | 描述                                                                 |
|-----------|-----------|--------------------------------------------------------------------------|
| playlist  | playlist_t* | 指向播放列表对象的指针，表示要清空的播放列表。 |
| b_locked  | bool       | 如果播放列表在进入函数时被锁定，则为 `TRUE`，否则为 `FALSE`。 |

### 函数返回值
该函数没有返回值。
## playlist_TreeMove {#playlist_TreeMove}

```c
VLC_API int playlist_TreeMove( playlist_t *p_playlist, playlist_item_t *p_item, playlist_item_t *p_parent, int i_mode );
```

### 描述
该函数用于在播放列表中移动一个项目。它允许将一个播放列表项目移动到另一个父项目下，并指定移动的模式。

### 函数参数说明

| 参数名       | 类型               | 描述                                                                 |
|--------------|--------------------|--------------------------------------------------------------------------|
| `p_playlist` | `playlist_t *`      | 指向播放列表对象的指针，表示当前操作的播放列表。                         |
| `p_item`     | `playlist_item_t *` | 指向要移动的播放列表项目的指针。                                         |
| `p_parent`   | `playlist_item_t *` | 指向目标父项目的指针，表示要将 `p_item` 移动到该父项目下。               |
| `i_mode`     | `int`               | 移动模式，指定如何移动项目。可能的值包括：<br>- `PLAYLIST_END`：移动到末尾<br>- `PLAYLIST_BEGIN`：移动到开头<br>- `PLAYLIST_INSERT`：插入到指定位置 |

### 函数返回值

- `0`：表示操作成功。
- `-1`：表示操作失败。可能的原因包括但不限于：播放列表对象无效、项目无效、父项目无效或移动模式无效。
## playlist_TreeMoveMany {#playlist_TreeMoveMany}

```c
VLC_API int playlist_TreeMoveMany( playlist_t *p_playlist, int i_items, playlist_item_t **pp_items, playlist_item_t *p_node, int i_mode );
```

### 描述
该函数用于将多个播放列表项移动到播放列表树中的指定节点下。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| p_playlist   | `playlist_t *`       | 指向播放列表对象的指针，表示要操作的播放列表。                       |
| i_items      | `int`               | 要移动的播放列表项的数量。                                           |
| pp_items     | `playlist_item_t **` | 指向播放列表项数组的指针，表示要移动的播放列表项。                   |
| p_node       | `playlist_item_t *`  | 指向目标节点的指针，表示要将播放列表项移动到的目标节点。             |
| i_mode       | `int`               | 移动模式，指定如何处理目标节点中已存在的同名项。                     |

### 函数返回值
- `0`：成功移动播放列表项。
- `-1`：移动操作失败。
## playlist_RecursiveNodeSort {#playlist_RecursiveNodeSort}

```c
VLC_API int playlist_RecursiveNodeSort(playlist_t *p_playlist, playlist_item_t *p_root, int i_mode, int i_type);
```

### 描述
该函数用于递归地对播放列表中的节点进行排序。它会对指定的根节点及其所有子节点进行排序操作。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_playlist` | `playlist_t *`      | 指向播放列表对象的指针，表示要操作的播放列表。                       |
| `p_root`     | `playlist_item_t *` | 指向根节点的指针，表示要开始排序的节点。                             |
| `i_mode`     | `int`               | 排序模式，指定排序的方式。具体取值和含义需要参考相关文档或实现细节。 |
| `i_type`     | `int`               | 排序类型，指定排序的类型。具体取值和含义需要参考相关文档或实现细节。 |

### 函数返回值

- **返回值类型**: `int`
- **返回值说明**:
  - `0`: 表示排序操作成功完成。
  - `非0值`: 表示排序操作失败，具体错误码需要参考相关文档或实现细节。
## playlist_Status {#playlist_Status}

```c
VLC_API int playlist_Status(playlist_t *p_playlist);
```

### 描述
该函数用于获取播放列表的当前状态。

### 函数参数说明

| 参数名       | 类型       | 描述                   |
|--------------|------------|------------------------|
| `p_playlist` | `playlist_t*` | 指向播放列表对象的指针 |

### 函数返回值

- **返回值类型**: `int`
- **返回值说明**:
  - `0`: 播放列表处于停止状态。
  - `1`: 播放列表处于播放状态。
  - `2`: 播放列表处于暂停状态。
  - 其他值: 表示播放列表处于未知状态。
## playlist_Export {#playlist_Export}

```c
VLC_API int playlist_Export( playlist_t *p_playlist, const char *psz_name, playlist_item_t *p_export_root, const char *psz_type );
```

### 函数描述
将播放列表中的某个节点导出为特定类型的播放列表文件。

### 函数参数说明

| 参数名          | 类型                | 描述                                                         |
|-----------------|---------------------|--------------------------------------------------------------|
| `p_playlist`    | `playlist_t *`      | 要导出的播放列表。                                           |
| `psz_name`      | `const char *`      | 导出文件的保存位置。                                         |
| `p_export_root` | `playlist_item_t *` | 要导出的根节点。                                             |
| `psz_type`      | `const char *`      | 要创建的播放列表文件类型（如 m3u, pls 等）。                 |

### 函数返回值
- `VLC_SUCCESS`：成功导出播放列表文件。
## playlist_Import {#playlist_Import}

```c
VLC_API int playlist_Import( playlist_t *p_playlist, const char *psz_file );
```

### 描述
该函数用于打开一个播放列表文件，并将其内容添加到当前播放列表中。

### 函数参数说明

| 参数名       | 类型          | 描述                                                         |
| ------------ | ------------- | ------------------------------------------------------------ |
| `p_playlist` | `playlist_t*` | 指向当前播放列表的指针。                                     |
| `psz_file`   | `const char*` | 指向要导入的播放列表文件路径的字符串。                       |

### 函数返回值
- **成功**：返回 `0`，表示播放列表文件成功导入并添加到当前播放列表中。
- **失败**：返回 `-1`，表示导入播放列表文件失败。可能的原因包括文件路径无效、文件格式不支持等。
## playlist_ServicesDiscoveryAdd {#playlist_ServicesDiscoveryAdd}

```c
VLC_API int playlist_ServicesDiscoveryAdd(playlist_t *p_playlist, const char *psz_modules);
```

### 描述
该函数用于添加一组以逗号分隔的服务发现模块。这些模块将用于发现和播放各种媒体资源。

### 函数参数说明

| 参数名        | 类型        | 描述                                                         |
|---------------|-------------|--------------------------------------------------------------|
| `p_playlist`  | `playlist_t*` | 指向播放列表对象的指针，表示要添加服务发现模块的播放列表。 |
| `psz_modules` | `const char*` | 以逗号分隔的服务发现模块名称字符串。                         |

### 函数返回值
- `0`：成功添加服务发现模块。
- `非0`：添加服务发现模块失败。
## playlist_ServicesDiscoveryRemove {#playlist_ServicesDiscoveryRemove}

```c
VLC_API int playlist_ServicesDiscoveryRemove(playlist_t *p_playlist, const char *psz_name);
```

### 描述
该函数用于通过名称移除一个服务发现模块。

### 函数参数说明

| 参数名       | 类型          | 描述                                                         |
|--------------|---------------|--------------------------------------------------------------|
| p_playlist   | playlist_t *  | 指向播放列表对象的指针，表示要操作的播放列表。               |
| psz_name     | const char *  | 指向服务发现模块名称的字符串，表示要移除的服务发现模块的名称。 |

### 函数返回值

- **成功**：返回 `0`，表示成功移除了服务发现模块。
- **失败**：返回 `-1`，表示移除服务发现模块失败。可能的原因包括指定的服务发现模块不存在或内部错误。
## playlist_ServicesDiscoveryControl {#playlist_ServicesDiscoveryControl}

```c
VLC_API int playlist_ServicesDiscoveryControl( playlist_t *, const char *, int, ... );
```

### 描述
该函数用于控制服务发现。它允许对服务发现进行查询和操作。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `playlist_t *` | `playlist_t *` | 指向播放列表对象的指针。 |
| `const char *` | `const char *` | 服务发现的名称。 |
| `int` | `int` | 控制命令的类型。 |
| `...` | `...` | 可变参数列表，根据控制命令的类型传递不同的参数。 |

### 返回值
- `0`：操作成功。
- `非0`：操作失败，返回值表示错误代码。
## playlist_DeleteFromInput {#playlist_DeleteFromInput}

```c
VLC_API int playlist_DeleteFromInput( playlist_t *p_playlist, input_item_t *p_item, bool b_forced );
```

### 描述
该函数用于从播放列表中删除指定的输入项。如果 `b_forced` 为 `true`，则即使输入项当前正在播放，也会强制删除。

### 参数说明

| 参数名       | 类型           | 描述                                                                 |
|--------------|----------------|--------------------------------------------------------------------------|
| p_playlist   | playlist_t*    | 指向播放列表对象的指针，表示要从哪个播放列表中删除输入项。               |
| p_item       | input_item_t*  | 指向要删除的输入项的指针。                                               |
| b_forced     | bool           | 如果为 `true`，则强制删除输入项，即使该输入项当前正在播放。如果为 `false`，则仅在输入项未播放时删除。 |

### 返回值

- `0`：成功删除输入项。
- `-1`：删除失败，可能是因为输入项当前正在播放且 `b_forced` 为 `false`。
## playlist_Add {#playlist_Add}

```c
VLC_API int playlist_Add( playlist_t *p_playlist, const char *psz_uri, const char *psz_name, int i_mode, int i_pos, bool b_playlist, bool b_loop );
```

### 描述
该函数用于向播放列表中添加一个项目。它支持多种添加模式，并且可以指定是否在播放列表中循环播放。

### 函数参数说明

| 参数名       | 类型      | 描述                                                                 |
|--------------|-----------|----------------------------------------------------------------------|
| `p_playlist` | `playlist_t *` | 指向播放列表对象的指针，表示要添加项目的播放列表。                   |
| `psz_uri`    | `const char *` | 要添加的项目的URI（统一资源标识符）。                                |
| `psz_name`   | `const char *` | 项目的名称，如果为`NULL`，则使用URI作为名称。                        |
| `i_mode`     | `int`         | 添加模式，指定如何添加项目。常见的模式包括：<br>- `PLAYLIST_INSERT`：插入项目。<br>- `PLAYLIST_APPEND`：追加项目。<br>- `PLAYLIST_PREPARSE`：预解析项目。 |
| `i_pos`      | `int`         | 插入位置，指定项目在播放列表中的位置。如果为`-1`，则表示追加到末尾。 |
| `b_playlist` | `bool`        | 是否将项目添加到播放列表中。如果为`true`，则添加到播放列表；否则不添加。 |
| `b_loop`     | `bool`        | 是否循环播放。如果为`true`，则在播放列表中循环播放该项目。           |

### 函数返回值

- `0`：成功添加项目。
- `-1`：添加项目失败。
## playlist_AddExt {#playlist_AddExt}

```c
VLC_API int playlist_AddExt( playlist_t *p_playlist, const char *psz_uri, const char *psz_name, int i_mode, int i_options, mtime_t i_duration, int i_input_count, const char *const *ppsz_input_list, unsigned i_input_list_id, bool b_playlist, bool b_playlist_locked );
```

### 描述
该函数用于向播放列表中添加一个外部资源。它允许指定资源的URI、名称、添加模式、选项、持续时间、输入列表等信息。

### 函数参数说明

| 参数名               | 类型          | 描述                                                                 |
|----------------------|---------------|--------------------------------------------------------------------------|
| `p_playlist`         | `playlist_t *`| 指向播放列表对象的指针。                                                 |
| `psz_uri`            | `const char *`| 资源的URI字符串。                                                        |
| `psz_name`           | `const char *`| 资源的名称字符串。                                                       |
| `i_mode`             | `int`         | 添加模式，指定如何处理播放列表中的现有项。                               |
| `i_options`          | `int`         | 选项的数量。                                                             |
| `i_duration`         | `mtime_t`     | 资源的持续时间，以微秒为单位。                                           |
| `i_input_count`      | `int`         | 输入列表中的输入数量。                                                   |
| `ppsz_input_list`    | `const char *const *` | 指向输入列表的指针数组。                                             |
| `i_input_list_id`    | `unsigned`    | 输入列表的ID。                                                           |
| `b_playlist`         | `bool`        | 指示是否将资源添加到播放列表中。                                         |
| `b_playlist_locked`  | `bool`        | 指示播放列表是否被锁定。                                                 |

### 函数返回值
- `0`：成功添加资源到播放列表。
- `-1`：添加资源失败。
## playlist_AddInput {#playlist_AddInput}

```c
VLC_API int playlist_AddInput(playlist_t *p_playlist, input_item_t *p_input, int i_mode, int i_pos, bool b_playlist, bool b_play);
```

### 函数描述
该函数用于向播放列表中添加一个输入项。它允许指定添加模式、位置以及是否立即播放。

### 函数参数说明

| 参数名       | 类型          | 描述                                                                 |
|--------------|---------------|--------------------------------------------------------------------------|
| p_playlist   | playlist_t *  | 指向播放列表对象的指针，表示要添加输入项的播放列表。                     |
| p_input      | input_item_t *| 指向输入项对象的指针，表示要添加到播放列表中的输入项。                   |
| i_mode       | int           | 添加模式，指定如何添加输入项。可能的值包括：<br>- `PLAYLIST_INSERT`<br>- `PLAYLIST_APPEND`<br>- `PLAYLIST_PREPARSE` |
| i_pos        | int           | 添加位置，指定输入项在播放列表中的位置。如果为 `-1`，则表示追加到末尾。 |
| b_playlist   | bool          | 是否将输入项添加到播放列表中。如果为 `true`，则添加到播放列表；否则不添加。 |
| b_play       | bool          | 是否在添加后立即播放输入项。如果为 `true`，则立即播放；否则不播放。       |

### 函数返回值
- 如果函数成功执行，返回 `0`。
- 如果函数执行失败，返回 `-1`。
## playlist_NodeAddInput {#playlist_NodeAddInput}

```c
VLC_API playlist_item_t * playlist_NodeAddInput( playlist_t *p_playlist, input_item_t *p_input, playlist_item_t *p_parent, int i_mode, int i_pos, bool b_duplicate );
```

### 函数描述
该函数用于将一个输入项（`input_item_t`）添加到播放列表中的指定节点（`playlist_item_t`）下。可以通过指定插入模式（`i_mode`）和插入位置（`i_pos`）来控制新项的插入方式。如果 `b_duplicate` 为 `true`，则会在插入前复制输入项。

### 函数参数说明

| 参数名       | 类型              | 描述                                                                 |
|--------------|-------------------|----------------------------------------------------------------------|
| `p_playlist` | `playlist_t *`    | 指向播放列表对象的指针，表示要操作的播放列表。                       |
| `p_input`    | `input_item_t *`  | 指向要添加到播放列表中的输入项的指针。                               |
| `p_parent`   | `playlist_item_t *` | 指向目标节点的指针，新输入项将作为该节点的子项。如果为 `NULL`，则新项将添加到根节点下。 |
| `i_mode`     | `int`             | 插入模式，控制新项的插入方式。常见的模式包括插入到指定位置或追加到末尾。 |
| `i_pos`      | `int`             | 插入位置，指定新项在父节点中的插入位置。如果 `i_mode` 为追加模式，则此参数无效。 |
| `b_duplicate`| `bool`            | 如果为 `true`，则在插入前复制输入项；如果为 `false`，则直接插入原输入项。 |

### 函数返回值
- 成功时，返回指向新创建的播放列表项（`playlist_item_t`）的指针。
- 如果插入失败（例如，输入项无效或播放列表对象无效），则返回 `NULL`。
## playlist_NodeAddCopy {#playlist_NodeAddCopy}

```c
VLC_API int playlist_NodeAddCopy( playlist_t *p_playlist, playlist_item_t *p_item, playlist_item_t *p_node, int i_mode );
```

### 描述
该函数用于将一个播放列表项复制到指定的节点中。它允许你将一个播放列表项复制到另一个节点中，并可以选择复制的方式（如复制、移动等）。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_playlist` | `playlist_t *`      | 指向播放列表对象的指针，表示当前操作的播放列表。                     |
| `p_item`     | `playlist_item_t *` | 指向要复制的播放列表项的指针。                                       |
| `p_node`     | `playlist_item_t *` | 指向目标节点的指针，表示要将 `p_item` 复制到的节点。                 |
| `i_mode`     | `int`               | 复制模式，指定如何处理复制的项。常见的模式包括复制、移动等。         |

### 函数返回值
- 返回 `0` 表示操作成功。
- 返回 `-1` 表示操作失败。
## playlist_LiveSearchUpdate {#playlist_LiveSearchUpdate}

```c
VLC_API int playlist_LiveSearchUpdate(playlist_t *p_playlist, playlist_item_t *p_root, const char *psz_string, bool b_recursive);
```

### 描述
该函数用于更新播放列表中的实时搜索结果。它根据给定的搜索字符串 `psz_string` 来过滤播放列表中的项目，并将结果存储在指定的根节点 `p_root` 下。如果 `b_recursive` 为真，搜索将递归地应用于所有子节点。

### 函数参数说明

| 参数名        | 类型                | 描述                                                                 |
|---------------|---------------------|----------------------------------------------------------------------|
| `p_playlist`  | `playlist_t *`      | 指向播放列表对象的指针，表示要更新的播放列表。                       |
| `p_root`      | `playlist_item_t *` | 指向播放列表项的指针，表示搜索结果的根节点。                         |
| `psz_string`  | `const char *`      | 指向搜索字符串的指针，用于过滤播放列表中的项目。                     |
| `b_recursive` | `bool`              | 布尔值，表示是否递归地搜索所有子节点。如果为真，则递归搜索；否则不递归。 |

### 函数返回值

- `0`：表示函数成功执行，搜索结果已更新。
- `-1`：表示函数执行失败，可能是由于参数错误或其他内部错误。
## playlist_NodeCreate {#playlist_NodeCreate}

```c
VLC_API playlist_item_t * playlist_NodeCreate( playlist_t *p_playlist, const char *psz_name, playlist_item_t *p_parent, int i_pos, int i_flags, input_item_t *p_input );
```

### 描述
该函数用于在播放列表中创建一个新的节点。节点可以是一个文件夹或一个播放列表项。

### 参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| p_playlist   | `playlist_t *`      | 指向播放列表对象的指针，表示要在其中创建节点的播放列表。             |
| psz_name     | `const char *`      | 新节点的名称。                                                       |
| p_parent     | `playlist_item_t *` | 指向父节点的指针，表示新节点将作为其子节点。如果为 `NULL`，则新节点将成为根节点。 |
| i_pos        | `int`               | 新节点在父节点中的插入位置。如果为 `-1`，则新节点将插入到父节点的末尾。 |
| i_flags      | `int`               | 节点的标志，用于指定节点的属性。                                     |
| p_input      | `input_item_t *`    | 指向输入项的指针，表示与新节点关联的媒体项。如果为 `NULL`，则新节点将是一个文件夹。 |

### 返回值
- 如果成功创建节点，则返回指向新创建节点的指针。
- 如果创建失败，则返回 `NULL`。
## playlist_NodeAppend {#playlist_NodeAppend}

```c
VLC_API int playlist_NodeAppend(playlist_t *p_playlist, playlist_item_t *p_item, playlist_item_t *p_parent);
```

### 描述
该函数用于将一个播放列表项（`playlist_item_t`）追加到另一个播放列表项（`playlist_item_t`）的子节点中。通常用于在播放列表中添加新的播放项或子节点。

### 函数参数说明

| 参数名       | 类型                | 描述                                                                 |
|--------------|---------------------|----------------------------------------------------------------------|
| `p_playlist` | `playlist_t *`       | 指向播放列表对象的指针，表示当前操作的播放列表。                     |
| `p_item`     | `playlist_item_t *`  | 指向要追加的播放列表项的指针，表示要添加到播放列表中的项。           |
| `p_parent`   | `playlist_item_t *`  | 指向目标父节点的指针，表示要将 `p_item` 追加到哪个父节点下。         |

### 函数返回值

- **返回值类型**: `int`
- **返回值说明**:
  - `0`：表示函数成功执行，播放列表项已成功追加到指定的父节点下。
  - `非0`：表示函数执行失败，可能由于参数错误或其他原因导致追加操作未能成功。
## playlist_NodeInsert {#playlist_NodeInsert}

```c
VLC_API int playlist_NodeInsert(playlist_t *p_playlist, playlist_item_t *p_item, playlist_item_t *p_parent, int i_pos);
```

### 描述
该函数用于将一个播放列表项插入到指定的播放列表节点中。插入的位置由 `i_pos` 参数指定。

### 函数参数说明

| 参数名       | 类型              | 描述                                                                 |
|--------------|-------------------|--------------------------------------------------------------------------|
| `p_playlist` | `playlist_t *`    | 指向播放列表对象的指针，表示要操作的播放列表。                         |
| `p_item`     | `playlist_item_t*`| 指向要插入的播放列表项的指针。                                         |
| `p_parent`   | `playlist_item_t*`| 指向目标父节点的指针，表示要将 `p_item` 插入到该节点下。               |
| `i_pos`      | `int`             | 插入位置的索引。如果 `i_pos` 为 `-1`，则表示将 `p_item` 插入到父节点的末尾。|

### 函数返回值

- **返回值为 `0`**：表示插入操作成功。
- **返回值为 `-1`**：表示插入操作失败，可能是因为参数无效或内存分配失败。
## playlist_NodeRemoveItem {#playlist_NodeRemoveItem}

```c
VLC_API int playlist_NodeRemoveItem(playlist_t *p_playlist, playlist_item_t *p_node, playlist_item_t *p_item);
```

### 描述
该函数用于从播放列表节点中移除指定的播放列表项。

### 函数参数说明

| 参数名        | 类型                | 描述                                                                 |
|---------------|---------------------|----------------------------------------------------------------------|
| `p_playlist`  | `playlist_t *`      | 指向播放列表对象的指针，表示要操作的播放列表。                       |
| `p_node`      | `playlist_item_t *` | 指向播放列表节点的指针，表示要从中移除项的节点。                     |
| `p_item`      | `playlist_item_t *` | 指向播放列表项的指针，表示要从节点中移除的项。                       |

### 函数返回值

- `0`：成功移除播放列表项。
- `-1`：移除操作失败，可能是因为节点或项不存在，或者参数无效。
## playlist_NodeDelete {#playlist_NodeDelete}

```c
VLC_API int playlist_NodeDelete( playlist_t *p_playlist, playlist_item_t *p_node, bool b_forced, bool b_root_delete );
```

### 描述
该函数用于从播放列表中删除一个节点。如果 `b_forced` 为 `true`，则即使节点正在播放，也会强制删除。如果 `b_root_delete` 为 `true`，则删除根节点。

### 函数参数说明

| 参数名        | 类型              | 描述                                                                 |
|---------------|-------------------|--------------------------------------------------------------------------|
| p_playlist    | playlist_t *      | 指向播放列表对象的指针，表示要操作的播放列表。                         |
| p_node        | playlist_item_t * | 指向要删除的播放列表节点的指针。                                       |
| b_forced      | bool              | 如果为 `true`，则强制删除节点，即使节点正在播放。                      |
| b_root_delete | bool              | 如果为 `true`，则允许删除根节点。如果为 `false`，则不允许删除根节点。 |

### 函数返回值

- `0`：成功删除节点。
- `-1`：删除失败，可能是因为节点正在播放且 `b_forced` 为 `false`，或者尝试删除根节点且 `b_root_delete` 为 `false`。
## playlist_VolumeGet {#playlist_VolumeGet}

```c
VLC_API float playlist_VolumeGet( playlist_t *p_playlist );
```

### 描述
该函数用于获取播放列表的当前音量。音量值以浮点数形式返回，范围从 0.0（静音）到 1.0（最大音量）。

### 函数参数说明

| 参数名       | 类型        | 描述                     |
|--------------|-------------|--------------------------|
| `p_playlist` | `playlist_t*` | 指向播放列表对象的指针。 |

### 函数返回值
- **返回值类型**: `float`
- **返回值范围**: 0.0 到 1.0
  - `0.0`: 表示播放列表当前音量为静音。
  - `1.0`: 表示播放列表当前音量为最大音量。
  - 其他值: 表示播放列表当前音量在 0.0 到 1.0 之间的某个值。
## playlist_VolumeSet {#playlist_VolumeSet}

```c
VLC_API int playlist_VolumeSet( playlist_t *p_playlist, float volume );
```

### 描述
该函数用于设置播放列表的音量。音量值应在0.0到2.0之间，其中1.0表示正常音量，0.0表示静音，2.0表示两倍音量。

### 函数参数说明

| 参数名       | 类型    | 描述                                                         |
|--------------|---------|--------------------------------------------------------------|
| `p_playlist` | `playlist_t *` | 指向播放列表对象的指针，表示要设置音量的播放列表。           |
| `volume`     | `float` | 要设置的音量值，范围为0.0到2.0，其中1.0表示正常音量。        |

### 函数返回值

- **返回值为0**：表示音量设置成功。
- **返回值为负数**：表示音量设置失败，具体错误码取决于实现。
## playlist_VolumeUp {#playlist_VolumeUp}

```c
VLC_API int playlist_VolumeUp( playlist_t *p_playlist, int i_nb_steps, float *pf_volume );
```

### 描述
该函数用于增加播放列表的音量。它会将音量增加指定的步数，并返回新的音量值。

### 函数参数说明

| 参数名       | 类型       | 描述                                                                 |
|--------------|------------|----------------------------------------------------------------------|
| p_playlist   | playlist_t*| 指向播放列表对象的指针，表示要操作的播放列表。                       |
| i_nb_steps   | int        | 音量增加的步数，每步增加的音量大小由播放列表的音量步长决定。         |
| pf_volume    | float*     | 指向浮点数的指针，用于存储增加音量后的新音量值。如果不需要返回值，可以传入 NULL。 |

### 函数返回值
- 返回 `0` 表示成功增加音量。
- 返回 `-1` 表示操作失败，可能是由于播放列表对象无效或其他错误。

新音量值将通过 `pf_volume` 指针返回，前提是该指针不为 `NULL`。
## playlist_MuteSet {#playlist_MuteSet}

```c
VLC_API int playlist_MuteSet( playlist_t *p_playlist, bool mute );
```

### 描述
该函数用于设置播放列表的静音状态。如果 `mute` 参数为 `true`，则播放列表将被静音；如果为 `false`，则取消静音。

### 函数参数说明

| 参数名       | 类型    | 描述                                                         |
|--------------|---------|--------------------------------------------------------------|
| `p_playlist` | `playlist_t *` | 指向播放列表对象的指针，表示要设置静音状态的播放列表。 |
| `mute`       | `bool`        | 布尔值，表示是否将播放列表静音。`true` 表示静音，`false` 表示取消静音。 |

### 函数返回值

- `0`：成功设置或取消静音状态。
- `-1`：设置静音状态失败。可能的原因包括播放列表对象无效或内部错误。
## playlist_MuteGet {#playlist_MuteGet}

```c
VLC_API int playlist_MuteGet( playlist_t *p_playlist );
```

### 描述
该函数用于获取播放列表的静音状态。

### 函数参数说明

| 参数名       | 类型        | 描述                 |
|--------------|-------------|----------------------|
| `p_playlist` | `playlist_t*` | 指向播放列表对象的指针 |

### 函数返回值
- `0`：播放列表未静音。
- `1`：播放列表已静音。
- `-1`：发生错误。
## playlist_MuteToggle {#playlist_MuteToggle}

```c
static inline int playlist_MuteToggle( playlist_t *pl )
```

### 函数描述
该函数用于切换播放列表的静音状态。它首先获取当前的静音状态，然后根据当前状态设置相反的静音状态。

### 函数参数说明

| 参数名 | 类型       | 描述                     |
|--------|------------|--------------------------|
| `pl`   | `playlist_t*` | 指向播放列表对象的指针。 |

### 函数返回值
- 如果成功切换静音状态，返回新的静音状态值（0 表示未静音，1 表示静音）。
- 如果获取或设置静音状态失败，返回负值。
## playlist_EnableAudioFilter {#playlist_EnableAudioFilter}

```c
VLC_API void playlist_EnableAudioFilter(playlist_t *p_playlist, const char *psz_name, bool b_add);
```

### 描述
该函数用于启用或禁用播放列表中的音频滤镜。通过传递滤镜的名称和布尔值来决定是添加还是移除该滤镜。

### 函数参数说明

| 参数名       | 类型      | 描述                                                                 |
|--------------|-----------|----------------------------------------------------------------------|
| `p_playlist` | `playlist_t *` | 指向播放列表对象的指针，表示要操作的播放列表。                           |
| `psz_name`   | `const char *` | 指向滤镜名称的字符串指针，表示要启用或禁用的音频滤镜的名称。             |
| `b_add`      | `bool`        | 布尔值，表示是否添加滤镜。如果为 `true`，则添加滤镜；如果为 `false`，则移除滤镜。 |

### 函数返回值
该函数没有返回值。
## playlist_IsEmpty {#playlist_IsEmpty}

```c
static inline bool playlist_IsEmpty( playlist_t *p_playlist )
```

### 函数描述
该函数用于判断播放列表是否为空。如果播放列表中没有任何项目，则返回 `true`，否则返回 `false`。

### 函数参数说明

| 参数名        | 类型        | 描述                   |
|---------------|-------------|------------------------|
| `p_playlist`  | `playlist_t*` | 指向播放列表结构的指针 |

### 函数返回值
- **`true`**: 播放列表为空。
- **`false`**: 播放列表不为空。
## playlist_CurrentSize {#playlist_CurrentSize}

```c
static inline int playlist_CurrentSize( playlist_t *p_playlist )
```

### 函数描述
该函数用于获取当前播放列表中的项目数量。

### 函数参数说明

| 参数名       | 类型        | 描述                   |
|--------------|-------------|------------------------|
| `p_playlist` | `playlist_t*` | 指向播放列表结构的指针 |

### 函数返回值
- 返回当前播放列表中的项目数量。
## playlist_item_t {#playlist_item_t}

```c
struct playlist_item_t
{
    input_item_t           *p_input;    /**< Linked input item */

    playlist_item_t      **pp_children; /**< Children nodes/items */
    playlist_item_t       *p_parent;    /**< Item parent */
    int                    i_children;  /**< Number of children, -1 if not a node */

    int                    i_id;        /**< Playlist item specific id */
    uint8_t                i_flags;     /**< Flags \see playlist_item_flags_e */

    playlist_t            *p_playlist;  /**< Parent playlist */
};
```

### 描述
`playlist_item_t` 结构体用于表示播放列表中的一个项目或节点。它包含了与该播放列表项相关的各种信息，如链接的输入项、子节点、父节点、子节点数量、特定ID、标志以及所属的播放列表。

### 成员变量说明

| 成员变量       | 类型                | 描述                                                                 |
|----------------|---------------------|----------------------------------------------------------------------|
| `p_input`      | `input_item_t*`     | 指向与此播放列表项关联的输入项的指针。                                 |
| `pp_children`  | `playlist_item_t**` | 指向子节点/项目的指针数组。如果此项是一个节点，则此数组包含其子节点。 |
| `p_parent`     | `playlist_item_t*`  | 指向此项的父节点的指针。如果此项是根节点，则此指针为 `NULL`。         |
| `i_children`   | `int`               | 子节点的数量。如果此项不是一个节点，则此值为 `-1`。                   |
| `i_id`         | `int`               | 此播放列表项的特定ID。                                                |
| `i_flags`      | `uint8_t`           | 标志位，用于表示此项的状态或属性。具体标志位定义在 `playlist_item_flags_e` 中。 |
| `p_playlist`   | `playlist_t*`       | 指向此项所属的播放列表的指针。                                       |

### 返回值
此结构体没有返回值，因为它是一个定义数据结构的结构体。
## playlist_t {#playlist_t}

```c
struct playlist_t
{
    VLC_COMMON_MEMBERS

    playlist_item_array_t items; /**< Arrays of items */
    playlist_item_array_t all_items; /**< Array of items and nodes */

    playlist_item_array_t current; /**< Items currently being played */
    int                   i_current_index; /**< Index in current array */

    /* Predefined items */
    playlist_item_t *     p_root;
    playlist_item_t *     p_playing;
    playlist_item_t *     p_media_library;

    //Phony ones, point to those above;
    playlist_item_t *     p_root_category; /**< Root of category tree */
    playlist_item_t *     p_root_onelevel; /**< Root of onelevel tree */
    playlist_item_t *     p_local_category; /** < "Playlist" in CATEGORY view */
    playlist_item_t *     p_ml_category; /** < "Library" in CATEGORY view */
    playlist_item_t *     p_local_onelevel; /** < "Playlist" in ONELEVEL view */
    playlist_item_t *     p_ml_onelevel; /** < "Library" in ONELEVEL view */
};
```

### 描述
该结构体包含有关播放列表的信息。

### 成员说明

| 成员名称                | 类型                      | 描述                                                                 |
|-------------------------|---------------------------|--------------------------------------------------------------------------|
| `items`                 | `playlist_item_array_t`   | 播放列表项的数组。                                                       |
| `all_items`             | `playlist_item_array_t`   | 播放列表项和节点的数组。                                                 |
| `current`               | `playlist_item_array_t`   | 当前正在播放的项的数组。                                                 |
| `i_current_index`       | `int`                     | 当前播放项在数组中的索引。                                               |
| `p_root`                | `playlist_item_t *`       | 根节点。                                                               |
| `p_playing`             | `playlist_item_t *`       | 当前正在播放的节点。                                                     |
| `p_media_library`       | `playlist_item_t *`       | 媒体库节点。                                                           |
| `p_root_category`       | `playlist_item_t *`       | 类别树的根节点。                                                       |
| `p_root_onelevel`       | `playlist_item_t *`       | 单层树的根节点。                                                       |
| `p_local_category`      | `playlist_item_t *`       | 类别视图中的“播放列表”节点。                                             |
| `p_ml_category`         | `playlist_item_t *`       | 类别视图中的“媒体库”节点。                                               |
| `p_local_onelevel`      | `playlist_item_t *`       | 单层视图中的“播放列表”节点。                                             |
| `p_ml_onelevel`         | `playlist_item_t *`       | 单层视图中的“媒体库”节点。                                               |

### 返回值
该结构体没有返回值，因为它是一个定义，而不是一个函数。
## playlist_add_t {#playlist_add_t}

```c
struct playlist_add_t
{
    int i_node; /**< Playist id of the parent node */
    int i_item; /**< Playist id of the playlist_item_t */
};
```

### 描述
`playlist_add_t` 结构体用于在播放列表中添加一个项目。它包含了两个整数成员，分别表示父节点的播放列表ID和要添加的播放列表项目的ID。

### 参数说明

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| `i_node` | `int` | 父节点的播放列表ID |
| `i_item` | `int` | 要添加的播放列表项目的ID |

### 返回值
该结构体本身不返回值，它用于存储和传递数据。
