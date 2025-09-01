const http = require("http")
const express = require("express")
const fs = require("fs");


const app = express();

app.get("/" , (req , res) => {
    const logMessage = "Hello from HomePage\n"
    res.send(logMessage)

    fs.appendFile("./log.txt" , logMessage , (err) => {
    if(err){
        console.log("ERROR: " , err)
    } else{
        console.log("success")
    }
});
});



app.get("/about", (req , res) => {
    const logMessage = "Hello From About page\n"
    res.end(`${logMessage }${req.query.name}`)
    fs.appendFile("./log.txt" , logMessage , (err) => {
    if(err){
        console.log("ERROR: " , err)
    }else{
        console.log("About")
    }
})
})



app.listen(8000 , () => console.log("server started"));