const express = require('express');
const bodyParser= require('body-parser');
const userRouter=require("./routes/userRouter");
const hostRouter=require("./routes/hostRouter");
const app = express();

app.use(bodyParser.urlencoded());

app.use(userRouter);
app.use(hostRouter);





const PORT =3000;
app.listen(PORT,()=>{
  console.log(`server running on address http://localhost:${PORT}`);
})