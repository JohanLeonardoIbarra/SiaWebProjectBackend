"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("@DB/connection"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Noticia extends _sequelize.Model {}

Noticia.init({
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: _sequelize.DataTypes.STRING
  },
  categoria: {
    type: _sequelize.DataTypes.STRING
  },
  mesa_id: {
    type: _sequelize.DataTypes.INTEGER,
    references: {
      model: 'mesa',
      key: 'id'
    },
    allowNull: false
  }
}, {
  sequelize: _connection.default,
  modelName: 'noticia'
});
var _default = Noticia;
exports.default = _default;