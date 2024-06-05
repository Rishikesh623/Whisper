import { useContext } from "react";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import { Stack } from "react-bootstrap";
import avatar from "../../assets/avatar.svg";
import { ChatContext } from "../../context/ChatContext"

const UserChat = ({chat,user}) => {

    const {recipientUser,} = useFetchRecipientUser(chat,user);
    const {onlineUsers} = useContext(ChatContext);

    const isOnline = onlineUsers?.some((user) => user?.userId === recipientUser?._id );
    // console.log(recipientUser); details of other user

    return (
        <Stack direction="horizontal" gap="3"  role="button"
            className="user-card align-items-center p-2 justify-content-between">
            <div className="d-flex">
                <div className="me-2">
                    <img src={avatar} height="35px"></img>
                </div>
                <div className="text-content">
                    <div className="name">{recipientUser?.name}</div>
                    <div className="text">Text messages</div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-end">
                <div className="date">
                    12/12/12
                </div>
                <div className="this-user-notifications">4</div>
                <span className={ isOnline ? "user-online" : "" } ></span>
            </div>
       </Stack>
    );
}
export default UserChat;