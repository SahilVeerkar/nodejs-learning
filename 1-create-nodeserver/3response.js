const http = require('http');
const server =http.createServer((req,res)=>{
 res.setHeader("Content-Type","text/html");
 res.write('<html>');
 res.write('<head><title>complete coding</title><head>');
 res.write('<body><h1>i am sahil veerkar</h1></body>');
 res.write('</html>');
 res.end();

});
const port = 3000;
server.listen(port,()=>{
console.log(`server running at http://localhost:${port}`);
})