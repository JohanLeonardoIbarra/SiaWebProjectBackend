"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _universidad = _interopRequireDefault(require("./universidad"));

var _mesa = _interopRequireDefault(require("./mesa"));

var _noticia = _interopRequireDefault(require("./noticia"));

var _evento = _interopRequireDefault(require("./evento"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const reiniciarTablas = async () => {
  await _universidad.default.sync({
    force: true
  });
  await _mesa.default.sync({
    force: true
  });
  await _noticia.default.sync({
    force: true
  });
  await _evento.default.sync({
    force: true
  });
};

var _default = reiniciarTablas;
exports.default = _default;