## vlc_mouse_Init {#vlc_mouse_Init}

```c
static inline void vlc_mouse_Init(vlc_mouse_t *p_mouse)
{
    p_mouse->i_x = 0;
    p_mouse->i_y = 0;
    p_mouse->i_pressed = 0;
    p_mouse->b_double_click = false;
}
```

### 函数描述
该函数用于初始化 `vlc_mouse_t` 结构体，将其所有成员变量设置为默认值。

### 函数参数说明

| 参数名    | 类型        | 描述                 |
|-----------|-------------|----------------------|
| `p_mouse` | `vlc_mouse_t*` | 指向 `vlc_mouse_t` 结构体的指针，该结构体将被初始化。 |

### 函数返回值
该函数没有返回值。
## vlc_mouse_SetPressed {#vlc_mouse_SetPressed}

```c
static inline void vlc_mouse_SetPressed(vlc_mouse_t *p_mouse, int i_button)
{
    p_mouse->i_pressed |= 1 << i_button;
}
```

### 函数描述
该函数用于设置鼠标按钮的按下状态。它通过将 `p_mouse` 结构体中的 `i_pressed` 字段的相应位设置为1，来标记指定按钮的按下状态。

### 函数参数说明

| 参数名    | 类型        | 描述                                                                 |
|-----------|-------------|----------------------------------------------------------------------|
| `p_mouse` | `vlc_mouse_t*` | 指向 `vlc_mouse_t` 结构体的指针，表示当前鼠标状态。                  |
| `i_button`| `int`       | 表示鼠标按钮的索引。通常 `0` 表示左键，`1` 表示右键，`2` 表示中键等。|

### 函数返回值
该函数没有返回值（`void`）。
## vlc_mouse_SetReleased {#vlc_mouse_SetReleased}

```c
static inline void vlc_mouse_SetReleased(vlc_mouse_t *p_mouse, int i_button)
{
    p_mouse->i_pressed &= ~(1 << i_button);
}
```

### 描述
该函数用于设置鼠标按钮为释放状态。它通过清除 `p_mouse` 结构体中 `i_pressed` 字段的相应位来实现这一点。

### 参数说明

| 参数名    | 类型        | 描述                                                                 |
|-----------|-------------|----------------------------------------------------------------------|
| `p_mouse` | `vlc_mouse_t*` | 指向 `vlc_mouse_t` 结构体的指针，表示当前鼠标状态。                 |
| `i_button`| `int`        | 表示要释放的鼠标按钮的索引。通常 `0` 表示左键，`1` 表示右键，以此类推。 |

### 返回值
该函数没有返回值（`void`）。
## vlc_mouse_SetPosition {#vlc_mouse_SetPosition}

```c
static inline void vlc_mouse_SetPosition(vlc_mouse_t *p_mouse, int i_x, int i_y)
{
    p_mouse->i_x = i_x;
    p_mouse->i_y = i_y;
}
```

### 函数描述
该函数用于设置鼠标的位置。它将鼠标的 `x` 和 `y` 坐标分别设置为传入的 `i_x` 和 `i_y` 值。

### 函数参数说明

| 参数名   | 类型        | 描述                   |
|----------|-------------|------------------------|
| `p_mouse`| `vlc_mouse_t*` | 指向 `vlc_mouse_t` 结构体的指针，表示鼠标的状态。 |
| `i_x`    | `int`       | 鼠标的 `x` 坐标。       |
| `i_y`    | `int`       | 鼠标的 `y` 坐标。       |

### 函数返回值
该函数没有返回值（`void`）。
## vlc_mouse_IsPressed {#vlc_mouse_IsPressed}

```c
static inline bool vlc_mouse_IsPressed(const vlc_mouse_t *p_mouse, int i_button)
{
    return (p_mouse->i_pressed & (1 << i_button)) != 0;
}
```

### 函数描述
该函数用于检查指定鼠标按钮是否被按下。它通过检查 `p_mouse` 结构体中的 `i_pressed` 字段来确定按钮的状态。

