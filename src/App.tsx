import React, { useState } from 'react';
import './App.css';
import LoginButton from './components/loginButton/LoginButton';
import LogoutButton from './components/logoutButton/LogoutButton';
import Profile from './components/profile/Profile';
import Counter from './components/counter/Counter';
import WebClient from '../src/websocket/webclient';
import { Provider } from 'react-redux'
import { store } from './state/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <WebClient>
          <LoginButton/>
          <LogoutButton/>
          <Profile/>
          <Counter/>
        </WebClient>
      </Provider>
    </div>
  );
}

export default App;
