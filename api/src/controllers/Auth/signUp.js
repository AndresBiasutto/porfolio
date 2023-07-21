const User= require("../../models/User")
const jwt = require("jsonwebtoken")

const signUp= async (username, email,password,roles)=>{
    const newUser=new User ({
        username,
        email,
        password: await User.encriptPassword(password)
    })
    const savedUser= newUser.save(newUser)
return newUser
}

module.exports=signUp