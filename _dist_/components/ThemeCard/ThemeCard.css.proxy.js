
const code = ".ThemeCard {\n  position: relative;\n  width: 80px;\n  min-width: 80px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 6px;\n}\n\n.ThemeCard__in {\n  border-radius: 50%;\n  width: 64px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  border: 0.5px solid var(--background_highlighted);\n  margin: 4px 0;\n}\n\n.ThemeCard__in img {\n  width: 24px;\n  height: 24px;\n}\n\n.ThemeCard__title {\n  padding: 2px 4px;\n  text-align: center;\n}\n\n.ThemeCard__emoji {\n  position: absolute;\n  top: 4px;\n  left: 8px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 0.5px solid var(--background_highlighted);\n  background-color: var(--background_content);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);\n}\n\n.ThemeCard__emoji img {\n  width: 16px;\n  height: 16px;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);