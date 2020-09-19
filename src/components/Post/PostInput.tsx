import React, { useContext } from 'react'
import {
  Div,
  FormLayout,
  FormLayoutGroup,
  Input,
} from '@vkontakte/vkui'
import type { ctxValue } from '../../types';
import AppCTX from '../../appContext';

const PostInput = () => {
  const { setPanel } = useContext(AppCTX) as ctxValue;

  return (
    <div style={{
      marginTop: 5,
      marginBottom: 5,
      backgroundColor: 'var(--background_content)'
    }}>
      <FormLayout>
        <FormLayoutGroup>
          <Input
            type="text"
            defaultValue="Что у вас нового?"
            style={{ opacity: 0.5 }}
            onClick={() => setPanel('create-post')}
          />
        </FormLayoutGroup>
      </FormLayout>
    </div>
  )
}

export default PostInput;
