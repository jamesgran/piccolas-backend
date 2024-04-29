import { Request, Response } from "express"

const model = require ('../models/producto.model')
const comunes = require('../middlewares/comunes')


export const getProductos = async (req: Request, res: Response) => {
  
    model.consultar().then((resultados: any) => {
      return res.send(comunes.respuestaConsulta(resultados))
      })
      .catch((err: any) => {
        return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
      })
    }

export const crearProducto = async (req: Request, res: Response) =>{
  const producto = req.body
  model.crear(producto).then(() =>{
    return res.send(comunes.respuestaCreacion())
  })
  .catch((err: any) =>{
    return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
  })
}

export const eliminarProducto = async (req: Request, res: Response) =>{
  const id_producto = req.params.id_producto

  model.eliminar(id_producto).then(()=>{
    return res.send(comunes.respuestaEliminar())
  })
  .catch( (err:any) =>{
    return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
  })
}
export const actualizarProducto = async (req: Request, res: Response) => {
  const producto = req.body;
  model.actualizar(producto).then(()=>{
    return res.send(comunes.respuestaModificacion())

  })
  .catch((err:any) => {
    return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
  })
};
