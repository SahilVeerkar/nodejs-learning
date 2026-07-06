const http = require('http');
const server =http.createServer((req,res)=>{


 if(req.url==='/'){
   res.setHeader("Content-Type","text/html");
 res.write('<html>');
 res.write('<head><title>complete coding</title><head>');
  res.write('<h1>welcome to home page</h1>');
   res.write('</html>');
  return res.end();
 }
 else if(req.url.toLowerCase()==='/products'){
    res.setHeader("Content-Type","text/html");
 res.write('<html>');
 res.write('<head><title>complete coding</title><head>');
  res.write('<h1>products</h1>');
   res.write('</html>');
  return res.end();

 }
    res.setHeader("Content-Type","text/html");
 res.write('<html>');
 res.write('<head><title>complete coding</title><head>');
  res.write('<h1>i am sahil</h1>');
   res.write('</html>');
  res.end();

});
const port = 3000;
server.listen(port,()=>{
console.log(`server running at http://localhost:${port}`);
})