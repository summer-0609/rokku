# PasswordInput 密码输入框

### 介绍

密码输入框

### 引入

```js
import { PasswordInput } from '@rokku/design';
```

## 代码演示

### 基础用法

```jsx
const onSubmit = (val: string) => {
  Dialog.alert({
    message: val
  })
};
<PasswordInput
  onSubmit={onSubmit}
/>
```

### 限制长度

```jsx
const onSubmit = (val: string) => {
  Dialog.alert({
    message: val
  })
};
<PasswordInput
  onSubmit={onSubmit}
/>
```

### 只允许数字

```jsx
const onSubmit = (val: string) => {
  Dialog.alert({
    message: val
  })
};
<PasswordInput
  onSubmit={onSubmit}
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | _string_ | `tel` |
| length | 长度 | _number_ | 6 |
| validator | 校验器 | _function_ | - |
| onChange |  | _string_ | - |

### Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| onChange  | 数据改变时触发 | val: _string_ |
| onSubmit  | 数据输满时触发 | val: _string_ |


### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                      | 默认值               | 描述 |
| ------------------------- | -------------------- | ---- |
| @overlay-z-index          | `1`                  | -    |
| @overlay-background-color | `rgba(0, 0, 0, 0.7)` | -    |
