var expressClass = require('express');
var produtos = require('./produtos');
var bodyParser = require('body-parser');

var express = new expressClass();


express.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


express.use(bodyParser.json());
express.use(bodyParser.urlencoded({
    extended: true
}));


express.get('/Produtos', function(request, response) {
	response.json(produtos);
});

express.post('/Produtos', function(request, response) {
	produtos.push(request.body.produto);
});

express.listen(8888);
