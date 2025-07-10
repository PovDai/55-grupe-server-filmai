"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageAdminCategoriesNew = void 0;

var _AdminTemplate2 = require("../../../templates/AdminTemplate.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageAdminCategoriesNew =
/*#__PURE__*/
function (_AdminTemplate) {
  _inherits(PageAdminCategoriesNew, _AdminTemplate);

  function PageAdminCategoriesNew(req) {
    var _this;

    _classCallCheck(this, PageAdminCategoriesNew);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageAdminCategoriesNew).call(this, req));
    _this.pageJS = 'new-category';
    return _this;
  }

  _createClass(PageAdminCategoriesNew, [{
    key: "main",
    value: function main() {
      return "\n            <main>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <h1 class=\"display-5\">New category</h1>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <form class=\"col-12 col-md-9 col-lg-6\">\n                            <div class=\"mb-3\">\n                                <label for=\"title\" class=\"form-label\">Title</label>\n                                <input type=\"text\" class=\"form-control\" id=\"title\" required>\n                            </div>\n                            <div class=\"mb-3\">\n                                <label for=\"url\" class=\"form-label\">Url slug</label>\n                                <input type=\"text\" class=\"form-control\" id=\"url\" required>\n                            </div>\n                            <div class=\"mb-3\">\n                                <label for=\"description\" class=\"form-label\">Description</label>\n                                <textarea class=\"form-control\" id=\"description\"></textarea>\n                            </div>\n                            <div class=\"mb-3\">\n                                <label class=\"form-label\">Status</label>\n                                <div class=\"form-check\">\n                                    <input type=\"radio\" name=\"radios\" class=\"form-check-input\" id=\"status_published\" required>\n                                    <label class=\"form-check-label\" for=\"status_published\">Published</label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <input type=\"radio\" name=\"radios\" class=\"form-check-input\" id=\"status_draft\" checked required>\n                                    <label class=\"form-check-label\" for=\"status_draft\">Draft</label>\n                                </div>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-primary\">Create</button>\n                        </form>\n                    </div>\n                </div>\n            </main>";
    }
  }]);

  return PageAdminCategoriesNew;
}(_AdminTemplate2.AdminTemplate);

exports.PageAdminCategoriesNew = PageAdminCategoriesNew;