const express = require('express');
const app= express();
const PORT=4000;

let stdDetails=[]
app.use(express.json());// Middleware to parse JSON request bodies

app.post("/add-std",(req,res)=>{
    const newStudent={
        stdName:req.body.name,
        stdRollno:req.body.rollno,
        stdBranch:req.body.branch,
        stdSkills:req.body.skills
    };
    stdDetails.push(newStudent);
    res.status(200).json({message:"Student details added successfully",newStudent});
});

app.get("/get-students",(req,res)=>{
    res.status(200).json(stdDetails);
});

// app.get("/",(req,res)=>{
//     res.status(200).send("Server is up and running");
// });

// app.get("/get-user",(req,res)=>{
//     res.status(200).json({
//         name:"John Doe",
//         age:30,
//         email:"john.doe@example.com"
//     });
// });

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});