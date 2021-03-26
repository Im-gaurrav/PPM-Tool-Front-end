import React, {Component} from 'react';
import './App.css';
import  Dashboard from "./components/Dashboard";
import Header from './components/Header.js';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddProject from "./components/Project/AddProject";
import Register from './components/Register.js';
import Login from './components/Login';
import { Provider } from "react-redux";
import store from './store.js';
import UpdateProject from "./components/Project/UpdateProject";
import ProjectBoard from "./components/ProjectBoard";
import AddProjectTask from './components/ProjectTask/AddProjectTask';
import UpdateProjectTask from './components/ProjectTask/UpdateProjectTask';
class App extends Component {
    render(){
  return (
    <Provider store={store}>
    <Router> 
    <div className="App">
     <Header />
    <h1 align="center">Welcome to the Project Management Tool!</h1>
        <Switch>

        {/* public paths */}

        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        {/* private paths */}

        
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/dashboard/:email" component={Dashboard}></Route>
        <Route exact path="/addProject/:email" component={AddProject}></Route>
        <Route exact path="/updateProject/:id" component={UpdateProject}></Route>
        <Route exact path="/projectBoard/:id" component={ProjectBoard}></Route>
        <Route exact path="/addProjectTask/:id" component={AddProjectTask}></Route>
        <Route exact path="/updateProjectTask/:sid" component={UpdateProjectTask}></Route>
            
        </Switch>
    </div>
    </Router>
    </Provider>
  );
    }
}

export default App;
