import { Router } from 'express'
import {mostrarTodos, agregarUni} from '@Controller/universidad';

const router = new Router()

router.get('/universidades', mostrarTodos)
router.post('/universidades', agregarUni)



export default router;
