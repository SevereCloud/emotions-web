import React, { useContext } from '../../web_modules/react.js';
import { PanelHeader, PanelHeaderClose, IconButton } from '../../web_modules/@vkontakte/vkui.js';
import { Icon24Upload } from '../../web_modules/@vkontakte/icons.js';
import AppCTX from '../appContext.js';
export const CreatePost = () => {
  const {
    setPanel
  } = useContext(AppCTX);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelHeader, {
    separator: true,
    left: /*#__PURE__*/React.createElement(PanelHeaderClose, {
      onClick: () => setPanel('map')
    })
  }, "\u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u0441\u0442", /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon24Upload, null),
    style: {
      borderRadius: '50%'
    }
  })));
};