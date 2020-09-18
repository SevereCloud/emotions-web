import React, { HTMLAttributes } from 'react';
import { usePlatform, getClassName, classNames } from '@vkontakte/vkui';
import type { HasRootRef } from '@vkontakte/vkui/dist/types';

export interface CardDividerProps
  extends HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {}

const CardDivider: React.FC<CardDividerProps> = ({
  className,
  getRootRef,
  ...restProps
}: CardDividerProps) => {
  const platform = usePlatform();
  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNames(getClassName('CardDivider', platform), className)}
    />
  );
};

export default CardDivider;
