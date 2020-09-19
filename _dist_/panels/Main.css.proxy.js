
const code = ".Modal {\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.16);\n  border-radius: 12px 12px 0 0;\n  overflow: hidden;\n  padding-top: 6px;\n}\n\n.Modal .HorizontalScroll {\n  padding: 0 4px;\n}\n\n.FixedLayoutTop {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: var(--panelheader_height_android);\n  width: 100%;\n}\n\n.FixedLayoutTop .List {\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 0 2px 24px rgba(0, 0, 0, 0.08);\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);