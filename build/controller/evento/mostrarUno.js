"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _evento = _interopRequireDefault(require("@Model/evento"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (req, res) => {
  try {
    const eventos = await _evento.default.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(eventos);
  } catch (err) {
    console.err(err);
    res.status(500).json({
      message: err.message
    });
  }
};

exports.default = _default;