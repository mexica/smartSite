
var logging = require('./logging');
var logger = logging.logger;
var express = require('express');
var router = express.Router();
var app = module.exports = express();
var http =require("http");
var url =require("url");

//configure application fixtures
app.set('env', 'development');//TODO: now it doesn't work if i switch express to production, so use development always now

app.enable('trust proxy'); //TODO: configure it by settings
//app.locals(settings.resources);//TODO: configure it later
app.set('port', 8006);//TODO: configure it by settings
app.set('bindip', '0.0.0.0');
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs-mate'));
app.use(logging.applogger);
require('./src/routes/')(app);


var env = app.get('env');


var server = require('./http-server');
server.on('request', app);

//function onrequest(request,response) {
//    var path= url.parse(request.url).pathname;
//    console.log("req from  path="+path+"\n");
//
//    response.writeHead(200,{"content-type":"text/plain"});
//    //response.write("from server01.js\n");
//    response.write("i am here" +"\n");
//    response.end();
//}
//
//var server = http.createServer();
//server.on('request', onrequest);

server.listen(app.get('port'), function(){
    logger.info('The server is binding on '+ app.get('bindip') +' and listening on port ' + app.get('port') + ' in ' + env );

});




//var server=require("./server");
//var route =require("./route");
//
//var reqhandle=require("./reqhandle");
//
//
//var handle={};
//
//handle["/"]=reqhandle.fail;
//handle["/GetUrl/WebHandler"]=reqhandle.sucs;
//handle["/failure"]=reqhandle.fail;


//
//server.server(route.routejs,handle);
