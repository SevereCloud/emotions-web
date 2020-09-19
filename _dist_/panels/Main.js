import React from '../../web_modules/react.js';
import { Avatar, FixedLayout, HorizontalScroll, Search, Snackbar } from '../../web_modules/@vkontakte/vkui.js';
import MapComponent from '../components/Map/Map.js';
import { Icon16Clear } from '../../web_modules/@vkontakte/icons.js';
import ThemeCard from '../components/ThemeCard/ThemeCard.js';
import './Main.css.proxy.js';
import high from '../markers/mood/high.png.proxy.js';
import low from '../markers/mood/low.png.proxy.js';
import negative from '../markers/mood/negative.png.proxy.js';
import positive from '../markers/mood/positive.png.proxy.js';
import art from '../markers/art.png.proxy.js';
import fall from '../markers/fall.png.proxy.js';
import film from '../markers/film.png.proxy.js';
import game from '../markers/game.png.proxy.js';
import quarantine from '../markers/quarantine.png.proxy.js';
import work from '../markers/work.png.proxy.js';
import comedy from '../markers/comedy.png.proxy.js';
import photo from '../markers/photo.png.proxy.js';
const themes = [// { name: 'Музыка', image: music, theme: 'music' },
{
  name: 'Фильмы',
  image: film,
  theme: 'film',
  emoji: positive
}, {
  name: 'Осень',
  image: fall,
  theme: 'fall',
  emoji: low
}, {
  name: 'Работа',
  image: work,
  theme: 'work',
  emoji: high
}, {
  name: 'Карантин',
  image: quarantine,
  theme: 'quarantine',
  emoji: negative
}, // { name: 'IT', image: it, theme: 'it' },
// { name: 'Авто', image: auto, theme: 'auto' },
{
  name: 'Игры',
  image: game,
  theme: 'game',
  emoji: positive
}, {
  name: 'Искусство',
  image: art,
  theme: 'art',
  emoji: high
}, {
  name: 'Юмор',
  image: comedy,
  theme: 'comedy',
  emoji: positive
}, {
  name: 'Фото',
  image: photo,
  theme: 'photo',
  emoji: high
}];
export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbar: null,
      search: ''
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

  get themes() {
    const search = this.state.search.toLowerCase();
    return themes.filter(({
      name
    }) => name.toLowerCase().indexOf(search) > -1);
  }

  render() {
    const {
      scheme,
      vkAPI,
      center,
      zoom,
      updateMap,
      themePoints,
      themeWalls,
      setTheme
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
      className: "Modal",
      filled: true,
      vertical: "bottom"
    }, /*#__PURE__*/React.createElement(Search, {
      placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0442\u0435\u043C\u0430\u043C \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044E",
      value: this.state.search,
      onChange: e => this.setState({
        search: e.target.value
      })
    }), /*#__PURE__*/React.createElement(HorizontalScroll, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        minHeight: 100
      }
    }, this.themes.map((theme, key) => /*#__PURE__*/React.createElement(ThemeCard, {
      key: key,
      title: theme.name,
      emoji: theme.emoji,
      onClick: () => setTheme(theme.theme)
    }, /*#__PURE__*/React.createElement("img", {
      src: theme.image,
      alt: ""
    })))))), snackbar);
  }

}