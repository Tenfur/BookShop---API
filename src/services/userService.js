import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import generateToken from "../helpers/generateToken.js";

class UserService{
    constructor(){

    }
    async getAll(){
        const response = await User.find();
        return response;
    }
    async createUser(body){
        let {email, password, role} = body;
        // Validate if another user have the same email
        const user = await User.findOne({email});
        if(user){
            throw Error("That users exists");
        }
        // Encrypt password
        const salt = bcryptjs.genSaltSync(10);
        password = bcryptjs.hashSync(password, salt);

        // Generate token
        const token = generateToken();

        // Create User
        const document = {
            email, role, password, token
        }
        await User.create(document);
    }
};

export default UserService;