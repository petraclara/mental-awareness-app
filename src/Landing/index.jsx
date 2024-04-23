import React, { useEffect } from "react";
import "./style.css";
import { colors } from "../theme";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    // Define the chatbot configuration
    window.embeddedChatbotConfig = {
      chatbotId: "o1CIXZvDfXE6OIaAmEc3U",
      domain: "www.chatbase.co"
    };

    // Create a script element and set its attributes
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://www.chatbase.co/embed.min.js";
    scriptElement.defer = true;

    // Append the script element to the document body
    document.body.appendChild(scriptElement);

    // Clean up: remove the script element when the component unmounts
    return () => {
      document.body.removeChild(scriptElement);
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="landing-container" style={{ backgroundColor: colors.primary }}>
      <div className="landing-content" >
        <h2 className="title">A Problem Shared Is A Problem Half Solved</h2>
        <Button onClick={() => navigate("/auth")} title="Get Started" />
      </div>
      <div className="image-container">
        <img src="src/assets/mindgrowth.png" alt="Mind Growth" className="image" />
      </div>
    </div>
  );
}

export default Landing;
