"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrarTodos = exports.eliminarUni = exports.editarUni = exports.agregarUni = void 0;

var _universidad = _interopRequireDefault(require("@Model/universidad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mostrarTodos = async (req, res) => {
  const universidades = await _universidad.default.findAll();
  res.status(200).json(universidades);
};

exports.mostrarTodos = mostrarTodos;

const agregarUni = async (req, res) => {
  const {
    nombre,
    logo,
    responsable,
    ciudad
  } = req.body;

  if (!nombre || !logo || !responsable || !ciudad) {
    res.status(400).json({
      message: "Datos insuficientes"
    });
    return;
  }

  try {
    const universidad = await _universidad.default.create(req.body);
    res.status(200).send({
      universidad,
      message: `Universidad creada con exito`
    });
  } catch (e) {
    res.status(400).send({
      message: `Error al crear nueva universidad: ${e}`
    });
  }
};

exports.agregarUni = agregarUni;

const editarUni = async (req, res) => {
  let id = req.params.id;

  try {
    const universidad = await _universidad.default.findOne({
      where: {
        id: id
      }
    });
    universidad.update(req.body);
    res.status(200).send({
      universidad,
      message: `Universidad actualizada con exito`
    });
  } catch (e) {
    res.status(400).send({
      message: `Error al actualizar la universidad: ${e}`
    });
  }
};

exports.editarUni = editarUni;

const eliminarUni = async (req, res) => {
  let id = req.params.id;

  try {
    const universidad = await _universidad.default.findOne({
      where: {
        id: id
      }
    });
    universidad.destroy();
    res.status(200).send({
      message: `Universidad eliminada con exito`
    });
  } catch (e) {
    res.status(400).send({
      message: `Error al eliminar la universidad: ${e}`
    });
  }
};

exports.eliminarUni = eliminarUni;