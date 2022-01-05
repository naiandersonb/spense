import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
