const connection = require("../database/connection");

module.exports = {
  async consultar() {
    const resultado = await connection.query(`select * from producto`);
    return resultado.rows;
  },
  async crear(producto: any) {
    const resultado = await connection.query(
      `INSERT INTO producto(
            nombre, descripcion, precio_unitario, precio_venta, stock)
                VALUES ($1, $2, $3, $4, $5)`,
      [producto.nombre, producto.descripcion, producto.precio_unitario, producto.precio_venta, producto.stock]
    );
    return resultado.rowCount;
  },
  async eliminar (id_producto: any) {
    const resultado = await connection.query(
    `delete from producto where id_producto = $1`, [id_producto]
    )
  },
  async actualizar (producto: any){
    const resultado = await connection.query(
        `update producto 
        set nombre = $1, descripcion = $2, precio_unitario = $3, precio_venta = $4, stock = $5 where id_producto=$6`,
        [producto.nombre, producto.descripcion, producto.precio_unitario, producto.precio_venta, producto.stock, producto.id_producto]
    )
  }
};
