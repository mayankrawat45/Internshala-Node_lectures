const resturantModel = require('../models/resturant.model.js')

async function fetchRestaurant(req, res) {
    try {
        let response = await resturantModel.find()  //mongoose method -return promise
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({ message: "error while reading the data" })
    }
}
async function createRestaurant(req, res) {
    try {
        const { name, imageUrl, rating, cuisines, deliveryTime } = req.body;
        const response = await resturantModel.create({
            name, imageUrl, rating, cuisines, deliveryTime
        })
        return res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({ message: "error while creating the data" })
    }
}

async function updateRestaurant(req, res) {
    try {
        const id=req.params.id;
        const response = await resturantModel.findByIdAndUpdate(id,req.body,{new:true})
        return res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({ message: "error updating reading the data"})
    }
}

async function deleteRestaurant(req, res) {
    try {
        const {id}=req.params;
        const response = await resturantModel.findOneAndDelete(id)
        return res.status(204).json(response)
    } catch (error) {
        return res.status(500).json({ message: "error while deleting the data" })
    }
}

module.exports = { fetchRestaurant, createRestaurant,updateRestaurant,deleteRestaurant }