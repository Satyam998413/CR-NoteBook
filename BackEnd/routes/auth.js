const express = require('express');
const router=express.Router();



router.get("/",(req,res)=>{
    obj={
        number:1,
        name:"Satyam"
    }
    res.json(obj);
})

module.exports=router;