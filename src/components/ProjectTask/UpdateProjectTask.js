import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  getProjectTask,
  updateProjectTask
} from "../../actions/projectTaskActions";

class UpdateProjectTask extends Component {
  constructor(props) {
    super(props);
    const { sid } = this.props.match.params;
    this.state = {
      storyName: "",
      storyStatus: "",
      storyPoints: "",
      storyDescription: "",
      storyPriority: "",
      storyDueDate: "",
    
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    const {  sid, storyName, storyStatus, storyPoints, storyDescription, storyPriority, storyDueDate } = nextProps.project_task.story;
   const {unique_Pid} =nextProps.project_task;
    console.log(unique_Pid);
    this.setState({
      sid: sid,
      storyName: storyName,
      storyStatus: storyStatus,
      storyPoints: storyPoints,
      storyDescription: storyDescription,
      storyPriority: storyPriority,
      storyDueDate: storyDueDate,
      unique_Pid: unique_Pid,
    });
  }

  componentDidMount() {
    const { sid } = this.props.match.params;
    console.log(sid);
    this.props.getProjectTask(sid);

  }

  onSubmit(e) {
    e.preventDefault();
    const updatedTask = {
      storyName: this.state.storyName,
      storyStatus: this.state.storyStatus,
      storyPoints: this.state.storyPoint,
      storyDescription: this.state.storyDescription,
      storyPriority: this.state.storyPriority,
      storyDueDate: this.state.storyDueDate
    };
    console.log(this.state.sid);
    this.props.updateProjectTask(this.state.sid, updatedTask, this.props.history).then(res => {
      this.setState({message : 'Task Updates successfully.'});
      this.props.history.push(`/projectBoard/${this.state.unique_Pid}`);})
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
  
    return (
      <div className="col-md-8 m-auto">
      <Link to={`/projectBoard/${this.setState.unique_pid}`} className="btn btn-light">
      Back to Board
    </Link>
    <h4 className="display-4 text-center">Update Project Task</h4>
    <form >
                <div className="form-group">
                    <label>ID:  {this.state.sid}</label>
                </div>
                <div className="form-group">
                    <label>Task Name:</label>
                    <input type="text" placeholder="Task Name" name="storyName" className="form-control" value={this.state.storyName} onChange={this.onChange} isRequired/>
                </div>

                <div className="form-group">
                    <label>Task Points:</label>
                    <input type="number" placeholder="Task_Points" name="storyPoints" className="form-control" value={this.state.storyPoints} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <input placeholder="Task Description" name="storyDescription" className="form-control" value={this.state.storyDescription} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Task DueDate:</label>
                    <input type="date" placeholder="Task DueDate" name="storyDueDate" className="form-control" value={this.state.storyDueDate} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label for="storyPriority">Choose a Priority: </label>
                  <select  defaultValue="Choose..."  name="storyPriority"
                   value={this.state.storyPriority} onChange={this.onChange}>
              <option>Choose...</option>
              <option>BLOCKER</option>
              <option>CRITICAL</option>
              <option>MAJOR</option>
              <option>MINOR</option>
              </select>
                </div>

              <div className="form-group">
                <label for="storyStatus">Choose a Status: </label>
                  <select as="select" defaultValue="Choose..." name="storyStatus" value={this.state.storyStatus} onChange={this.onChange}>
              <option>Choose...</option>
              <option>TO_DO</option>
              <option>IN_PROGRESS</option>
              <option>DONE</option>
              </select>
                </div>
                
                <button className="btn btn-success" onClick={this.onSubmit}>UPDATE</button>
                <br/>
            </form>
            </div>
            
        )
  }
}

UpdateProjectTask.propTypes = {
  project_task: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getProjectTask: PropTypes.func.isRequired,
  addProjectTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project_task: state.project_task.project_task,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getProjectTask, updateProjectTask }
)(UpdateProjectTask);
