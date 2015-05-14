var logger = require('../../logging').logger;

module.exports = function(router){
    require('../../routes-page')(router);

    router.get('/', function(req, res) {
        res.render('index', { title: 'index' });
    });

    router.get('/debug', function(req, res) {
        res.render('debug', { title: 'index' });
    });

    router.get('/_:id', function(req, res) {
        var page = {};
        var pageId = parseInt(req.params.id);


        switch(pageId){
            case 100:page.id = 1;break;
            case 101:page.id = 2;break;
            case 102:page.id = 3;break;
            case 103:page.id = 1;break;
            case 104:page.id = 2;break;
            case 105:page.id = 3;break;
            case 106:page.id = 1;break;
            case 107:page.id = 2;break;
            case 108:page.id = 3;break;
            case 109:page.id = 1;break;
            default:
                page.Result = 1;
                break;

        }

        res.status(200).json(page);
    });


};

