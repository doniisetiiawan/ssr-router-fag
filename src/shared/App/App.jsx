import React from 'react';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    Inside React App (rendered with SSR)
    <Route
      exact
      path="/"
      render={() => <div>Inside Route at path /</div>}
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
