const http = require("http")
const express = require("express")

const app = express();

app.get("/" , (req , res) => {
    return res.send("Hello from homepage")
})

app.get("/about", (req , res) => {
    return res.end("Hello from about page")
})



const myServer = http.createServer(app);


myServer.listen(8000 , () => console.log("server started"));