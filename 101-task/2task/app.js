const http =require('http');
const fs = require('fs');
const server=http.createServer((req,res)=>{



  if(req.method === "POST" && req.url === "/submit"){
const body=[];
req.on('data',(chunks)=>{
  body.push(chunks);
});
req.on('end',()=>{
  const fullBody=Buffer.concat(body).toString();
  const params = new URLSearchParams(fullBody);
  const bodyObject=Object.fromEntries(params);
  console.log(bodyObject);
  fs.writeFileSync('user.txt',JSON.stringify(bodyObject));
 res.statusCode=302;
 res.setHeader("Location","/");
 return res.end();
});
return;
  }

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
server.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
});
