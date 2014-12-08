
var connect = require('connect');

connect.use(function (req, res) {
	res.end('ok\n');
});

connect.listen(3000, function () {
	console.log('server start listen 3000. http://localhost:3000/');
});