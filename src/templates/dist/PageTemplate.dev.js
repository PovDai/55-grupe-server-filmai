"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageTemplate = void 0;

var _headerData = require("../data/headerData.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PageTemplate =
/*#__PURE__*/
function () {
  function PageTemplate(req) {
    _classCallCheck(this, PageTemplate);

    this.req = req;
    this.pageJS = '';
  }

  _createClass(PageTemplate, [{
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

      return "\n            <div class=\"container\">\n                <header class=\"d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom\">\n                    <div class=\"col-md-3 mb-2 mb-md-0\">\n                        <a href=\"/\" class=\"d-inline-flex link-body-emphasis text-decoration-none\">\n                            <svg class=\"bi\" width=\"40\" height=\"32\" role=\"img\" aria-label=\"Bootstrap\" viewBox=\"0 0 118 94\">\n                                <title>Bootstrap</title>\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z\"></path>\n                            </svg>\n                        </a>\n                    </div>\n                    <ul class=\"nav col-12 col-md-auto mb-2 justify-content-center mb-md-0\">".concat(HTML, "</ul>\n                    ").concat(this.userMenu(), "\n                </header>\n            </div>");
    }
  }, {
    key: "userMenu",
    value: function userMenu() {
      console.log(this);

      if (this.req.user.isLoggedIn) {
        return "\n                <div class=\"col-md-3 text-end\">\n                    <a href=\"/admin\" class=\"btn btn-primary\">Dashboard</a>\n                </div>";
      }

      return "\n            <div class=\"col-md-3 text-end\">\n                <a href=\"/login\" class=\"btn btn-outline-primary me-2\">Login</a>\n                <a href=\"/register\" class=\"btn btn-primary\">Register</a>\n            </div>";
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

      return "\n            <div class=\"container\">\n                <footer class=\"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top\">\n                    <p class=\"col-md-4 mb-0 text-body-secondary\">&copy; 2025 Company, Inc</p>\n                    <ul class=\"nav col-md-4 justify-content-end\">".concat(HTML, "</ul>\n                </footer>\n            </div>");
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
    key: "main",
    value: function main() {
      return "\n            <main class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        TEMPLATE PAGE CONTENT\n                    </div>\n                </div>\n            </main>";
    }
  }, {
    key: "render",
    value: function render() {
      return "\n            <!DOCTYPE html>\n            <html lang=\"en\">\n            ".concat(this.head(), "\n            <body>\n                ").concat(this.header(), "\n                ").concat(this.main(), "\n                ").concat(this.footer(), "\n                ").concat(this.script(), "\n            </body>\n            </html>");
    }
  }]);

  return PageTemplate;
}();

exports.PageTemplate = PageTemplate;