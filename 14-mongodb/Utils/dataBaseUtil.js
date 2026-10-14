const mongo= require("mongodb");
const MongoClient = mongo.MongoClient;
const MONGO_URL= "mongodb+srv://veerkarsahil_db_user:Pvmwd4C5E1atGU0s@mongodb.ag8xahe.mongodb.net/?appName=mongodb";

let _db;


const mongoConnect=(callback)=>{
MongoClient.connect(MONGO_URL).then(client=>{
  
 callback();

  _db=client.db("airbnb");
 
 
} ).catch(err=>{
  console.log('error while to connecting to mongo :',err);
});
}

const getDB= ()=>{
  if(!_db){
    throw new Error('Mongo is not connected');
  }
  return _db;
}

exports.mongoConnect= mongoConnect;
exports.getDB= getDB;


