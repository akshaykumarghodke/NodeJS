console.log("First Program")
// document.write("fisrt prog first")
// function tester(){
//    var message;
//    if (confirm("press button")){
//       message="OK"
//    }
//    else{
//       message="Cancel"
//    }
// connsole.log(message)
// }
// tester();
const http=require("http");
var server= http.createServer((req,res)=>{
   res.write("<h1>First Servr created by AK\n</h1>");
   res.end("Hello World");
   });
   server.listen(3000);
   console.log("Server is running");
