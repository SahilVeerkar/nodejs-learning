
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