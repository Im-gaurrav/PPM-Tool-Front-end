import React, {Component} from 'react';
import {Jumbotron} from "reactstrap";
import ApiService from "../services/ApiService";

class AddProject extends Component {
constructor(props){
        super(props);
        this.state ={
            projectName: '',
            projectDescription: '',
            projectStartDate: '',
            projectEndDate: ''
        }
        this.saveProject = this.saveProject.bind(this);
    }

    saveProject = (p) => {
        p.preventDefault();
        let projectDetails = {projectName: this.state.projectName, projectDescription: this.state.projectDescription, projectStartDate: this.state.projectStartDate, projectEndDate: this.state.projectEndDate};
        ApiService.addProject(projectDetails)
            .then(res => {
                this.setState({message : 'Project added successfully.'});
                this.props.history.push('/dashboard');
        console.log(projectDetails);
            });
    }
    onChange = (p) =>
        this.setState({ [p.target.name]: p.target.value });
    render() {
        return(
            <div className="register">
        <div className="container">
        <Jumbotron>
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create / Edit Project form</h5>
                    <hr />
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg " name="projectName" placeholder="Project Name" value={this.state.projectName} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Unique Project ID"
                                disabled />
                        </div>
                        
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" placeholder="Project Description" name="projectDescription" value={this.state.projectDescription} onChange={this.onChange}></textarea>
                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="projectStartDate" value={this.state.projectStartDate} onChange={this.onChange}/>
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="projectEndDate" value={this.state.projectEndDate} onChange={this.onChange}/>
                        </div>

                        <button className="btn btn-success" onClick={this.saveProject}>Submit</button>

                    </form>
                </div>
            </div>
            </Jumbotron>
        </div>
    </div>

        )
    }
}

export default AddProject;