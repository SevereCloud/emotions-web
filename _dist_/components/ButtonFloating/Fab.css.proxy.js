
const code = ".Fab {\n    position: fixed;\n    bottom: 8px;\n    right: 8px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    background: #4986cc;\n    border-radius: 50%;\n    z-index: 999;\n    box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.08), 0 0 2px 0 rgba(0, 0, 0, 0.08);\n}\n\n.Fab:active {\n    opacity: 0.7;\n}\n\n.Fab__in {\n    padding-top: 4px;\n    position: relative;\n    border-radius: inherit;\n}\n\n.Fab .Fab__in .Icon {\n    color: var(--accent);\n}\n\n\n/**\n    * iOS\n   */\n\n.Fab--ios.Fab--sz-d {\n    width: 44px;\n    height: 44px;\n}\n\n.Fab--ios.Fab--sz-m {\n    width: 40px;\n    height: 40px;\n}\n\n\n/**\n   * Android\n   */\n\n.Fab--android.Fab--sz-d {\n    width: 44px;\n    height: 44px;\n}\n\n.Fab--android.Fab--sz-m {\n    width: 40px;\n    height: 40px;\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);