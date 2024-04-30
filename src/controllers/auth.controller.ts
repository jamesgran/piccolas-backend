import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import generateJWT from "../helpers/jwt";
const model = require ('../models/usuario.model')
import { CustomRequest } from "../middlewares/validateJWT";
import { actualizarUsuario, crearUsuario, eliminarUsuario, getUnUsuario } from '../controllers/usuario.controller';


export const login = async (req:Request, res: Response) => {
    const {email,password} = req.body;
    try {
        //verificar si el login 
        
      const usuario = await model.consultarUsuario([email])

        if (typeof usuario[0] == "undefined"){
            return res.status(401).json({
                ok:false,
                msg: "Credenciales no son validas"
            })
        }
        //verificar el password
        const validarPassword = bcrypt.compareSync(password, usuario[0].password);
        if(!validarPassword){
            return res.status(401).json({
                ok:false,
                msg:"Las credenciales no son validas"
            })
        }
        //Generar token
        const token = await generateJWT(usuario.id_usuario, usuario.email) //los otros dos parametros se pueden omitir pq ya se definieron
         
        res.status(200).json({
            ok:true,
            usuario: usuario,
            token
        });
    } catch (error) {
        res.status(400).json({
            ok:false,
            error,
            msg:"Hable con el administrador"

        })
    }
}

export const renovarToken = async (req: CustomRequest, res: Response) => {
    const id = req.id;
    try {
        if(typeof id === "undefined"){
            console.log(id)
            throw new Error("No existe un id")
        }
        const usuario = await model.consultarPorID(id)
    
        //Generar token
        const token = await generateJWT(id)
    
        res.json({
            ok: true,
            token,
            usuario 
        })
        
    } catch (error) {
        console.error(error)
        res.status(401).json({
            ok: false,
            msg: "Hable con el administrador"
        })
    }


}