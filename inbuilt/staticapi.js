let fs =require("fs");
let http=require("http");

let server= http.createServer(function(req, res){
   console.log("listen")
})
server.listen(1000)