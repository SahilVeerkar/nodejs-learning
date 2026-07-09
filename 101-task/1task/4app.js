const http =require('http');
const server=http.createServer((req,res)=>{

res.setHeader('Content-type','text/html');
res.write(`
  <html lang="en">
<head>
 
  <title>Document</title>
</head>
<body>
  <form action="/submit" method="POST">
     <input type="text" name="username">
  <button>Submit</button>
  </form>
</body>
</html>
  `)
  res.end();

});
const PORT= 3000;
server.listen(PORT);
