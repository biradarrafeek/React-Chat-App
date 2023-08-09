import React, { useState } from 'react';
import Message from './Message';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showUserList, setShowUserList] = useState(false);

  const emojis = ['😄', '😊', '🥰', '😍', '🤩', '😎', '🤔', '😂', '🥳', '👍'];

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return;
    }

    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessageObj = {
      username: randomUser,
      text: newMessage,
    };

    setMessages([...messages, newMessageObj]);
    setNewMessage('');
    setShowUserList(false);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setNewMessage(inputValue);

    if (inputValue.endsWith('@')) {
      setShowUserList(true);
    } else {
      setShowUserList(false);
    }
  };

  const handleUserClick = (username) => {
    setNewMessage(newMessage + username + ' ');
    setShowUserList(false);
  };

  const handleEmojiClick = (emoji) => {
    setNewMessage(newMessage + emoji + ' ');
  };

  return (
    <div className="chat-box">
      <div className="message-list">
        {messages.map((message, index) => (
          <Message key={index} username={message.username} text={message.text} />
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      {showUserList && (
        <div className="user-list">
          <p>Mention a user:</p>
          <ul>
            {user_list.map((username) => (
              <li key={username} onClick={() => handleUserClick(username)}>
                {username}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="emoji-list">
        {emojis.map((emoji, index) => (
          <span key={index} onClick={() => handleEmojiClick(emoji)}>
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ChatBox;
