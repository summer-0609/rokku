import React from "react";
import { Flex } from "rokku";
import "./style.less";

export default () => {
  return (
    <>
      <div className="code-box-demo">
        <Flex>
          <Flex.Item span={24}>col</Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item span={12}>col-12</Flex.Item>
          <Flex.Item span={12}>col-12</Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item span={8}>col-8</Flex.Item>
          <Flex.Item span={8}>col-8</Flex.Item>
          <Flex.Item span={8}>col-8</Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item span={6}>col-6</Flex.Item>
          <Flex.Item span={6}>col-6</Flex.Item>
          <Flex.Item span={6}>col-6</Flex.Item>
          <Flex.Item span={6}>col-6</Flex.Item>
        </Flex>
      </div>
    </>
  );
};
