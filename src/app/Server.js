import express from "express";
import cors from "cors";
import helmet from "helmet";
import fileUpload from "express-fileupload";
import connectDatabase from "../database/config.js";
import router from "../routes/index.js";

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

        // Allow files
        this.app.use(express.urlencoded({extended: true}));

        // Files
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: "/tmp/"
        }));
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