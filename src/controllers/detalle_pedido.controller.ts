import { Request, Response } from "express"

const model = require ('../models/detalle_pedido.model')
const comunes = require('../middlewares/comunes')


export const getDetallePedidos = async (req: Request, res: Response) => {
  
    model.consultar().then((resultados: any) => {
      return res.send(comunes.respuestaConsulta(resultados))
      })
      .catch((err: any) => {
        return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
      })
    }

export const crearDetallePedido = async (req: Request, res: Response) =>{
  const detalle_pedido = req.body
  model.crear(detalle_pedido).then(() =>{
    return res.send(comunes.respuestaCreacion())
  })
  .catch((err: any) =>{
    return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
  })
}

export const eliminarDetallePedido = async (req: Request, res: Response) =>{
  const id_detalle_pedido = req.params.id_detalle_pedido

  model.eliminar(id_detalle_pedido).then(()=>{
    return res.send(comunes.respuestaEliminar())
  })
  .catch( (err:any) =>{
    return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
  })
}
export const actualizarDetallePedido = async (req: Request, res: Response) => {
  const detalle_pedido = req.body;
  
  model.actualizar(detalle_pedido).then(()=>{
    return res.send(comunes.respuestaModificacion())

  })
  .catch((err:any) => {
    return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
  })
};
