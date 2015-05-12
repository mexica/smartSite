var logger = require('../../logging').logger;

module.exports = function(router){
    require('../../routes-page')(router);

    router.get('/', function(req, res) {
        res.render('index', { title: 'index' });
    });

    router.get('/debug', function(req, res) {
        res.render('debug', { title: 'index' });
    });




};

