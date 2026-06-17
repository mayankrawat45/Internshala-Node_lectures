const resturantModel=require('../models/resturant.model.js')

async function fetchRestaurant(req,res){
    let response=await resturantModel.find()  //mongoose method -return promise
    return res.status(200).send(response)
}
async function createRestaurant(req,res){
    const {name,imageUrl,rating,cuisines,deliveryTime}=req.body;
    const response=await resturantModel.create({
        name,imageUrl,rating,cuisines,deliveryTime
    })
    return res.status(200).send(response)
}

module.exports={fetchRestaurant,createRestaurant}