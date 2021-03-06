"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _universidad = _interopRequireDefault(require("@Model/universidad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (req, res) => {
  const {
    nombre,
    logo,
    responsable,
    ciudad,
    info
  } = req.body;

  try {
    const Uni = await _universidad.default.create({
      nombre,
      logo,
      responsable,
      ciudad,
      info
    });
    res.status(200).send({
      message: `Universidad creada con exito`
    });
  } catch (e) {
    res.status(500).send({
      message: `Error al crear nueva universidad: ${e}`
    });
  }
};

exports.default = _default;