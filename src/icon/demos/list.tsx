import React from 'react';
import { Icon } from 'rokku';
import styled from 'styled-components';
import iconList from './icon.json';

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    box-sizing: content-box;
    border-radius: 4px;

    margin-right: -1px;
    margin-bottom: -1px;

    span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      font-family: 'lucida console,Consolas,Monaco,andale mono,ubuntu mono,monospace';
      color: #555;
    }
    i {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
      color: #555;
      transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
      will-change: transform;
    }
    &:hover {
      background-color: #1890ff;

      i,
      span {
        color: #fff;
      }
      i {
        transform: scale(1.5);
      }
    }
  }
`;

export default () => (
  <List className="icon-list">
    {iconList.map((name: string) => (
      <li key={name}>
        <span>
          <Icon name={name} />
          <span className="icon-name">{`${name}`}</span>
        </span>
      </li>
    ))}
  </List>
);
