const express=require('express');
const app=express();
app.get('/',(req,res)=>{
  res.send("hello sahil");
})
app.listen(3000,()=>{
  console.log("server runninng on port 3000");
})