import connection from "../database/connection";

module.exports = {
  async consultar() {
    const resultado = await connection.query(`select * from detalle_pedido`);
    return resultado.rows;
  },
  async crear(detalle_pedido: any) {
    const resultado = await connection.query(
      `INSERT INTO detalle_pedido(
            cantidad, id_pedido, id_producto)
                VALUES ($1, $2, $3)`,
      [detalle_pedido.cantidad, detalle_pedido.id_pedido, detalle_pedido.id_producto]
    );
    return resultado.rowCount;
  },
  async eliminar (id_detalle_pedido: any) {
    const resultado = await connection.query(
    `delete from detalle_pedido where id_detalle_pedido = $1`, [id_detalle_pedido]
    )
  },
  async actualizar (detalle_pedido: any){
    const resultado = await connection.query(
        `update detalle_pedido 
        set cantidad = $1 where id_detalle_pedido=$2`,
        [detalle_pedido.cantidad, detalle_pedido.id_detalle_pedido]
    )
  }
};
