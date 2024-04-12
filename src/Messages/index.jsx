import React, { useEffect, useState } from "react";
import "./message.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/icons/avatar.png";

function Messages() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
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
  useEffect(() => {
    const emailUser = localStorage.getItem("email");
    setEmail(emailUser);
  });
  return (
    <div className="w-screen h-screen">
      <div className="mt-20">
        {users?.map((user, index) => {
          return (
            <>
              {email !== user?.email && (
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
                  className="bg-[#E6ECFF] cursor-pointer m-4 p-6 flex flex-row items-center justify-start"
                >
                  <div>
                    <img src={avatar} className="w-20 h-20" alt="" />
                  </div>
                  <div className="ml-10">
                    <p className="text-[black] font-semibold text-xl">
                      {user?.email}
                    </p>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Messages;
