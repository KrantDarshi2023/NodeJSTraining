import * as http from 'http'
import * as file from "fs"

http.createServer(function (req, res) {
    file.readFile('user.js',function(err,data){
        res.writeHead(200,{'Content-type':'text'})
        res.write(data);
        res.end();
    })
  }).listen(8080);
