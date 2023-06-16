import { useEffect, useState } from "react";
import './App.css';
import Profile from './components/profile/Profile';
import Counter from './components/counter/Counter';
import WebClient from '../src/websocket/webclient';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import { Provider } from 'react-redux'
import { store } from './state/store'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    // Checking if user is not loggedIn
    console.log(isAuthenticated);
    if (!isAuthenticated) {
      navigate("/");
    } else {
      navigate("/main");
      console.log("navigate");
    }
  }, [navigate, user]);

  return (
    <div className="App">
      <Provider store={store}>
        <WebClient>
          <Routes>
            <Route path="/" element={<Login message="mes"/>}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/counter" element={<Counter />}/>
            <Route path="/main" element={<Main message="mes"/>}/>

          </Routes>
        </WebClient>
      </Provider>
    </div>
  );
}

export default App;
