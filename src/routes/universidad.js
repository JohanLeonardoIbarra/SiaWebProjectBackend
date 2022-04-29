import { Router } from 'express'
import {mostrarTodos} from '../controller/universidad/index.js';

const router = new Router()

router.get('/universidades', mostrarTodos)


export default router;
