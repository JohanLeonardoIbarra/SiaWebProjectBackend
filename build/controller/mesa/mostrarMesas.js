"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mesa = _interopRequireDefault(require("@Model/mesa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (req, res) => {
  const mesas = await _mesa.default.findAll();
  res.status(200).json(mesas);
};

exports.default = _default;