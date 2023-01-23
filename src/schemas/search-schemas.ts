import Joi from "joi";

export const searchBoxSchema = Joi.object({
  search: Joi.string().required()
});

