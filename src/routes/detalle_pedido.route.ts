import { Router } from 'express';
import { actualizarDetallePedido, crearDetallePedido, eliminarDetallePedido, getDetallePedidos } from '../controllers/detalle_pedido.controller';
const router = Router();

router.get('/', getDetallePedidos)
router.post('/',crearDetallePedido)
router.delete('/:id_detalle_pedido', eliminarDetallePedido)
router.put('/', actualizarDetallePedido)

export default router;