import { NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken");

export interface CustomRequest extends Request {
    id? : number;
}



const validateJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.header("x-token");
    if (!token){
        return res.status(401).json({
            ok:false,
            msg: "No hay token en la peticion"
        })
    }

    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        req.id = id;
        
        next();

        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: "Token invalido"
        })
        
    }
}

export const validateJWTPassword = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.header("x-token-pass");
    if (!token){
        return res.status(401).json({
            ok:false,
            msg: "No hay token en la peticion"
        })
    }

    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET_PASS);
        req.id = id;
        next();

        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: "Token invalido"
        })
        
    }
}
export default validateJWT;