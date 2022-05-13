import { Router } from "express";
import * as Controller from "@Controller/noticia";

const router = new Router();

router.get("/noticia", Controller.MostrarTodos);

export default router;