import React, {Component} from 'react';
import './App.css';
import  Dashboard from "./components/Dashboard";
import Header from './components/Header.js';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddProject from "./components/Project/AddProject";
import Register from './components/Register.js';
import Login from './components/Login.js';
import { Provider } from "react-redux";
import store from './store.js';
import UpdateProject from "./components/Project/UpdateProject"
class App extends Component {
    render(){
  return (
    <Provider store={store}>
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
        <Route exact path="/updateProject/:id" component={UpdateProject}></Route>
        
        </Switch>
    </div>
    </Router>
    </Provider>
  );
    }
}

export default App;
