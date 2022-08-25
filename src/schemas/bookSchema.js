import Joi from "joi";

const title = Joi.string().min(1);
const genre = Joi.string().min(2);
const publication_year = Joi.date();
const price = Joi.number();
const autorId =  Joi.string();
const publisherId = Joi.string();

const createBookSchema = Joi.object({
    title: title.required(),
    genre: genre.required(),
    publication_year: publication_year.required(),
    price: price.required(),
    autorId: autorId.required(),
    publisherId: publisherId.required()
});

export {
    createBookSchema
}