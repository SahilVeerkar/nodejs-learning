const fs= require('fs');
const path= require('path');
const rootDir = require('../Utils/pathUtils');



module.exports =class Home{

  constructor(houseName,price,location,rating,photoURL){
    this.houseName=houseName;
    this.price=price;
    this.location=location;
    this.rating=rating;
    this.photoURL=photoURL;
  }
  save(){
    this.id=Math.random().toString(); 
   Home.fetchAll((registeredHomes)=>{
  registeredHomes.push(this);
    
    const homeDataPath=path.join(rootDir,'data','home.json');
    fs.writeFile(homeDataPath,JSON.stringify(registeredHomes),error=>{
      
    })
    })
  
  }
  static fetchAll(callback){
const homeDataPath=path.join(rootDir,'data','home.json');
fs.readFile(homeDataPath,(err,data)=>{
  
  callback(!err ?JSON.parse(data) : callback([])); 
 

 
})

 
  }
  }