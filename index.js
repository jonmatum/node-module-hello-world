"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Button = function Button(_ref) {
  var type = _ref.type,
    text = _ref.text,
    loading = _ref.loading;
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: type
  }, loading ? /*#__PURE__*/_react["default"].createElement("span", null, "Loading...") : /*#__PURE__*/_react["default"].createElement("span", null, text));
};
var _default = Button;
exports["default"] = _default;
