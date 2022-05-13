import express from 'express';
import cors from 'cors';
// Implemento module aliases
import 'module-alias/register';

//Importo las rutas de ./routes/index.js puedo llamar la carpeta sin el index gracias a babel
//@Router es un alias para ./src/routes/
import { eventos, universidades, mesas, noticias } from '@Router';


const app = express();

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


//Server Listen
app.listen(3000, () => {
    console.log('server started');
});