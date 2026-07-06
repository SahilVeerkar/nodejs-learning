const http=require('http');
const server=http.createServer((req,res)=>{
  console.log(req.url,req.method);
  if(req.url==='/home'){
    res.write('<h1> welcome to home</h1>');
    return res.end();
  }
  else if(req.url==='/men'){
    res.write('<h1> welcome to men</h1>');
    return res.end();
  }
  else if(req.url==='/women'){
    res.write('<h1> welcome to women</h1>');
    return res.end();
  }
  else if(req.url==='/kids'){
    res.write('<h1> welcome to kids</h1>');
    return res.end();
  }
  else if(req.url==='/cart'){
    res.write('<h1> welcome to cart</h1>');
    return res.end();
  }
  res.write(`
    <html lang="en">
<head>
<title>myntra</title>
</head>
<body>
<nav>
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/men">Men</a></li>
    <li><a href="/women">Women</a></li>
    <li><a href="/kids">Kids</a></li>
    <li><a href="/cart">cart</a></li>
    </ul>
</nav>
</body>
</html>
    `);
    res.end();

});
server.listen(3000,()=>{
  console.log('server running on address http://localhost3000'); 
});