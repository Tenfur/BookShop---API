import Joi from "joi";

const firstName = Joi.string().min(2);
const lastName = Joi.string().min(2);


const createAuthorSchema = Joi.object({
    firstName: firstName.required(),
    lastName: lastName.required()
});

export {
    createAuthorSchema
}
