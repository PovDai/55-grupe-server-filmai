"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageAdminCategories = void 0;

var _AdminTemplate2 = require("../../../templates/AdminTemplate.js");

var _tableCategories = require("../../../ui/tables/tableCategories.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageAdminCategories =
/*#__PURE__*/
function (_AdminTemplate) {
  _inherits(PageAdminCategories, _AdminTemplate);

  function PageAdminCategories() {
    _classCallCheck(this, PageAdminCategories);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageAdminCategories).apply(this, arguments));
  }

  _createClass(PageAdminCategories, [{
    key: "main",
    value: function main() {
      var data = [{
        id: 1,
        title: 'Action',
        url: 'action',
        description: 'Lorem ipsum...',
        isPublished: true,
        moviesCount: 0
      }, {
        id: 2,
        title: 'Crime',
        url: 'crime',
        description: 'Lorem ipsum...',
        isPublished: false,
        moviesCount: 0
      }, {
        id: 3,
        title: 'Sci-Fi',
        url: 'sci-fi',
        description: 'Lorem ipsum...',
        isPublished: true,
        moviesCount: 0
      }];
      return "\n            <main>\n               <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <h1 class=\"display-5\">All categories</h1>\n                        </div>\n                    </div>\n                </div>\n               <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            ".concat((0, _tableCategories.tableCategories)(data), "\n                        </div>\n                    </div>\n                </div>\n            </main>");
    }
  }]);

  return PageAdminCategories;
}(_AdminTemplate2.AdminTemplate);

exports.PageAdminCategories = PageAdminCategories;