"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("@DB/connection"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Universidad extends _sequelize.Model {}

Universidad.init({
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    unique: "unique_universidad"
  },
  logo: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  responsable: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  ciudad: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    unique: "unique_universidad"
  },
  info: {
    type: _sequelize.DataTypes.STRING
  }
}, {
  sequelize: _connection.default,
  modelName: 'universidad',
  timestamps: false
});
var _default = Universidad;
exports.default = _default;