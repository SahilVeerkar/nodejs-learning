//coremodule
const path = require('path');

//external module
const express = require("express");
const hostRouter= express.Router();

//local module
const rootDir=require("../Utils/pathUtils")

hostRouter.get("/host/add-home",(req,res,next)=>{
  
  res.render('add-home',{pageTitle:'Add Home to airbnb'}); 
})

const registeredHomes =[];

hostRouter.post("/host/add-home",(req,res,next)=>{
 
 registeredHomes.push({houseName: req.body.houseName});
    res.render('home-added',{pageTitle:'Home Added Successfully'});
})

exports.hostRouter=hostRouter;
exports.registeredHomes=registeredHomes;