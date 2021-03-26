import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import { getProject, updateProject } from "../../actions/projectActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { email } from "../Login";
class UpdateProject extends Component {
  //set state
  constructor() {
    super();
    this.state = {
      pid: "",
      projectName: "",
      uniquePid: "",
      projectDescription: "",
      projectStartDate: "",
      projectEndDate: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //lifecycle hooks

  componentWillReceiveProps(nextProps) {
    const {
      pid,
      projectName,
      uniquePid,
      projectDescription,
      projectStartDate,
      projectEndDate,
    } = nextProps.project;

    this.setState({
      pid,
      projectName,
      uniquePid,
      projectDescription,
      projectStartDate,
      projectEndDate,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const updateProject = {
      pid: this.state.pid,
      projectName: this.state.projectName,
      uniquePid: this.state.uniquePid,
      projectDescription: this.state.projectDescription,
      projectStartDate: this.state.projectStartDate,
      projectEndDate: this.state.projectEndDate,
    };
    this.props.updateProject(updateProject, this.props.history).then((res) => {
      this.setState({ message: "Project Updates successfully." });
      this.props.history.push(`/dashboard/${email}`);
      console.log(email);
    });
  }

  render() {
    return (
      <div className="project">
        <div className="container">
          <Jumbotron>
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Update Project form</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      name="projectName"
                      placeholder="Project Name"
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Unique Project ID"
                      name="uniquePid"
                      value={this.state.uniquePid}
                      onChange={this.onChange}
                      disabled
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Project Description"
                      name="projectDescription"
                      value={this.state.projectDescription}
                      onChange={this.onChange}
                    ></textarea>
                  </div>
                  <h6>Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="projectStartDate"
                      value={this.state.projectStartDate}
                      onChange={this.onChange}
                    />
                  </div>
                  <h6>Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="projectEndDate"
                      value={this.state.projectEndDate}
                      onChange={this.onChange}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveProject}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,

  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project.project,
});

export default connect(mapStateToProps, { getProject, updateProject })(
  UpdateProject
);