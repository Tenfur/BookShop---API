import Joi from "joi";

const country = Joi.string().min(2);
const name = Joi.string().min(2);

const createPublisher = Joi.object({
    country: country.required(),
    name: name.required()
})

export {
    createPublisher
}