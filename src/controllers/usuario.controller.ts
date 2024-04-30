import { Request, Response } from "express";
import bcrypt from "bcryptjs";

const model = require ('../models/usuario.model')
const comunes = require('../middlewares/comunes')


export const getUsuarios = async (req: Request, res: Response) => {
  
   model.consultar().then((resultados: any) => {
      return res.send(comunes.respuestaConsulta(resultados))
      })
      .catch((err: any) => {
        return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
      })
    }




    
export const getUnUsuario = async (req: Request, res: Response) => {
  const {email} = req.body
  model.consultarUsuario(email).then((resultados: any) => {
    return res.send(resultados)
  })
  .catch((err:any) => {
    return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
  })
}

export const crearUsuario = async (req: Request, res: Response) =>{
  const usuario = req.body
  const {password} = req.body;

  //encriptacion de contraseña
  const salt = bcrypt.genSaltSync(5);
  usuario.password = bcrypt.hashSync(password, salt)
  console.log('contraseña encriptada ', usuario)

  model.crear(usuario).then(() =>{
    return res.send(comunes.respuestaCreacion())
  })
  .catch((err: any) =>{
    return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
  })
}

export const eliminarUsuario = async (req: Request, res: Response) =>{
  const id_usuario = req.params.id_usuario

  model.eliminar(id_usuario).then(()=>{
    return res.send(comunes.respuestaEliminar())
  })
  .catch( (err:any) =>{
    return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
  })
}
export const actualizarUsuario = async (req: Request, res: Response) => {
  const usuario = req.body;
  model.actualizar(usuario).then(()=>{
    return res.send(comunes.respuestaModificacion())

  })
  .catch((err:any) => {
    return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
  })
};
