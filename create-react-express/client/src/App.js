import React, { Component } from 'react'; 
import { Route } from "react-router-dom";
import './App.css'; 
// import { Button } from 'react-bootstrap';
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

class App extends Component { 
  render() { 
    return (
<div className="App">
  < Route exact path="/" component={ Register } />
  < Route exact path="/register" component={ Register } />
  < Route exact path="/login" component={ Login } />
  < Route exact path="/home" component={ Home } />
 
</div>
    ); } } export default App;