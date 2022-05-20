"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moduleAlias = _interopRequireDefault(require("module-alias"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _moduleAlias.default.addAliases({
  '@Controller': _path.default.join(__dirname, '../controller/'),
  "@Model": _path.default.join(__dirname, '../models/'),
  "@Router": _path.default.join(__dirname, '../routes/'),
  "@DB": _path.default.join(__dirname, '../database/')
});

exports.default = _default;