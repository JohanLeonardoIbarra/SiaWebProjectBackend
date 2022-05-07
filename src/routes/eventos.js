import { Router } from "express";
import { mostrarTodo } from "../controller/evento/index";
import { mostrarUno } from "../controller/evento/index"

const router = new Router

router.get('/eventos', mostrarTodo)
router.get('/evento', mostrarUno)

export default router


