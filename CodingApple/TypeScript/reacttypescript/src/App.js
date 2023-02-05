"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./App.css");
function App() {
    var _a = (0, react_1.useState)('kim'), user = _a[0], setUser = _a[1];
    return (<div className="App">
      리액트
      <Profile name="철수"></Profile>
    </div>);
}
function Profile(props) {
    return (<div>{props.name}타입스크립트</div>);
}
exports.default = App;
