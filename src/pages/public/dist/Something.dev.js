"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageTest = void 0;

var _testData = require("../../data/testData.js");

var _PageTemplate2 = require("../../templates/PageTemplate.js");

var _somethingTest = require("../../ui/somethingTest.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageTest =
/*#__PURE__*/
function (_PageTemplate) {
  _inherits(PageTest, _PageTemplate);

  function PageTest(req) {
    _classCallCheck(this, PageTest);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageTest).call(this, req));
  }

  _createClass(PageTest, [{
    key: "main",
    value: function main() {
      // Pridedame SVG sprite su checkmark simboliu kad veiktu svg checkai
      var svgSprite = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display: none;\">\n  <symbol id=\"check\" viewBox=\"0 0 16 16\">\n    <path d=\"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z\"/>\n  </symbol>\n</svg>";
      var HTML = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _testData.testData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          HTML += "<li class=\"mb-1\"><a class=\"link-secondary text-decoration-none\" href=\"".concat(item.href, "\">").concat(item.title, "</a></li>");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return "\n<div class=\"container py-3\"> \n    ".concat(svgSprite, "\n    <main>\n        ").concat((0, _somethingTest.someTesting)(), "\n        \n        <h2 class=\"display-6 text-center mb-4\">Compare plans</h2>\n        \n        <div class=\"table-responsive\">\n            <table class=\"table text-center\">\n                <thead>\n                    <tr>\n                        <th style=\"width: 34%;\"></th>\n                        <th style=\"width: 22%;\">Free</th>\n                        <th style=\"width: 22%;\">Pro</th>\n                        <th style=\"width: 22%;\">Enterprise</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope=\"row\" class=\"text-start\">Public</th>\n                        <td><svg class=\"bi text-success\" width=\"24\" height=\"24\" fill=\"currentColor\"><use xlink:href=\"#check\"/></svg></td>\n                        <td><svg class=\"bi text-success\" width=\"24\" height=\"24\" fill=\"currentColor\"><use xlink:href=\"#check\"/></svg></td>\n                        <td><svg class=\"bi text-success\" width=\"24\" height=\"24\" fill=\"currentColor\"><use xlink:href=\"#check\"/></svg></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\" class=\"text-start\">Private</th>\n                        <td></td>\n                        <td><svg class=\"bi text-success\" width=\"24\" height=\"24\" fill=\"currentColor\"><use xlink:href=\"#check\"/></svg></td>\n                        <td><svg class=\"bi text-success\" width=\"24\" height=\"24\" fill=\"currentColor\"><use xlink:href=\"#check\"/></svg></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\" class=\"text-start\">Permissions</th>\n                        <td><svg class=\"bi text-success\" width=\"24\" height=\"24\" fill=\"currentColor\"><use xlink:href=\"#check\"/></svg></td>\n                        <td><svg class=\"bi text-success\" width=\"24\" height=\"24\" fill=\"currentColor\"><use xlink:href=\"#check\"/></svg></td>\n                        <td><svg class=\"bi text-success\" width=\"24\" height=\"24\" fill=\"currentColor\"><use xlink:href=\"#check\"/></svg></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\" class=\"text-start\">Sharing</th>\n                        <td></td>\n                        <td><svg class=\"bi text-success\" width=\"24\" height=\"24\" fill=\"currentColor\"><use xlink:href=\"#check\"/></svg></td>\n                        <td><svg class=\"bi text-success\" width=\"24\" height=\"24\" fill=\"currentColor\"><use xlink:href=\"#check\"/></svg></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\" class=\"text-start\">Unlimited members</th>\n                        <td></td>\n                        <td><svg class=\"bi text-success\" width=\"24\" height=\"24\" fill=\"currentColor\"><use xlink:href=\"#check\"/></svg></td>\n                        <td><svg class=\"bi text-success\" width=\"24\" height=\"24\" fill=\"currentColor\"><use xlink:href=\"#check\"/></svg></td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\" class=\"text-start\">Extra security</th>\n                        <td></td>\n                        <td></td>\n                        <td><svg class=\"bi text-success\" width=\"24\" height=\"24\" fill=\"currentColor\"><use xlink:href=\"#check\"/></svg></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </main>\n    \n    <footer class=\"pt-4 my-md-5 pt-md-5 border-top\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md\">\n                <img class=\"mb-2\" src=\"/img/bootstrap-logo.svg\" alt=\"\" width=\"24\" height=\"19\">\n                <small class=\"d-block mb-3 text-body-secondary\">&copy;2025</small>\n            </div>\n            <div class=\"col-6 col-md\">\n                <h5>Features</h5>\n                <ul class=\"list-unstyled text-small\">\n                    ").concat(HTML, "\n                </ul>\n            </div>\n            <div class=\"col-6 col-md\">\n                <h5>Resources</h5>\n                <ul class=\"list-unstyled text-small\">\n                    <li class=\"mb-1\"><a class=\"link-secondary text-decoration-none\" href=\"#\">Resource</a></li>\n                    <li class=\"mb-1\"><a class=\"link-secondary text-decoration-none\" href=\"#\">Resource name</a></li>\n                    <li class=\"mb-1\"><a class=\"link-secondary text-decoration-none\" href=\"#\">Another resource</a></li>\n                    <li class=\"mb-1\"><a class=\"link-secondary text-decoration-none\" href=\"#\">Final resource</a></li>\n                </ul>\n            </div>\n            <div class=\"col-6 col-md\">\n                <h5>About</h5>\n                <ul class=\"list-unstyled text-small\">\n                    <li class=\"mb-1\"><a class=\"link-secondary text-decoration-none\" href=\"#\">Team</a></li>\n                    <li class=\"mb-1\"><a class=\"link-secondary text-decoration-none\" href=\"#\">Locations</a></li>\n                    <li class=\"mb-1\"><a class=\"link-secondary text-decoration-none\" href=\"#\">Privacy</a></li>\n                    <li class=\"mb-1\"><a class=\"link-secondary text-decoration-none\" href=\"#\">Terms</a></li>\n                </ul>\n            </div>\n        </div>\n    </footer>\n</div>");
    }
  }]);

  return PageTest;
}(_PageTemplate2.PageTemplate);

exports.PageTest = PageTest;