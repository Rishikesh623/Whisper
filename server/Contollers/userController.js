

const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const createToken = (_id) => {
    //supposed to have a secret key saved to env variable 
    const jwtkey= process.env.JWT_SECRET_KEY;

    return jwt.sign({_id},jwtkey, {expiresIn: "3d"});
}//cretae token

const registerUser = async (req,res) => {
    
    try{
        const {name,email,password} =req.body;
        
        let user = await userModel.findOne({email});
    
        if(user)
            return res.status(400).json("User with given email already exist.");
        
        if(!name || !email || !password)
            return res.status(400).json("All fields are required . . .s");
        
        if(!validator.isEmail(email))
            return res.status(400).json("Invalid email...");
        if(!validator.isStrongPassword(password))
            return res.status(400).json("Weak pass...");
        
        user = new userModel({name,email,password});
    
        //hash the password
        const salt = await bcrypt.genSalt(10);       //uslally by def its of 10 chars
        user.password = await bcrypt.hash(user.password,salt); 
    
        await user.save();
    
        //when registered create token
    
        const token = createToken(user._id);
    
        //send data to client 
        res.status(200).json({_id: user._id,name,email,token});
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);//server not crash
    }
};


const loginUser = async (req,res) => {
    const {email,password} = req.body;

    try{
        let user = await userModel.findOne({email});
        if(!user)
            return res.status(400).json("Invalid email or password.");
        
        const isValidPassword = await bcrypt.compare(password,user.password);
        if(!isValidPassword)
            return res.status(400).json("Invalid email or password.");

        const token = createToken(user._id);
    
        //send data to client/user 
        res.status(200).json({_id: user._id,name : user.name,email,token});

        
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);//server not crash
    }
}


const findUser = async (req,res) => {
    const userId = req.params.userId;
    try{
        const user = await userModel.findById(userId);

        res.status(200).json(user);
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);//server not crash
    }
}
const getUsers = async (req,res) => {
    try{
        const users = await userModel.find();

        res.status(200).json(users);
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);//server not crash
    }
}
module.exports ={ registerUser,loginUser, findUser, getUsers};

//test api using postman