const connectToMongo=require('./db');
const express = require('express');

connectToMongo();

const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello Satyam');
// })

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

// app.get('/api/v1/login', (req, res) => {
//     res.send('Hello Satyam Login');
//   })

//   app.get('/api/v1/signup', (req, res) => {
//     res.send('Hello Satyam SignUp');
//   })

//   app.get('/api/v1/logout', (req, res) => {
//     res.send('Hello Satyam Logout');
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
