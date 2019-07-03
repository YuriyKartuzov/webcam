const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.static('public'));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get("/getpic", (req, res) => {
	console.log("Get request received");
	let cmd = 'cd public && raspistill -w 980 -h 980 -rot 180 -o cam.jpg';

	const {exec} = require("child_process");
	exec(cmd, (err, stdout, stderr) => {
		if(err) throw err;
		
		res.send("done");
		console.log("after send response");
	});
});

app.listen(3000, () => {
	console.log("WebPic server started");
});
