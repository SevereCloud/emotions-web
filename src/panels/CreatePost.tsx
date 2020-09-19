import React, { ChangeEvent, useContext, useState } from 'react';
import {
  PanelHeader,
  PanelHeaderClose,
  IconButton,
} from '@vkontakte/vkui';
import { Icon28ArrowUpOutline } from '@vkontakte/icons'
import type { ctxValue } from '../types';
import AppCTX from '../appContext';

export const CreatePost = () => {
  const { setPanel } = useContext(AppCTX) as ctxValue;
  const [postText, setPostText] = useState('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.target.value)
  }
  return (
    <>
      <PanelHeader
        separator
        left={<PanelHeaderClose onClick={() => setPanel('map')} />}
      >
        Новый пост
        <IconButton
          style={{
            pointerEvents: postText ? 'all' : 'all',
            opacity: postText ? 1 : 0.5,
          }}
          onClick={() => setPanel('map')}
          icon={<Icon28ArrowUpOutline />}
        />
      </PanelHeader>
      <textarea
        autoFocus
        onChange={handleChange}
        value={postText}
        placeholder="Что у вас нового?"
        style={{
          padding: '16px',
          width: '100%',
          height: 'calc(100vh - 100px)',
          outline: 'none',
          border: 'none',
          overflow: 'auto',
          WebkitBoxShadow: 'none',
          MozBoxShadow: 'none',
          resize: 'none',
          caretColor: '#4986cc',
          fontSize: '1.25em',
          backgroundColor: 'var(--background_content)'
        }}
      />
    </>
  )
}