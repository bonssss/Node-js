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

//get method to fetch all
app.get("/api/genres", (req, res) => {
  if (genres.length == 0) {
    res.status(404).send("No genres found");
  } else {
    res.send(genres);
  }
});
//get method to fetch one
app.get("/api/genres/:id", (req, res) => {
  const id = req.params.id;
  const genre = genres.find((c) => c.id === parseInt(id));
  if (!genre) {
    res.status(404).send("Genre not found");
  } else {
    res.send(genre);
  }
});
//delete method
app.delete("/api/genres/:id", (req, res) => {
  const id = req.params.id;
  const index = genres.findIndex((c) => c.id === parseInt(id));
  if (index !== -1) {
    genres.splice(index, 1);
    res.send(genres);
  } else {
    res.status(404).send("Genre not found");
  }
});

// update
app.put("/api/genres/:id", (req, res) => {
  const id = req.params.id;
  const index = genres.findIndex((c) => c.id === parseInt(id));
  if (index !== -1) {
    const genre = genres[index];
    const { name } = req.body;
    const valid = validateGenre({ name });
    if (!valid) {
      res.status(400).send("Invalid genre");
    } else {
      genre.name = name;
      res.send(genre);
    }
  } else {
    res.status(404).send("Genre not found");
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
