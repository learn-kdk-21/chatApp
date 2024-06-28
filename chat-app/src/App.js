import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [user, setUser] = useState("user1");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (inputMessage.trim() != "") {
      let newMessage = {};
      if (user == "user1") {
        newMessage = {
          id: messages.length + 1,
          text: inputMessage,
          timestamp: new Date().toISOString(),
          sender: "user1",
        };
        setUser("user2");
      } else {
        newMessage = {
          id: messages.length + 1,
          text: inputMessage,
          timestamp: new Date().toISOString(),
          sender: "user2",
        };
        setUser("user1");
      }
      setMessages([...messages, newMessage]);
      setInputMessage("");
    }

    console.log(messages);
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message) => {
          return (
            <div
              key={message.id}
              className={`message ${
                message.sender === "user1" ? "sent" : "received"
              }`}
            >
              <p className="message-sender">{message.sender}</p>
              <p className="message-text">{message.text}</p>
              <p className="message-timestamp">{message.timestamp}</p>
            </div>
          );
        })}
      </div>
      <div className="input-container">
        <input
          type="text"
          className="message-input"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        ></input>
        <button className="send-button" onClick={() => sendMessage()}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
