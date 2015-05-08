
function success()
{
	console.log("/deplay load deplay\n");
	return "begin autodeploy";
}


function failure()
{
	console.log("/bbb load bbb()\n");
	return "is failure";
}

exports.sucs=success;
exports.fail=failure;

