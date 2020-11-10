import React, { Component } from 'react';
import Navbar from './cmp/Navbar';
import Landing from './cmp/Landing';
import Login from './cmp/Login';
import Register from './cmp/Register';
import Profile from './cmp/Profile';
import AddItem from './cmp/AddItem'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component{
        render(){
            return(
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <div className="container">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/addItem" component={AddItem} />
                    </div>
                </div>
            </Router>
            );
        }
}

export default App;
