const express = require("express");
const router = express.Router();
const { User } = require("../models")
const jwt = require("jsonwebtoken")
const SECRET = require('../config.js')
const schema = require('../joi-schema/auth-schema');



router.post('/signup', function(req,res){
    console.log(req.body)
    const valid = schema.validate(req.body)
    if (valid.error) {
      return res.status(400).json('Error in validation')
    }
    req.parsed = valid.value

    return User.create(req.body).then(function(response){
        var token = jwt.sign({ user_id: response.id}, SECRET);
        res.status(200).send({token})
    }).catch(function(err){
        res.status(400).send(err.message)
    })
});



router.post('/login', function(req,res){
    const valid = schema.validate(req.body)
    if (valid.error) {
      return res.status(400).json('Error in validation')
    }
    req.parsed = valid.value

    return User.findOne({username:req.body.username}).then(function(user){
        user.comparePassword(req.body.password, function(err, isMatch){
            if(isMatch){
                var token = jwt.sign({ user_id: user.id}, SECRET);
                res.status(200).send({token})
            } else {
                res.status(400).send('Invalid Credentials')
            }
        })
    }, function(err){
        res.status(400).send('Invalid Credentials')
    })
});

module.exports = router;