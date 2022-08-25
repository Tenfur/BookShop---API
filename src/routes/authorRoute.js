import { Router } from "express";
import AuthorService from "../services/authorService.js";
import { createAuthorSchema } from "../schemas/authorSchema.js";
import validatorHandler from "../middlewares/validatorHandler.js";

const router = Router();

// Services
const authorService = new AuthorService();

// Get all authors
router.get("/", async (req, res, next) => {
    try{
        const resp = await authorService.getAll();
        res.status(200).json(resp);
    }
    catch(error){
        res.status(400).json(error);
    }
})

// Get by id
router.get("/:id", async (req, res, next) => {
    try{
        const {id} = req.params;
        const resp = await authorService.getById(id);
        res.status(200).json(resp);
    }
    catch(error){
        res.status(400).json(error.message);
    }
})


// Create 
router.post("/",validatorHandler(createAuthorSchema, "body"), async (req, res, next) => {
    try{
        const result = await authorService.create(req.body);
        res.status(200).send({
            message: "Author created correctly!"
        })
    }
    catch(error){
        res.status(400).json(error.message)
    }
})

// Delete by id
router.delete("/:id", async (req, res, next) => {
    try{
        const {id} = req.params;
        await authorService.delete(id);
        res.status(200).send({
            message: "Deleted correctly!"
        })
    }
    catch(error){
        res.status(400).json(error.message);
    }
})

// Update by id
router.put("/:id", async (req, res, next) => {
    try{
        const {id} = req.params;
        await authorService.update(id, req.body);
        res.status(200).send({
            message: "Update correctly!"
        })
    }
    catch(error){
        res.status(400).json(error.message);
    }
})

export default router;