let express= require("express");
const data = require("./test/data");

// let http= require("http");
// let app=http.createServer(function(req, res) {
//    res.writeHead(200,{'Content-Type': 'application/json'});
//    res.write(JSON.stringify(data));
//    });
let app=express();
let port =9101;
app.get('/',function(req,res){
   res.send("Hiii from Express")

});

// app.get('/category',function(req,res){
//    // res.send("Hiii from category")
//    res.writeHead(200,{'Content-Type': 'application/json'});
//    res.write(JSON.stringify(data));
//    });
app.listen(2000);