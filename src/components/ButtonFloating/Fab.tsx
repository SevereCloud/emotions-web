import React, { HTMLAttributes, FC, useContext } from 'react';
import {
  usePlatform,
  Tappable,
  classNames,
  getClassName,
} from '@vkontakte/vkui';
import './Fab.css';
import type { HasRootRef } from '@vkontakte/vkui/dist/types';
import type { ctxValue } from '../../types';
import AppCTX from '../../appContext';
import GlobeSVG from './GlobeSVG';

export interface FabProps
  extends HTMLAttributes<HTMLElement>,
  HasRootRef<HTMLElement> {
  size?: 'd' | 'm';
  href?: string;
  target?: string;
  disabled?: boolean;
}

const Fab: FC<FabProps> = ({
  children,
  className,
  size,
  ...restProps
}) => {
  const platform = usePlatform();
  const { setPanel } = useContext(AppCTX) as ctxValue;

  return (
    <div
      {...restProps}
      Component={restProps.href ? 'a' : 'div'}
      className={classNames(
        className,
        getClassName('Fab', platform),
        `Fab--sz-${size}`,
      )}
      onClick={() => setPanel('map')}
    >
      <div className="Fab__in">
        <GlobeSVG />
      </div>
    </div>
  );
};

Fab.defaultProps = {
  size: 'd',
};

export default Fab;