const bcrypt= require("bcrypt");
let User = require('../models/userModelSchema');

// User Siginup API

const userSighup = async (req,res)=>{
    console.log('data **',req.body);
    const {email,password} = req.body;

    const userData =  new User(req.body);
    try{
        const isUserExists = await User.findOne({email:email});
        if (isUserExists){
            return res.status(409).json({
                status : false,
                Error : "Email already exist",
            });
        }
        const salt = await bcrypt.genSalt(10);
        userData.password = await bcrypt.hash(password,salt);
        await userData.save();
        return res.status(201).json({
            success: true,
            message: "Registration Successfully",
        });
    } catch(err){
        res.status(500).json({
            status : false,
            error : err.message
        })
    }
}

module.exports={
    userSighup,
}