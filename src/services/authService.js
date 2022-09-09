import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import generateJsonWebToken from "../helpers/generateJWT.js";

class AuthService{
    constructor(){

    }
    async login(body){
        const {email, password} = body;
        const user = await User.findOne({email});
        // Validate if the users exists
        if(!user){
            throw Error("That user doesn't exist")
        }
        // Check password
        const validatePassword = bcryptjs.compareSync(password, user.password);
        if(!validatePassword){
            throw Error("Password incorrect");
        }
        // Generate JWT if everything is ok
        const token = await generateJsonWebToken(user.id);

        return {
            user,
            token
        }
    }
    async authenticate(id){
        const user = await User.findById(id);
        return user;

    }
};

export default AuthService;