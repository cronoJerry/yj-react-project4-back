"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userControllers = require("../controllers/userControllers.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userRouter = _express["default"].Router();

// 회원가입
userRouter.post("/register", _userControllers.postRegisterMember);
// 로그인
userRouter.post("/signin", _userControllers.postUsernameSignIn);
// 로그인 확인
userRouter.get("/login/success", _userControllers.getLoginSuccess);
// 로그아웃
userRouter.post("/logout", _userControllers.logout);

// 카카오로그인 - second step
userRouter.post("/kakao", _userControllers.kakaoLogin);
var _default = userRouter;
exports["default"] = _default;