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

        //UUID FDA50693-A4E2-4FB1-AFCF-C6EB07647825
        //major  10007
        //DID   deviceID from weChat


        switch(pageId){
            case 100:page.Result = 1;break;//AB:6EF190

            case 101:page.Result = 1;break;//AB:6EED69

            case 102:page.Result = 3;break;//AB:70223D
            case 40928:page.Result = 3;break;//AB:70223D     //DID 680407     //

            case 103:page.Result = 1;break;//AB:6E4EB4

            case 104:page.Result = 2;break;//AB:7018D3                //苏州李军

            case 105:page.Result = 3;break;//AB:6EED0F                //苏州李军

            case 106:page.Result = 1;break;//AB:511737                //苏州李军

            case 107:page.Result = 2;break;
            case 40960:page.Result = 1;break;//AB:6EED6B     //DID 680420      //董

            case 108:page.Result = 3;break;

            case 109:page.Result = 3;break;
            case 40525:page.Result = 2;break;//AB: 6EE975  //DID 679425         //董

            default:
                page.Result = 1;
                break;

        }

        res.status(200).json(page);
    });


};

