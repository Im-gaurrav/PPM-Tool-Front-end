import React, {Component} from 'react';
import './App.css';
import  Dashboard from "./components/Dashboard";
import Header from './components/Header.js';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddProject from "./components/AddProject";
import Page7 from "./components/Project/Page7";
import Register from './components/Register.js';
import Login from './components/Login.js';
class App extends Component {
    render(){
  return (
    <Router> 
    <div className="App">
     <Header />
        <Switch>

        {/* public paths */}

        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        {/* private paths */}

        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/addProject" component={AddProject}></Route>
        <Route exact path="/page7" component={Page7}></Route>
        
        </Switch>
    </div>
    </Router>
  );
    }
}

export default App;
