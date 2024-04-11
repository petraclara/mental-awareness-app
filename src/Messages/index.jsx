import React, { useEffect, useState } from "react";
import "./message.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Messages() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4040/users");
    socket.onopen = () => {
      console.log("socket open");
    };
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "INITIAL_DATA") {
        console.log(message, "here");
        if (message.data.length > 0 && message.dataType === "USER") {
          setUsers(message.data);
        }
      } else if (message.type === "UPDATE_DATA") {
        if (message.data.length > 0 && message.dataType === "USER") {
          setUsers(message.data);
        }
      }
    };
    console.log(users);
    return () => {
      socket.close();
    };
  }, []);
  return (
    <div
      className="w-screen h-screen bg-[red]"
      style={{ height: "100vh", width: "100vw" }}
    >
      {users?.map((user, index) => {
        return (
          <div
            onClick={async () => {
              const senderId = localStorage.getItem("userId");
              const body = {
                receiverId: user?._id,
                senderId: senderId,
              };
              const res = await axios.post(
                "http://localhost:4000/conversation",
                body
              );
              console.log(res);
              if (res.status === 201) {
                navigate(`/chat/${res.data?.data?._id}/${user?._id}`);
              }
            }}
            key={index}
            className="bg-[red]"
          >
            <p className="text-[black]">{user?.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Messages;
