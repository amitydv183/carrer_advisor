const express = require('express')
const app = express(); 
const db = require('./db');
const bodyParse = require('body-parser');
app.use(bodyParse.json());
const userRoutes = require('./routes/userRoutes');
 
const passport = require('./auth');



app.use(passport.initialize());

const localAutMiddleware = passport.authenticate('local',{session:false})

app.use('/user',localAutMiddleware,userRoutes);

//for testing
app.listen(3001, ()=>{
    console.log('listening on port 3000');
  })