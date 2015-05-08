
var log4js = require('log4js');
log4js.configure(__dirname + '/logging.json', { reloadSecs: 0 });
var applogger = log4js.getLogger('app');
module.exports = {
    applogger: log4js.connectLogger(applogger, { level: 'INFO' }),
    logger: applogger
};
