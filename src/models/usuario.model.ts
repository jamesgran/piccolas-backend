import connection from "../database/connection";

module.exports = {

  async consultar() {
    const resultado = await connection.query(`select * from usuario`);
    return resultado.rows;
  },

  async consultarUsuario(email: any){
    const resultado = await connection.query(`select * from usuario where email = $1`, email);
    return resultado.rows;
  },

  async consultarPorID(id_usuario:any){
    const resultado = await connection.query(`select * from usuario where id_usuario = $1`, [id_usuario]);
    return resultado.rows;
  },

  async crear(usuario: any) {
    const resultado = await connection.query(
      `INSERT INTO usuario(
            nombre, apellido, email, password, direccion, telefono)
                VALUES ($1, $2, $3, $4, $5, $6)`,
      [usuario.nombre, usuario.apellido, usuario.email, usuario.password,usuario.direccion, usuario.telefono]
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
        set nombre = $1, apellido = $2, direccion = $3, telefono = $4 where id_usuario=$5`,
        [usuario.nombre, usuario.apellido, usuario.direccion, usuario.telefono, usuario.id_usuario]
    )
  }
};
