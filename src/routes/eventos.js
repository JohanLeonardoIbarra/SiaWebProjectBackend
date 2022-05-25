import { Router } from "express";
import { mostrarTodo, mostrarUno, agregarEvento } from "@Controller/evento";

const router = new Router();

router.get('/eventos', mostrarTodo);
router.get('/evento/:id', mostrarUno);
router.post('/eventos', agregarEvento);

export default router;