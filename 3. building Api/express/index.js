const express = require("express");
const Joi= require('joi')
const app = express();

app.use(express.json())

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
        res.status(404).send({message: 'Employee  are not found'});
        
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




//post method

app.post('/employee',(req,res)=>{

    const schema = {
        name :Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body, schema);
    // console.log(result)




    if (result.error){
        res.status(400).send(result.error);
        return;
    }
    const emp = {
        id: employee.length + 1,
        name: req.body.name

    };
    employee.push(emp);
    res.send(emp);
})


// put method

app.put('/employe/:id',(req,res)=>{

    const id = req.params.id;
    const emp = employee.find(item => item.id === parseInt(id));
    if (!emp) {
        res.status(404).send("Employeess not found");
    }
    const schema = {
        name: Joi.string().min(3).required()
     }
     const result = Joi.validate(req.body, schema);
     if (result.error) {
        res.status(400).send(result.error.details[0]);
     }
     emp.name = req.body.name;
     res.send(emp);


});

// get method
app.get('/employee',(req,res)=>{
    if (employee.length == 0)
        {
            res.status(400).send("no value")
        }

    res.send(employee);
  
    })


    // delete method
    app.delete('/employee/:id',(req,res)=>{
        const id = req.params.id;
        const emp = employee.find(item => item.id === parseInt(id));
        if (!emp) {
            res.status(404).send("Employeess not found");
            }
            const index = employee.indexOf(emp);
            employee.splice(index, 1);
            res.send(employee);
            })
            

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
