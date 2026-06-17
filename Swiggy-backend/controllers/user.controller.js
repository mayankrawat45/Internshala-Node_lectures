const UserModel = require("../models/user.model.js")
const bcrypt=require("bcrypt")

async function register(req, res) {
    try {
        const { fullName, email, password } = req.body;
        const existingUser=await UserModel.findOne({email});
        if(existingUser){
            return res.status(409).json({message:"user already exists"});
        }
        const user = await UserModel.create({ fullName, email, password: bcrypt.hashSync(password, 10)});
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({"message":"user not created"})
    }
}

async function login(req, res) {
    try {
        const {email,password}=req.body;
        const user=await UserModel.findOne({email});
        if(!user){
            return res.status(400).json({"message":"user not found"})
        }
        const decode=bcrypt.compareSync(password, user.password);
        if(!decode){
            return res.status(404).json({"message":"user credentials invalid"})
        }
        return res.status(200).json({
            user:{
                email:user.email,
                fullName:user.fullName
            }
        })
    } catch (error) {
        return res.status(400).json({"message":"user not authenticated"})
    }
}

module.exports = { register, login }