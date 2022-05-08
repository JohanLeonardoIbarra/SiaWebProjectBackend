import express from 'express';
import cors from 'cors';

//Importo las rutas de ./routes/index.js puedo llamar la carpeta sin el index gracias a babel
import { eventos, universidades, mesas } from './routes';


const app = express();

//Middlewares
app.use(express.json());
app.use(cors({
    origin: '*'
}));


//Routes
app.use("/api", universidades);
app.use("/api", eventos);
app.use("/api", mesas)


//Server Listen
app.listen(3000, () => {
    console.log('server started');
});