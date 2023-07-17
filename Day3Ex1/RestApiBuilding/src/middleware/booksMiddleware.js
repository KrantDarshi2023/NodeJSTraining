import express from "express";
import booksValidator from "../validators/booksValidator.js";

const bookPostMiddleware = (req, res, next) => {
  const { error } = booksValidator.validate(req.body) ;
   if(!error){
    next()
   }else{
    return error.message
   }
};
export default bookPostMiddleware;
