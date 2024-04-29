
import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";
import productoRoutes from './routes/producto.route';
dotenv.config();

export class Server {
    private app: Application;
    private port: String;

    private apiPaths = {
        producto: '/api/v1/producto'
    }

    constructor(){
        this.app= express();
        this.port = process.env.PORT || '3000';
        this.middlewares()
        this.routes()
    }


    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }
    routes(): void {
        this.app.use(this.apiPaths.producto, productoRoutes)

    }
    listen(){
        this.app.listen(this.port, () => {
            console.log("La aplicacion esta en linea por el puerto:", this.port)
        })
    }
}