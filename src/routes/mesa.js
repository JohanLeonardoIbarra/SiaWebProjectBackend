import {Router} from 'express';
import { mostrarMesas } from '../controller/mesa';

const router = new Router();

router.get('/mesas', mostrarMesas);

export default router;