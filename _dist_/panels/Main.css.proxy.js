
const code = ".Modal {\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.16);\n  border-radius: 12px 12px 0 0;\n  overflow: hidden;\n  padding-top: 6px;\n}\n\n.Modal .HorizontalScroll {\n  padding: 0 4px;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);