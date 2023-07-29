const express = require('express');
let port=4000;

const app = express();
app.get("/",(req,res)=>{
   
    res.send("<h1>Hello World  Home Page</h1>")
    console.log("listening to home page...");


});
app.get("/help",(req,res)=>{
   
    res.send(`
    <input type="text" placeholder="username" </input> 
    <button> Submit </button>`)
    console.log("listening to help page...");
});
app.listen(port);
console.log("listening to help page..."+port);