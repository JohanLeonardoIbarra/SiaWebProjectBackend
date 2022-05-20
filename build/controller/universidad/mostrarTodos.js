"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _universidad = _interopRequireDefault(require("@Model/universidad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (req, res) => {
  const universidades = await _universidad.default.findAll();
  res.status(200).json(universidades);
};

exports.default = _default;