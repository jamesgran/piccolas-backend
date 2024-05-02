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
  },
  //consulta detalle_pedido por id_pedido mostrando informaicon relevante
  async consultarPorIdPedido (id_pedido: number){
    const resultado = await connection.query(
      `select p.nombre, p.descripcion, p.precio_venta,
      d.cantidad, (p.precio_venta*d.cantidad) as total,
      pe.estado, pe.id_usuario, pe.id_pedido
      from detalle_pedido d
      inner join producto p on d.id_producto=p.id_producto
      inner join pedido pe on  d.id_pedido=pe.id_pedido
      where d.id_pedido = $1`,
      [id_pedido]
  ) 
  return resultado.rows;
  }
};
