# Button 按钮

### 介绍
按钮用于触发一个操作，如提交表单。

### 按钮类型

<!-- <code src="./demos/type.tsx" /> -->

### 朴素按钮

<!-- <code src="./demos/plain.tsx" /> -->

### 细边框

<!-- <code src="./demos/hairline.tsx" /> -->


## API

- `style` \| `className` \| `prefixCls` 为通用属性，可以根据自我需求进行自由样式定制

- 如若设置 `prefixCls` 属性, 则表示覆盖所有样式， 需根据使用者需要重新添加样式

### Flex

| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 项目定位方向 | `row` \| `row-reverse` \| `column` \| `column-reverse` | `row` |
| wrap | 子元素的换行方式 | `nowrap` \| `wrap` \| `wrap-reverse` | `nowrap` |
| gutter | 列元素之间的间距。可以使用数组形式同时设置 `[水平间距, 垂直间距]`。 | `number` \| `string` \| `array` | `0` |
| align | 垂直对齐方式 | `top` \| `middle` \| `bottom` | `top` |
| justify | 水平排列方式 | `start` \| `end` \| `center` \| `space-around` \| `space-between` | `start` |

### Flex.Item

| 成员 | 说明                                        | 类型                 | 默认值 |
| ---- | ------------------------------------------- | -------------------- | ------ |
| flex | flex 布局属性                               | `string` \| `number` | `-`    |
| span | 栅格占位格数，为 0 时相当于 `display: none` | `number`             | `-`    |
