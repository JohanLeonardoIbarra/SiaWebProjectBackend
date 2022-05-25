"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mesa = _interopRequireDefault(require("@Model/mesa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (req, res) => {
  const {
    nombre,
    descripcion,
    correo,
    id_uni
  } = req.body;

  try {
    const noti = await _mesa.default.create({
      nombre,
      descripcion,
      correo,
      id_uni
    });
    res.status(200).send({
      message: `Mesa creada con exito`
    });
  } catch (e) {
    res.status(500).send({
      message: `Error al crear la mesa: ${e}`
    });
  }
};

exports.default = _default;