const express = require('express');
const router = express.Router();

const User = require('./../models/user');


router.post('/',async (req,res) => {
    try{
      const data = req.body;
       const newUser = new User(data);
       const response = await newUser.save();
      console.log('data saved');
     res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'internal error'});
    }
  })
  router.get('/',async (req,res) =>{
    try{
      const data = await User.find();
      console.log('data fetched');
      res.status(200).json(data);
    }
    catch(err){
      console.log('error');
    }
  
  })
  module.exports = router;
