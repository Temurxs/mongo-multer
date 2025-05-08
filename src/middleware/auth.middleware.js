const jwt = require("jsonwebtoken")
const { SECRET_KEY_ACCESS_TOKEN } = require("../config/env.variables")

const authMiddleware = (req,res,next) => {
    const token = req.headers["authorization"]?.split(" ")[1]
    try{
       const verifiedToken = jwt.verify( token, SECRET_KEY_ACCESS_TOKEN)
    //    console.log(verifiedToken.id);
       
        next()
    }catch(error){
        res.sendStatus(401)
    }
}

module.exports = {authMiddleware}