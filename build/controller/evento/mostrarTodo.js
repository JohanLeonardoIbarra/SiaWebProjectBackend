"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _evento = _interopRequireDefault(require("@Model/evento"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (req, res) => {
  const eventos = await _evento.default.findAll();
  res.status(200).json(eventos);
};

exports.default = _default;