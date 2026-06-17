const express = require('express');
const app = express()
const port = 3000;
const mongoose = require('mongoose');
const resturantRoutes=require('./routes/resturant.route')
const userRoutes=require('./routes/user.route.js')

mongoose.connect('mongodb+srv://rmayank6307178081_db_user:mayank451@cluster0.euylzdt.mongodb.net/?appName=Cluster0')
.then(()=>console.log('Db is connected'))
.catch(()=>console.log('Db is not connected'))

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

resturantRoutes(app);
userRoutes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

