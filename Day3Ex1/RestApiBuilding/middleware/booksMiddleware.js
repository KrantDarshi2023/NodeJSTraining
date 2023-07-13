import express from "express";
import booksErrorSchema from "../ErrorSchema/BooksErrorSchema.js";

const bookPostMiddleware = (req, res, next) => {
  const { error } = booksErrorSchema.validate(req.body) ;
   if(!error){
    next()
   }else{
    return error.message
   }
};
export default bookPostMiddleware;
