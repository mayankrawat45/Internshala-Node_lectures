const {fetchRestaurant,createRestaurant}=require('../controllers/resturant.controller.js')

function resturantRoutes(app){
    // read
    app.get('/api/restaurants',fetchRestaurant)
    app.post('/api/restaurants',createRestaurant)
}

module.exports=resturantRoutes