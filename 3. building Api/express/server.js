const express = require("express");
const app = express();
const Jot = require("joi");

app.use(express.json());

const genres = [];

app.get("/", (req, res) => {
  res.send("Hello World");
});

// post method
app.post("/api/genres", (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    const genre = {
      id: genres.length + 1,
      name: req.body.name,
    };
    genres.push(genre);
    res.send(genre);
  }
});
// validation
function validateGenre(genre) {
  const schema = Jot.object().keys({
    name: Jot.string().min(3).required(),
  });
  return schema.validate(genre);
}

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
