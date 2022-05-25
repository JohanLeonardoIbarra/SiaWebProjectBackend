"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _evento = _interopRequireDefault(require("@Model/evento"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (req, res) => {
  const {
    nombre,
    fechaInicio,
    fechaFin,
    descripcion,
    lugar,
    responsable,
    contacto,
    url,
    mesa
  } = req.body;

  try {
    const even = await _evento.default.create({
      nombre,
      fechaInicio,
      fechaFin,
      descripcion,
      lugar,
      responsable,
      contacto,
      url,
      mesa
    });
    res.status(200).send({
      message: `Evento creada con exito`
    });
  } catch (e) {
    res.status(500).send({
      message: `Error al crear evento: ${e}`
    });
  }
};

exports.default = _default;