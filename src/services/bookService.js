import Book from "../models/Book.js";

class BookService{
    constructor(){

    }
    async getAll(){
        const data = await Book.find()
                            .populate("autorId")
                            .populate("publisherId");
        return data;
    }
    async create(body){
        await Book.create(body);
    }
};

export default BookService;