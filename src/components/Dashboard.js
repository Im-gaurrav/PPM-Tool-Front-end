import React, {Component} from "react";
import ProjectItems from "./Project/ProjectItems";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import CreateProjectButton from "./Project/CreateProjectButton.js";
import {Jumbotron} from "reactstrap";
import {connect} from "react-redux";
import {getProjects} from "../actions/projectActions.js";
import propTypes from "prop-types";
import {accessToken,} from "./Login";
import { email } from "../components/Login";

class Dashboard extends Component{
   
    constructor(props) {
        super(props);
        const { email } = this.props.match.params;
        this.state = {
          email: email,
      }}
// lifecycle hook
    componentDidMount(){
        // const { email } = this.props.match.params;
        this.props.getProjects(email);
        console.log(accessToken);
        console.log(email);

    }

    render(){

    const {projects} = this.props.project

    return (
<div className="projects">
        <div className="container">
            <Jumbotron>
                <div className="row">
                    <div className="col-md-12">
                    <h1 className="display-4 text-center">Projects</h1>
                        <br/>
                        <Link to={`/addProject/${email}`} className="btn btn-lg btn-info bg-success">
                        Create a Project
                         </Link>
                        <br />
                        <hr />
                        { projects.map(project=> (
                            <ProjectItems key={project.id} project={project} />
                            ))
                        }
                    </div>
                </div>               
            </Jumbotron>
        </div>
</div>
    
    );
    }
}

Dashboard.propTypes = {
    project: propTypes.object.isRequired,
    getProjects: propTypes.func.isRequired
};

const mapStateTOProps = state => ({
    project: state.project

})

export default connect(mapStateTOProps, {getProjects})(Dashboard);