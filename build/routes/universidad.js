"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _universidad = require("@Controller/universidad");

const router = new _express.Router();
router.get('/universidades', _universidad.mostrarTodos);
router.post('/universidades', _universidad.agregarUni);
router.put('/universidades/:id', _universidad.editarUni);
router.delete('/universidades/:id', _universidad.eliminarUni);
var _default = router;
exports.default = _default;