import express from "express";
import connectDatabase from "../database/config.js";
import router from "../routes/index.js";
import cors from "cors";
import helmet from "helmet";

class Server{
    constructor(){
        this.app = express();

        this.middlewares();

        this.router();

        this.database();
    }
    async database(){
        await connectDatabase();
    }
    middlewares(){
        // Cors
        this.app.use(cors());

        // Helmet
        this.app.use(helmet());

        // Lecture
        this.app.use(express.json());
    }
    router(){
        router(this.app);
    }
    listen(){
        this.app.listen(process.env.PORT || 4000, () => {
            console.log(`Running on port ${process.env.PORT}`)
        })
    }
}

export default Server;