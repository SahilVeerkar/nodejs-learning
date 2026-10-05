
//external module
const express = require('express');
const storeRouter = express.Router();
//local module


const homeController=require("../controllers/storeController")


storeRouter.get("/",homeController.getIndex);
storeRouter.get("/booking",homeController.getBooking);
storeRouter.get("/homes",homeController.getHomes);
storeRouter.get("/favourite",homeController.getFavouriteList);
  
module.exports = storeRouter;