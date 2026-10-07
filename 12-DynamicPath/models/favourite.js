  const fs= require('fs');
  const path= require('path');
  const rootDir = require('../Utils/pathUtils');
  const favouriteDataPath=path.join(rootDir,'data','favourite.json');



  module.exports =class Favourite{

    static addToFavourite(homeId,callback){
      console.log("??")
    Favourite.getFavourite((favourite)=>{
      console.log("..1")
      if(favourite.includes(homeId)){
        callback("home is already marked in favourite");
        
      }
      else{
        console.log("..2")
  favourite.push(homeId);
  fs.writeFile(favouriteDataPath, JSON.stringify(favourite),callback);
      }
  
      })
    }
    static getFavourite(callback){
  fs.readFile(favouriteDataPath,(err,data)=>{
    
    callback(!err ? JSON.parse(data) : []); 
  
  })

    }
    }
  
  
