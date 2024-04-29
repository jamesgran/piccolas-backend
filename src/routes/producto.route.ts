import { Router } from 'express';
import { actualizarProducto, crearProducto, eliminarProducto, getProductos } from '../controllers/producto.controller';
const router = Router();

router.get('/', getProductos)
router.post('/',crearProducto)
router.delete('/:id_producto', eliminarProducto)
router.put('/', actualizarProducto)

export default router;