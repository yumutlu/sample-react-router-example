import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Help from './pages/Help'
import Home from './pages/Home'
import Comment from './pages/Comment'
import CommentsList from './pages/CommentsList'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/help'>
          <Help />
        </Route>
        <Route path='/comments-list'>
          <CommentsList />
        </Route>
        <Route path='/comment/:id'>
          <Comment />
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
