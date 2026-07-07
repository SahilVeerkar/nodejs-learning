const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{


 if(req.url==='/'){
   res.setHeader("Content-Type","text/html");

 res.write('<html>');

 res.write('<head><title>complete coding</title></head>');

 res.write('<body>');

  res.write('<h1>Enter your details:</h1>');

  res.write('<form action="/submit-details" method="POST">');
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
 else if(req.method =='POST' && req.url.toLowerCase()==='/submit-details' ){
  const body=[];
  req.on('data',chunks=>{
    console.log(chunks);
    body.push(chunks);

  });
  req.on('end',()=>{
 const fullbody=Buffer.concat(body).toString();
 const params=new URLSearchParams(fullbody);
 const bodyObject=Object.fromEntries(params);
 console.log(bodyObject);
  fs.writeFileSync('user-details.txt',JSON.stringify(bodyObject ));
  })
 

 
  res.statusCode=302;
  res.setHeader('Location','/');
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