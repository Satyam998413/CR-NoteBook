const express = require('express');
const User=require('../models/User');
const router=express.Router();

// Create a user using post ./api/auth Does not required auth
router.post("/",(req,res)=>{
    // obj={
    //     number:1,
    //     name:"Satyam"
    // }
    // res.json(obj);
    const user=User(req.body);
    user.save()
    console.log(req.body);
    res.send(req.body);

})

module.exports=router;