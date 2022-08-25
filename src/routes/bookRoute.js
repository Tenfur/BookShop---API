import { Router } from "express";
import BookService from "../services/bookService.js";
import validatorHandler from "../middlewares/validatorHandler.js";
import {createBookSchema} from "../schemas/bookSchema.js"

const router = Router();

// Services
const bookService = new BookService();

// Get all books
router.get("/", async (req, res, next) => {
    try{
        const resp = await bookService.getAll();
        res.status(200).json(resp);
    }
    catch(error){
        res.status(400).json(error.message);
    }
})

// Create book
router.post("/", validatorHandler(createBookSchema, "body"), async (req, res, next) => {
    try{
        await bookService.create(req.body);
        res.status(200).send({
            message: "Book created correctly!"
        })
    }
    catch(error){
        res.status(400).json(error.message);
    }
})

export default router;