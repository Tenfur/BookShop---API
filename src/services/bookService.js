import Book from "../models/Book.js";
import {v2 as cloudinary} from "cloudinary";


class BookService{
    constructor(){
        
    }
    async getAll(){
        const data = await Book.find()
        .populate("autorId")
        .populate("publisherId");
        return data;
    }
    async create(body, file){
        cloudinary.config({ 
            cloud_name: process.env.CLOUD_NAME, 
            api_key: process.env.API_KEY, 
            api_secret: process.env.API_SECRET 
          });
        const {secure_url}= await cloudinary.uploader.upload(file);
        // Create document
        body.image_url = secure_url;
        await Book.create(body);
    }
};

export default BookService;