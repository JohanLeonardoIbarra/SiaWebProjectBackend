"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eliminarNoticia = exports.editarNoticia = exports.agregarNoticia = exports.MostrarTodos = void 0;

var _noticia = _interopRequireDefault(require("@Model/noticia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MostrarTodos = async (req, res) => {
  try {
    const noticias = await _noticia.default.findAll();
    res.status(200).json(noticias);
  } catch (err) {
    res.status(404).json({
      message: err.message
    });
  }
};

exports.MostrarTodos = MostrarTodos;

const agregarNoticia = async (req, res) => {
  const {
    titulo,
    descripcion,
    mesa_id
  } = req.body;

  if (!titulo || !descripcion || !mesa_id) {
    res.status(400).json({
      message: "Datos insuficientes"
    });
    return;
  }

  try {
    const noticia = await _noticia.default.create(req.body);
    res.status(200).send({
      noticia,
      message: `Noticia creada con exito`
    });
  } catch (e) {
    res.status(400).send({
      message: `Error al crear la noticia: ${e}`
    });
  }
};

exports.agregarNoticia = agregarNoticia;

const editarNoticia = async (req, res) => {
  let id = req.params.id;

  try {
    const noticia = await _noticia.default.findOne({
      where: {
        id: id
      }
    });
    noticia.update(req.body);
    res.status(200).send({
      noticia,
      message: `Noticia actualizada con exito`
    });
  } catch (e) {
    res.status(400).send({
      message: `Error al actualizar la noticia ${e}`
    });
  }
};

exports.editarNoticia = editarNoticia;

const eliminarNoticia = async (req, res) => {
  let id = req.params.id;

  try {
    const noticia = await _noticia.default.findOne({
      where: {
        id: id
      }
    });
    noticia.destroy();
    res.status(200).send({
      message: `Noticia eliminada con exito`
    });
  } catch (e) {
    res.status(400).send({
      message: `Error al eliminar la noticia ${e}`
    });
  }
};

exports.eliminarNoticia = eliminarNoticia;