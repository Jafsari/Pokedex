const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/overwatch-api').then(function(){
    console.log('Connected to MongoDB')
}).catch(function(err){
    console.log(err)
});

exports.User = require('./User');