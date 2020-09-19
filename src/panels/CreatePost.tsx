import React, { useContext } from 'react';
import {
  PanelHeader,
  PanelHeaderClose,
  IconButton,
} from '@vkontakte/vkui';
import { Icon24Upload } from '@vkontakte/icons'
import type { ctxValue } from '../types';
import AppCTX from '../appContext';

export const CreatePost = () => {
  const { setPanel } = useContext(AppCTX) as ctxValue;
  return (
    <>
      <PanelHeader
        separator
        left={<PanelHeaderClose onClick={() => setPanel('map')} />}
      >
        Новый пост
        <IconButton
          icon={<Icon24Upload />}
          style={{ borderRadius: '50%' }}
        />
      </PanelHeader>
    </>
  )
}