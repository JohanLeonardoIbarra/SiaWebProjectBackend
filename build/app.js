"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _module = _interopRequireDefault(require("./config/module.alias"));

var _Router = require("@Router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//moduleAlias();
//Importo las rutas de ./routes/index.js puedo llamar la carpeta sin el index gracias a babel
//@Router es un alias para ./src/routes/
const app = (0, _express.default)();
app.set("port", process.env.PORT || 3000); //Middlewares

app.use(_express.default.json());
app.use((0, _cors.default)({
  origin: '*'
})); //Routes

app.use("/api", _Router.universidades);
app.use("/api", _Router.eventos);
app.use("/api", _Router.mesas);
app.use("/api", _Router.noticias); //Server Listen

app.listen(app.get("port"), () => {
  console.log('server started on port', app.get("port"));
});