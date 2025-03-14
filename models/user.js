const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    phone_number:{
        type:Number,
        required:true,
    },
    password: {
        type: String,
        required: true
    },
    
});

userSchema.pre('save', async function(next){
    const user = this;

    if(!user.isModified('password')) return next();
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(user.password,salt);
        user.password = hashedPassword; 
        next();
    }
    catch(err){
        return next(err);
    }
})
userSchema.methods.comparePassword = async function(candidatePassword){
    try{
        const isMatch = await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    }
    catch(err){
        throw err;
    }
}
const User = mongoose.model('user',userSchema);
module.exports = User;