// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Specification from './components/Specification';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route path="/specification" component={Specification} />
      </div>
    </Router>
  );
}

export default App;
