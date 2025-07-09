"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageError401 = void 0;

var _PageTemplate2 = require("../../templates/PageTemplate.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageError401 =
/*#__PURE__*/
function (_PageTemplate) {
  _inherits(PageError401, _PageTemplate);

  function PageError401(req) {
    _classCallCheck(this, PageError401);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageError401).call(this, req));
  }

  _createClass(PageError401, [{
    key: "main",
    value: function main() {
      return "\n            <main class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                       <h1>401 error neturi teises matyti sio turinio</h1>\n                       <a href=\"/login\">GO to login</a>\n                    </div>\n                </div>\n            </main>";
    }
  }]);

  return PageError401;
}(_PageTemplate2.PageTemplate);

exports.PageError401 = PageError401;