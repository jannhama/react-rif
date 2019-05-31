"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function R(props) {
    if (!props.children) {
        console.warn('Child components not found. This component is meant to be used with child components.');
    }
    return (React.createElement(React.Fragment, null, props.children && props.if ? props.children : null));
}
exports.R = R;
//# sourceMappingURL=index.js.map