import React, {Component} from "react";
import ProjectItems from "./Project/ProjectItems";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateProjectButton from "./Project/CreateProjectButton.js";
import {Jumbotron} from "reactstrap";
import {connect} from "react-redux";
import {getProjects} from "../actions/projectActions.js";
import propTypes from "prop-types";

class Dashboard extends Component{

// lifecycle hook
    componentDidMount(){
        this.props.getProjects();
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
                        <br />
                        <CreateProjectButton />
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