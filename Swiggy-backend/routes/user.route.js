const {register,login}=require('../controllers/user.controller.js')

function userRoutes(app){
    // register
    app.post('/api/register',register)
    // login
    app.post('/api/login',login)
}

module.exports=userRoutes;