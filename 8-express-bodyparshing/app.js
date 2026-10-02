const express = require('express');

//local module

const homeRouter=require('./routes/home');
const contactRouter = require('./routes/contactus');
const app=express();
 
app.use((req,res,next)=>{
  console.log("first dummy middleware",req.url,req.method);
  next();
});

app.use((req,res,next)=>{
  console.log("second dummy middleware",req.url,req.method);
  next();
});

// app.use((req,res,next)=>{
//   console.log("third middleware",req.url,req.method);
//   res.send("<h1>welcome to complete conding</h1>");
  
// });

app.use(homeRouter);

app.use(contactRouter);
app.use(contactRouter);

  


const PORT=3000;
app.listen(PORT,()=>{
console.log(`http://localhost:${PORT}`);
});