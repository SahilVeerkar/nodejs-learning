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
const db= require("./Utils/dataBaseUtil");
db.execute('SELECT * FROM homes')
.then(([rows,fields])=>{
  console.log("getting from db",rows);
})
.catch(error=>{
  console.log("error while reading homes ",error);
})
const app = express();
app.set('view engine','ejs');   
app.set('views','views');

app.use(bodyParser.urlencoded());

app.use(storeRouter);
app.use(hostRouter);

app.use(express.static(path.join(rootDir,'public')))


app.use(get404);


const PORT =3001;
app.listen(PORT,()=>{
  console.log(`server running on address http://localhost:${PORT}`);
})