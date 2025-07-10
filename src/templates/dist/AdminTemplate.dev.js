"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminTemplate = void 0;

var _headerData = require("../data/headerData.js");

var _sidebarData = require("../data/sidebarData.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AdminTemplate =
/*#__PURE__*/
function () {
  function AdminTemplate(req) {
    _classCallCheck(this, AdminTemplate);

    this.req = req;
    this.pageJS = '';
  }

  _createClass(AdminTemplate, [{
    key: "head",
    value: function head() {
      return "\n            <head>\n                <meta charset=\"UTF-8\">\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                <title>Express example</title>\n                <link rel=\"shortcut icon\" href=\"/favicon.ico\" />\n                <link rel=\"icon\" type=\"image/png\" href=\"/favicon/favicon-96x96.png\" sizes=\"96x96\" />\n                <link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon/favicon.svg\" />\n                <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/favicon/apple-touch-icon.png\" />\n                <meta name=\"apple-mobile-web-app-title\" content=\"Coming soon\" />\n                <link rel=\"manifest\" href=\"/favicon/site.webmanifest\" />\n                <link rel=\"stylesheet\" href=\"/css/bootstrap.min.css\">\n                <link rel=\"stylesheet\" href=\"/css/custom.css\">\n            </head>";
    }
  }, {
    key: "header",
    value: function header() {
      var HTML = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _headerData.commonHeaderMenuData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var link = _step.value;
          HTML += "\n                <li>\n                    <a href=\"".concat(link.href, "\" class=\"nav-link px-2\">").concat(link.text, "</a>\n                </li>");
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

      return "\n            <div class=\"container-fluid\">\n                <header class=\"d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom\">\n                    <div class=\"col-md-3 mb-2 mb-md-0\">\n                        <a href=\"/\" class=\"d-inline-flex link-body-emphasis text-decoration-none\">\n                            <svg class=\"bi\" width=\"40\" height=\"32\" role=\"img\" aria-label=\"Bootstrap\" viewBox=\"0 0 118 94\">\n                                <title>Bootstrap</title>\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z\"></path>\n                            </svg>\n                        </a>\n                    </div>\n                    <ul class=\"nav col-12 col-md-auto mb-2 justify-content-center mb-md-0\">".concat(HTML, "</ul>\n                    <div class=\"col-md-3 text-end\">\n                        <a href=\"/admin\" class=\"btn btn-primary\">Dashboard</a>\n                    </div>\n                </header>\n            </div>");
    }
  }, {
    key: "footer",
    value: function footer() {
      var HTML = '';
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _headerData.commonHeaderMenuData[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var link = _step2.value;
          HTML += "\n                <li class=\"nav-item\">\n                    <a href=\"".concat(link.href, "\" class=\"nav-link px-2 text-body-secondary\">").concat(link.text, "</a>\n                </li>");
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return "\n            <div class=\"container-fluid\">\n                <footer class=\"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top\">\n                    <p class=\"col-md-4 mb-0 text-body-secondary\">&copy; 2025 Company, Inc</p>\n                    <ul class=\"nav col-md-4 justify-content-end\">".concat(HTML, "</ul>\n                </footer>\n            </div>");
    }
  }, {
    key: "script",
    value: function script() {
      if (!this.pageJS) {
        return '';
      }

      return "<script src=\"/js/".concat(this.pageJS, ".js\" type=\"module\"></script>");
    }
  }, {
    key: "sidebar",
    value: function sidebar() {
      var HTML = '';
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = _sidebarData.sidebarMenuData[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = _step3.value;

          if (typeof item === 'string') {
            HTML += "\n                    <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase\">\n                        <span>".concat(item, "</span>\n                    </h6>");
          } else {
            var liHTML = '';
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = item[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var li = _step4.value;
                liHTML += "\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link d-flex align-items-center gap-2 ".concat(this.req.url === li.href ? 'active' : '', "\" aria-current=\"page\" href=\"").concat(li.href, "\">\n                                ").concat(li.text, "\n                            </a>\n                        </li>");
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                  _iterator4["return"]();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            HTML += "\n                    <ul class=\"nav nav-pills flex-column\">\n                        ".concat(liHTML, "\n                    </ul>");
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return "\n            <div class=\"sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary\">\n                <div class=\"offcanvas-md offcanvas-end bg-body-tertiary\" tabindex=\"-1\" id=\"sidebarMenu\" aria-labelledby=\"sidebarMenuLabel\">\n                    <div class=\"offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto\">\n                        ".concat(HTML, "\n                    </div>\n                </div>\n            </div>");
    }
  }, {
    key: "main",
    value: function main() {
      return "\n            <h2>Section title</h2>\n            <div class=\"table-responsive small\">\n                <table class=\"table table-striped table-sm\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">Header</th>\n                            <th scope=\"col\">Header</th>\n                            <th scope=\"col\">Header</th>\n                            <th scope=\"col\">Header</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>1,001</td>\n                            <td>random</td>\n                            <td>data</td>\n                            <td>placeholder</td>\n                            <td>text</td>\n                        </tr>\n                        <tr>\n                            <td>1,002</td>\n                            <td>placeholder</td>\n                            <td>irrelevant</td>\n                            <td>visual</td>\n                            <td>layout</td>\n                        </tr>\n                        <tr>\n                            <td>1,003</td>\n                            <td>data</td>\n                            <td>rich</td>\n                            <td>dashboard</td>\n                            <td>tabular</td>\n                        </tr>\n                        <tr>\n                            <td>1,003</td>\n                            <td>information</td>\n                            <td>placeholder</td>\n                            <td>illustrative</td>\n                            <td>data</td>\n                        </tr>\n                        <tr>\n                            <td>1,004</td>\n                            <td>text</td>\n                            <td>random</td>\n                            <td>layout</td>\n                            <td>dashboard</td>\n                        </tr>\n                        <tr>\n                            <td>1,005</td>\n                            <td>dashboard</td>\n                            <td>irrelevant</td>\n                            <td>text</td>\n                            <td>placeholder</td>\n                        </tr>\n                        <tr>\n                            <td>1,006</td>\n                            <td>dashboard</td>\n                            <td>illustrative</td>\n                            <td>rich</td>\n                            <td>data</td>\n                        </tr>\n                        <tr>\n                            <td>1,007</td>\n                            <td>placeholder</td>\n                            <td>tabular</td>\n                            <td>information</td>\n                            <td>irrelevant</td>\n                        </tr>\n                        <tr>\n                            <td>1,008</td>\n                            <td>random</td>\n                            <td>data</td>\n                            <td>placeholder</td>\n                            <td>text</td>\n                        </tr>\n                        <tr>\n                            <td>1,009</td>\n                            <td>placeholder</td>\n                            <td>irrelevant</td>\n                            <td>visual</td>\n                            <td>layout</td>\n                        </tr>\n                        <tr>\n                            <td>1,010</td>\n                            <td>data</td>\n                            <td>rich</td>\n                            <td>dashboard</td>\n                            <td>tabular</td>\n                        </tr>\n                        <tr>\n                            <td>1,011</td>\n                            <td>information</td>\n                            <td>placeholder</td>\n                            <td>illustrative</td>\n                            <td>data</td>\n                        </tr>\n                        <tr>\n                            <td>1,012</td>\n                            <td>text</td>\n                            <td>placeholder</td>\n                            <td>layout</td>\n                            <td>dashboard</td>\n                        </tr>\n                        <tr>\n                            <td>1,013</td>\n                            <td>dashboard</td>\n                            <td>irrelevant</td>\n                            <td>text</td>\n                            <td>visual</td>\n                        </tr>\n                        <tr>\n                            <td>1,014</td>\n                            <td>dashboard</td>\n                            <td>illustrative</td>\n                            <td>rich</td>\n                            <td>data</td>\n                        </tr>\n                        <tr>\n                            <td>1,015</td>\n                            <td>random</td>\n                            <td>tabular</td>\n                            <td>information</td>\n                            <td>text</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>";
    }
  }, {
    key: "render",
    value: function render() {
      return "\n            <!DOCTYPE html>\n            <html lang=\"en\">\n            ".concat(this.head(), "\n            <body>\n                ").concat(this.header(), "\n                <div class=\"container-fluid min-vh-100\">\n                    <div class=\"row\">\n                        ").concat(this.sidebar(), "\n                        <main class=\"col-md-9 ms-sm-auto col-lg-10 px-md-4\">\n                            ").concat(this.main(), "\n                        </main>\n                    </div>\n                </div>\n                ").concat(this.footer(), "\n                ").concat(this.script(), "\n            </body>\n            </html>");
    }
  }]);

  return AdminTemplate;
}();

exports.AdminTemplate = AdminTemplate;