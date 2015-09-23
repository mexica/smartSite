var express = require('express');

module.exports = function(app){
    var router = null;

    require('./api')(app);
    require('./modules')(app);

    //activity
    router = express.Router({strict: true});
    require('./pa')(router);
    app.use('/index', router);
    app.use('/', router);
};