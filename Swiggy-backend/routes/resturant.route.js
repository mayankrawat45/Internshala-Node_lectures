const  verify  = require('../middleware/verify.js')
const {fetchRestaurant,createRestaurant,updateRestaurant,deleteRestaurant}=require('../controllers/resturant.controller.js')

function resturantRoutes(app){
    // read
    app.get('/api/restaurants',verify,fetchRestaurant)
    // create
    app.post('/api/restaurants',verify,createRestaurant)
    // update
    app.put('/api/restaurants/:id',verify,updateRestaurant)
    // delete
    app.delete('/api/restaurants/:id',verify,deleteRestaurant)
}

module.exports=resturantRoutes;