import { Router } from 'express';
import { actualizarProducto, crearProducto, eliminarProducto, getProductos } from '../controllers/producto.controller';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validarCampos';
const router = Router();

router.get('/', getProductos)
router.post('/',
[
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("descripcion", "La descripcion es obligatoria").not().isEmpty(),
    check("precio_unitario", "El precio unitario es obligatorio").not().isEmpty(),
    check("precio_venta", "El precio de venta es obligatorio").not().isEmpty(),
    check("stock", "El stock es obligatorio").not().isEmpty(),
    validarCampos
], 
crearProducto)
router.delete('/:id_producto', eliminarProducto)
router.put('/', actualizarProducto)

export default router;