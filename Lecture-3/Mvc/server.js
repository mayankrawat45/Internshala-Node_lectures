const express=require('express')
const blog=require('./routes/Blog')
const app=express();
const PORT=3000;

blog(app)

app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`)
}) 