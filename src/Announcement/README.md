# Announcement 公告

### 介绍

公告

### 引入

```js
import { Announcement } from '@rokku/design';
```

## 代码演示

### 基础用法


```jsx
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
<Announcement
  adList={adList}
/>
```

### 自定义icon

```jsx
const adList2 = [
  {
    mainTitle: '弹框链接',
    iphoneUrl: '',
    adDescription: '公告内容',
    subTitle: '',
    linkUrl: 'https://baidu.com',
    imgUrl: '',
    adId: '',
    beginDate: '',
    endDate: '',
  },
];
<Announcement
  leftIcon={
    <div style={{ width: '24px', height: '16px' }}>
      <img
        alt=""
        style={{ width: '16px' }}
        src="https://image.chebada.com/image/comman/upload/merchantAdPic/2020/07/07/0c884c7f02c0757e69143ccab1aeec9c.png"
      />
    </div>
  }
  adList={adList2}
/>
```

### mode

```jsx
const adList2 = [
  {
    mainTitle: '弹框链接',
    iphoneUrl: '',
    adDescription: '公告内容',
    subTitle: '',
    linkUrl: 'https://baidu.com',
    imgUrl: '',
    adId: '',
    beginDate: '',
    endDate: '',
  },
];
<Announcement mode="link" adList={adList2} />
```

## API

### Props

| 参数                    | 说明                                                                                                        | 类型                | 默认值     |
| ----------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------- | ---------- |
| adList                  | 公告数组                                                                                                    | array  | -           | []          |
| mode                    | 类型                                                                                                        | _string_             | -           |
| color                   | 字体颜色                                                                                                    | _string_            | #cb9139     |
| background              | 背景颜色                                                                                                    | _string_            | rgba(255, 246, 208, 0.5)     |
| leftIcon                | 左侧图标                                                                                                    | _string_            | -           |
| onClick                 | 点击事件                                                                                                    | () => void          | -           |

### Events

| 事件                 | 说明                 | 回调参数                       |
| -------------------- | -------------------- | ------------------------------ |
| onClick                | 点击公告触发        |          |


