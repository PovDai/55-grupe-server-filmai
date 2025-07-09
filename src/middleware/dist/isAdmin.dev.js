"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdmin = isAdmin;

var _Error = require("../pages/public/Error401.js");

function isAdmin(req, res, next) {
  if (!req.user.isLoggedIn) {
    return res.send(new _Error.PageError401(req).render());
  }

  return next();
}