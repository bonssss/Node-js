const express = require("express");
const app = express();

const employee = [
  {
    id: 1,
    name:' employee1'
  },

  { id: 2, name: 'employee2' },
  { id: 3, name: 'employee3' },
  { id: 4, name: 'employee4' },
];

app.get('/employee/:id',(req,res)=>{
    const id = req.params.id;
     const emp = employee.find(c => c.id == parseInt(req.params.id))
    if(!emp){
        res.status(404).send({message: 'Employee not found'});
        
    }

    else {
        res.send(emp.name);
    }
    
    
    
   

})
//get method

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/contact", (req, res) => {
  res.send([1, 3, 5]);
});
app.get("/about", (req, res) => {
  res.send("This is about page");
});

// for sigle or unique
app.get("/about/:id/:name/", (req, res) => {
  // res.send(req.params)
  res.send(req.query);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
