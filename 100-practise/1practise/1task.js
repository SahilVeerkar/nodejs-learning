const http = require('http');
const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    return res.end('<h1>welcome to my website</h1>');
  }
  else if(req.url==='/about' && req.url.toString()==='/about'){
    return res.end('<h1>about page</h1>')
  }
  else if(req.url==='/contact' && req.url.toString()==='/contact'){
    return res.end('<h1>contact page</h1>')
  }
  res.end();
})
const PORT=3000;
server.listen(PORT,()=>{
  console.log("http://localhost:3000");
})