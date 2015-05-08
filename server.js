var http =require("http");
var url =require("url");

function start (route,handle)
{
	function onrequest(request,response)
	{
		var path= url.parse(request.url).pathname;
		console.log("req from  path="+path+"\n");

		//load route.js
		var reqtxt = route(handle,path);
		

		response.writeHead(200,{"content-type":"text/plain"});
		//response.write("from server01.js\n");
		response.write(reqtxt+"\n");
		response.end();
	}

	http.createServer(onrequest).listen(9090);
	console.log("autodeploy.js has started\n");




}
exports.server=start
