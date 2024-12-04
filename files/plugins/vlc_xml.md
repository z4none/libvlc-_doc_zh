## xml_Delete {#xml_Delete}

```c
VLC_API void xml_Delete( xml_t * );
```

### 描述
该函数用于删除一个 XML 解析器实例。调用此函数后，传入的 `xml_t` 指针将不再有效，且不应再使用。

### 函数参数说明

| 参数名 | 类型   | 描述               |
|--------|--------|--------------------|
| `xml_t *` | `xml_t *` | 指向要删除的 XML 解析器实例的指针。 |

### 函数返回值
该函数没有返回值。
## xml_CatalogLoad {#xml_CatalogLoad}

```c
static inline void xml_CatalogLoad( xml_t *xml, const char *catalog )
```

### 描述
该函数用于加载 XML 目录。它调用 `xml->pf_catalog_load` 函数来执行实际的加载操作。

### 函数参数说明

| 参数名   | 类型        | 描述                 |
|----------|-------------|----------------------|
| `xml`    | `xml_t *`   | 指向 `xml_t` 结构体的指针，表示 XML 对象。 |
| `catalog`| `const char *` | 指向要加载的 XML 目录的字符串指针。 |

### 函数返回值
该函数没有返回值。
## xml_CatalogAdd {#xml_CatalogAdd}

```c
static inline void xml_CatalogAdd(xml_t *xml, const char *type, const char *orig, const char *value)
{
    xml->pf_catalog_add(xml, type, orig, value);
}
```

### 函数描述
该函数用于向 XML 对象中添加一个目录项。它通过调用 XML 对象的 `pf_catalog_add` 函数指针来实现。

### 函数参数说明

| 参数名 | 类型          | 描述                                                         |
| ------ | ------------- | ------------------------------------------------------------ |
| xml    | `xml_t *`     | 指向 XML 对象的指针，表示要操作的 XML 对象。                 |
| type   | `const char *` | 目录项的类型，表示要添加的目录项的类型。                     |
| orig   | `const char *` | 原始字符串，表示目录项的原始值。                             |
| value  | `const char *` | 目录项的值，表示要添加到目录中的实际值。                     |

### 函数返回值
该函数没有返回值（`void`）。
## xml_ReaderDelete {#xml_ReaderDelete}

```c
VLC_API void xml_ReaderDelete(xml_reader_t *);
```

### 描述
该函数用于删除一个 XML 读取器对象。调用此函数后，XML 读取器对象将被释放，不再可用。

### 函数参数说明

| 参数名         | 类型          | 描述                                                         |
|----------------|---------------|--------------------------------------------------------------|
| `xml_reader_t` | `xml_reader_t*` | 指向要删除的 XML 读取器对象的指针。该对象将被释放并销毁。 |

### 函数返回值
该函数没有返回值。
## xml_ReaderNextNode {#xml_ReaderNextNode}

```c
static inline int xml_ReaderNextNode(xml_reader_t *reader, const char **pval)
```

### 函数描述
该函数用于从XML读取器中获取下一个节点。它通过调用读取器对象中的`pf_next_node`函数指针来实现。

### 函数参数说明

| 参数名   | 类型            | 描述                                                         |
|----------|-----------------|--------------------------------------------------------------|
| reader   | `xml_reader_t*` | 指向XML读取器对象的指针，用于操作XML数据流。                 |
| pval     | `const char**`  | 指向字符串指针的指针，用于存储读取到的节点值。               |

### 函数返回值
- **返回值类型**: `int`
- **返回值说明**:
  - 如果成功读取到下一个节点，返回值为0。
  - 如果读取失败或没有更多节点可读取，返回值为非0。
## xml_ReaderUseDTD {#xml_ReaderUseDTD}

```c
static inline int xml_ReaderUseDTD( xml_reader_t *reader)
```

### 描述
该函数用于启用或禁用XML解析器对DTD（文档类型定义）的使用。如果启用，解析器将根据DTD验证文档的结构和内容。

### 函数参数说明

| 参数名   | 类型          | 描述                                                         |
|----------|---------------|--------------------------------------------------------------|
| reader   | xml_reader_t* | 指向 `xml_reader_t` 结构体的指针，表示要操作的XML解析器实例。 |

### 函数返回值
- **0**: 成功启用或禁用DTD的使用。
- **非0值**: 表示操作失败，可能是由于解析器内部错误或其他原因。
## xml_ReaderIsEmptyElement {#xml_ReaderIsEmptyElement}

```c
static inline int xml_ReaderIsEmptyElement( xml_reader_t *reader )
```

### 函数描述
该函数用于检查当前 XML 元素是否为空元素。空元素是指在 XML 中没有内容的元素，通常以 `<element />` 的形式表示。

### 函数参数说明

| 参数名   | 类型          | 描述                   |
|----------|---------------|------------------------|
| `reader` | `xml_reader_t*` | 指向 `xml_reader_t` 结构的指针，表示 XML 读取器对象。 |

### 函数返回值
- `-2`：如果 `reader->pf_is_empty` 为 `NULL`，表示未初始化或不支持该操作。
- `0`：当前元素不是空元素。
- `1`：当前元素是空元素。
## xml_t {#xml_t}

```c
struct xml_t
{
    VLC_COMMON_MEMBERS

    /* Module properties */
    module_t  *p_module;
    xml_sys_t *p_sys;

    void (*pf_catalog_load) ( xml_t *, const char * );
    void (*pf_catalog_add) ( xml_t *, const char *, const char *,
                            const char * );
};
```

