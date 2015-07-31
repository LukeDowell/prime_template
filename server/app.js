/**
 * Created by lukedowell on 7/31/15.
 */
var express = require('express');
var path = require('path');

//Create app and set port
var app = express();
app.set('port', (process.env.PORT || 5000));

//Catchall for serving index.html
app.get("/*", function(req, res) {
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});

//Start web service
app.listen(app.get('port'), function() {
    console.log("Now listening on port: " + app.get('port'));
});