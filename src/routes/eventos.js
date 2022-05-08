import { Router } from "express";
import { mostrarTodo, mostrarUno } from "../controller/evento/index.js";

const router = new Router();

router.get('/eventos', mostrarTodo);
//router.get('/evento', mostrarUno);

export default router;


