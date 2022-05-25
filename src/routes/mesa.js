import {Router} from 'express';
import { mostrarMesas, agregarMesa} from '@Controller/mesa';

const router = new Router();

router.get('/mesas', mostrarMesas);
router.post('/mesas', agregarMesa);

export default router;