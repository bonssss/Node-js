const Joi = require("joi");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/demo2")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error occurred:", err));

// Mongoose schema and model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

// Joi validation schema
const joiSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
});

// POST method to add a new user
app.post("/api/user", async (req, res) => {
  // Validate the request body
  const { error } = joiSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Save the user to the database
  const user = new User(req.body);
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get(('/api/user'),(req,res)=>{
    User.find().then((users)=>{
        res.send(users);
        }).catch((err)=>{
            res.status(500).send(err);
            });
            });

app.get(('/api/user/:id'),(req,res)=>{
    User.findById(req.params.id).then((user)=>{
        if(!user){
            return res.status(404).send({message:"User not found"});
            }
            res.send(user);
            }).catch((err)=>{
                res.status(500).send(err);
                });
                });


// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
