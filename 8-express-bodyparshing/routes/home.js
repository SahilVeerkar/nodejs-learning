//external module
const express= require('express');
const homeRouter= express.Router();
//local module
const path = require('path');

homeRouter.get("/",(req,res,next)=>{
  console.log("handling",req.url,req.method);
  res.sendFile(path.join(__dirname,"../",'views','homewelcome.html'));

  
});

module.exports=homeRouter;