
console.log(__dirname);
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
  if(req.method=='GET' && req.url ==='/'){
    res.end("user management api");
  }
  else if(req.method=='GET' && req.url==='/user'){
    fs.readFile('user.json','utf8',(err,data)=>{
      if(err){
        console.log("file is not exist");
        return;
      }
      res.end(data);
    })
    
  }
  else if (req.method === "POST" && req.url === "/user") {
    let body="";
    req.on('data',(chunks)=>{
      body+=chunks;
    }
  
  )
    req.on('end',()=>{
     
     console.log(body); 
     const user=JSON.parse(body);
     console.log(user);
     fs.readFile('user.json','utf8',(err,data)=>{
      if(err){
        console.log("file is not exist");
        return;
      }
     const users=JSON.parse(data);
     users.push(user);
     fs.writeFile("user.json", JSON.stringify(users), (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("User saved successfully");
  res.statusCode = 201;
res.end("User created successfully");
});
     
     })
    })
}
  else {
    res.statusCode = 404;
    res.end("route not found");
  }
 
})
const PORT=3000;

server.listen(PORT,()=>{
  console.log("Server running on port 3000");
  console.log("http://localhost:3000");
  
})