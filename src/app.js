import express from 'express';
import cors from 'cors';

import moduleAlias from './config/module.alias';

//Importo las rutas de ./routes/index.js puedo llamar la carpeta sin el index gracias a babel
//@Router es un alias para ./src/routes/
import { eventos, universidades, mesas, noticias } from '@Router';
import reiniciarTablas from "@Model/test"

const app = express();

app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(cors({
    origin: '*'
}));

//Routes
app.use("/api", universidades);
app.use("/api", eventos);
app.use("/api", mesas);
app.use("/api", noticias);
app.get("/reset/:code", (req, res)=>{
    if(req.params.code===process.env.RESET_CODE){
        reiniciarTablas();
        res.status(200).send({message:"Tablas reiniciadas"});
        return;
    }
    res.redirect("/");
});

//Server Listen
app.listen(app.get("port") , () => {
    console.log('server started on port', app.get("port"));
});

