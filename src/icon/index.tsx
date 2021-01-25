/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import classnames from 'classnames';
import { addUnit, createNamespace } from '../utils';
import { IconPropsType } from './PropsType';

import '@rokku/icons/src/svg-symbols.js';

export interface IconProps extends IconPropsType {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onTouchStart?: (e: React.MouseEvent<HTMLDivElement>) => void;
  classPrefix?: string;
  style?: React.CSSProperties;
}

function isImage(name?: string): boolean {
  return name ? name.indexOf('/') !== -1 : false;
}

const [bem] = createNamespace('icon');

const Icon: React.FC<IconProps> = (props) => {
  const {
    tag = props.theme === 'multi' ? 'svg' : 'i',
    name,
    className,
    onClick,
    onTouchStart,
  } = props;

  const imageIcon = isImage(name);
  const rectStyle = props.theme === 'multi' && {
    width: addUnit(props.size) || 40,
    height: addUnit(props.size) || 40,
  };

  return React.createElement(
    tag,
    {
      className: classnames(
        className,
        props.classPrefix,
        props.theme === 'multi' && name,
        imageIcon ? '' : `${props.classPrefix}-${name}`,
      ),
      style: {
        ...rectStyle,
        color: props.color,
        fontSize: addUnit(props.size),
      },
      onClick,
      onTouchStart,
    },
    props.theme === 'multi' && <use xlinkHref={`#${name}`} />,
    props.children,
    imageIcon && <img className={classnames(bem('image'))} src={name} alt={name} />,
  );
};

Icon.defaultProps = {
  // @ts-ignore
  classPrefix: bem(),
  theme: 'single',
};

export default Icon;
