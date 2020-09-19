import React, { useContext } from '../../../web_modules/react.js';
import { FormLayout, FormLayoutGroup, Input } from '../../../web_modules/@vkontakte/vkui.js';
import AppCTX from '../../appContext.js';

const PostInput = () => {
  const {
    setPanel
  } = useContext(AppCTX);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      marginBottom: 5,
      backgroundColor: 'var(--background_content)'
    }
  }, /*#__PURE__*/React.createElement(FormLayout, null, /*#__PURE__*/React.createElement(FormLayoutGroup, null, /*#__PURE__*/React.createElement(Input, {
    type: "text",
    defaultValue: "\u0427\u0442\u043E \u0443 \u0432\u0430\u0441 \u043D\u043E\u0432\u043E\u0433\u043E?",
    style: {
      opacity: 0.5
    },
    onClick: () => setPanel('create-post')
  }))));
};

export default PostInput;