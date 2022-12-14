const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const shell = require('shelljs')

var spawn = require('child_process').spawn;

// define schema
var dataSchema = mongoose.Schema({
    type: String,
    time: String,
    username: String,
    pid: Number,
    name: String,
    ip: String,
    port: Number,
    mountpoint: String,
    fstype: String,
    total: Number,
    used: Number,
    free: Number,
    percent: Number
})

// create model with mongodb collection and schema
var Data = mongoose.model('tests', dataSchema);


shell.cd('~')

// start
router.get('/start', function(req, res, next) {
    //shell.exec('sh /data/python/start.sh');
    spawn('sh',['/data/anew/api_pys/start.sh'], {
        detached: true
    })
    
})

// stop
router.get('/stop', function(req, res, next) {
    shell.exec('sh /data/anew/api_pys/stop.sh');
})

// list
router.get('/list', function(req, res, next) {
     Data.find({}, { '_id': 0 }).sort({"time":-1}).limit(30).exec(function(err, docs) {
        if (err) console.log('err')
        res.writeHead(200);
        var template = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Result</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1 style="color:black">disk</h1>
            <table border="1" margin: auto; text-align: center; style="width:700px; color:black;">
            <tr>
                <th>time</th>
                <th>mountpoint</th>
                <th>fstype</th>
                <th>total</th>
                <th>used</th>
                <th>free</th>
                <th>percent</th>
            </tr>
            `;
        for (var i = 0; i < docs.length; i++) {
            if (`${docs[i]['type']}` == "disk") {
                template += `
                    <tr>
                        <th> ${docs[i]['time']} </th>
                        <th> ${docs[i]['mountpoint']} </th>
                        <th> ${docs[i]['fstype']} </th>
                        <th> ${docs[i]['total']} </th>
                        <th> ${docs[i]['used']} </th>
                        <th> ${docs[i]['free']} </th>
                        <th> ${docs[i]['percent']}% </th>
                    </tr>
                    `;
            }
        }
        template += `
            </table>
            <h1 style="color:black">process</h1>
            <table border="1" margin: auto; text-align: center; style="width:700px; color:black;">
            <tr>
                <th>time</th>
                <th>username</th>
                <th>pid</th>
                <th>name</th>
                <th>ip</th>
                <th>port</th>
            </tr>
            `;
        for (var i = 0; i < docs.length; i++) {
            if (`${docs[i]['type']}` == "process") {
                template += `
                    <tr>
                        <th> ${docs[i]['time']} </th>
                        <th> ${docs[i]['username']} </th>
                        <th> ${docs[i]['pid']} </th>
                        <th> ${docs[i]['name']} </th>
                        <th> ${docs[i]['ip']} </th>
                        <th> ${docs[i]['port']} </th>
                    </tr>
                    `;
            }
        }
        template += `
            </table>
        </body>
        </html>
        `;
        res.end(template)
    })
})

//disk
router.get('/list/disk', function(req, res, next) {
    Data.find({}, { '_id': 0 }).exec(function(err, docs) {
        if (err) console.log('err')
        res.writeHead(200);
        var template = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Result</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1 style="color:black">disk</h1>
            <table border="1" margin: auto; text-align: center; style="width:700px; color:black;">
            <tr>
                <th>time</th>
                <th>mountpoint</th>
                <th>fstype</th>
                <th>total</th>
                <th>used</th>
                <th>free</th>
                <th>percent</th>
            </tr>
            `;
        for (var i = 0; i < docs.length; i++) {
            if (`${docs[i]['type']}` == "disk") {

                template += `
                    <tr>
                        <th> ${docs[i]['time']} </th>
                        <th> ${docs[i]['mountpoint']} </th>
                        <th> ${docs[i]['fstype']} </th>
                        <th> ${docs[i]['total']} </th>
                        <th> ${docs[i]['used']} </th>
                        <th> ${docs[i]['free']} </th>
                        <th> ${docs[i]['percent']}% </th>
                    </tr>
                    `;
            }
        }
        template += `
            </table>
        </body>
        </html>
        `;
        res.end(template)
    })
})

//process
router.get('/list/process', function(req, res, next) {
    Data.find({}, { '_id': 0 }).exec(function(err, docs) {
        if (err) console.log('err')
        res.writeHead(200);
        var template = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Result</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1 style="color:black">process</h1>
            <table border="1" margin: auto; text-align: center; style="width:700px; color:black;">
            <tr>
                <th>time</th>
                <th>username</th>
                <th>pid</th>
                <th>name</th>
                <th>ip</th>
                <th>port</th>
            </tr>
            `;
        for (var i = 0; i < docs.length; i++) {
            if (`${docs[i]['type']}` == "process") {
                template += `
                    <tr>
                        <th> ${docs[i]['time']} </th>
                        <th> ${docs[i]['username']} </th>
                        <th> ${docs[i]['pid']} </th>
                        <th> ${docs[i]['name']} </th>
                        <th> ${docs[i]['ip']} </th>
                        <th> ${docs[i]['port']} </th>
                    </tr>
                    `;
            }
        }
        template += `
            </table>
        </body>
        </html>
        `;
        res.end(template)
    })
})

// time
router.get('/time', function(req, res, next) {
    var input = req.query.input
    Data.find({ 'time': { "$gte": input } }, { '_id': 0 }).exec(function(err, docs) {
        if (err) console.log('err')
        else console.log(docs)
        res.writeHead(200);
        var template = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Result</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1 style="color:black">disk</h1>
            <table border="1" margin: auto; text-align: center;  style="width:700px; color:black;">
            <tr>
                <th>time</th>
                <th>mountpoint</th>
                <th>fstype</th>
                <th>total</th>
                <th>used</th>
                <th>free</th>
                <th>percent</th>
            </tr>
            `;
        for (var i = 0; i < docs.length; i++) {
            if (`${docs[i]['type']}` == "disk") {

                template += `
                    <tr>
                        <th> ${docs[i]['time']} </th>
                        <th> ${docs[i]['mountpoint']} </th>
                        <th> ${docs[i]['fstype']} </th>
                        <th> ${docs[i]['total']} </th>
                        <th> ${docs[i]['used']} </th>
                        <th> ${docs[i]['free']} </th>
                        <th> ${docs[i]['percent']}% </th>
                    </tr>
                    `;
            }
        }
        template += `
            </table>
            <h1 style="color:black">process</h1>
            <table border="1" margin: auto; text-align: center;  style="width:700px; color:black;">
            <tr>
                <th>time</th>
                <th>username</th>
                <th>pid</th>
                <th>name</th>
                <th>ip</th>
                <th>port</th>
            </tr>
            `;
        for (var i = 0; i < docs.length; i++) {
            if (`${docs[i]['type']}` == "process") {
                template += `
                    <tr>
                        <th> ${docs[i]['time']} </th>
                        <th> ${docs[i]['username']} </th>
                        <th> ${docs[i]['pid']} </th>
                        <th> ${docs[i]['name']} </th>
                        <th> ${docs[i]['ip']} </th>
                        <th> ${docs[i]['port']} </th>
                    </tr>
                    `;
            }
        }
        template += `
            </table>
        </body>
        </html>
        `;
        res.end(template)
    })
})

//post
router.post('/post_list', function(req, res, next) {
    var input = req.body.input
    Data.findOne({ 'userid': input }, { '_id': 0 }).exec(function(err, docs) {
        if (err) console.log('err')
        else console.log(docs)
        res.send(docs)
    })
})

module.exports = router;
