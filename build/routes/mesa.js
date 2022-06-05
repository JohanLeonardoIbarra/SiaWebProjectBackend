"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _mesa = require("@Controller/mesa");

const router = new _express.Router();
router.get('/mesas', _mesa.mostrarTodos);
router.post('/mesas', _mesa.agregarMesa);
router.put('/mesas/:id', _mesa.editarMesa);
router.delete('/mesas/:id', _mesa.editarMesa);
var _default = router;
exports.default = _default;