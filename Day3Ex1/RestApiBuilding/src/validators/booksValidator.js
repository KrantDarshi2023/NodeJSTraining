import joi from "joi";

const booksValidator = joi.object({
  author: joi.string().required(),
  title: joi.string().required(),
  country: joi.string(),
  imageLink: joi.string(),
  language: joi.string(),
  link: joi.string(),
  pages: joi.number(),
  year: joi.number(),
});
export default booksValidator;
