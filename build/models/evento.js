"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("@DB/connection"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Evento extends _sequelize.Model {}

Evento.init({
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  fechaInicio: {
    type: _sequelize.DataTypes.DATE,
    allowNull: false
  },
  fechaFin: {
    type: _sequelize.DataTypes.DATE
  },
  descripcion: {
    type: _sequelize.DataTypes.STRING
  },
  lugar: {
    type: _sequelize.DataTypes.STRING
  },
  responsable: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  contacto: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  url: {
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
  modelName: 'evento',
  timestamps: false
});
var _default = Evento;
exports.default = _default;