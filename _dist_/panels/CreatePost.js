import React, { useContext, useState } from '../../web_modules/react.js';
import { PanelHeader, PanelHeaderClose, IconButton } from '../../web_modules/@vkontakte/vkui.js';
import { Icon28ArrowUpOutline } from '../../web_modules/@vkontakte/icons.js';
import AppCTX from '../appContext.js';
export const CreatePost = () => {
  const {
    setPanel
  } = useContext(AppCTX);
  const [postText, setPostText] = useState('');

  const handleChange = e => {
    setPostText(e.target.value);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelHeader, {
    separator: true,
    left: /*#__PURE__*/React.createElement(PanelHeaderClose, {
      onClick: () => setPanel('map')
    })
  }, "\u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u0441\u0442", /*#__PURE__*/React.createElement(IconButton, {
    style: {
      pointerEvents: postText ? 'all' : 'all',
      opacity: postText ? 1 : 0.5
    },
    onClick: () => setPanel('map'),
    icon: /*#__PURE__*/React.createElement(Icon28ArrowUpOutline, null)
  })), /*#__PURE__*/React.createElement("textarea", {
    autoFocus: true,
    onChange: handleChange,
    value: postText,
    placeholder: "\u0427\u0442\u043E \u0443 \u0432\u0430\u0441 \u043D\u043E\u0432\u043E\u0433\u043E?",
    style: {
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
    }
  }));
};