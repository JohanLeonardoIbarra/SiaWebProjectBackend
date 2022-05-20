"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _evento = require("@Controller/evento");

const router = new _express.Router();
router.get('/eventos', _evento.mostrarTodo);
router.get('/evento/:id', _evento.mostrarUno);
var _default = router;
exports.default = _default;