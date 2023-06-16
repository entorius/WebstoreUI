import React, { Component } from 'react';
import Button from '@mui/material/Button';
import LoginButton from '../../components/loginButton/LoginButton';
import LogoutButton from '../../components/logoutButton/LogoutButton';
import { User, useAuth0 } from "@auth0/auth0-react";
import { CodeSnippet } from "../../components/CodeSnippet";

type LoginProps = {
  // using `interface` is also ok
  message: string;
};
type LoginState = {
  count: number; // like this
  isAuthenticated: boolean;
  user: User;
};

class Login extends Component<LoginProps, LoginState> {

  componentDidMount() {
    this.setState({
      ...this.state,
      isAuthenticated: useAuth0().isAuthenticated,
      user: useAuth0()
    })
  }

  constructor(props: LoginProps) {
    super(props);
    this.state = {
      count: 0,
      isAuthenticated: false,
      user: {},};
  }

  render() {
    return (
      <div>
        <LoginButton/>
        <Button variant="contained">Contained</Button>
        <LogoutButton/>
        <div> {this.state.isAuthenticated && (
        <div>
          <img src={this.state.user?.picture} alt={this.state.user?.name} />
          <h2>{this.state.user?.name}</h2>
          <p>{this.state.user?.email}</p>
        </div>
      )}
      <CodeSnippet title="Public Message" code={this.props.message} />
    </div>
      </div>
    );
  }
}

export default Login;