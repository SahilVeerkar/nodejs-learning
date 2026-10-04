//core module
const path = require('path');
//external module
const express = require('express');
const bodyParser= require('body-parser');
//localmodule
const userRouter=require("./routes/userRouter");
const {hostRouter}=require("./routes/hostRouter");
const rootDir=require("./Utils/pathUtils")
const app = express();
app.set('view engine','ejs'); 
app.set('views','views');

app.use(bodyParser.urlencoded());

app.use(userRouter);
app.use(hostRouter);

app.use(express.static(path.join(rootDir,'public')))


app.use((req,res,next)=>{
  res.status(404).render('404',{pageTitle:'Page Not Found',currentpage:"404"});
}) 


const PORT =3000;
app.listen(PORT,()=>{
  console.log(`server running on address http://localhost:${PORT}`);
})