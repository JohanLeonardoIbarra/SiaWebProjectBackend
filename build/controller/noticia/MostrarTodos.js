"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MostrarTodos = void 0;

var _noticia = _interopRequireDefault(require("@Model/noticia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MostrarTodos = async (req, res) => {
  try {
    const noticias = await _noticia.default.findAll();
    res.status(200).json(noticias);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

exports.MostrarTodos = MostrarTodos;