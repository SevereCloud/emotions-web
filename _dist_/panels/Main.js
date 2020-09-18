import React from '../../web_modules/react.js';
import { Avatar, Div, FixedLayout, Snackbar } from '../../web_modules/@vkontakte/vkui.js';
import MapComponent from '../components/Map/Map.js';
import { Icon16Clear } from '../../web_modules/@vkontakte/icons.js';
export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbar: null
    };
    this.error = this.error.bind(this);
  }
  /**
   * Показывает ошибку
   *
   * @param msg текст ошибки
   * @param duration время показа ошибки в ms
   */


  error(msg, duration = 4e3) {
    if (this.state.snackbar) return;
    this.setState({
      snackbar: /*#__PURE__*/React.createElement(Snackbar, {
        layout: "vertical",
        duration: duration,
        onClose: () => this.setState({
          snackbar: null
        }),
        before: /*#__PURE__*/React.createElement(Avatar, {
          size: 24,
          style: {
            backgroundColor: 'var(--dynamic_red)'
          }
        }, ' ', /*#__PURE__*/React.createElement(Icon16Clear, {
          fill: "#fff",
          width: 14,
          height: 14
        }))
      }, msg)
    });
  }

  render() {
    const {
      scheme,
      vkAPI,
      center,
      zoom,
      updateMap,
      themePoints,
      themeWalls
    } = this.props;
    const {
      snackbar
    } = this.state;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MapComponent, {
      vkAPI: vkAPI,
      center: center,
      zoom: zoom,
      scheme: scheme,
      updateMap: updateMap,
      error: (a, b) => this.error(a, b),
      themePoints: themePoints,
      themeWalls: themeWalls
    }), /*#__PURE__*/React.createElement(FixedLayout, {
      filled: true,
      vertical: "bottom"
    }, /*#__PURE__*/React.createElement(Div, null, "TODO: \u041F\u043E\u0438\u0441\u043A"), /*#__PURE__*/React.createElement(Div, null, "TODO: \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u043A\u0440\u043E\u043B")), snackbar);
  }

}