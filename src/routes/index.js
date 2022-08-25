import { Router } from "express";
import bookRoute from "./bookRoute.js";
import authorRoute from "./authorRoute.js";
import publisherRoute from "./publisherRoute.js";

const getRoute = (app) => {
    const router = Router();
    app.use("/api/v1", router);

    router.use("/books", bookRoute);
    router.use("/publishers", publisherRoute);
    router.use("/authors", authorRoute);


}

export default getRoute;