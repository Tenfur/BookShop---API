import jwt from "jsonwebtoken";

const validateJsonWebToken = async (req, res, next) => {
    const token = req.header("x-token");
    if(!token){
        return res.status(401).json({
            message: "Sorry you need a token"
        })
    }
    try{
        const {id} = await jwt.verify(token, process.env.SECRET_KEY);
        req.userId = id;
        next();
    }
    catch(error){
        res.status(401).json({
            message: "Token invalid"
        })
    }
}

export default validateJsonWebToken;