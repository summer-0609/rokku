# Flex 布局

### 介绍
`Flex` 组件是 CSS `flex` 布局的一个封装。


### 引入

```js
import { Flex } from 'rokku';
```

### 基础用法

`Flex` 组件提供了`24列栅格`。使用单一的一组 ```Flex``` 和 ```Flex.Item``` 栅格组件，就可以创建一个基本的栅格系统，所有列（```Flex.Item```）必须放在 ```Flex``` 内。

```html
<Flex>
  <Flex.Item span="{24}">col</Flex.Item>
</Flex>
<Flex>
  <Flex.Item span="{12}">col-12</Flex.Item>
  <Flex.Item span="{12}">col-12</Flex.Item>
</Flex>
<Flex>
  <Flex.Item span="{8}">col-8</Flex.Item>
  <Flex.Item span="{8}">col-8</Flex.Item>
  <Flex.Item span="{8}">col-8</Flex.Item>
</Flex>
```

### 区域间隔

### 方向

### 排版

### 对齐

### Flex 填充

## API

- `style` \| `className` 为通用属性，可以根据自我需求进行自由样式定制

### Flex

| 成员      | 说明                                                                | 类型                                                              | 默认值   |
| --------- | ------------------------------------------------------------------- | ----------------------------------------------------------------- | -------- |
| direction | 项目定位方向                                                        | `row` \| `row-reverse` \| `column` \| `column-reverse`            | `row`    |
| wrap      | 子元素的换行方式                                                    | `nowrap` \| `wrap` \| `wrap-reverse`                              | `nowrap` |
| gutter    | 列元素之间的间距。可以使用数组形式同时设置 `[水平间距, 垂直间距]`。 | `number` \| `string` \| `array`                                   | `0`      |
| align     | 垂直对齐方式                                                        | `top` \| `middle` \| `bottom`                                     | `top`    |
| justify   | 水平排列方式                                                        | `start` \| `end` \| `center` \| `space-around` \| `space-between` | `start`  |

### Flex.Item

| 成员 | 说明                                        | 类型                 | 默认值 |
| ---- | ------------------------------------------- | -------------------- | ------ |
| flex | flex 布局属性                               | `string` \| `number` | `-`    |
| span | 栅格占位格数，为 0 时相当于 `display: none` | `number`             | `-`    |
