const http = require('http');
const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    res.setHeader("Content-Type","text/html");
     res.write(`
      <html>
<head>
  <title>My Website</title>
</head>

<body>
  <h1>Welcome to My Website</h1>

  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
</body>
</html>
      `)
    return res.end();
  }
  if(req.url==='/about'){
    return res.end('<h1>about page</h1>')
  }
  if(req.url==='/contact'){
    return res.end('<h1>contact page</h1>')
  }
  
  res.end('<h1>page is not found</h1>');
})
const PORT=3000;
server.listen(PORT,()=>{
  console.log("http://localhost:3000");
})