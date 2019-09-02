import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const App = () => (
  <div>
    Inside React App (rendered with SSR)
    <Route
      path="/"
      exact
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.status = 301;
        }
        return (
          <Redirect to="/home" />
        );
      }}
    />
    <Route
      path="/home"
      render={
        () => <div>Inside Home Route at path /home</div>
      }
    />
  </div>
);

export default App;
