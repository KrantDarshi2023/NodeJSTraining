import express from 'express'

const bookPostMiddleware=(req,res,next)=>{
    const {author,title}=req.body;
     if(!author || !title){
        res.send("Author or Title not specified")
}else{
    res.send(req.body)
    next()
}
     
}
export default bookPostMiddleware;