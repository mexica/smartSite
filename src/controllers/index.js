var express = require('express');

module.exports = function(app){
    var router = null;


    //activity
    router = express.Router({strict: true});
    require('./pa')(router);
    app.use('/index', router);
    app.use('/', router);
};