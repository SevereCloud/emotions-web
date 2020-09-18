import React from '../../web_modules/react.js';
import { PanelHeader, PanelHeaderBack } from '../../web_modules/@vkontakte/vkui.js';
import Post from '../components/Post/Post.js';
import CardDivider from '../components/CardDivider/CardDivider.js'; // interface NewsfeedState {}

export class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      goBack
    } = this.props; // const {  } = this.state;

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelHeader, {
      separator: false,
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => goBack()
      })
    }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"), /*#__PURE__*/React.createElement(Post, {
      author: {
        id: 100,
        name: 'ВКонтакте',
        photo_100: ''
      },
      date: "\u0447\u0430\u0441 \u043D\u0430\u0437\u0430\u0434",
      likes: 65,
      comments: 65,
      reposts: 4,
      views: "7,2\u041A",
      style: {
        marginTop: -100
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 80,
        width: '100%',
        backgroundColor: 'var(--placeholder_icon_background)'
      }
    })), /*#__PURE__*/React.createElement(CardDivider, null), /*#__PURE__*/React.createElement(CardDivider, null), /*#__PURE__*/React.createElement(Post, {
      author: {
        id: 100,
        name: 'ВКонтакте',
        photo_100: ''
      },
      date: "\u0447\u0430\u0441 \u043D\u0430\u0437\u0430\u0434",
      likes: 65,
      comments: 65,
      reposts: 4,
      views: "7,2\u041A"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 500,
        width: '100%',
        backgroundColor: 'var(--placeholder_icon_background)'
      }
    })));
  }

}