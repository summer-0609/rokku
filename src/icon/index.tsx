/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import classnames from 'classnames';
import { addUnit, createNamespace } from '../utils';
import { IconPropsType } from './PropsType';

export interface IconProps extends IconPropsType {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  classPrefix?: string;
  style?: React.CSSProperties;
}

function isImage(name?: string): boolean {
  return name ? name.indexOf('/') !== -1 : false;
}

const [bem] = createNamespace('icon');

const Icon: React.FC<IconProps> = (props) => {
  const { tag = 'i', name, className, onClick } = props;
  const imageIcon = isImage(name);

  return React.createElement(
    tag,
    {
      className: classnames(
        className,
        props.classPrefix,
        imageIcon ? '' : `${props.classPrefix}-${name}`,
      ),
      style: {
        color: props.color,
        fontSize: addUnit(props.size),
      },
      onClick,
    },
    props.children,
    imageIcon && <img className={classnames(bem('image'))} src={name} alt={name} />,
  );
};

Icon.defaultProps = {
  // @ts-ignore
  classPrefix: bem(),
};

export default Icon;
