"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postLogin = postLogin;

var _db = require("../../db.js");

var _env = require("../../env.js");

var _hash = require("../../lib/hash.js");

var _IsValid = require("../../lib/IsValid.js");

var _randomString = require("../../lib/randomString.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function postLogin(req, res) {
  var _IsValid$fields, _IsValid$fields2, err, msg, _req$body, usernameOrEmail, password, userObj, sql, _ref, _ref2, response, hashedPassword, loginTokenString, _sql, _ref3, _ref4, _response, cookieParams;

  return regeneratorRuntime.async(function postLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _IsValid$fields = _IsValid.IsValid.fields(req.body, {
            usernameOrEmail: 'nonEmptyString',
            password: 'password'
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
          _req$body = req.body, usernameOrEmail = _req$body.usernameOrEmail, password = _req$body.password;
          userObj = null;
          _context.prev = 5;
          sql = "SELECT * FROM users WHERE username = ? OR email = ?;";
          _context.next = 9;
          return regeneratorRuntime.awrap(_db.connection.execute(sql, [usernameOrEmail, usernameOrEmail]));

        case 9:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 1);
          response = _ref2[0];

          if (!(response.length === 0)) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            status: 'error',
            msg: 'Username/email ir password pora yra neteisinga'
          }));

        case 14:
          if (!(response.length > 1)) {
            _context.next = 16;
            break;
          }

          return _context.abrupt("return", res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida'
          }));

        case 16:
          userObj = response[0];
          _context.next = 23;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](5);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida'
          }));

        case 23:
          hashedPassword = (0, _hash.hash)(password + userObj.salt);

          if (!(hashedPassword !== userObj.password_hash)) {
            _context.next = 26;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            status: 'error',
            msg: 'Username/email ir password pora yra neteisinga'
          }));

        case 26:
          loginTokenString = (0, _randomString.randomString)();
          _context.prev = 27;
          _sql = "INSERT INTO login_tokens (user_id, token) VALUES (?, ?);";
          _context.next = 31;
          return regeneratorRuntime.awrap(_db.connection.execute(_sql, [userObj.id, loginTokenString]));

        case 31:
          _ref3 = _context.sent;
          _ref4 = _slicedToArray(_ref3, 1);
          _response = _ref4[0];

          if (!(_response.affectedRows !== 1)) {
            _context.next = 36;
            break;
          }

          return _context.abrupt("return", res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida'
          }));

        case 36:
          _context.next = 42;
          break;

        case 38:
          _context.prev = 38;
          _context.t1 = _context["catch"](27);
          console.log(_context.t1);
          return _context.abrupt("return", res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida'
          }));

        case 42:
          cookieParams = ['loginToken=' + loginTokenString, 'domain=localhost', 'max-age=' + _env.COOKIE_MAX_AGE, 'HttpOnly', 'path=/', 'Secure', 'SameSite=Lax'];
          return _context.abrupt("return", res.set({
            'Set-Cookie': cookieParams.join('; ')
          }).json({
            status: 'success',
            msg: 'Tu buvai sekmingai prijungtas prie sistemos',
            action: 'redirect',
            href: '/admin'
          }));

        case 44:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 19], [27, 38]]);
}