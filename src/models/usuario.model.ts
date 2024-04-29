import connection from "../database/connection";

module.exports = {
  async consultar() {
    const resultado = await connection.query(`select * from usuario`);
    return resultado.rows;
  },
  async crear(usuario: any) {
    const resultado = await connection.query(
      `INSERT INTO usuario(
            nombre, email, password, telefono, rol)
                VALUES ($1, $2, $3, $4, $5)`,
      [usuario.nombre, usuario.email, usuario.password, usuario.telefono, usuario.rol]
    );
    return resultado.rowCount;
  },
  async eliminar (id_usuario: any) {
    const resultado = await connection.query(
    `delete from usuario where id_usuario = $1`, [id_usuario]
    )
  },
  async actualizar (usuario: any){
    const resultado = await connection.query(
        `update usuario 
        set nombre = $1, email = $2, password = $3, telefono = $4, rol = $5 where id_usuario=$6`,
        [usuario.nombre, usuario.email, usuario.password, usuario.telefono, usuario.rol, usuario.id_usuario]
    )
  }
};
