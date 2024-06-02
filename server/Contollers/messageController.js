const messageModel = require("../Models/messageModel");

//createmsg
//getmsg 

const createMessage = async (req,res) =>{
    const {chatId,senderId,text}  = req.body;

    try{
        const msg = new messageModel({chatId, senderId, text}) ;

        const response = await msg.save();
        res.status(200).json(response);
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);  //server error
    }
}
const getMessages = async (req,res) =>{
    const {chatId}  = req.params;
    try{
        const messages = await messageModel.find({chatId}); 
        res.status(200).json(messages);
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);  //server error
    }
};

module.exports ={ createMessage, getMessages };