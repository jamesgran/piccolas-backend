import { Request, Response } from "express"

const model = require ('../models/pedido.model')
const comunes = require('../middlewares/comunes')


export const getPedidos = async (req: Request, res: Response) => {
  
    model.consultar().then((resultados: any) => {
      return res.send(comunes.respuestaConsulta(resultados))
      })
      .catch((err: any) => {
        return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
      })
    }

export const crearPedido = async (req: Request, res: Response) =>{
  /*
  estructura del pedido
{
	"id_usuario": 10,
	"productos": [
		{"id_producto": 1296, "cantidad": 1},
		{"id_producto": 1297, "cantidad": 2}
	]
}
  */
  const pedido = req.body

  model.crear(pedido).then((resultados: any) =>{
    return res.send(comunes.respuestaGenerica(resultados))
  })
  .catch((err: any) =>{
    return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
  })
}

export const eliminarPedido = async (req: Request, res: Response) =>{
  const id_pedido = req.params.id_pedido

  model.eliminar(id_pedido).then(()=>{
    return res.send(comunes.respuestaEliminar())
  })
  .catch( (err:any) =>{
    return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
  })
}
export const actualizarPedido = async (req: Request, res: Response) => {
  const pedido = req.body;
  console.log(pedido)
  model.actualizar(pedido).then(()=>{
    return res.send(comunes.respuestaModificacion())

  })
  .catch((err:any) => {
    return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
  })

  
};
export const consultarporIdUsuario = async (req: Request, res: Response) =>{
  const id_usuario = req.params.id_usuario

  model.consultarPorIdUsuario(id_usuario).then((resultados: any)=>{
    return res.send(comunes.respuestaGenerica(resultados))
  })
  .catch( (err:any) =>{
    return res.status(comunes.COD_500).send(comunes.respuestaExcepcion(err))
  })
}
