"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginForm = loginForm;

var _env = require("../../env.js");

function loginForm() {
  var email = '';
  var password = '';

  if (_env.NODE_ENV === 'dev') {
    email = 'chuck@norris.lt';
    password = 'chuck@norris.lt';
  }

  return "\n        <div class=\"container\">\n            <div class=\"row\">\n                <form class=\"col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4\">\n                    <div class=\"mb-4\">\n                        <label for=\"username_or_email\" class=\"form-label\">Username or Email</label>\n                        <input id=\"username_or_email\" value=\"".concat(email, "\" type=\"text\" class=\"form-control fs-5\" required>\n                    </div>\n                    <div class=\"mb-4\">\n                        <label for=\"password\" class=\"form-label\">Password</label>\n                        <input id=\"password\" value=\"").concat(password, "\" type=\"password\" class=\"form-control fs-5\" required>\n                    </div>\n                    <div class=\"mb-4\">\n                        <button type=\"submit\" class=\"btn btn-primary w-100 py-2 fs-5\">Login</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n        ");
}