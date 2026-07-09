const http =require('http');
const server=http.createServer((req,res)=>{

res.setHeader('Content-type','text/html');
res.write(`
  <html lang="en">
<head>
 
  <title>Document</title>
</head>
<body>
  <h1>hello sahil</h1>
</body>
</html>
  `)
  res.end();
});
const PORT= 3000;
server.listen(PORT);
