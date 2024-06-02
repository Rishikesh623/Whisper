const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoutes");
const chatRoute = require("./Routes/chatRoutes");
const messageRoute = require("./Routes/messageRoutes");


const app= express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users",userRoute);
app.use("/api/chats",chatRoute);
app.use("/api/messages",messageRoute);

/*C(app.post) R(app.get) U(app.put) D(app.delete) */

app.get("/", (req,res) => {
  res.send("Welcome to our chat app APIs...");
});






const port = process.env.PORT ||  5000;  //for delpoy get port from online server 
                                //when not avialable
                                
const uri = process.env.ATLAS_URI; //access mongo database 
//create express server
app.listen(port, (req,res) => {
    console.log(`server running on ${port}...`);
})

mongoose.connect(uri,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
    })
    .then(() => console.log("Monog connected .. ") )
    .catch((error) => console.log("Mongo conne failed : ",error.message));