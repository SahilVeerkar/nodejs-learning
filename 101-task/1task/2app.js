const http =require('http');
const server=http.createServer((req,res)=>{
if(req.url==="/"){
res.setHeader('Content-type','text/html');
res.write(`
  <html lang="en">
<head>
 
  <title>Document</title>
</head>
<body>
  <h1>welcome home</h1>
</body>
</html>
  `)
  return res.end();
}

else if(req.url==="/about"){
res.setHeader('Content-type','text/html');
res.write(`
  <html lang="en">
<head>
 
  <title>Document</title>
</head>
<body>
  <h1>about page</h1>
</body>
</html>
  `)
  return res.end();
}


});
const PORT= 3000;
server.listen(PORT);
