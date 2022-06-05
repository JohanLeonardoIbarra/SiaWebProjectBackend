"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrarUno = exports.mostrarTodos = exports.eliminarEvento = exports.editarEvento = exports.agregarEvento = void 0;

var _evento = _interopRequireDefault(require("@Model/evento"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mostrarUno = async (req, res) => {
  try {
    const eventos = await _evento.default.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(eventos);
  } catch (err) {
    console.err(err);
    res.status(404).json({
      message: "Evento no encontrado"
    });
  }
};

exports.mostrarUno = mostrarUno;

const mostrarTodos = async (req, res) => {
  const eventos = await _evento.default.findAll();
  res.status(200).json(eventos);
};

exports.mostrarTodos = mostrarTodos;

const agregarEvento = async (req, res) => {
  const {
    nombre,
    fechaInicio,
    responsable,
    contacto,
    mesa_id,
    ...resto
  } = req.body;

  if (!nombre || !fechaInicio || !responsable || !contacto || !mesa_id) {
    res.status(400).json({
      message: "Datos insuficientes"
    });
    return;
  }

  try {
    const evento = await _evento.default.create(req.body);
    res.status(200).send(evento);
  } catch (e) {
    res.status(400).send({
      message: `Error al crear evento: ${e}`
    });
  }
};

exports.agregarEvento = agregarEvento;

const editarEvento = async (req, res) => {
  const id = req.params.id;

  try {
    const evento = await _evento.default.findOne({
      where: {
        id: id
      }
    });
    evento.update(req.body);
    res.status(200).send({
      evento,
      message: `Evento actualizado con exito`
    });
  } catch (e) {
    res.status(400).send({
      message: `Error al actualizar evento: ${e}`
    });
  }
};

exports.editarEvento = editarEvento;

const eliminarEvento = async (req, res) => {
  let id = req.params.id;

  try {
    const evento = await _evento.default.findOne({
      where: {
        id: id
      }
    });
    evento.destroy();
    res.status(200).send({
      evento,
      message: `Evento eliminado con exito`
    });
  } catch (e) {
    res.status(400).send({
      message: `Error al eliminar evento: ${e}`
    });
  }
};

exports.eliminarEvento = eliminarEvento;