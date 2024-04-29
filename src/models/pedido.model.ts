import connection from "../database/connection";

module.exports = {
  async consultar() {
    const resultado = await connection.query(`select * from pedido`);
    return resultado.rows;
  },
  async crear(pedido: any) {
    const resultado = await connection.query(
      `INSERT INTO pedido(
            id_usuario)
                VALUES ($1)`,
      [pedido.id_usuario]
    );
    return resultado.rowCount;
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
