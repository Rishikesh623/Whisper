import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { Container, Stack } from "react-bootstrap";

const Chat = () =>{

    const {userChats,isUserChatsLoading,UserChatsError}  = useContext(ChatContext);  
    // console.log(".....",userChats);
    
    return (
        <Container>
            {userChats?.length<1 ? null : 
            
            <Stack direction="horizontal">
            <Stack>List</Stack>
                <p>ChatBOX</p>
            </Stack>}
        </Container>
    );
} 

export default Chat;
