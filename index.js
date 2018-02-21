const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
function routes(static,req,res){
	switch(req.url){
		case '/a':
		res.write("123");
		res.end();
		break;
		case '/b':
		res.write('456');
		res.end();
		break;
		default:
		staticRoot(static,req,res);
	}
}
function staticRoot(static,req,res){
	let urlObj = url.parse(req.url,true);
	let urlPath = urlObj.pathname;
	urlPath += urlPath == "/"?"index.html":''
	let staticpath = path.join(static,urlPath);
	fs.readFile(staticpath,function(err,fileContent){
		if(err){
			res.writeHead(404,"Not Found");
			res.end('<h1>404 Not Found</h1>');
		} else{
			res.writeHead(200,'ok');
			res.write(fileContent);
			res.end();
		}
	}) 
}
http.createServer(function(req,res){
	routes(path.join(__dirname,'sample'),req,res)
}).listen(8080);
console.log('visit http://localhost:8080')
