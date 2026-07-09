const http = require('http');
const express= require('express');
const app =express();
app.use((req,res,next)=>{
  console.log("first midelware",req.url,req.method);
  next();
});

app.use((req,res,next)=>{
  console.log("second midelware",req.url,req.method);
  res.send(`<p> welcome to complete coding</p>`)
  
})


const PORT=3001;
app.listen(PORT,()=>{
  console.log(`server running on address http://localhost:${PORT}`);
})