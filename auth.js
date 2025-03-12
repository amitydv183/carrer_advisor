const User =require('./models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(async(username,password,done) => {
    try{
        //console.log('recieved credentials:',username,password);
        const user = await User.findOne({username});
        if(!user)
          return done(null,false,{message: 'Incorrect username'});
        const isPassword =  await user.comparePassword(password);
        if(isPassword){
          return done(null,user);
        }
        else{
          return done(null,false,{message : 'incorrect password.'});
        }
    }
    catch(err){
      return done(err);
    }
  }))

  module.exports = passport;