var express = require('express');
var app = express();
var jade = require('jade');

var port = process.env.PORT || 8000;

app.get('/', function(request, response) {
    var content = jade.renderFile('./views/index.jade', {'name': 'Nidhi Sinha'});
    response.send(content);
});

app.listen(port, function() {
    console.log("Listening on port " + port);
});