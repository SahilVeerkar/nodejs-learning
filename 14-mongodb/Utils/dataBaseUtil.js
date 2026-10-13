const mongo= require("mongodb");
const MongoClient = mongo.MongoClient;
const MONGO_URL= "mongodb+srv://sahilveerkar_db_user:JlDl45LyTdAMOMOB@mongodb.rxced6p.mongodb.net/?appName=mongodb";
const mongoConnect=(callback)=>{
MongoClient.connect(MONGO_URL).then(client=>{
 
  callback(client);
} ).catch(err=>{
  console.log('error while to connecting to mongo :',err);
});
}

module.exports= mongoConnect;


