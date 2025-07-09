"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminPageRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _Dashboard = require("../pages/admin/Dashboard.js");

var _Categories = require("../pages/admin/categories/Categories.js");

var _CategoriesPublished = require("../pages/admin/categories/CategoriesPublished.js");

var _CategoriesDraft = require("../pages/admin/categories/CategoriesDraft.js");

var _CategoriesNew = require("../pages/admin/categories/CategoriesNew.js");

var _Movies = require("../pages/admin/movies/Movies.js");

var _MoviesDraft = require("../pages/admin/movies/MoviesDraft.js");

var _MoviesNew = require("../pages/admin/movies/MoviesNew.js");

var _MoviesPublished = require("../pages/admin/movies/MoviesPublished.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var adminPageRouter = _express["default"].Router();

exports.adminPageRouter = adminPageRouter;
adminPageRouter.get('/', function (req, res) {
  return res.send(new _Dashboard.PageDashboard(req).render());
});
adminPageRouter.get('/categories', function (req, res) {
  return res.send(new _Categories.PageAdminCategories(req).render());
});
adminPageRouter.get('/categories/published', function (req, res) {
  return res.send(new _CategoriesPublished.PageAdminCategoriesPublished(req).render());
});
adminPageRouter.get('/categories/draft', function (req, res) {
  return res.send(new _CategoriesDraft.PageAdminCategoriesDraft(req).render());
});
adminPageRouter.get('/categories/new', function (req, res) {
  return res.send(new _CategoriesNew.PageAdminCategoriesNew(req).render());
});
adminPageRouter.get('/movies', function (req, res) {
  return res.send(new _Movies.PageAdminMovies(req).render());
});
adminPageRouter.get('/movies/published', function (req, res) {
  return res.send(new _MoviesPublished.PageAdminMoviesPublished(req).render());
});
adminPageRouter.get('/movies/draft', function (req, res) {
  return res.send(new _MoviesDraft.PageAdminMoviesDraft(req).render());
});
adminPageRouter.get('/movies/new', function (req, res) {
  return res.send(new _MoviesNew.PageAdminMoviesNew(req).render());
});