### 描述
`xml_t` 结构体定义了与 XML 处理相关的数据结构。它包含了模块属性、系统相关数据以及两个函数指针，用于加载和添加 XML 目录。

### 成员说明

| 成员名称          | 类型                | 描述                                                                 |
|-------------------|---------------------|----------------------------------------------------------------------|
| `VLC_COMMON_MEMBERS` | 宏定义              | VLC 公共成员，包含一些通用的成员变量和函数指针。                     |
| `p_module`        | `module_t*`         | 指向模块的指针，表示当前 XML 处理模块。                              |
| `p_sys`           | `xml_sys_t*`        | 指向系统相关数据的指针，用于存储与 XML 处理相关的系统特定数据。     |
| `pf_catalog_load` | `void (*)(xml_t *, const char *)` | 函数指针，用于加载 XML 目录。                                        |
| `pf_catalog_add`  | `void (*)(xml_t *, const char *, const char *, const char *)` | 函数指针，用于添加 XML 目录项。                                      |

### 函数指针说明

#### pf_catalog_load
```c
void (*pf_catalog_load) ( xml_t *, const char * );
```

| 参数名称 | 类型        | 描述                             |
|----------|-------------|----------------------------------|
| `xml_t*` | `xml_t*`    | 指向 `xml_t` 结构体的指针。      |
| `const char*` | `const char*` | 指向要加载的 XML 目录路径的字符串。 |

#### pf_catalog_add
```c
void (*pf_catalog_add) ( xml_t *, const char *, const char *, const char * );
```

| 参数名称 | 类型        | 描述                             |
|----------|-------------|----------------------------------|
| `xml_t*` | `xml_t*`    | 指向 `xml_t` 结构体的指针。      |
| `const char*` | `const char*` | 指向 XML 目录项的公共 ID 的字符串。 |
| `const char*` | `const char*` | 指向 XML 目录项的系统 ID 的字符串。 |
| `const char*` | `const char*` | 指向 XML 目录项的 URI 的字符串。     |

### 返回值
该结构体本身没有返回值，但其中的函数指针 `pf_catalog_load` 和 `pf_catalog_add` 的返回值类型为 `void`，表示它们不返回任何值。
## xml_reader_t {#xml_reader_t}

```c
struct xml_reader_t
{
    VLC_COMMON_MEMBERS

    xml_reader_sys_t *p_sys;
    stream_t *p_stream;
    module_t *p_module;

    int (*pf_next_node) ( xml_reader_t *, const char ** );
    const char *(*pf_next_attr) ( xml_reader_t *, const char ** );

    int (*pf_use_dtd) ( xml_reader_t * );
    int (*pf_is_empty) ( xml_reader_t * );
};
```

### 描述
`xml_reader_t` 结构体用于表示一个 XML 读取器。它包含了与 XML 解析相关的成员变量和函数指针，用于处理 XML 文件的读取和解析操作。

### 成员变量说明

| 成员变量       | 类型                | 描述                                                                 |
|----------------|---------------------|----------------------------------------------------------------------|
| `p_sys`        | `xml_reader_sys_t*` | XML 读取器的系统特定数据结构。                                       |
| `p_stream`     | `stream_t*`         | 与 XML 读取器关联的流对象。                                          |
| `p_module`     | `module_t*`         | 与 XML 读取器关联的模块对象。                                        |
| `pf_next_node` | `int (*)(xml_reader_t*, const char **)` | 指向获取下一个 XML 节点的函数指针。返回值为节点类型，节点名称通过第二个参数返回。 |
| `pf_next_attr` | `const char* (*)(xml_reader_t*, const char **)` | 指向获取下一个 XML 属性值的函数指针。属性值通过第二个参数返回。 |
| `pf_use_dtd`   | `int (*)(xml_reader_t*)` | 指向检查是否使用 DTD（文档类型定义）的函数指针。返回值为布尔值。 |
| `pf_is_empty`  | `int (*)(xml_reader_t*)` | 指向检查当前节点是否为空节点的函数指针。返回值为布尔值。 |

### 函数指针说明

#### `pf_next_node`
```c
int (*pf_next_node) ( xml_reader_t *, const char ** );
```
- **描述**: 获取下一个 XML 节点。
- **参数**:
  - `xml_reader_t*`: XML 读取器对象。
  - `const char**`: 用于返回节点名称的指针。
- **返回值**:
  - 返回节点类型（如元素节点、文本节点等）。
  - 如果读取失败，返回负值。

#### `pf_next_attr`
```c
const char* (*pf_next_attr) ( xml_reader_t *, const char ** );
```
- **描述**: 获取下一个 XML 属性值。
- **参数**:
  - `xml_reader_t*`: XML 读取器对象。
  - `const char**`: 用于返回属性名称的指针。
- **返回值**:
  - 返回属性值。
  - 如果没有更多属性，返回 `NULL`。

#### `pf_use_dtd`
```c
int (*pf_use_dtd) ( xml_reader_t * );
```
- **描述**: 检查是否使用 DTD（文档类型定义）。
- **参数**:
  - `xml_reader_t*`: XML 读取器对象。
- **返回值**:
  - 如果使用 DTD，返回非零值。
  - 如果不使用 DTD，返回零。

#### `pf_is_empty`
```c
int (*pf_is_empty) ( xml_reader_t * );
```
- **描述**: 检查当前节点是否为空节点。
- **参数**:
  - `xml_reader_t*`: XML 读取器对象。
- **返回值**:
  - 如果当前节点为空节点，返回非零值。
  - 如果当前节点不为空节点，返回零。
