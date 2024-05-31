const express =require('express');
const {registerUser, loginUser , findUser, getUsers} = require("../Contollers/userController");

const router = express.Router();

router.post("/register",registerUser);  //instead of writing calback here get it from registerUser function
router.post("/login",loginUser);
router.get("/find/:userId",findUser);
router.get("/",getUsers);

module.exports = router;