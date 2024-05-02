module.exports = {
    //CONSTANTES GENERALES
	COD_EXITOSO: 0,
	MSG_EXITOSO: 'Transacción exitosa',
	COD_ERROR: 100,
	MSG_ERROR: 'No es posible procesar la transacción',
	DTL_SIN_RESULTADOS: 'La consulta no arrojo resultados',
	DTL_CON_RESULTADOS: 'Consulta realizada correctamente',
	DTL_CREAR_EXITOSO: 'Registro guardado correctamente',
	DTL_ACTUALIZAR_EXITOSO: 'Registro actualizado correctamente',
	DTL_ELIMINAR_EXITOSO: 'Registro eliminado correctamente',
	DTL_EXITOSO: 'Operación realizada correctamente',
	COD_500: 500,
	DTL_AUTENTICACION_EXITOSO: 'Autenticación exitosa',
	DTL_AUTENTICACION_FALLIDO: 'Usuario o contraseña invalida',

    //OBJETOS COMUNES
    estado: (codigo: any, mensaje: any, detalle: any) => ({ codigo, mensaje, detalle }),

    /*
	Detalle: FUNCION QUE VALIDA SI LA CONSULTA GENERA RESULTADOS O NO 
	Y DE IGUAL FORMA MUESTRA UN MENSAJE DE RESPUESTA ACORDE A EL RESULTADO OBTENIDO.
	*/
    respuestaConsulta(resultados: string | any[]) {
		if (resultados && resultados.length > 0) {
			var estado = this.estado(this.COD_EXITOSO, this.MSG_EXITOSO, this.DTL_CON_RESULTADOS)
			var respuesta = {
				estado,
				resultados
			}
			return respuesta
		} else {
			return this.estado(this.COD_EXITOSO, this.MSG_EXITOSO, this.DTL_SIN_RESULTADOS)
		}
	},

    /*
    Detalle: FUNCION QUE GENERA EL MENSAJE GENERICO DE ERROR CUANDO EXISE UNA EXCEPCIÓN.
    */
    respuestaExcepcion(error: string) {
        return this.estado(this.COD_ERROR, this.MSG_ERROR, error + "")
    },
	/*
	Detalle: FUNCION QUE GENERA EL MENSAJE GENERICO DE CREACIÓN.
	*/
	respuestaCreacion() {
		return this.estado(this.COD_EXITOSO, this.MSG_EXITOSO, this.DTL_CREAR_EXITOSO)
	},
		/*
	Detalle: FUNCION QUE GENERA EL MENSAJE GENERICO DE MODIFICACIÓN.
	*/
	respuestaModificacion() {
		return this.estado(this.COD_EXITOSO, this.MSG_EXITOSO, this.DTL_ACTUALIZAR_EXITOSO)
	},
	respuestaEliminar() {
		return this.estado(this.COD_EXITOSO, this.MSG_EXITOSO, this.DTL_ELIMINAR_EXITOSO)
	},
	respuestaGenerica(respuesta :any) {
		return this.estado(this.COD_EXITOSO, this.MSG_EXITOSO, this.DTL_EXITOSO, respuesta)
	},
}