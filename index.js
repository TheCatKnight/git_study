
var connect = require('connect');

connect.use(function (req, res) {
	res.end('ok\n');
});

connect.listen(3000);