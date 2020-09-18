import React from '../web_modules/react.js';
import { Panel, Root, View } from '../web_modules/@vkontakte/vkui.js';
import { Main } from './panels/Main.js';
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scheme: 'bright_light',
      activeView: 'main',
      activePanel: {
        main: 'main'
      },
      popout: null,
      history: [{
        view: 'main',
        panel: 'main'
      }],
      center: [45, 60],
      zoom: 4
    };
    this.setView = this.setView.bind(this);
    this.setPanel = this.setPanel.bind(this);
    this.setPopout = this.setPopout.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    const {
      vkAPI
    } = this.props;
    vkAPI.onUpdateConfig(data => {
      const schemeAttribute = document.createAttribute('scheme');
      schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
      this.setState({
        scheme: data.scheme
      });
      document.body.attributes.setNamedItem(schemeAttribute);
    });
    vkAPI.initApp();
  }

  setView(view, name = 'main') {
    const panel = { ...this.state.activePanel
    };
    panel[view] = name;
    const newHistory = [...this.state.history, {
      view: view,
      panel: name
    }];
    this.setState({
      activeView: view,
      activePanel: panel,
      history: newHistory
    });
  }

  setPanel(name) {
    const panel = { ...this.state.activePanel
    };
    panel[this.state.activeView] = name;
    const newHistory = [...this.state.history, {
      view: this.state.activeView,
      panel: name
    }];
    this.setState({
      activePanel: panel,
      history: newHistory
    });
  }

  setPopout(popout) {
    this.setState({
      popout: popout
    });
  }

  goBack() {
    const newHistory = [...this.state.history];
    newHistory.pop();
    const {
      view,
      panel
    } = newHistory[newHistory.length - 1];
    const p = { ...this.state.activePanel
    };
    p[view] = panel;
    this.setState({
      activeView: view,
      activePanel: p,
      history: newHistory
    });
  }

  render() {
    const {
      vkAPI
    } = this.props;
    const {
      activeView,
      activePanel,
      scheme,
      center,
      zoom
    } = this.state;
    return /*#__PURE__*/React.createElement(Root, {
      activeView: activeView
    }, /*#__PURE__*/React.createElement(View, {
      id: "main",
      activePanel: activePanel['main']
    }, /*#__PURE__*/React.createElement(Panel, {
      id: "main"
    }, /*#__PURE__*/React.createElement(Main, {
      setPanel: this.setPanel,
      scheme: scheme,
      vkAPI: vkAPI,
      center: center,
      zoom: zoom,
      updateMap: (center, zoom) => {
        this.setState({
          zoom,
          center
        });
      }
    })), /*#__PURE__*/React.createElement(Panel, {
      id: "newsfeed"
    })));
  }

}