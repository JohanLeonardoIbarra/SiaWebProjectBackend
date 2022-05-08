import { Router } from 'express'
import {mostrarTodos} from '../controller/universidad';

const router = new Router()

router.get('/universidades', mostrarTodos)


export default router;
