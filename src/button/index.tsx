import React from 'react';
import classnames from 'classnames';
// import Icon from '../icon';
import { ButtonPropsType } from './PropsType';
import { createNamespace } from '../utils';
import { BORDER_SURROUND, WHITE } from '../utils/constant';

export interface ButtonProps extends ButtonPropsType {
  onClick?: (e: Event) => void;
  className?: string;
  style?: React.CSSProperties;
}

const [bem] = createNamespace('button');

const Button: React.FC<ButtonProps> = (props) => {
  const {
    tag = 'button',
    icon,
    type,
    color,
    plain,
    disabled,
    loading,
    hairline,
    className,
    loadingText,
    // iconPosition,
  } = props;

  const classes = classnames(
    className,
    bem([
      type,
      props.size,
      {
        plain,
        loading,
        disabled,
        hairline,
        block: props.block,
        round: props.round,
        square: props.square,
      },
    ]),
    { [BORDER_SURROUND]: hairline },
  );

  const style: Record<string, string | number> = {};

  if (color) {
    style.color = plain ? color : WHITE;

    if (!plain) {
      // Use background instead of backgroundColor to make linear-gradient work
      style.background = color;
    }

    // hide border when color is linear-gradient
    if (color.indexOf('gradient') !== -1) {
      style.border = 0;
    } else {
      style.borderColor = color;
    }
  }

  function onClick(event: Event) {
    if (!loading && !disabled && props.onClick) {
      props.onClick(event);
    }
  }

  function Content() {
    const content = [];

    // if (loading) {
    //   content.push(
    //     <Loading
    //       class={bem('loading')}
    //       size={props.loadingSize}
    //       type={props.loadingType}
    //       color={type === 'default' ? undefined : ''}
    //     />,
    //   );
    // } else if (icon) {
    //   content.push(<Icon name={icon} className={classnames(bem('icon'))} />);
    // }

    // if (icon) {
    //   content.push(<Icon key="icon" name={icon} className={classnames(bem('icon'))} />);
    // }

    let text;
    if (loading) {
      text = loadingText;
    } else {
      text = props.children || props.text;
    }

    if (text) {
      content.push(
        <span key="text" className={classnames(bem('text'))}>
          {text}
        </span>,
      );
    }

    return content;
  }

  return React.createElement(
    tag,
    {
      style,
      className: classes,
      type: props.nativeType,
      disabled,
      onClick,
      // ...inherit(ctx),
    },
    Content(),
  );
};

Button.defaultProps = {
  size: 'normal',
  type: 'default',
};

export default Button;
