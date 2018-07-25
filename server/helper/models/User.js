const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        unique:true,
        required:true,
        minLength:4,
        maxLength:12
    },
    password:{
      type:String,
      required: true,
      minLength:4,
      maxLength:12
    }
  });
  
  userSchema.pre('save', function(next) {
    const user = this;
  
    if (!user.isModified('password')) {
      return next();
    }
  
    bcrypt.hash(user.password, 10).then(
      hashedPassword => {
        user.password = hashedPassword;
        return next();
      },
      err => next(err)
    );
  });
  
  userSchema.methods.comparePassword = function(candidatePassword, next) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) {
        return next(err);
      }
      return next(null, isMatch);
    });
  };

  const User = mongoose.model('User', userSchema);
  module.exports = User;