### 函数参数说明

| 参数名    | 类型          | 描述                                                                 |
|-----------|---------------|--------------------------------------------------------------------------|
| p_mouse   | const vlc_mouse_t* | 指向 `vlc_mouse_t` 结构体的指针，该结构体包含鼠标状态信息。 |
| i_button  | int           | 要检查的鼠标按钮的索引。通常，左键为 0，右键为 1，中键为 2。 |

### 函数返回值
- **true**: 如果指定的鼠标按钮被按下。
- **false**: 如果指定的鼠标按钮没有被按下。
## vlc_mouse_IsLeftPressed {#vlc_mouse_IsLeftPressed}

```c
static inline bool vlc_mouse_IsLeftPressed( const vlc_mouse_t *p_mouse )
```

### 描述
该函数用于检查鼠标左键是否被按下。它通过调用 `vlc_mouse_IsPressed` 函数并传递 `MOUSE_BUTTON_LEFT` 参数来实现。

### 函数参数说明

| 参数名    | 类型            | 描述               |
|-----------|-----------------|--------------------|
| `p_mouse` | `const vlc_mouse_t *` | 指向 `vlc_mouse_t` 结构的指针，表示当前鼠标状态。 |

### 函数返回值
- **返回值类型**: `bool`
  - **`true`**: 如果鼠标左键被按下。
  - **`false`**: 如果鼠标左键未被按下。
## vlc_mouse_IsCenterPressed {#vlc_mouse_IsCenterPressed}

```c
static inline bool vlc_mouse_IsCenterPressed( const vlc_mouse_t *p_mouse )
```

### 函数描述
该函数用于检查鼠标的中键是否被按下。它通过调用 `vlc_mouse_IsPressed` 函数并传递 `MOUSE_BUTTON_CENTER` 参数来实现。

### 函数参数说明

| 参数名       | 类型                | 描述                 |
|--------------|---------------------|----------------------|
| `p_mouse`    | `const vlc_mouse_t*` | 指向 `vlc_mouse_t` 结构的指针，表示当前鼠标状态。 |

### 函数返回值
- **`true`**: 如果鼠标的中键被按下。
- **`false`**: 如果鼠标的中键没有被按下。
## vlc_mouse_IsRightPressed {#vlc_mouse_IsRightPressed}

```c
static inline bool vlc_mouse_IsRightPressed( const vlc_mouse_t *p_mouse )
```

### 描述
该函数用于检查鼠标右键是否被按下。它通过调用 `vlc_mouse_IsPressed` 函数并传入 `MOUSE_BUTTON_RIGHT` 参数来实现。

### 函数参数说明

| 参数名       | 类型                | 描述                 |
|--------------|---------------------|----------------------|
| `p_mouse`    | `const vlc_mouse_t*` | 指向 `vlc_mouse_t` 结构的指针，表示当前鼠标状态。 |

### 函数返回值
- **返回值类型**: `bool`
  - **返回值说明**:
    - `true`: 表示鼠标右键被按下。
    - `false`: 表示鼠标右键未被按下。
## vlc_mouse_IsWheelUpPressed {#vlc_mouse_IsWheelUpPressed}

```c
static inline bool vlc_mouse_IsWheelUpPressed( const vlc_mouse_t *p_mouse )
```

### 函数描述
该函数用于检查鼠标滚轮向上按钮是否被按下。

### 函数参数说明
| 参数名       | 类型           | 描述                   |
|--------------|----------------|------------------------|
| `p_mouse`    | `const vlc_mouse_t *` | 指向 `vlc_mouse_t` 结构的指针，表示当前鼠标状态。 |

### 函数返回值
- **`true`**: 如果鼠标滚轮向上按钮被按下。
- **`false`**: 如果鼠标滚轮向上按钮未被按下。
## vlc_mouse_IsWheelDownPressed {#vlc_mouse_IsWheelDownPressed}

