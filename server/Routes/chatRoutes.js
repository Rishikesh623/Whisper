const express =require('express');
const router = express.Router();
const { createChat, findUserChats, findChat } =  require("../Contollers/chatController")


router.post("/",createChat);  //instead of writing calback here get it from createChat function
router.get("/:userId",findUserChats);
router.get("/find/:firstId/:secondId",findChat);


module.exports = router;