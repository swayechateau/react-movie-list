import React from 'react';
import Main from './components/pages/Home';
import Movie from './components/pages/Movie';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App dark">
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/:movieId" component={Movie} />
      </Router>
    </div>
  );
}

export default App;
