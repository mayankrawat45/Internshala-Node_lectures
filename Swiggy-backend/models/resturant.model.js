const  mongoose =require('mongoose');

const resturantSchema = new mongoose.Schema({
    name:String,
    imageUrl:String,
    rating:Number,
    cuisines:String,
    deliveryTime:String,
});

const resturantModel=mongoose.model("Resturant",resturantSchema)

module.exports=resturantModel;