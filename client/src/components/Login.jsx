'use client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';


export default function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleJoinChat = () => {
    if (!username.trim()) return;
    localStorage.setItem('username', username.trim());
    navigate('/rooms');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleJoinChat();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2 className="login-title">Welcome to Chat</h2>
          <p className="login-description">
            Enter your name to join the conversation
          </p>
        </div>
        <div className="login-content">
          <input
            className="login-input"
            type="text"
            placeholder="Your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyUp={handleKeyPress}
            autoFocus
          />
          <button
            className="login-button"
            onClick={handleJoinChat}
            disabled={!username.trim()}
          >
            Join Chat
          </button>
        </div>
      </div>
    </div>
  );
}
