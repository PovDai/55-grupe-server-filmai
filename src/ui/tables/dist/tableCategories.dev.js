"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableCategories = tableCategories;

function tableCategories(data) {
  var HTML = '';
  var nr = 1;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var category = _step.value;
      HTML += "\n            <tr>\n                <th scope=\"row\">".concat(nr++, "</th>\n                <td><a href=\"/admin\">").concat(category.title, "</a></td>\n                <td>").concat(category.url, "</td>\n                <td>").concat(category.description, "</td>\n                <td>").concat(category.moviesCount, "</td>\n                <td>").concat(category.isPublished ? 'Published' : 'Draft', "</td>\n                <td>\n                    <a class=\"btn btn-primary btn-sm\" href=\"/admin\">Edit</a>\n                    <button class=\"btn btn-danger btn-sm\">Delete</button>\n                </td>\n            </tr>");
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

  return "\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">#</th>\n                    <th scope=\"col\">Title</th>\n                    <th scope=\"col\">Url</th>\n                    <th scope=\"col\">Description</th>\n                    <th scope=\"col\">Movies count</th>\n                    <th scope=\"col\">Status</th>\n                    <th scope=\"col\">Actions</th>\n                </tr>\n            </thead>\n            <tbody>".concat(HTML, "</tbody>\n        </table>");
}