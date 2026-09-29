

const http=require('http');
const server=http.createServer((req,res)=>{
  if(req.method=='GET' && req.url ==='/'){
    res.end("user management api");
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