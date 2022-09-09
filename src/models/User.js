import {mongoose} from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    token: {
        type: String
    },
    role:{
        type: String
    }
});

userSchema.methods.toJSON = function(){
    const {__v, password, token, _id, ...user} = this.toObject();
    user.id = _id;
    return user;
}

export default mongoose.model("users", userSchema);