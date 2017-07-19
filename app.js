var express = require('express') 

var app = express();
var path = require('path');


app.get('/',function  (req,res) {
	// body...

	res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(3000,function  () {
	// body...
	console.log('running server on port 3000')
})