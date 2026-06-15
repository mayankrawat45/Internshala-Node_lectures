let a=10;
let obj={
    x:20,
    y:function (){
        console.log(this.x)
    }
}

function lol(){
    console.log("lol hu mai")
}

console.log(1)
console.log(2)
console.log(3)

module.exports={a,obj,lol}