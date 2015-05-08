

module.exports = function(app){

	require('./favicon')(app);
	require('./static')(app);

	require('../controllers')(app);
};

//
//function route(handle,path)
//{
//	console.log("route ="+path+" from route.js\n");
//
//	if(typeof handle[path]==='function')
//	{
//		return 	handle[path]();
//	}
//	else
//	{
//		console.log("no req handle found= "+path +"\n");
//		return "404 Not found";
//	}
//
//}
//
//exports.routejs=route;
