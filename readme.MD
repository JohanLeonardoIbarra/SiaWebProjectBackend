*Guia rapida de todo esto

**El proyecto se ejecuta con @Babel 

-Se pueden importar a las carpetas que posean un index.js y esta funcionara sin problema
    osea si importo ./routes estaria importando ./routes/index.js
-No hay necesidad de usar el .js al final de cada archivo para importarlo
    ejempo importar ./routes/universidad.js es igual a importar ./routes/universidad

**Se implemento el paquete module-alias

-En packaje.json existe una propiedad llamada "_moduleAliases" ahi se declaran los alias de cada carpeta desde el origen ("Root") los alias acortan las importaciones evitando usar ../../ etc..

-Para importar algo de ./src/controller/universidad se llama @Controller/universidad puede parecer un acortado de pocas letras pero es muy util en ciertos casos donde las carpetas estan muy profundas

-Documentacion: https://www.npmjs.com/package/module-alias

**Express Router

-Express Router es una propiedad de Express() que permite modular las rutas de la aplicacion

-El archivo que posee la ruta debe ser estructurado asi:

import { Router } from "express";// Importo Express Router
import { MostrarAlgo } from "@Controller/algo";//Importo el metodo controlador
//el metodo seria el que maneja la peticion (req, res) => { res.send("hola") }

// creo una instancia de Router
const router = new Router();

// en la instancia defino las rutas (get, post, put, delete, etc...)
router.get("/ruta", MostrarAlgo);

// exporto el router (esto es muy importante vi que alguien no lo hizo)
export default router;

-En app.js llamo la ruta de esta forma

//importo el router 
import algo from "@Router/algo"

//El primer parametro es opcional el segundo no
app.use("/ruta-opcional", algo);

**Carpeta Controller

-La carpeta controller esta dividida en una carpeta por cada modelo similar al patron DAO estas carpetas tienen un index.js que agrupa los controladores y multiples archivos .js donde estara el controlador de cada operacion

ejemplo

--mostrarUno.js

export default const MostarUno = (req, res) => {
    const uno = Uno.findOne({where: { id: req.params.id }})
    res.status(200).json(uno);
}

--mostrarTodos.js

export default const MostarTodos = (req, res) => {
    const todos = Uno.findAll();
    res.status(200).json(todos);
}

--index.js

import uno from ./mostrarUno.js
import todos from ./mostrarTodos.js

export {
    uno,
    todos
}

**Modelos

-Mirarse un tutorial de Sequelize o la documentacion

¯\_(ツ)_/¯

** dotenv

-se debe crear un archivo .env y poner dentro

DB_URI: aqui va la uri de la base de datos no la pongo por que seria entonces una mamada todo esto

La uri esta en el whatsapp

el archivo tambien se puede llamar dotenv

-explicacion minima del .env

son variables que se deben almacenar en el entorno de despliegue. Si las subo al github estaria mostrandole a todo el mundo datos como la direccion de la base de datos, usuario y contraseña, el api-key ( util para JWT, seguridad de logins y sessiones ) y algun que otro secreto.

** npm 

al clonar el proyecto siempre se debe usar el comando npm install (abreviado npm i) para desacargar todos los paquetes

tambien hacerlo cuando se llame git pull puede que se añada algo nuevo

*** Poner aca cosas importantes mientras el desarrollo (dudas, preguntas y demas al whatsapp)

** comandos

-npm start // despliega el servidor en modo normal

-npm test // despliega el servidor en modo desarrollador ( con nodemon para actualizar entre cambios )

