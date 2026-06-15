const all=require("./app.js")

console.log(all.a)
console.log(all.obj)
console.log(all.obj.x)
all.obj.y();
all.lol()


// operating System 
const os=require("os")
console.log("os is:",os.cpus().length)