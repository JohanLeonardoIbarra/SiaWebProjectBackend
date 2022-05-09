import { Router } from "express";
import { mostrarTodo, mostrarUno } from "@Controller/evento";

const router = new Router();

router.get('/eventos', mostrarTodo);
//router.get('/evento', mostrarUno);

export default router;


