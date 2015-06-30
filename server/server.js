var express = require('express');
var path = require('path');
var app = express();

//listen on port 8888
app.listen(8888,function(){
	console.log('Server is listening on port 8888');
})

app.use(express.static(path.join(__dirname, '../client/static')));


app.get('/', function(req, res){
	res.render('../client/views/index');
})