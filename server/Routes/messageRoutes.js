const express =require('express');
const router = express.Router();
const { createMessage, getMessages }  =  require("../Contollers/messageController")


router.post("/",createMessage);  //instead of writing calback here get it from createChat function
router.get("/:chatId",getMessages);

module.exports = router;