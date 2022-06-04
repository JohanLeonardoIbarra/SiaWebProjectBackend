import { Router } from 'express'
import {mostrarTodos, agregarUni, editarUni, eliminarUni} from '@Controller/universidad';

const router = new Router()

router.get('/universidades', mostrarTodos)
router.post('/universidades', agregarUni)
router.put('/universidades/:id', editarUni)
router.delete('/universidades/:id', eliminarUni)


export default router;
