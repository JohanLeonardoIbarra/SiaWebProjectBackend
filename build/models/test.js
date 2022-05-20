"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mesa = _interopRequireDefault(require("./mesa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Uni from "./universidad";
// import Noticia from "./noticia";
// import Evento from "./evento";
const x = async () => {
  // await Uni.sync();
  await _mesa.default.sync({
    force: true
  }); // await Noticia.sync();
  // await Evento.sync();
  // await Uni.create({
  //     nombre: "Universidad Francisco de Paula Santander",
  //     logo: "https://ww2.ufps.edu.co/public/archivos/elementos_corporativos/logo-horizontal.jpg",
  //     responsable: "Ing. Sacarias Piedras del Rio",
  //     ciudad: "Cucúta",
  //     info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  // })
  // await Mesa.create({
  //     nombre: "Mesa 1",
  //     descripcion: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  //     universidad_id: 1
  // })

  const unis = await _mesa.default.findAll();
  console.log(unis);
};

var _default = x;
exports.default = _default;