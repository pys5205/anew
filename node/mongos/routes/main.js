const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const async = require("async")

// define schema
var userSchema = mongoose.Schema({
    userid : String,
    name : String,
    city : String,
    sex : String,
    age : Number
})

//create model with mongodb collection and schema
var User = mongoose.model('users', userSchema);

//list
router.get('/list', function(req, res, next){
    User.find({}, function(err, docs) {
        if(err) console.log('err')
        res.send(docs)
    })
})

//get
router.get('/get', function(req, res, next) {
    var userid = req.query.input
    User.findOne({'userid' : userid}, function(err, doc) {
        if(err) console.log('err')
        res.send(doc)
    })
})

//insert
router.post('/insert', function(req, res, next) {
    var userid = req.body.userid;
    var name = req.body.name;
    var city = req.body.city;
    var sex = req.body.sex;
    var age = req.body.age;
    var user = new User({ 'userid' : userid, 'name' : name, 'city' : city, 'sex' : sex, 'age' : age })
    
    user.save({}, function(err, silence) {
        if(err) {
            console.log('err')
            res.status(500).send('insert error')
            return;
        }
        res.status(200).send("inserted")
    })
})

//update
router.post('/update', function(req, res, next) {
    var userid = req.body.userid;
    var name = req.body.name;
    var city = req.body.city;
    var sex = req.body.sex;
    var age = req.body.age;
    var user = new User({ 'userid' : userid, 'name' : name, 'city' : city, 'sex' : sex, 'age' : age })
    
    User.findOne({"userid" : userid}, function(err, user) {
        if(err) {
            console.log('err')
            res.status(500).send('update error')
            return;
        }
        user.name = name;
        user.sex = sex;
        user.city = city;
        user.age = age;
        user.save(function(err, silence) {
            if(err) {
                console.log('err')
                res.status(500).send('update error')
                return;
            }
            res.status(200).send("Updated")
        })
    })
})

//delete
router.post('/delete', function(req, res, next) {
    var userid = req.body.userid;
    var user = User.find({"userid" : userid})
    user.remove(function(err) {
        if (err){
                console.log('err')
                res.status(500).send('delete error')
                return;
        }
        res.status(200).send("Removed")
    })
})

module.exports = router;

async.series([query1, query2, query3, query4, query5, query6], function(err, results) {
    if(err) {
        console.log('error : ' + err);
    }
    else {
        console.log('task finish');
    }
})

// select * from users
function query1(callback) {
    User.find({}, {'_id':0}).exec(function (err, user) {
            console.log("Query 1");
            console.log(user+"\n");
            callback(null)
        })
}

// select userid, name, city from users
function query2(callback) {
    User.find({}, {'_id':0, 'userid':1, 'name':1, 'city':1}).exec(function (err, user) {
        console.log("Query 2");
        console.log(user+"\n");
        callback(null)
    })
}

// select & from users where city = 'Seoul' order by userid limit 3
function query3(callback) {
    User.find({'city':'Seoul'}, {'_id':0}).sort({'userid':1}).limit(3).exec(function (err, user) {
        console.log("Query 3");
        console.log(user+"\n");
        callback(null)
    })
}

// select userid from users where userid='/user/' 
function query4(callback) {
    User.find({'userid':{'$regex':'100'}}, {'_id':0}).select('userid').exec(function (err, user) {
        console.log("Query 4");
        console.log(user+"\n");
        callback(null)
    })
}

// using JSON doc query
// select userid, name, age from users where city ='Seoul' and age > 15 and age < 23
function query5(callback) {
    User.find({'city':'Seoul', 'age':{$gt:14, $lt:23}}, {'_id':0})
        .sort({'age':-1})
        .select('userid name age')
        .exec(function (Err, user) {
            console.log("query 5");
            console.log(user+"\n");
            callback(null)
        })
}

// using querybuilder
// select userid, name, age from users where city ='Seoul' and age > 15 and age < 23
function query6(callback) {
    User.find({}, {'_id':0})
        .where('city').equals('Seoul')
        .where('age').gt(15).lt(23)
        .sort({'age':1})
        .select('userid name age')
        .exec(function (Err, user) {
            console.log("query 6");
            console.log(user+"\n");
            callback(null)
        })
}

