import Author from "../models/Author.js";

class AuthorService{
    constructor(){

    }
    async getAll(){
        const data = await Author.find();
        return data;
    }
    async getById(id){
        const data = await Author.findById(id);
        if(!data){
            throw new Error("User not found")
        }
        return data;
    }
    async create(body){
        const resp = await Author.create(body);
    }
    async update(id, body){
        const user = await this.getById(id);
        await Author.findByIdAndUpdate(id, body);
    }
    async delete(id){
        const user = await this.getById(id);
        await Author.findByIdAndDelete(id);
    }
}

export default AuthorService;