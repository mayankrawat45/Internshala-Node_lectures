const fs=require("fs")

// synchronous
console.log(10)
console.log(20)
let data=fs.readFileSync("mayank.txt",{encoding:"utf-8"})
console.log(data)
console.log(30)
console.log(40)

// asynchronous
console.log(10)
console.log(20)
fs.readFile("mayank.txt",{encoding:"utf-8"},(err,data)=>console.log(data))
console.log(30)
console.log(40)