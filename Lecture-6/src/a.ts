// let a=10; //automatically taking type and not allows to change =>inference
// console.log(a);

// a="mayank"; 
// console.log(a);

// ------------------------------------------------------

let a:number=10; //but it is good to give the type already in ts
console.log(a);

a=12; 
console.log(a);
// ------------------------------------------------------   

function greet(name:string){
        console.log(`Hello from ${name}`)
    }
    
    greet("sam")
// ------------------------------------------------------   

// function sum(a:number,b:number):number{
    //     return a+b
    // }
    
    // console.log(sum(23,22))
// ------------------------------------------------------   

// function age(a:number):boolean{
    //     if(a>18){
        //         return true
        //     }else{
            //         return false
            //     }
            
            // }
            
            // let out:boolean=age(20);
            // console.log(out)
            
// ------------------------------------------------------   

// function runAfterSec(fn:()=>void):number{
//     setTimeout(()=>{
//         fn()
//     },1000)
//     return 10;
// }
// function called(){
//     console.log("hey there")
// }
// let out:number=runAfterSec(called)
// ------------------------------------------------------   
// function runAfterSec(fn:()=>number):number{
//     setTimeout(()=>{
//         fn()
//     },1000)
//     return 10;
// }
// function called(){
//     console.log("hey there")
//     return 3;
// }
// let out:number=runAfterSec(called)
// ------------------------------------------------------   

// target use in ts.config.js
// let hello=()=>{
//     console.log("hello")
// }

