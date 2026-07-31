const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    res.setHeader("Content-type","text/html");
    res.write(`
      <html>
      <head>

  <title>Document</title>
</head>
<body>
  <h1>registration</h1>
  <form action="/submit" method="POST" >
    <label for="name" >name</label>
    <input type="text" id="name" name="name">
    <label for="age">age</label>
    <input type="number" id="age" name="age" min="1" max="120">
     <label for="city" >city</label>
    <input type="text" id="city" name="city">
    <button type="submit">submit</button>
  </form>
</body>
</html>
      `)
      return res.end();
  }
  if(req.url==='/submit' && req.method==="POST"){
 const body=[];
 req.on("data",(chunks)=>{
  body.push(chunks);
 }
)
req.on("end",()=>{
  const buffer=Buffer.concat(body).toString();
  const params=new URLSearchParams(buffer);
  const realData=Object.fromEntries(params);
  fs.writeFile('user.txt',`Name:${realData.name} age:${realData.age} city:${realData.city}`, (err)=>{
    if(err){
    console.log(err);
    return res.end("something went wrong")}
     console.log("Data Saved Successfully");

     res.end(`<h1>hello ${realData.name}</h1>
  <h1>your age is ${realData.age}</h1>
  <h1>you live in ${realData.city}</h1>`);

    } );
  
 
console.log(realData);

})

  }

  if(req.url==="/users" && req.method==="GET"){
    fs.readFile('user.txt',"utf-8",(err,data)=>{
      if(err){
        console.log(err);
        return res.end("something went wrong");
      }
      res.end(data);


    })
  }
})
server.listen(3000,()=>{
  console.log("http://localhost:3000");
})