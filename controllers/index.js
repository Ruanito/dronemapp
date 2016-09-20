'use strict';

var IndexModel = require('../models/index');

var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://ruanito:123mudar@localhost:5432/dronemapp");


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {
        res.render('index', model);
    });

    router.post('/api/geolocation', function(req, res){
    	var lat = req.body.latitude;
    	var lng = req.body.longitude;

    	db.query('INSERT INTO map (lat, lng) VALUES($1,$2)', [lat,lng]);

    	res.json({ 'status': 'success' });
    });
};
