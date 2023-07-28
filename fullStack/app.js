let express= require("express");
let app=express();
let port =9101;
app.get('/',function(req,res){
   res.send("Hiii from Express")

})
app.get('/category',function(req,res){
   res.send("Hiii from category")
   });
app.listen(port);