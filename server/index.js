var config = {
    port: 5000
};

var path = require('path');
var express = require('express');
var app = express();
var router = express.Router();
app.use(router);

app.use('/static', express.static(path.join(__dirname, '..', 'public')));

app.listen(config.port);
