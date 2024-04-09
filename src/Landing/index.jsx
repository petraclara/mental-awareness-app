import React, { useState } from "react";
import "./style.css";
import { colors } from "../theme";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Button from "../components/Button";

function Landing() {
  const navigate = useNavigate();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const chatbotConfig = `
    window.embeddedChatbotConfig = {
      chatbotId: "yCD_qpU8NrZmTJ7HuDmul",
      domain: "www.chatbase.co"
    };
  `;

  return (
    <div style={{ backgroundColor: colors.primary }} className="landing">
      <h2 className="title">A Problem Shared Is A Problem solved</h2>
      <Button onClick={() => navigate("/auth")} title="Get Started" />

      <div
        className="comment"
        style={{ padding: "30px", paddingRight: "40px" }}
        onClick={() => setIsChatbotOpen(!isChatbotOpen)} // Toggle chatbot open/close on click
      >
        <FontAwesomeIcon
          icon={faComment}
          className={isChatbotOpen ? "fa-comment fa-comment-open" : "fa-comment"} // Dynamically add class based on chatbot open state
        />
      </div>

      {isChatbotOpen && (
        <div className="chatbot-container">
          <script
            dangerouslySetInnerHTML={{ __html: chatbotConfig }}
          />
          <script
            src="https://www.chatbase.co/embed.min.js"
            defer
          ></script>
          <style>
            {`
              .chatbot-container {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 16px;
                background-color: #fff0000;
                border-top: 1px solid #ddd;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                z-index: 9999; /* Ensure the chatbot is above other elements */
              }

            `}
          </style>
        </div>
      )}
    </div>
  );
}

export default Landing;
