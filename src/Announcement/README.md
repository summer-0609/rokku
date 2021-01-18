# Announcement 公告

### 介绍

公告

### 引入

```js
import { Announcement } from '@rokku/design';
```

## 代码演示

### 基础用法


```html
<Announcement
  adList={adList}
/>
```

```js
const adList = [{
  mainTitle: '公告测试',
  iphoneUrl: '',
  adDescription: '公告内容',
  subTitle: '',
  linkUrl: '',
  imgUrl: '',
  adId: '',
  beginDate: '',
  endDate: ''
}]
```

## API

### Props

| 参数                    | 说明                                                                                                        | 类型                | 默认值     |
| ----------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------- | ---------- |
| adList                  | 公告数组                                                                                                    | array  | -           | []          |
| mode                    | 类型                                                                                                        | _string_             | -           |
| color                   | 字体颜色                                                                                                    | _string_            | #cb9139     |
| background              | 背景颜色                                                                                                    | _string_            | #fff6d0     |
| leftIcon                | 左侧图标                                                                                                    | _string_            | -           |
| onClick                 | 点击事件                                                                                                    | () => void          | -           |

### Events

| 事件                 | 说明                 | 回调参数                       |
| -------------------- | -------------------- | ------------------------------ |
| onClick                | 点击公告触发        |          |


### 方法

