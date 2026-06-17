const {fetchRestaurant,createRestaurant,updateRestaurant,deleteRestaurant}=require('../controllers/resturant.controller.js')

function resturantRoutes(app){
    // read
    app.get('/api/restaurants',fetchRestaurant)
    // create
    app.post('/api/restaurants',createRestaurant)
    // update
    app.put('/api/restaurants/:id',updateRestaurant)
    // delete
    app.delete('/api/restaurants/:id',deleteRestaurant)
}

module.exports=resturantRoutes