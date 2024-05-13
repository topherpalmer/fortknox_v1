import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'graphql-tag';

const GET_USER_QUERY = gql`
  query GetUser($token: String!) {
    user(token: $token) {
      id
      name
    }
  }
`;

const App = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);

  const { loading, error, data } = useQuery(GET_USER_QUERY, {
    variables: { token },
  });

  useEffect(() => {
    const tokenFromUrl = new URLSearchParams(window.location.search).get('token');
    setToken(tokenFromUrl);
  }, []);

  useEffect(() => {
    if (data) {
      setUser(data.user);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>Please login</div>;
  }

  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <button onClick={() => {
        // Update the GraphQL script here
      }}>Update GraphQL script</button>
    </div>
  );
};

export default App;