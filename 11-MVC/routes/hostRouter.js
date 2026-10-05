//coremodule
const path = require('path');

//external module
const express = require("express");
const hostRouter= express.Router();

//local module
const rootDir=require("../Utils/pathUtils")
const homeController=require("../controllers/home")

hostRouter.get("/host/add-home",homeController.addHome)



hostRouter.post("/host/add-home",homeController.postAddHome)

exports.hostRouter=hostRouter;
