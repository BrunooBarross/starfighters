import joi from "joi";

export const bodyUserSchema = joi.object({
    firstUser: joi.string().required(),
    secondUser: joi.string().required()
});