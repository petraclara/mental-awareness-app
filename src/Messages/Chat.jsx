import React, { useEffect, useState } from "react";
import {
  MinChatUiProvider,
  MainContainer,
  MessageInput,
  MessageContainer,
  MessageList,
  MessageHeader,
} from "@minchat/react-chat-ui";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [filteredMsg, setFilteredMsg] = useState([]);
  const [conversationId, setConversationId] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [userId, setUserId] = useState("");
  const pathname = useLocation();
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setUserId(userId);
    const socket = new WebSocket(`ws://localhost:4040`);
    socket.onopen = () => {
      console.log("socket open");
    };
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "INITIAL_DATA") {
        console.log(message, "here");
        if (message.data.length > 0 && message.dataType === "CHAT") {
          setMessages(message.data);
        }
      } else if (message.type === "UPDATE_DATA") {
        if (message.data.length > 0 && message.dataType === "CHAT") {
          setMessages(message.data);
        }
      }
    };
    console.log(messages);
    return () => {
      socket.close();
    };
  }, []);
  useEffect(() => {
    let mess = [];
    messages.forEach((message) => {
      mess.push({
        text: message?.message,
        user: {
          id: message?.sender?._id,
          name: message?.sender?.email,
        },
      });
    });
    setFilteredMsg(mess);
  }, [messages]);
  useEffect(() => {
    setConversationId(pathname.pathname?.split("/")[2]);
    setReceiverId(pathname.pathname?.split("/")[3]);
  }, [pathname]);
  const sendMessage = async (text) => {
    const userId = localStorage.getItem("userId");
    const body = {
      conversationId: conversationId,
      sender: "6617813fbd660fc4f188cf23",
      message: text,
    };
    console.log(body);
    const res = await axios.post("http://localhost:4000/chat", body);
    console.log(res);
    //   if (res.status === 201) {
    //     navigate(`/chat/${res.data?.data?._id}`);
    //   }
  };
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MinChatUiProvider theme="#6ea9d7">
        <MainContainer style={{ height: "100vh" }}>
          <MessageContainer>
            <MessageHeader />
            <MessageList currentUserId={`${userId}`} messages={filteredMsg} />
            <MessageInput
              value={message}
              placeholder="Type message here"
              onSendMessage={(textVal, textContent) => sendMessage(textVal)}
            />
          </MessageContainer>
        </MainContainer>
      </MinChatUiProvider>
    </div>
  );
}
