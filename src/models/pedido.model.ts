import connection from "../database/connection";

module.exports = {
  async consultar() {
    const resultado = await connection.query(`select * from pedido`);
    return resultado.rows;
  },
  async crear(pedido: any) {
    const resultado = await connection.query(
      `select public.crear_pedido($1,$2,$3)`,
      [pedido.id_usuario, pedido.cantidad, pedido.id_producto]
    );
    console.log(resultado.rows)
    return resultado.rows;
  },
  async eliminar (id_pedido: any) {
    const resultado = await connection.query(
    `delete from pedido where id_pedido = $1`, [id_pedido]
    )
  },
  async actualizar (pedido: any){
    const resultado = await connection.query(
        `update pedido 
        set fecha = $1, estado = $2 where id_pedido=$3`,
        [pedido.fecha, pedido.estado, pedido.id_pedido]
    )
  }
};
