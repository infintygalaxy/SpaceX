import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import Navbar from './components/Navbar';
import PayLoad from './pages/PayLoad';
import Documentation from './pages/Documentation';

function App() {
  return <>
  <Navbar/>
<Router>

 
    <Route path="/" exact><HomePage/></Route>
    <Route path="/payload" exact><PayLoad/></Route>
    <Route path="/documentation" exact><Documentation/></Route>
  
</Router>

  </>
}

export default App;
