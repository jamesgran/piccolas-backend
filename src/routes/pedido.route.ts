import { Router } from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validarCampos';
import { actualizarPedido, crearPedido, eliminarPedido, getPedidos } from '../controllers/pedido.controller';
const router = Router();

router.get('/', getPedidos)
router.post('/',crearPedido)
router.delete('/:id_pedido', eliminarPedido)
router.put('/', actualizarPedido)

export default router;