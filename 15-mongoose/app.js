//core module
const path = require('path');
//external module
const express = require('express');
const bodyParser= require('body-parser');
//localmodule
const storeRouter=require("./routes/storeRouter");
const {hostRouter}=require("./routes/hostRouter");
const rootDir=require("./Utils/pathUtils")
const {get404}=require("./controllers/404");

const mongoose = require('mongoose');


const app = express();
app.set('view engine','ejs');   
app.set('views','views');

app.use(bodyParser.urlencoded());

app.use(storeRouter);
app.use(hostRouter);

app.use(express.static(path.join(rootDir,'public')))


app.use(get404);


const PORT =3001;


const DB_PATH="mongodb+srv://veerkarsahil_db_user:Pvmwd4C5E1atGU0s@mongodb.ag8xahe.mongodb.net/airbnb?appName=mongodb";

mongoose.connect(DB_PATH).then(()=>{
  console.log("connected to mongo");
app.listen(PORT,()=>{
  console.log(`server running on address http://localhost:${PORT}`);
})  
}).catch(err=>{
  console.log('Error while connecting to mongo :',err);
})


