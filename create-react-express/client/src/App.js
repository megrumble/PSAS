import React, { Component } from 'react'; 
import { Route } from "react-router-dom";
import './App.css'; 
// import { Button } from 'react-bootstrap';
import Register from "./pages/register/Register";
import Account from "./pages/account/Account";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Team from "./pages/team/Team";
class App extends Component { 
  render() { 
    return (
<div className="App">
  < Route exact path="/" component={ Register } />
  < Route exact path="/register" component={ Register } />
  < Route exact path="/account" component={ Account } />
  < Route exact path="/home" component={ Home } />
  < Route exact path="/login" component={ Login } />
  < Route exact path="/team" component={ Team } />
</div>
    ); } } export default App;