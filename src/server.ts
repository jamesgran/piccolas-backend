
import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";
import productoRoutes from './routes/producto.route';
import usuarioRoutes from './routes/usuario.route';
import pedidoRoutes from './routes/pedido.route';
import detalle_pedidoRoutes from './routes/detalle_pedido.route';
import authRoutes from './routes/auth.route';
dotenv.config();

export class Server {
    private app: Application;
    private port: String;

    private apiPaths = {
        producto: '/api/v1/producto',
        usuario: '/api/v1/usuario',
        pedido: '/api/v1/pedido',
        detalle_pedido: '/api/v1/detalle_pedido',
        auth: '/api/v1/auth',
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
        this.app.use(this.apiPaths.usuario, usuarioRoutes)
        this.app.use(this.apiPaths.pedido, pedidoRoutes)
        this.app.use(this.apiPaths.detalle_pedido, detalle_pedidoRoutes)
        this.app.use(this.apiPaths.auth, authRoutes)

    }
    listen(){
        this.app.listen(this.port, () => {
            console.log("La aplicacion esta en linea por el puerto:", this.port)
        })
    }
}