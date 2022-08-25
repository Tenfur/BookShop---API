import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName:{
        type: String
    }
})

export default mongoose.model("authors", autorSchema)