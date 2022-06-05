"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _evento = require("@Controller/evento");

const router = new _express.Router();
router.get('/eventos', _evento.mostrarTodos);
router.get('/eventos/:id', _evento.mostrarUno);
router.post('/eventos', _evento.agregarEvento);
router.put('/eventos/:id', _evento.editarEvento);
router.delete('/eventos/:id', _evento.eliminarEvento);
var _default = router;
exports.default = _default;