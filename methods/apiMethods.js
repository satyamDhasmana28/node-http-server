function getMethod(req, res) {
	let baseUrl = req.url;
	let employees = req.employees;
	// get all employees
	if (baseUrl == "/employees") {
		res.writeHead(200, { "Content-Type": "application/json" });
		res.write(JSON.stringify(employees));
		res.end();
	}
	// else if (baseUrl == "/employee/id") {
	// 	employees.
	// }
	else {
		res.writeHead(404, { "Content-Type": "application/json" });
		// res.write(JSON.stringify({
		// 	title: "not found",
		// 	message: `no route found associated with ${req.url}`,
		// }));
		res.write("hey");
		res.end();
	}
}

function postMethod(req, res) {
	let reqUrl = req.url;
	console.log(reqUrl);
	let employee = req.employee;
	if (reqUrl == "/add-employee") {
		console.log(req.body);
		res.writeHead(200, { "Content-Type": "application/json" });
		// console.log(req.body);
		let body = "";
		req.on("data", (chunck) => {
			body += chunck;
		});
		req.on("end", () => {
			console.log(body);
		});
		res.end();
	} else {
		res.writeHead(404, { "Content-Type": "application/json" });

		res.write(
			JSON.stringify({
				title: "not found",
				message: `no route found associated with ${req.url}`,
			})
		);
		res.end();
	}
}

function putMethod(req, res) {
	let reqUrl = req.url;
	if (reqUrl == "/") {
		res.writeHead(200, { "Content-Type": "application/json" });
		res.json({
			title: "not found",
			message: "all movie get api",
		});
		res.end();
	} else {
		res.writeHead(404, { "Content-Type": "application/json" });
		res.write(
			JSON.stringify({
				title: "not found",
				message: `no route found associated with ${req.url}`,
			})
		);
		res.end();
	}
}

function deleteMethod() {
	let reqUrl = req.url;
	if (reqUrl == "/") {
		res.writeHead(200, { "Content-Type": "application/json" });
		res.json({
			title: "not found",
			message: "all movie get api",
		});
		res.end();
	} else {
		res.writeHead(404, { "Content-Type": "application/json" });
		res.write(
			JSON.stringify({
				title: "not found",
				message: `no route found associated with ${req.url}`,
			})
		);
		res.end();
	}
}

module.exports = { getMethod, postMethod, putMethod, deleteMethod };
