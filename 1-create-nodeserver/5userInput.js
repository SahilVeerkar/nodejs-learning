const http = require('http');
const server =http.createServer((req,res)=>{


 if(req.url==='/'){
   res.setHeader("Content-Type","text/html");
 res.write('<html>');
 res.write('<head><title>complete coding</title><head>');
 res.write('<body>');
  res.write('<h1>Enter your details:</h1>');
  res.write('<form action="/submit-detail" method="POST">');
  res.write('<input type="text" name="username" placeholder="enter your name"><br><br>');
  res.write('<label for="male">Male</label>');
   res.write('<input type="radio" id="male" name="gender" value="male"/>');
   res.write('<label for="female">Female</label>');
   res.write('<input type="radio" id="female" name="gender" value="female"/>');
  res.write('<input type="submit" value="Submit">');
  res.write('</form>');
  res.write('</body>');
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