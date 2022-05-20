"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const connection = new _sequelize.default(_config.default.DB_URI, {
  define: {
    freezeTableName: true
  }
});
var _default = connection;
exports.default = _default;