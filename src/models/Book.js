import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String
    },
    genre:{
        type: String
    },
    publication_year:{
        type: Date
    },
    price:{
        type: Number
    },
    image_url: {
        type: String
    },
    autorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "authors",
        required: true
    },
    publisherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "publishers",
        required: true
    }
})

export default mongoose.model("books", bookSchema)