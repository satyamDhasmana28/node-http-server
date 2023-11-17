const http = require("http");
const chalk = require("chalk");
const {
	getMethod: getMethodHandler,
	postMethod: postMethodHandler,
	putMethod: putMethodHandler,
	deleteMethod: deleteMethodHandler,
} = require("./methods/apiMethods");

//data
const employees = require("./data/emp.json");

// require("dotenv").config();
// console.log(process.env.PORT);
const PORT = process.env.PORT || 3001;
const server = http.createServer((req, res) => {
	let reqMethod = req.method;
	req.employees = employees;
	switch (reqMethod) {
		case "GET":
			getMethodHandler(req, res);
			break;

		case "POST":
			postMethodHandler(req, res);
			break;

		case "DELETE":
			deleteMethodHandler(req, res);
			break;

		case "PUT":
			putMethodHandler(req, res);
			break;

		default:
			res.writeHead(404, { "Content-Type": "application/json" });
			let jsonRes = {
				title: "not found",
				message: `no route found associated with ${req.url}`,
			};
			res.write(JSON.stringify(jsonRes));
			res.end();
			break;
	}
	// console.log(chalk.yellow(req.url));
	// res.writeHead(200, { "Content-Type": "application/json" });
	// res.write("hey");
	// res.end();
});

server.listen(PORT, (err) => {
	if (err) {
		console.log(chalk.bgRedBright(`error while starting server`));
		return;
	}
	console.log(chalk.red(`server started on port ${PORT}`));
});
