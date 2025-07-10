"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminApiRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _postCategories = require("../api/admin/postCategories.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var adminApiRouter = _express["default"].Router();

exports.adminApiRouter = adminApiRouter;
adminApiRouter.post('/categories', _postCategories.postCategories);