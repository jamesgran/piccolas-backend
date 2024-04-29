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
};
