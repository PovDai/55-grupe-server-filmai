"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publicApiRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _postRegister = require("../api/public/postRegister.js");

var _postLogin = require("../api/public/postLogin.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var publicApiRouter = _express["default"].Router();

exports.publicApiRouter = publicApiRouter;
publicApiRouter.post('/register', _postRegister.postRegister);
publicApiRouter.post('/login', _postLogin.postLogin);