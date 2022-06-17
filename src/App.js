import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import NavBar from './components/Headers/NavBar/NavBar';
import Home from './components/Home/Home';
import './App.scss';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

const App = () => {
  const scroll = e => {
    window.scrollY()
  }
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/about'>
            <About></About>
          </Route>

          <Route path='/contact'>
            <Contact></Contact>
          </Route>

          <Route path='/projects'>
            <Projects></Projects>
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;