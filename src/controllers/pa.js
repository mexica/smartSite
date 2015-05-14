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
            case 100:page.Result = 1;break;
            case 101:page.Result = 2;break;
            case 102:page.Result = 3;break;
            case 103:page.Result = 1;break;
            case 104:page.Result = 2;break;
            case 105:page.Result = 3;break;
            case 106:page.Result = 1;break;
            case 107:page.Result = 2;break;
            case 108:page.Result = 3;break;
            case 109:page.Result = 1;break;
            default:
                page.Result = 1;
                break;

        }

        res.status(200).json(page);
    });


};

