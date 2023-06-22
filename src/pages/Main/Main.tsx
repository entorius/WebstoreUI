import { Component } from 'react';
import Button from '@mui/material/Button';
import LogoutButton from '../../components/logoutButton/LogoutButton';
import { Auth0ContextInterface, User} from "@auth0/auth0-react";
import { CodeSnippet } from "../../components/CodeSnippet";
import { withAuth0 } from '@auth0/auth0-react';

type MainProps = {
  // using `interface` is also ok
  auth0: Auth0ContextInterface<User>;
  message: string;
};

class Main extends Component<MainProps> {

  render() {
    const {isAuthenticated, user} = this.props.auth0;
    return (
      <div>
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

export default withAuth0(Main);