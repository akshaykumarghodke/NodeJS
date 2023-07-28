let http = require('http');
let server = http.createServer((req,res)=>{
   res.write("<h1>server welcom AK</h1>")
   console.log("listrning server");
   res.end();

})
server.listen(1000);