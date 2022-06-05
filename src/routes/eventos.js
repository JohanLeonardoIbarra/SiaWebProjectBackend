import { Router } from "express";
import { mostrarTodos, mostrarUno, agregarEvento, editarEvento, eliminarEvento } from "@Controller/evento";

const router = new Router();

router.get('/eventos', mostrarTodos);
router.get('/eventos/:id', mostrarUno);
router.post('/eventos', agregarEvento);
router.put('/eventos/:id', editarEvento);
router.delete('/eventos/:id', eliminarEvento);

export default router;