import universidad from './src/routes/universidad.js'
import express from 'express';
import cors from 'cors';
const app = express();
import bodyParser from 'body-parser';

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

app.use("/api", universidad)

app.listen(3000, () => {
    console.log('server started');
});