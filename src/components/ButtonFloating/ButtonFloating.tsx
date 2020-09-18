import React, { HTMLAttributes, FC } from 'react';
import {
  usePlatform,
  Tappable,
  classNames,
  getClassName,
} from '@vkontakte/vkui';
import './ButtonFloating.css';
import type { HasRootRef } from '@vkontakte/vkui/dist/types';

export interface ButtonFloatingProps
  extends HTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement> {
  size?: 'd' | 'm';
  href?: string;
  target?: string;
  disabled?: boolean;
}

const ButtonFloating: FC<ButtonFloatingProps> = ({
  children,
  className,
  size,
  ...restProps
}) => {
  const platform = usePlatform();

  return (
    <Tappable
      {...restProps}
      Component={restProps.href ? 'a' : 'div'}
      className={classNames(
        className,
        getClassName('ButtonFloating', platform),
        `ButtonFloating--sz-${size}`,
      )}
    >
      <div className="ButtonFloating__in">{children}</div>
    </Tappable>
  );
};

ButtonFloating.defaultProps = {
  size: 'd',
};

export default ButtonFloating;
