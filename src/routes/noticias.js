import { Router } from "express";
import * as Controller from "@Controller/noticia";

const router = new Router();

router.get("/noticias", Controller.MostrarTodos);

router.post("/noticias", Controller.agregarNoticia);

router.put("/noticias/:id", Controller.editarNoticia);

router.delete("/noticias/:id", Controller.eliminarNoticia);

export default router;