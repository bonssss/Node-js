const express = require("express");
const app = express();

const genres = require('../routes/route')

app.use(express.json());
app.use('',genres)



app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
