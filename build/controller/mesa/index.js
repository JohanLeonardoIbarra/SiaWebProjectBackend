"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrarTodos = exports.eliminarMesa = exports.editarMesa = exports.agregarMesa = void 0;

var _mesa = _interopRequireDefault(require("@Model/mesa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mostrarTodos = async (req, res) => {
  const mesas = await _mesa.default.findAll();
  res.status(200).json(mesas);
};

exports.mostrarTodos = mostrarTodos;

const agregarMesa = async (req, res) => {
  const {
    nombre,
    correo,
    universidad_id
  } = req.body;

  if (!nombre || !correo || !universidad_id) {
    res.status(400).json({
      message: "Datos insuficientes"
    });
    return;
  }

  try {
    const mesa = await _mesa.default.create(req.body);
    res.status(200).send({
      mesa,
      message: `Mesa creada con exito`
    });
  } catch (e) {
    res.status(400).send({
      message: `Error al crear la mesa: ${e}`
    });
  }
};

exports.agregarMesa = agregarMesa;

const editarMesa = async (req, res) => {
  let id = req.params.id;

  try {
    const mesa = await _mesa.default.findOne({
      where: {
        id: id
      }
    });
    mesa.update(req.body);
    res.status(200).send({
      mesa,
      message: `mesa actualizada con exito`
    });
  } catch (e) {
    res.status(400).send({
      message: `Error al actualizar la mesa ${e}`
    });
  }
};

exports.editarMesa = editarMesa;

const eliminarMesa = async (req, res) => {
  let id = req.params.id;

  try {
    const mesa = await _mesa.default.findOne({
      where: {
        id: id
      }
    });
    mesa.destroy();
    res.status(200).send({
      message: `Mesa eliminada con exito`
    });
  } catch (e) {
    res.status(400).send({
      message: `Error al eliminar la mesa ${e}`
    });
  }
};

exports.eliminarMesa = eliminarMesa;