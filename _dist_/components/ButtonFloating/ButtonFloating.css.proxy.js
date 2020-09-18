
const code = ".ButtonFloating {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  background: var(--content_tint_background);\n  border-radius: 50%;\n  z-index: 3;\n  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.08), 0 0 2px 0 rgba(0, 0, 0, 0.08);\n}\n\n.ButtonFloating__in {\n  position: relative;\n  border-radius: inherit;\n}\n\n.ButtonFloating .ButtonFloating__in .Icon {\n  color: var(--accent);\n}\n\n/**\n    * iOS\n   */\n\n.ButtonFloating--ios.ButtonFloating--sz-d {\n  width: 56px;\n  height: 56px;\n}\n\n.ButtonFloating--ios.ButtonFloating--sz-m {\n  width: 40px;\n  height: 40px;\n}\n\n/**\n   * Android\n   */\n\n.ButtonFloating--android.ButtonFloating--sz-d {\n  width: 56px;\n  height: 56px;\n}\n\n.ButtonFloating--android.ButtonFloating--sz-m {\n  width: 40px;\n  height: 40px;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);