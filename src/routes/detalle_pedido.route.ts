import { Router } from 'express';
import { actualizarDetallePedido, crearDetallePedido, eliminarDetallePedido, getDetallePedidos, getPedidoPorIdPedido } from '../controllers/detalle_pedido.controller';
const router = Router();

router.get('/', getDetallePedidos)
router.get('/pedidoById/:id_pedido', getPedidoPorIdPedido)
router.post('/',crearDetallePedido)
router.delete('/:id_detalle_pedido', eliminarDetallePedido)
router.put('/', actualizarDetallePedido)

export default router;