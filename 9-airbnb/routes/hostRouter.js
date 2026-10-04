//coremodule
const path = require('path');

//external module
const express = require("express");
const hostRouter= express.Router();

//local module
const rootDir=require("../Utils/pathUtils")

hostRouter.get("/host/add-home",(req,res,next)=>{
  
  res.render('add-home',{pageTitle:'Add Home to airbnb', currentpage: "HomeAdded"
  }); 
})

const registeredHomes =[];

hostRouter.post("/host/add-home",(req,res,next)=>{
 console.log(req.body);

 registeredHomes.push(req.body);

    res.render('home-added',{pageTitle:'Home Added Successfully',currentpage: "HomeAdded"});
})

exports.hostRouter=hostRouter;
exports.registeredHomes=registeredHomes;