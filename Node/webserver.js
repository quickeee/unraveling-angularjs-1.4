/**
 * Created by Frank-Desktop on 24/12/2015.
 */
var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic("./../Work/UnravelNg"));
app.listen(5100);