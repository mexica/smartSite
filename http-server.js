var http = require('http');
var server = http.createServer();
//var application = require('./application');
//var rpcApi = require('./wss');
//
//server.on('request', application);
//
//
//server.listen(app.get('port'), app.get('bindip'), function(){
//    logger.info('The server is binding on '+ app.get('bindip') +' and listening on port ' + app.get('port') + ' in ' + env );
//    system.memberUp(app);
//});
module.exports = server;