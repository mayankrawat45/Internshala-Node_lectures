const fs=require("fs")
// ------------create-------------

// let data="hi this is the writeFileSync made file"
// fs.writeFileSync("1.txt",data,{encoding:"utf-8"})

// let data="hi this is the writeFile made file"
// fs.writeFile("2.txt",data,{encoding:"utf-8"},(err)=>{
//     if(err) throw err
//     else console.log("file created succesfully")
// })


// --------------read----------

// let data=fs.readFileSync("1.txt",{encoding:"utf-8"})
// console.log(data)

// fs.readFile("2.txt",{},(err,data)=>{
//     if(err) throw err
//     else console.log(data.toString())
// })


// ---------update----------

// fs.appendFileSync("1.txt","\n hello updated file",{encoding:"utf-8"})

// fs.appendFile("2.txt","\nhello ji",{},(err)=>{
//     if(err)throw err
//     else console.log("updated")
// })

// --------------delete-------------

// fs.unlinkSync("1.txt")

// fs.unlink("2.txt",()=>{
//     console.log("deleted")
// })