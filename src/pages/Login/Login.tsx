import { Component } from 'react';
import Button from '@mui/material/Button';
import LoginButton from '../../components/loginButton/LoginButton';
import LogoutButton from '../../components/logoutButton/LogoutButton';
import { Auth0ContextInterface, User, withAuth0 } from "@auth0/auth0-react";
import { CodeSnippet } from "../../components/CodeSnippet";

type LoginProps = {
  // using `interface` is also ok
  auth0: Auth0ContextInterface<User>;
  message: string;
};

class Login extends Component<LoginProps> {
  render() {
    const {isAuthenticated, user} = this.props.auth0;
    return (
      <div>
        <LoginButton/>
        <Button variant="contained">Contained</Button>
        <LogoutButton/>
        <div> {isAuthenticated && (
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      )}
      <CodeSnippet title="Public Message" code={this.props.message} />
    </div>
      </div>
    );
  }
}

export default withAuth0(Login);