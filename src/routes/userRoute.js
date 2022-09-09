import { Router } from "express";
import UserService from "../services/userService.js";

// Router
const router = Router();
// Services
const userService = new UserService();

// Get Users
router.get("/", async (req, res) => {
    try{
        const data = await userService.getAll();
        res.status(200).json(data);
    }
    catch(error){
        return res.status(400).json(error.message);
    }
});

// Create Users
router.post("/", async (req, res) => {
    try{
        await userService.createUser(req.body);
        return res.status(200).json("User created successfully");
    }
    catch(error){
        return res.status(400).json(error.message);
    }

});

export default router;