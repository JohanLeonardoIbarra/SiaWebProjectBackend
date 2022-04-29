import universidad from './src/routes/universidad.js'
const express = import('express');
const cors = import('cors');
const app = express();
const bodyParser = import('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

app.use("/api", universidad)

app.listen(3000, () => {
    console.log('server started');
  });