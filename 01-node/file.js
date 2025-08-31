// const { time } = require('console');
const fs = require('fs');

const os = require("os")

// console.log(os.cpus().length)

// const result = fs.readFileSync("./contacts.txt" , 'utf-8')

// console.log(result)

// fs.readFile("./contacts.txt" , "utf-8" , (err , result) => {
//     if (err){
//         console.log("Error:" , err)
//     } else {
//         console.log(result)
//     }
// })

// fs.appendFileSync("./test.txt" , (" Hey its Amjad\n"))


// fs.copyFileSync("./test.txt" , "./copy.txt")

// fs.unlinkSync("./copy.txt")

// console.log(fs.statSync("./test.txt").isFile()) 

// fs.mkdirSync("my-docs")

// fs.unlinkSync("./my-docs")

// console.log(fs.statSync("./my-docs"))

// fs.statSync("./test.txt")

// sync...Blocking 
// fs.writeFileSync("./test.txt" , 'Hey there')

// // async...Non-blocking
// fs.writeFile("./test.txt" , "Hey There async" , (err) => {}) 



    // Blocking code...

// console.log("1");

// const result = fs.readFileSync("./contacts.txt" , "utf-8")
// console.log(result)

// console.log("2")
// console.log("3")



//Non-Blocking
console.log("1")

fs.readFile("./contacts.txt" , "utf-8" , (err , result) => {
    console.log(result)
})

console.log("2")
console.log("3")
console.log("4")
