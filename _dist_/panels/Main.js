import React from '../../web_modules/react.js';
import { Div, FixedLayout } from '../../web_modules/@vkontakte/vkui.js';
import MapComponent from '../components/Map/Map.js';
export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      scheme,
      vkAPI,
      center,
      zoom,
      updateMap
    } = this.props;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MapComponent, {
      vkAPI: vkAPI,
      center: center,
      zoom: zoom,
      scheme: scheme,
      updateMap: updateMap
    }), /*#__PURE__*/React.createElement(FixedLayout, {
      filled: true,
      vertical: "bottom"
    }, /*#__PURE__*/React.createElement(Div, null, "TODO: \u041F\u043E\u0438\u0441\u043A"), /*#__PURE__*/React.createElement(Div, null, "TODO: \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u043A\u0440\u043E\u043B")));
  }

}