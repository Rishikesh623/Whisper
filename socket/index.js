const { Server } = require("socket.io");

const io = new Server({
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});


let onlineUsers = [];

io.on("connection", (socket) => {
    console.log("Socket conn",socket.id);

    //onlne users -- unique socket i d
    // listen to event/connection from client (fire this eveny from client )
    socket.on("addNewUser", (userId) => {
        !onlineUsers.some(user => user.userId === userId)
        && 
        onlineUsers.push({
            userId,
            socketId: socket.id
        });
        console.log("onlineUsers",onlineUsers);
    
        io.emit("getOnlineUsers",onlineUsers);//send it to client
    });
    //add msg
    socket.on("sendMessage",(message) => {
        const user = onlineUsers.find(user => user.userId === message.recipientId );

        if(user){
            //snd private msg
            io.to(user.socketId).emit("getMessage",message);
            io.to(user.socketId).emit("getNotification",{
                senderId: message.senderId,
                isRead : false,
                date: new Date(),
            });
        }
    })
    //update online users array on disconnetct that is when go offline from online 
    socket.on("disconnect", () => {
        onlineUsers = onlineUsers.filter(user => user.socketId !== socket.id)
        io.emit("getOnlineUsers",onlineUsers);//send it to client
    })
});

io.listen(4000);