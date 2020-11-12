---
nav:
  path: /components
  title: 组件
---

# Icon 图标

基于字体的图标集，可以通过 `Icon` 组件使用，也可以在其他组件中通过`icon`属性引用

## 代码演示

### 基础用法

<!-- <code src="./demos/basic.tsx" /> -->

### 图标颜色

<!-- <code src="./demos/color.tsx" /> -->

### 图标大小

<!-- <code src="./demos/size.tsx" /> -->

### 自定义图标

如果需要在现有 `Icon` 的基础上使用更多图标，可以引入第三方 `iconfont` 对应的字体文件和 `CSS` 文件，之后就可以在 `Icon` 组件中直接使用

```css
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```html
<!-- 通过 classPrefix 指定类名为 my-icon -->
<Icon classPrefix="my-icon" name="extra" />
```

### 图表展示

<!-- <code src="./demos/list.tsx" inline/> -->
