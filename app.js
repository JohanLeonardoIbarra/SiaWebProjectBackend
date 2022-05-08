import universidad from './src/routes/universidad.js';
import evento from "./src/routes/eventos.js";
import express from 'express';
import cors from 'cors';
const app = express();

//Middlewares
app.use(express.json());
app.use(cors({
    origin: '*'
}));


//Routes
app.use("/api", universidad)
app.use("/api", evento)


//Server Listen
app.listen(3000, () => {
    console.log('server started');
});