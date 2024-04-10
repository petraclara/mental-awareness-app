import React, { useEffect, useState } from "react";
import "./message.css";

function Messages() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4040/users");
    socket.onopen = () => {
      console.log("socket open");
    };
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "INITIAL_DATA") {
        setUsers(message.data);
      } else if (message.type === "UPDATE_DATA") {
        setUsers(message.data);
      }
    };
    console.log(users);
    return () => {
      socket.close();
    };
  }, []);
  return (
    <div className="w-screen h-screen bg-[red]" style={{ height: "100vh" }}>
      {users?.map((user, index) => {
        return (
          <div key={index} className="bg-[red]">
            <p className="text-[black]">{user?.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Messages;
