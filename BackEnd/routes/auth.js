const express = require('express');
const User = require('../models/User');
const router = express.Router();

const { body, validationResult } = require('express-validator');
// npm install --save express-validator
// npm i bcryptjs password +salt+papper=hash genrate
// npm i jsonwebtoken ek tarika hai user ko verify krne ka bar bar user nii send krega
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');


const JWT_SECRET = "SATYAM$BARANWAL";

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
    let user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exist" })
    }


    const salt = await bcrypt.genSalt(10);
    secPass = await bcrypt.hash(req.body.password, salt);


    // Create User
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    });

    const data = {
      user: {
        id: user.id
      }
    }

    const authtoken = jwt.sign(data, JWT_SECRET);
    console.log(authtoken);
    res.json({ authtoken: authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


  //   .then(user => res.json(user))
  //   .catch(user=>{console.log(err)
  // res.json({error:"Please Enter unique value of users and email",message:err.message})});

})

// Authenticate a user using post ./api/auth/login    login Does not required
router.post("/login/", [

  body('email', 'enter a valid email').isEmail(),
  body('password', 'passwords can;t be blanked').exists(),

], async (req, res) => {
  let success = false;
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      success = false
      return res.status(400).json({ error: "please login with correct credentials" })
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ error: "please login with correct credentials" })
    }
    const data = {
      user: {
        id: user.id
      }
    }

    const authtoken = jwt.sign(data, JWT_SECRET);

    res.json({  success,authtoken });


  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


// route3 get logged in user details using post ./api/auth/getuser   login required
router.post("/getuser/",fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select(".password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

module.exports = router;