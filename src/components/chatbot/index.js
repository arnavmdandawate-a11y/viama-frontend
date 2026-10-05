import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! Welcome to Viama Infratech😊!" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const sendMessage = (message) => {
    setMessages((prev) => [...prev, { sender: "user", text: message }]);

    let defaultResponse = "";
    const normalizedMessage = message.toLowerCase().trim();

    switch (true) {
      case ["about", "about us", "about company", "tell me about your company"].some((phrase) =>
        normalizedMessage.includes(phrase)
      ):
        defaultResponse =
          "VIAMA Infratech, incorporated in March 2024, is a young and ambitious construction company that delivers high-quality infrastructure solutions for government projects";
        break;
      case ["verticals", "company verticals", "what are your verticals"].some((phrase) =>
        normalizedMessage.includes(phrase)
      ):
        defaultResponse =
          "Our verticals include Road Construction, Flyover and Bridge Construction, Civil Infrastructure Development, Highway and Expressway Development, Maintenance and Upgradation.";
        break;
      case ["awards", "company awards", "awards of the company", "tell me about awards"].some(
        (phrase) => normalizedMessage.includes(phrase)
      ):
        defaultResponse =
          "We have received several prestigious awards for innovation and customer satisfaction, including the Excellence in Technology Award 2023 and Best Customer Service Award 2022.";
        break;
      case ["contact", "how can i contact you", "company contact"].some((phrase) =>
        normalizedMessage.includes(phrase)
      ):
        defaultResponse =
          "You can reach us at info@viamainfratech.com or call us at 022 - 27582222.";
        break;
      case ["mail", "email", "company mail", "send email"].some((phrase) =>
        normalizedMessage.includes(phrase)
      ):
        defaultResponse =
          "Please send your queries to info@viamainfratech.com. We'll respond promptly!";
        break;
      case ["hi", "hii", "hello"].includes(normalizedMessage):
        defaultResponse = "Hello, How can I help you?";
        break;
      default:
        defaultResponse =
          "Sorry, I didn’t understand that. Can you please try again?";
    }

    setMessages((prev) => [...prev, { sender: "bot", text: defaultResponse }]);
    setUserInput("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && userInput.trim() !== "") {
      sendMessage(userInput.trim());
    }
  };

  const toggleChatbot = () => {
    setIsChatbotVisible((prev) => !prev);
    if (isChatbotVisible) {
      setMessages([{ sender: "bot", text: "Hello! How can I help you today?" }]);
    }
  };

  return (
    <div>
      <button
        className="robot-chat-button"
        onClick={toggleChatbot}
      >
        <FontAwesomeIcon icon={faMessage} size="lg" />
      </button>
      {isChatbotVisible && (
        <div className="chatbot-container">
          <div className="chat-header">Company Chatbot</div>
          <div className="chat-window">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-options">
            <button onClick={() => sendMessage("about")}>About Us</button>
            <button onClick={() => sendMessage("verticals")}>Verticals</button>
            <button onClick={() => sendMessage("awards")}>Awards</button>
            <button onClick={() => sendMessage("contact")}>Contact</button>
            <button onClick={() => sendMessage("mail")}>Mail</button>
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={userInput}
              placeholder="Type your message..."
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={() => userInput.trim() && sendMessage(userInput.trim())}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
