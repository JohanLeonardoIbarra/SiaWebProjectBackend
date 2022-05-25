"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _noticia = _interopRequireDefault(require("@Model/noticia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (req, res) => {
  const {
    titulo,
    descripcion,
    autor,
    fecha,
    categoria,
    mesa
  } = req.body;

  try {
    const noti = await _noticia.default.create({
      titulo,
      descripcion,
      autor,
      fecha,
      categoria,
      mesa
    });
    res.status(200).send({
      message: `Noticia creada con exito`
    });
  } catch (e) {
    res.status(500).send({
      message: `Error al crear la noticia: ${e}`
    });
  }
};

exports.default = _default;