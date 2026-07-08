const sumRequestHandler = (req,res)=>{
console.log("in sum request handler",req.url);
const body=[];
req.on('data',chunks=>{
  body.push(chunks);
})
req.on('end',()=>{
  const bodystr=Buffer.concat(body).toString();
  const params=new URLSearchParams(bodystr);
  const obj=Object.fromEntries(params);
  const result= Number(obj.first)+Number(obj.second);
  console.log(result); 

  res.setHeader("Content-Type","text/html");
  res.write(`
    <html lang="en">
<head>

  <title>Document</title>
</head>
<body>
  <h1>your sum is ${result}</h1>
    <a href="/">go to home</a>
</body>
</html>
    `);
    return res.end();
})

}
exports.sumRequestHandler=sumRequestHandler;