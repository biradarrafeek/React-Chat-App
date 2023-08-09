import React, { useState } from 'react';

const Message = ({ username, text }) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="message">
      <span className="username">{username}</span>
      <p>{text}</p>
      <button className="like-button" onClick={handleLike}>
        Like ({likeCount})
      </button>
    </div>
  );
};

export default Message;
