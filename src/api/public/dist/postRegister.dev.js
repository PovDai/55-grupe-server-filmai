"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postRegister = postRegister;

var _db = require("../../db.js");

var _hash = require("../../lib/hash.js");

var _IsValid = require("../../lib/IsValid.js");

var _randomString = require("../../lib/randomString.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function postRegister(req, res) {
  var _IsValid$fields, _IsValid$fields2, err, msg, _req$body, username, email, password, sql, _ref, _ref2, response, salt, passwordHash, _sql, _ref3, _ref4, _response;

  return regeneratorRuntime.async(function postRegister$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _IsValid$fields = _IsValid.IsValid.fields(req.body, {
            username: 'username',
            email: 'email',
            password: 'password',
            tos: 'tos'
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
          _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password;
          _context.prev = 4;
          sql = "SELECT * FROM users WHERE username = ? OR email = ?;";
          _context.next = 8;
          return regeneratorRuntime.awrap(_db.connection.execute(sql, [username, email]));

        case 8:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 1);
          response = _ref2[0];

          if (!(response.length > 0)) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            status: 'error',
            msg: 'Toks vartotojas jau uzregistruotas'
          }));

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](4);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida'
          }));

        case 19:
          salt = (0, _randomString.randomString)(10);
          passwordHash = (0, _hash.hash)(password + salt);
          _context.prev = 21;
          _sql = "INSERT INTO users (username, email, salt, password_hash) VALUES (?, ?, ?, ?);";
          _context.next = 25;
          return regeneratorRuntime.awrap(_db.connection.execute(_sql, [username, email, salt, passwordHash]));

        case 25:
          _ref3 = _context.sent;
          _ref4 = _slicedToArray(_ref3, 1);
          _response = _ref4[0];

          if (!(_response.affectedRows !== 1)) {
            _context.next = 30;
            break;
          }

          return _context.abrupt("return", res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida'
          }));

        case 30:
          _context.next = 38;
          break;

        case 32:
          _context.prev = 32;
          _context.t1 = _context["catch"](21);

          if (!(_context.t1.code === 'ER_DUP_ENTRY')) {
            _context.next = 36;
            break;
          }

          return _context.abrupt("return", res.status(500).json({
            status: 'error',
            msg: 'kartojasi irasas...'
          }));

        case 36:
          console.log(_context.t1);
          return _context.abrupt("return", res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida'
          }));

        case 38:
          return _context.abrupt("return", res.status(201).json({
            status: 'success',
            msg: 'Sekminga registracija'
          }));

        case 39:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 15], [21, 32]]);
}