import { Router } from "express";
import { mostrarTodo, mostrarUno, agregarEvento, editarEvento, eliminarEvento } from "@Controller/evento";

const router = new Router();

router.get('/eventos', mostrarTodo);
router.get('/evento/:id', mostrarUno);
router.post('/eventos', agregarEvento);
router.put('/eventos/:id', editarEvento);
router.delete('/eventos/:id', eliminarEvento);

export default router;