//core module
const path =require('path');
//external module
const express= require('express');
const bodyParser = require('body-parser');
//local module
const contactRouter= express.Router();

contactRouter.get("/contact-us",(req,res,next)=>{
  console.log("handling /contactus for ",req.url,req.method);
  res.sendFile(path.join(__dirname,'../','views','contactForm.html'));

  
});



contactRouter.use(bodyParser.urlencoded());

contactRouter.post("/contact-us",(req,res,next)=>{
  console.log("handling contact-us for post",req.url,req.method,req.body);
  res.sendFile(path.join(__dirname,'../','views','postmsg.html'));

  
});

module.exports=contactRouter;