"use strict";

require("dotenv/config");
require("./db.js");
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _rentalRouter = _interopRequireDefault(require("./routers/rentalRouter.js"));
var _cors = _interopRequireDefault(require("cors"));
var _foodsRouter = _interopRequireDefault(require("./routers/foodsRouter.js"));
var _userRouter = _interopRequireDefault(require("./routers/userRouter.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = 8080;
var app = (0, _express["default"])();
var corsOptions = {
  origin: ["http://localhost:3000", "https://merry-starship-9d7e2f.netlify.app"],
  methods: ["GET", "POST"],
  credentials: true
};

// 미들웨어 부분
app.use((0, _cookieParser["default"])());
app.use((0, _cors["default"])(corsOptions));
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/api/rental", _rentalRouter["default"]);
app.use("/api/foods", _foodsRouter["default"]);
app.use("/api/users", _userRouter["default"]);
var handleListening = function handleListening() {
  return console.log("\uD83D\uDE0DServer listening on port http://localhost:".concat(PORT));
};
app.listen(PORT, handleListening);