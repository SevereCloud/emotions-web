import React, { HTMLAttributes, FC, ReactElement } from 'react';
import {
  usePlatform,
  Tappable,
  classNames,
  getClassName,
} from '@vkontakte/vkui';
import './ChoseEmoji.css';
import type { HasRootRef } from '@vkontakte/vkui/dist/types';
import { Icon12Dropdown } from '@vkontakte/icons';

export interface ChoseEmojiProps
  extends HTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement> {
  href?: string;
  target?: string;
  disabled?: boolean;
  emoji: string;
  open?: boolean;
  button?: boolean;
}

const ChoseEmoji: FC<ChoseEmojiProps> = ({
  children,
  className,
  title,
  emoji,
  button,
  open,
  ...restProps
}) => {
  const platform = usePlatform();

  return (
    <Tappable
      {...restProps}
      Component={restProps.href ? 'a' : 'div'}
      className={classNames(className, getClassName('ChoseEmoji', platform), {
        'ChoseEmoji--open': open,
        'ChoseEmoji--button': button,
      })}
    >
      <div className="ChoseEmoji__emoji">
        <img src={emoji} alt="emoji" />
      </div>
      <div className="ChoseEmoji__title">{children}</div>
      <div className="ChoseEmoji__dropdown">
        <Icon12Dropdown />
      </div>
    </Tappable>
  );
};

export default ChoseEmoji;
