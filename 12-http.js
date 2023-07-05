const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('Welcome to guggus land');
	}

	if (req.url === '/guguisdonkey') {
		res.end('guggu is a gadha');
	}

	res.end(`<h1>Oops! Guggu is a monkey</h1>`);
});

server.listen(5600);
