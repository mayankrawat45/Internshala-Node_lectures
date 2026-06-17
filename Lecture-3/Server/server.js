const express=require('express')
const app=express();
const PORT=3000;


app.get('/',(req,res)=>{
    res.send('hello ji')
})

app.get('/jobs',(req,res)=>{
    res.send("too many jobs")
})

app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`)
}) 