"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publicPageRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _Home = require("../pages/public/Home.js");

var _Movies = require("../pages/public/Movies.js");

var _Categories = require("../pages/public/Categories.js");

var _Login = require("../pages/public/Login.js");

var _Register = require("../pages/public/Register.js");

var _Something = require("../pages/public/Something.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var publicPageRouter = _express["default"].Router();

exports.publicPageRouter = publicPageRouter;
publicPageRouter.get('/', function (req, res) {
  return res.send(new _Home.PageHome(req).render());
});
publicPageRouter.get('/movies', function (req, res) {
  return res.send(new _Movies.PageMovies(req).render());
});
publicPageRouter.get('/categories', function (req, res) {
  return res.send(new _Categories.PageCategories(req).render());
});
publicPageRouter.get('/login', function (req, res) {
  return res.send(new _Login.PageLogin(req).render());
});
publicPageRouter.get('/register', function (req, res) {
  return res.send(new _Register.PageRegister(req).render());
});
publicPageRouter.get('/test', function (req, res) {
  return res.send(new _Something.PageTest(req).render());
});