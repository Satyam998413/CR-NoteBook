const express = require('express');
const router=express.Router();


// Create a user using post ./api/auth Does not required auth
router.get("/",(req,res)=>{
    // obj={
    //     number:1,
    //     name:"Satyam"
    // }
    // res.json(obj);
    console.log(req.body);
    res.send("Hello Afd");

})

module.exports=router;