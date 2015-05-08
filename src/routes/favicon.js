
module.exports = function(app){
    var path = require('path');
    var favicon = require('serve-favicon');
    app.use(favicon(path.join(__dirname, '../../public/favicon.ico')));
};