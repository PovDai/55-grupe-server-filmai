"use strict";

var _express = _interopRequireDefault(require("express"));

var _env = require("./env.js");

var _Error = require("./pages/public/Error404.js");

var _publicPageRouter = require("./routes/publicPageRouter.js");

var _publicApiRouter = require("./routes/publicApiRouter.js");

var _adminPageRouter = require("./routes/adminPageRouter.js");

var _cookieParser = require("./middleware/cookieParser.js");

var _userData = require("./middleware/userData.js");

var _isAdmin = require("./middleware/isAdmin.js");

var _adminApiRouter = require("./routes/adminApiRouter.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"]["static"]('public'));
app.use(_express["default"].json());
app.use(_cookieParser.cookieParser);
app.use(_userData.userData);
app.use('/', _publicPageRouter.publicPageRouter);
app.use('/api', _publicApiRouter.publicApiRouter);
app.use('/admin', _isAdmin.isAdmin, _adminPageRouter.adminPageRouter);
app.use('/api/admin', _isAdmin.isAdmin, _adminApiRouter.adminApiRouter);
app.use(function (err, req, res, next) {
  console.log(err);
  return res.status(500).send('Server error');
});
app.get('*error', function (req, res) {
  return res.send(new _Error.PageError404(req).render());
});
app.listen(_env.PORT, function () {
  console.log("WEB URL: http://localhost:".concat(_env.PORT));
});