"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoriesListSection = categoriesListSection;

function categoriesListSection(data) {
  var HTML = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      HTML += "\n            <div class=\"feature col my-4\">\n                <h3 class=\"fs-2 text-body-emphasis\">".concat(item.title, "</h3>\n                <p>").concat(item.description, "</p>\n                <p>Movies count: ").concat(item.moviesCount, "</p>\n                <a href=\"/categories").concat(item.href, "\" class=\"icon-link\">Read more</a>\n            </div>");
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

  return "\n        <div class=\"container px-4 py-5\" id=\"featured-3\">\n            <div class=\"row g-4 py-5 row-cols-1 row-cols-lg-3\">".concat(HTML, "</div>\n        </div>");
}