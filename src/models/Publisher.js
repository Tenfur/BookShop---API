import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema({
    name: {
        type: String
    },
    country:{
        type: String
    }
})

export default mongoose.model("publishers", publisherSchema)