var express = require('express');
var app = express();
var open = require('open');
var path = require('path');

var cache = [];

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    console.log("some one connected");

    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/form', function(req, res) {
    var error = 0;
    // console.log("some one connected");
    // console.log(req.query);

    //   console.log(cache);

    for (var i in req.query)
        if (!req.query[i]) {
            // cache.push("error " + i);
            console.log("error " + i);
            error++;
        };
        //  if (!req.query["name"])
        //      console.log("you did not enter your name");
        //   if (!req.query["password"])
        //       console.log("you did not enter password");
    console.log(req.query);
    //  res.status(200).send('ok');
    if (error > 0) {
        res.status(200).send('error 500');
        error = 0;
    } else res.status(200).send('ok');;
});



app.listen(8080);
open("127.0.0.1:8080", "chrome");