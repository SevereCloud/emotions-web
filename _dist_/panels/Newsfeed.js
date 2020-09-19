import React from '../../web_modules/react.js';
import { PanelHeader, Spinner, PanelHeaderBack, Div } from '../../web_modules/@vkontakte/vkui.js';
import { themeName } from '../types.js';
import Post from '../components/Post/Post.js'; // interface NewsfeedState {}

export class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      setPanel,
      walls,
      theme
    } = this.props; // const {  } = this.state;

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelHeader, {
      separator: false,
      left: /*#__PURE__*/React.createElement(PanelHeaderBack, {
        onClick: () => setPanel('map')
      })
    }, theme ? themeName[theme] : 'Новости'), /*#__PURE__*/React.createElement("div", {
      style: {
        backgroundColor: 'var(--background_page)',
        paddingTop: 1,
        paddingBottom: 1
      }
    }, walls.map((wall, key) => /*#__PURE__*/React.createElement(Post, {
      key: key,
      date: "\u0447\u0430\u0441 \u043D\u0430\u0437\u0430\u0434",
      likes: 65,
      comments: 65,
      reposts: 4,
      views: "7,2\u041A",
      wall: wall
    })), walls.length === 0 && /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Spinner, {
      size: "large",
      style: {
        marginTop: 20
      }
    }))));
  }

}