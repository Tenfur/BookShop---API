import { Router } from "express";
import validatorHandler from "../middlewares/validatorHandler.js";
import { createPublisher } from "../schemas/publisherSchema.js";
import PublisherService from "../services/publisherService.js";
const router = Router();

// Services
const publisherService = new PublisherService();

// Get all publishers
router.get("/", async (req, res, next) => {
    try{
        const resp = await publisherService.getAll();
        res.status(200).json(resp);
    }
    catch(error){
        res.status(400).json(error.message);
    }
})

// Create publisher
router.post("/", validatorHandler(createPublisher, "body"), async (req, res, next) => {
    try{
        await publisherService.create(req.body);
        res.status(200).json({
            message: "Created correctly!"
        })
    }
    catch(error){
        res.status(400).json(error.message);
    }
})

export default router;