const express = require('express');
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

app.get("/",(req,res,next)=>{
  console.log("handling",req.url,req.method);
  res.send(`<h1>welcome to complete conding</h1>`);

  
});

app.get("/contact-us",(req,res,next)=>{
  console.log("handling /contactus for ",req.url,req.method);
  res.send(`<h1>please give your request</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="enter your name"/>
      <input type="email" name="email" placeholder="enter your email"/>
      <input type="submit"/>
    </form>
    `);

  
});

app.post("/contact-us",(req,res,next)=>{
  console.log("handling contact-us for post",req.url,req.method);
  res.send(`<h1>thanks for your detail</h1>`);

  
});
const PORT=3000;
app.listen(PORT,()=>{
console.log(`http://localhost:${PORT}`);
});