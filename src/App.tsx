import { useEffect } from "react";
import './App.css';
import Profile from './components/profile/Profile';
import Counter from './components/counter/Counter';
import WebClient from '../src/websocket/webclient';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import { Provider } from 'react-redux'
import { store } from './state/store'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { RoutesDestinations } from './routes'


function App() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();

  useEffect(() => {
    // Checking if user is not loggedIn
    if (!isLoading) {
      if (!isAuthenticated) {
        navigate(RoutesDestinations.INITIAL);
      } else {
        const routes : string[] = Object.values(RoutesDestinations);
        if (!routes.includes(location.pathname) || location.pathname === RoutesDestinations.INITIAL) {
          navigate(RoutesDestinations.HOME);
        }
      }
    }
  }, [navigate, isLoading, isAuthenticated]);

  return (
    <div className="App">
      <Provider store={store}>
        <WebClient>
          <Routes>
            <Route path={RoutesDestinations.INITIAL} element={<Login message="mes"/>}/>
            <Route path={RoutesDestinations.PROFILE} element={<Profile />}/>
            <Route path={RoutesDestinations.COUNTER} element={<Counter />}/>
            <Route path={RoutesDestinations.HOME} element={<Main message="mes"/>}/>
          </Routes>
        </WebClient>
      </Provider>
    </div>
  );
}

export default App;
