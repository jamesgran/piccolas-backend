import { crearDetallePedido } from "../controllers/detalle_pedido.controller";
import connection from "../database/connection";

module.exports = {
  async consultar() {
    const resultado = await connection.query(`select * from pedido`);
    return resultado.rows;
  },

  async crear(pedido: any) {
    console.log('pedido en modelo', pedido)
    try {
      const insercionPedido = await connection.query(
        `insert into pedido (id_usuario) values ($1)`,
        [pedido.id_usuario]
      );
      const pedidoActual = await connection.query(
        `select max(id_pedido) from pedido`
      );
      console.log('pedido actual',pedidoActual.rows[0].max)

      pedido.productos.forEach(async (element: any) => {
        const crearDetallePedido = await connection.query(
          `insert into detalle_pedido (cantidad, id_pedido, id_producto)
        values ($1, ${pedidoActual.rows[0].max}, $2)`,
          [element.cantidad, element.id_producto]
          
        );
        console.log(crearDetallePedido.rows);
      });
    } catch (error) {
      console.error("error al crear pedido", error);
    }
  },

  async eliminar(id_pedido: any) {
    const resultado = await connection.query(
      `delete from pedido where id_pedido = $1`,
      [id_pedido]
    );
  },
  async actualizar(pedido: any) {
    const resultado = await connection.query(
      `update pedido 
        set fecha = $1, estado = $2 where id_pedido=$3`,
      [pedido.fecha, pedido.estado, pedido.id_pedido]
    );
  },
    //consulta de los pedidos por id_usuario mostrando informaicon relevante
    async consultarPorIdUsuario (id_usuario: number){
      console.log(id_usuario)
      const resultado = await connection.query(
        `select p.id_pedido, 
        pro.nombre, pro.precio_venta, 
        de.cantidad,
        p.estado from detalle_pedido de
        inner join producto pro on de.id_producto = pro.id_producto
        inner join pedido p on de.id_pedido = p.id_pedido 
        where p.id_usuario = $1`,
        [id_usuario]
    ) 
    return resultado.rows;
    }
};
