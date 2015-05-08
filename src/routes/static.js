module.exports = function(app){
    var mode = app.get('env') || 'development';
    if ('development' == mode) {
        var serveStatic = require('serve-static')
        var path = require('path');
        var publicDir = serveStatic(path.join(__dirname, '../../public'));
        var webDir = serveStatic(path.join(__dirname, '../../web'));
        app.use('/public', publicDir);
        app.use('/web', webDir);
    }
};