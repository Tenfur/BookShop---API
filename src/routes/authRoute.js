import { Router } from "express";
import validateJWT from "../middlewares/validateJWT.js";
import AuthService from "../services/authService.js";

// Router
const router = Router();

// Services
const authService = new AuthService();

// Routes
router.post("/login", async (req, res) => {
    try{
        const data = await authService.login(req.body);
        return res.status(201).json(data);
    }
    catch(error){
        return res.status(400).json(error.message)
    }
})

router.get("/", validateJWT, async (req, res) => {
    try{
        const user = await authService.authenticate(req.userId);
        return res.status(201).json(user);
    }
    catch(error){
        return res.status(400).json(error.message)
    }
})

export default router;
