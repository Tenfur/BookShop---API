import Publisher from "../models/Publisher.js";

class PublisherService{
    constructor(){

    }
    async getAll(){
        const data = await Publisher.find();
        return data;
    }
    async create(body){
        await Publisher.create(body);
    }
};

export default PublisherService;