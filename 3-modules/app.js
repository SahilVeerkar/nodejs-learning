const http = require('http');
const handler=require('./user');
const server = http.createServer(handler);
const PORT=3001;
server.listen(PORT,()=>{
  console.log(`server running on address http://localhost:${PORT}`);
})