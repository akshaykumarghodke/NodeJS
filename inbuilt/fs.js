let fs=  require("fs");
// fs.writeFile("test2.txt","testing learning",function(){
//    console.log("file created")
// })
// fs.appendFile("test3.txt","testing learning\n",function(){
//    console.log("file appended\n")})

// fs.readFile("db.json","utf-8",function(err,data){
//    if (err) throw err;
//    console.log("222\n",data);
// })
fs.rename("test2.txt","testrename.txt",(err)=>{
   // if (err) throw err;
   console.log("file renamed");
})