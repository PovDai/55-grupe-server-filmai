"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postCategories = postCategories;

var _db = require("../../db.js");

var _IsValid = require("../../lib/IsValid.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function postCategories(req, res) {
  var _IsValid$fields, _IsValid$fields2, err, msg, _req$body, title, url, status, description;

  return regeneratorRuntime.async(function postCategories$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _IsValid$fields = _IsValid.IsValid.fields(req.body, {
            title: 'nonEmptyString',
            url: 'nonEmptyString',
            status: 'nonEmptyString'
          }, {
            description: 'nonEmptyString'
          }), _IsValid$fields2 = _slicedToArray(_IsValid$fields, 2), err = _IsValid$fields2[0], msg = _IsValid$fields2[1];

          if (!err) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.json({
            status: 'error',
            msg: msg
          }));

        case 3:
          _req$body = req.body, title = _req$body.title, url = _req$body.url, status = _req$body.status, description = _req$body.description; // SELECT
          // INSERT

          return _context.abrupt("return", res.status(201).json({
            status: 'success',
            msg: 'Sekmingai sukurta filmu kategorija'
          }));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}