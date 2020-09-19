import React, { HTMLAttributes, FC, ReactElement } from 'react';
import {
  usePlatform,
  Tappable,
  classNames,
  getClassName,
} from '@vkontakte/vkui';
import './ThemeCard.css';
import type { HasRootRef } from '@vkontakte/vkui/dist/types';

export interface ThemeCardProps
  extends HTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement> {
  title: string;
  href?: string;
  target?: string;
  disabled?: boolean;
  emoji?: string;
}

const ThemeCard: FC<ThemeCardProps> = ({
  children,
  className,
  title,
  emoji,
  ...restProps
}) => {
  const platform = usePlatform();

  return (
    <Tappable
      {...restProps}
      Component={restProps.href ? 'a' : 'div'}
      className={classNames(className, getClassName('ThemeCard', platform))}
    >
      <div className="ThemeCard__in">{children}</div>
      <div className="ThemeCard__title">{title}</div>
      {emoji && (
        <div className="ThemeCard__emoji">
          <img src={emoji} alt="emoji" />
        </div>
      )}
    </Tappable>
  );
};

export default ThemeCard;
