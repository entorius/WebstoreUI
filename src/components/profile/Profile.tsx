import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getPublicResource } from "../../services/messageService";
import { CodeSnippet } from "../CodeSnippet";

const Profile = () => {
  const [message, setMessage] = useState("");
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const { data, error } = await getPublicResource();

      if (!isMounted) {
        return;
      }
      console.log(data)

      if (data) {
        setMessage(JSON.stringify(data, null, 2));
      }

      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(user);
  return (
    <div> {isAuthenticated && (
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      )}
      <CodeSnippet title="Public Message" code={message} />
    </div>
  );
};

export default Profile;