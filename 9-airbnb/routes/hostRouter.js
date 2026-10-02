const express = require("express");
const hostRouter= express.Router();

hostRouter.get("/host/add-home",(req,res,next)=>{
  
  res.send(`<h1>register your home here :</h1>
    <form action="/add-home" method="POST">
    <input type="text" name="house name" placeholder="enter the name of house"/>
    <input type="submit"/>
    </form>
    
    `); 
})

hostRouter.post("/host/add-home",(req,res,next)=>{
  console.log(req.body);

  res.send(`<h1>home registered successfully</h1>
    <a href="/">go to home</a>
    `); 
})

module.exports=hostRouter;