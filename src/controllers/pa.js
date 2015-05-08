var logger = require('../../logging').logger;

module.exports = function(router){
    require('../../routes-page')(router);

    router.get('/', function(req, res) {
        res.render('index', { title: 'index' });
    });




};

