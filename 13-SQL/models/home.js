
const db= require("../Utils/dataBaseUtil");


module.exports =class Home{

  constructor(houseName,price,location,rating,photoURL,desciption,id){
    this.houseName=houseName;
    this.price=price;
    this.location=location;
    this.rating=rating;
    this.photoURL=photoURL;
    this.desciption=desciption;
    this.id=id;
  }
  save(){
    if(this.id){
return db.execute('UPDATE homes SET houseName=?,price=?,location=?,rating=?,photoURL=?,desciption=? WHERE id=?',[this.houseName,this.price,this.location,this.rating,this.photoURL,this.desciption]);
    }

    else{
return db.execute('INSERT INTO homes(houseName,price,location,rating,photoURL,desciption) VALUES(?,?,?,?,?,?)',[this.houseName,this.price,this.location,this.rating,this.photoURL,this.desciption]);
    }
  
    

  }
  static fetchAll( ){

return db.execute('SELECT * FROM homes');


  }

  static findById(homeId){
     return db.execute('SELECT * FROM homes WHERE id=?',[homeId]);
  }

   static deleteById(homeId){
 return db.execute('DELETE FROM homes WHERE id=?',[homeId]);
  }

}