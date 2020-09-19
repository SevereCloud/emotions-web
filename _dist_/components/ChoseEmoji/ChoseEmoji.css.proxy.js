
const code = ".ChoseEmoji {\n  position: relative;\n  height: 36px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 0 2px 24px rgba(0, 0, 0, 0.08);\n  border-radius: 10px;\n  background-color: var(--background_content);\n}\n\n.ChoseEmoji__title {\n  padding: 2px 4px;\n  text-align: center;\n}\n\n.ChoseEmoji__emoji {\n  padding: 8px 12px;\n}\n\n.ChoseEmoji__emoji img {\n  width: 16px;\n  height: 16px;\n}\n\n.ChoseEmoji__dropdown .Icon {\n  color: var(--accent);\n  transition: transform 0.5s;\n  padding: 14px 12px;\n}\n\n.ChoseEmoji--open .ChoseEmoji__dropdown .Icon {\n  transform: rotate(-180deg);\n}\n\n.ChoseEmoji--button {\n  box-shadow: none;\n  border-radius: 0;\n  animation: 0.3s new;\n}\n\n@keyframes new {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes first {\n  from {\n    margin-top: -36px;\n    opacity: 0;\n  }\n\n  to {\n    margin-top: 8px;\n    opacity: 1;\n  }\n}\n\n.ChoseEmoji--button:first-child {\n  animation: 0.3s first;\n  margin-top: 8px;\n  border-radius: 10px 10px 0 0;\n}\n\n.ChoseEmoji--button:last-child {\n  border-radius: 0 0 10px 10px;\n}\n\n.ChoseEmoji--button .ChoseEmoji__dropdown {\n  display: none;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);