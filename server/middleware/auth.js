var jwt = require("jsonwebtoken")
var SECRET = require('../config.js')

exports.loginRequired =function(req,res,next){
    try {
        var token = req.headers.authorization.split(" ")[1]
        jwt.verify(token,SECRET,function(err,decoded){
            if (decoded){
                console.log('You are authenticated')
                next();
            } else {
                res.status(401).send('Please log in first')
            }
        });
    }
    catch(ex){
        res.status(401).send("Please log in first")
    }
}

exports.ensureCorrectUser = function(req,res,next){
    try{
        var token = req.headers.authorization.split(" ")[1]
        jwt.verify(token,SECRET,function(err,decoded){
            if (decoded.user_id === req.params.id){
                next();
            }  else {
                res.status(401).send('Woopsie, looks like you didnt make it');
            }
        })
    } catch(ex){
        res.status(401).send(ex.message);
    }
}