```c
static inline bool vlc_mouse_IsWheelDownPressed( const vlc_mouse_t *p_mouse )
```

### 函数描述
该函数用于检查鼠标滚轮向下按钮是否被按下。

### 函数参数说明
| 参数名       | 类型           | 描述               |
|--------------|----------------|--------------------|
| `p_mouse`    | `const vlc_mouse_t *` | 指向 `vlc_mouse_t` 结构的指针，表示当前鼠标状态。 |

### 函数返回值
- **`true`**: 如果鼠标滚轮向下按钮被按下。
- **`false`**: 如果鼠标滚轮向下按钮未被按下。
## vlc_mouse_GetMotion {#vlc_mouse_GetMotion}

```c
static inline void vlc_mouse_GetMotion(int *pi_x, int *pi_y,
                                       const vlc_mouse_t *p_old,
                                       const vlc_mouse_t *p_new)
{
    *pi_x = p_new->i_x - p_old->i_x;
    *pi_y = p_new->i_y - p_old->i_y;
}
```

### 函数描述
该函数用于计算鼠标在两个不同时间点的移动量。它通过比较两个 `vlc_mouse_t` 结构体中的 `i_x` 和 `i_y` 字段来确定鼠标的移动距离。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `pi_x` | `int*` | 输出参数，指向存储鼠标在 X 轴上移动距离的整数指针。 |
| `pi_y` | `int*` | 输出参数，指向存储鼠标在 Y 轴上移动距离的整数指针。 |
| `p_old` | `const vlc_mouse_t*` | 指向旧的 `vlc_mouse_t` 结构体的指针，表示鼠标在较早时间点的位置。 |
| `p_new` | `const vlc_mouse_t*` | 指向新的 `vlc_mouse_t` 结构体的指针，表示鼠标在较晚时间点的位置。 |

### 函数返回值
该函数没有返回值，所有计算结果通过输出参数 `pi_x` 和 `pi_y` 返回。
## vlc_mouse_HasChanged {#vlc_mouse_HasChanged}

```c
static inline bool vlc_mouse_HasChanged(const vlc_mouse_t *p_old, const vlc_mouse_t *p_new)
{
    return p_old->i_x != p_new->i_x || p_old->i_y != p_new->i_y ||
           p_old->i_pressed != p_new->i_pressed;
}
```

### 函数描述
该函数用于检查两个 `vlc_mouse_t` 结构体是否在鼠标位置或按键状态上发生了变化。如果任意一个鼠标位置坐标（x 或 y）或按键状态（pressed）不同，则认为鼠标状态发生了变化。

### 函数参数说明

| 参数名   | 类型           | 描述                                       |
|----------|----------------|--------------------------------------------|
| `p_old`  | `const vlc_mouse_t *` | 指向旧的鼠标状态结构体的指针               |
| `p_new`  | `const vlc_mouse_t *` | 指向新的鼠标状态结构体的指针               |

### 函数返回值
- **`true`**: 如果旧的鼠标状态与新的鼠标状态在位置或按键状态上不同。
- **`false`**: 如果旧的鼠标状态与新的鼠标状态完全相同。
## vlc_mouse_HasMoved {#vlc_mouse_HasMoved}

```c
static inline bool vlc_mouse_HasMoved(const vlc_mouse_t *p_old, const vlc_mouse_t *p_new)
{
    return p_old->i_x != p_new->i_x || p_old->i_y != p_new->i_y;
}
```

### 函数描述
该函数用于检查鼠标位置是否发生了移动。它通过比较两个 `vlc_mouse_t` 结构体中的 `i_x` 和 `i_y` 坐标来判断鼠标是否移动。

### 函数参数说明

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `p_old` | `const vlc_mouse_t *` | 旧的鼠标状态结构体指针 |
| `p_new` | `const vlc_mouse_t *` | 新的鼠标状态结构体指针 |

