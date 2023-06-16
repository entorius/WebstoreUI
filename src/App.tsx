import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from './components/loginButton/LoginButton';
import LogoutButton from './components/logoutButton/LogoutButton';
import Profile from './components/profile/Profile';
import WebClient from '../src/websocket/webclient';

function App() {
  const [message, setMessage] = useState('You server message here.');
  return (
    <div className="App">
      <WebClient>
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
      </WebClient>
    </div>
  );
}

export default App;
