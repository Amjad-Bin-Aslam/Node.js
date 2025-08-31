// const { time } = require('console');
const fs = require('fs');


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

// sync...
fs.writeFileSync("./test.txt" , 'Hey there')

// async 
fs.writeFile("./test.txt" , "Hey There async" , (err) => {})

