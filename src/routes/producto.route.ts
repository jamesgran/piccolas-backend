import { Router } from 'express';
import { actualizarProducto, crearProducto, eliminarProducto, getDestacados, getImagenById, getImagenes, getProductos, getProductoyId } from '../controllers/producto.controller';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validarCampos';
import validateJWT from '../middlewares/validateJWT';
const router = Router();

router.get('/', getProductos)
router.get('/destacados', getDestacados)
router.get('/imagenes', getImagenes)
router.get('/imagen/:id_producto', getImagenById)
router.get('/:id_producto', getProductoyId)
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
router.delete('/:id_producto',validateJWT, eliminarProducto)
router.put('/',validateJWT, actualizarProducto)

export default router;