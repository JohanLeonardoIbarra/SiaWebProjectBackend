import { Router } from 'express';
import { mostrarTodos, agregarMesa, editarMesa, eliminarMesa } from '@Controller/mesa';

const router = new Router();

router.get('/mesas', mostrarTodos);
router.post('/mesas', agregarMesa);
router.put('/mesas/:id', editarMesa)
router.delete('/mesas/:id', editarMesa)

export default router;