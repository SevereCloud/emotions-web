
const code = ".Post {\n    background-color: var(--background_content);\n    margin-top: 5px;\n    margin-bottom: 5px;\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);