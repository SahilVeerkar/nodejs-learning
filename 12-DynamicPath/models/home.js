const fs= require('fs');
const path= require('path');
const rootDir = require('../Utils/pathUtils');
const homeDataPath=path.join(rootDir,'data','home.json');



module.exports =class Home{

  constructor(houseName,price,location,rating,photoURL){
    this.houseName=houseName;
    this.price=price;
    this.location=location;
    this.rating=rating;
    this.photoURL=photoURL;
  }
  save(){
  
    

   Home.fetchAll((registeredHomes)=>{
      if(this.id){
registeredHomes=registeredHomes.map(home=>
   home.id===this.id ? this : home)
  
    }
    else{
      this.id=Math.random().toString(); 
        registeredHomes.push(this);
    }

    
    fs.writeFile(homeDataPath,JSON.stringify(registeredHomes),error=>{
      
    })
    })
  
  }
  static fetchAll(callback){

fs.readFile(homeDataPath,(err,data)=>{
  
  callback(!err ?JSON.parse(data) : callback([])); 
 
})

  }

  static findById(homeId,callback){
     this.fetchAll(homes=>{
     const homeFound = homes.find(home=>home.id === homeId);
     callback(homeFound);
  })
  }

   static deleteById(homeId,callback){
 this.fetchAll(homes=>{
  homes=homes.filter(home=>
     home.id!==homeId )
       fs.writeFile(homeDataPath,JSON.stringify(homes),callback);
  })
  }
  }

 