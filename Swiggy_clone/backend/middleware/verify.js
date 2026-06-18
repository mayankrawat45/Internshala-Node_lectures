var jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');
function verify(req, res, next) {
    if (
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === "JWT"
    ) {
        jwt.verify(
            req.headers.authorization.split(' ')[1],
            'shhhhh',
            async function (err, decoded) {
              if(err){
                return res.status(400).json({message:"Invalid JWT token"})
              }
            // console.log(decoded)
            let foundUser=await UserModel.findById(decoded.id);
            req.user=foundUser;
            next();
        });
    }else{
        return res.status(400).json({message:"Token not found"})
    }
}

module.exports = verify;