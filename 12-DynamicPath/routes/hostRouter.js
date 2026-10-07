//coremodule
const path = require('path');

//external module
const express = require("express");
const hostRouter= express.Router();

//local module
const rootDir=require("../Utils/pathUtils")
const homeController=require("../controllers/hostController")

hostRouter.get("/host/add-home",homeController.addHome)
hostRouter.get("/host-home-list",homeController.getHostHomes)



hostRouter.post("/host/add-home",homeController.postAddHome)
hostRouter.get("/edit-home/:homeId",homeController.getEditHome);

exports.hostRouter=hostRouter;
