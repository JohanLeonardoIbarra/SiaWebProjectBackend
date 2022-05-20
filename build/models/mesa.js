"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("@DB/connection"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Mesa extends _sequelize.Model {}

Mesa.init({
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  universidad_id: {
    type: _sequelize.DataTypes.INTEGER,
    references: {
      model: 'universidad',
      key: 'id'
    }
  }
}, {
  sequelize: _connection.default,
  modelName: 'mesa',
  timestamps: false
});
var _default = Mesa;
exports.default = _default;