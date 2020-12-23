import React, { useState } from 'react';
import { Field, Cell, Button } from 'rokku';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [tel, setTel] = useState();
  const [digit, setDigit] = useState();
  const [number, setNumber] = useState();
  const [password, setPasswrod] = useState();
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [sms, setSms] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [value7, setValue7] = useState('');

  const formatter = (value) => value.replace(/\d/g, '');

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Cell.Group>
          <Field
            value={value1}
            type="text"
            label="文本"
            placeholder="请输入用户名"
            input={setValue1}
          />
        </Cell.Group>
      </DemoBlock>

      <DemoBlock title="自定义类型">
        <Field value={value2} label="文本" input={setValue2} />
        <Field value={tel} type="tel" label="手机号" input={setTel} />
        <Field value={digit} type="digit" label="整数" input={setDigit} />
        <Field value={number} type="number" label="数字" input={setNumber} />
        <Field value={password} type="password" label="密码" input={setPasswrod} />
      </DemoBlock>

      <DemoBlock title="禁用输入框">
        <Cell.Group>
          <Field label="文本" value="输入框只读" readonly />
          <Field label="文本" value="输入框已禁用" disabled />
        </Cell.Group>
      </DemoBlock>

      <DemoBlock title="显示图标">
        <Cell.Group>
          <Field
            value={value3}
            label="文本"
            leftIcon="shop-o"
            rightIcon="shop-o"
            placeholder="显示图标"
            input={setValue3}
          />
          <Field
            value={value4}
            clearable
            label="文本"
            leftIcon="shop-o"
            placeholder="显示清除图标"
            input={setValue4}
          />
        </Cell.Group>
      </DemoBlock>

      <DemoBlock title="错误提示">
        <Cell.Group>
          <Field
            value={username}
            error
            required
            label="用户名"
            placeholder="请输入用户名"
            input={setUsername}
          />
          <Field
            value={phone}
            required
            label="手机号"
            placeholder="请输入手机号"
            error-message="手机号格式错误"
            input={setPhone}
          />
        </Cell.Group>
      </DemoBlock>

      <DemoBlock title="插入按钮">
        <Field
          value={sms}
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          input={setSms}
        >
          <Button size="small" type="primary">
            发送验证码
          </Button>
        </Field>
      </DemoBlock>

      <DemoBlock title="格式化输入内容">
        <Field
          value={value5}
          label="文本"
          formatter={formatter}
          placeholder="在输入时执行格式化"
          input={setValue5}
        />
        <Field
          value={value6}
          label="文本"
          formatter={formatter}
          format-trigger="onBlur"
          placeholder="在失焦时执行格式化"
          input={setValue6}
        />
      </DemoBlock>

      <DemoBlock title="高度自适应">
        <Field
          value={message}
          rows="1"
          autosize
          label="留言"
          type="textarea"
          placeholder="请输入留言"
          input={setMessage}
        />
      </DemoBlock>

      <DemoBlock title="显示字数统计">
        <Field
          value={message2}
          rows="2"
          autosize
          label="留言"
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
          input={setMessage2}
        />
      </DemoBlock>

      <DemoBlock title="输入框内容对齐">
        <Field
          value={value7}
          label="文本"
          placeholder="输入框内容右对齐"
          input-align="right"
          input={setValue7}
        />
      </DemoBlock>
    </DemoSection>
  );
};