### 函数返回值
- **返回值类型**: `bool`
- **返回值说明**:
  - `true`: 如果鼠标的 `i_x` 或 `i_y` 坐标与旧状态不同，则返回 `true`，表示鼠标位置发生了移动。
  - `false`: 如果鼠标的 `i_x` 和 `i_y` 坐标与旧状态相同，则返回 `false`，表示鼠标位置未发生移动。
## vlc_mouse_HasButton {#vlc_mouse_HasButton}

```c
static inline bool vlc_mouse_HasButton( const vlc_mouse_t *p_old, const vlc_mouse_t *p_new )
{
    return p_old->i_pressed != p_new->i_pressed;
}
```

### 函数描述
该函数用于检查两个鼠标状态之间是否存在按钮状态的变化。如果旧的鼠标状态和新的鼠标状态在按下的按钮上有差异，则返回 `true`，否则返回 `false`。

### 函数参数说明

| 参数名   | 类型           | 描述                                                         |
|----------|----------------|--------------------------------------------------------------|
| `p_old`  | `const vlc_mouse_t *` | 指向旧的鼠标状态结构的指针，表示之前的鼠标状态。 |
| `p_new`  | `const vlc_mouse_t *` | 指向新的鼠标状态结构的指针，表示当前的鼠标状态。 |

### 函数返回值
- **`true`**: 如果旧的鼠标状态和新的鼠标状态在按下的按钮上有差异。
- **`false`**: 如果旧的鼠标状态和新的鼠标状态在按下的按钮上没有差异。
## vlc_mouse_HasPressed {#vlc_mouse_HasPressed}

```c
static inline bool vlc_mouse_HasPressed(const vlc_mouse_t *p_old,
                                         const vlc_mouse_t *p_new,
                                         int i_button)
{
    const int i_mask = 1 << i_button;
    return (p_old->i_pressed & i_mask) == 0 && (p_new->i_pressed & i_mask);
}
```

### 函数描述
该函数用于检查鼠标按钮是否在两个状态之间被按下。它通过比较两个 `vlc_mouse_t` 结构体中的 `i_pressed` 字段来确定按钮状态的变化。

### 函数参数说明

| 参数名    | 类型            | 描述                                                                 |
|-----------|-----------------|----------------------------------------------------------------------|
| `p_old`   | `const vlc_mouse_t *` | 指向旧的鼠标状态结构体的指针。                                         |
| `p_new`   | `const vlc_mouse_t *` | 指向新的鼠标状态结构体的指针。                                         |
| `i_button`| `int`             | 要检查的鼠标按钮的索引（例如，左键为0，右键为1，中键为2，等等）。 |

### 函数返回值
- **返回值类型**: `bool`
- **返回值说明**:
  - `true`: 如果按钮在旧状态中未被按下，而在新状态中被按下，则返回 `true`。
  - `false`: 如果按钮在旧状态中已被按下，或者在新状态中未被按下，则返回 `false`。
## vlc_mouse_HasReleased {#vlc_mouse_HasReleased}

```c
static inline bool vlc_mouse_HasReleased(const vlc_mouse_t *p_old, const vlc_mouse_t *p_new, int i_button)
```

### 函数描述
该函数用于检查鼠标按钮是否在两个状态之间被释放。它通过比较旧的鼠标状态和新的鼠标状态来确定指定按钮是否被释放。

### 函数参数说明

| 参数名    | 类型            | 描述                                                                 |
|-----------|-----------------|----------------------------------------------------------------------|
| `p_old`   | `const vlc_mouse_t *` | 指向旧的鼠标状态结构的指针。                                         |
| `p_new`   | `const vlc_mouse_t *` | 指向新的鼠标状态结构的指针。                                         |
| `i_button`| `int`               | 要检查的鼠标按钮的索引（例如，左键为0，右键为1，中键为2等）。       |

### 函数返回值
- **`true`**: 如果指定按钮在旧状态中被按下，而在新状态中被释放。
- **`false`**: 如果指定按钮在旧状态中未被按下，或者在新状态中仍然被按下。
