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
  <h1>home</h1>
</body>
</html>
  `)
  return res.end();
}

else if(req.url==="/json"){
res.setHeader('Content-type','application/json');
res.write(JSON.stringify({
  name:"sahil",
  age:23
}))
  return res.end();
}
else if(req.url==="/plain"){
res.setHeader('Content-type','text/plain'); cv
res.write("hello sahil")
  return res.end();
}
else{
res.setHeader('Content-type','text/html');
res.write(`
  <html lang="en">
<head>
 
  <title>Document</title>
</head>
<body>
  <h1>not found</h1>
</body>
</html>
  `)
  return res.end();
}


});
const PORT= 3000;
server.listen(PORT);
