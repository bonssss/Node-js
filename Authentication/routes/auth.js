const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();
const { User } = require("../model/reduser");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({
    name: name,
    email: email,
    password: password,
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user
    .save()
    .then((data) => {
      res.send(_.pick(user, ["id", "name", "password"]));
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
});
router.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        res.json({ message: "user not found" });
      } else {
     

       
        bcrypt.compare(password, user.password, (err, match) => {
          if (match) {
            const token = jwt.sign({_id: user._id} ,process.env.JWT)
            
            res.json({ message: "login success", token:token,user: user });
          } else {
            res.json({ message: "password not match" });
          }
        });
       

       

      }
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
});
module.exports = router;
