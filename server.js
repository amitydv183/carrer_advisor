const express = require('express')
const app = express(); 
const db = require('./db');
const bodyParse = require('body-parser');
app.use(bodyParse.json());
const userRoutes = require('./routes/userRoutes');

app.use('/user',userRoutes);


app.listen(3001, ()=>{
    console.log('listening on port 3000');
  })