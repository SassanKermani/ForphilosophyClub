/*----------  Setup  ----------*/

const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

let fs = require("fs");

/*----------  stuff  ----------*/

app.get('/*', (req, res)=>{
	res.sendfile("./index.html")
});

app.post('/getSpot', (req,res)=>{
	// res.send("test");
	fs.readFile(`theSpot.txt`, (err, data)=>{
	if(err){
			throw err; console.log(err); 
			console.log(`you hit a bug thats neet : ${err}`);
			res.send("yell as Sassan he wrote bad code");
		}else{
			res.send(data);
		}
	});
});

app.post('/newSpot', (req,res)=>{
	fs.writeFile('theSpot.txt', req.body.spot, function (err) {
		if (err) throw err;
		console.log(req.body.spot);
	});
	res.send(req.body.spot)
})

/*----------  listen  ----------*/

app.listen(port, ()=>{
	console.log(`up at ${port}`);
});