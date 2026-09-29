const http = require("http");
const server = http.createServer((req,res)=>{
  res.end('Hello sahil');
})
server.listen(3000);