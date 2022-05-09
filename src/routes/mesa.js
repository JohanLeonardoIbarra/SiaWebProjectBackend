import {Router} from 'express';
import { mostrarMesas } from '@Controller/mesa';

const router = new Router();

router.get('/mesas', mostrarMesas);

export default router;