import { Router } from 'express';
import { actualizarUsuario, crearUsuario, eliminarUsuario, getUsuarios } from '../controllers/usuario.controller';
const router = Router();

router.get('/', getUsuarios)
router.post('/',crearUsuario)
router.delete('/:id_usuario', eliminarUsuario)
router.put('/', actualizarUsuario)

export default router;