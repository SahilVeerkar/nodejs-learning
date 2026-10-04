const express = require("express");
const app = express();

const homeRouter = require("./routes/home");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(homeRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});