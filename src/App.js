import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routers from './router';

function App() {
  return (
    <Router>
      {routers.map((page) => (
        <Route
          exact
          key={page.path}
          path={page.path}
          component={page.component}
        />
      ))}
    </Router>
  );
}

export default App;