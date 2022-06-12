const express = require('express');
const User = require('../models/User');
const router = express.Router();

const { body, validationResult } = require('express-validator');
// npm install --save express-validator

// Create a user using post ./api/auth/createuser login Does not required auth
router.post("/createuser/", [
  body('name', 'enter a valid name').isLength({ min: 3 }),
  body('email', 'enter a valid email').isEmail(),
  body('password', 'password must bec at least 5 charcters.').isLength({ min: 5 })

], async (req, res) => {
  // obj={
  //     number:1,
  //     name:"Satyam"
  // }
  // res.json(obj);
  // const user=User(req.body);
  // user.save()
  // console.log(req.body);
  // res.send(req.body);

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // check user is this email already exist or not
  try {
    let user = res.findOne({ email: req.body.email });
    console.log(user);
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exist" })
    }

    user = await User.create({
      username: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }


  //   .then(user => res.json(user))
  //   .catch(user=>{console.log(err)
  // res.json({error:"Please Enter unique value of users and email",message:err.message})});

})

module.exports = router;