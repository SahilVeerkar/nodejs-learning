const fs= require('fs');
const path= require('path');
const rootDir = require('../Utils/pathUtils');
const registeredHomes=[];
console.log("registeredHomes loaded:", registeredHomes);


module.exports =class Home{

  constructor(houseName,price,location,rating,photoURL){
    this.houseName=houseName;
    this.price=price;
    this.location=location;
    this.rating=rating;
    this.photoURL=photoURL;
  }
  save(){
    registeredHomes.push(this);
    
    const homeDataPath=path.join(rootDir,'data','home.json');
    fs.writeFile(homeDataPath,JSON.stringify(registeredHomes),error=>{
      console.log("file writing concluded",error); 
    })
  }
  static fetchAll(){
  return registeredHomes;
  }
  }