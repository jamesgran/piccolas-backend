
import cors from "cors";
import express, { Application } from "express";

export class Server {
    private app: Application;
    private port: String;

    constructor(){
        this.app= express();
        this.port = process.env.PORT || '3000';
    }


    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }
    routes(): void {

    }
    listen(){
        this.app.listen(this.port, () => {
            console.log("La aplicacion esta en linea por el puerto:", this.port)
        })
    }
}