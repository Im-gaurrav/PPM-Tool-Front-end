import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProjectTask } from "../../actions/projectTaskActions";

class AddProjectTask extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    this.state = {
      storyName: "",
      storyStatus: "",
      storyPoints: "",
      storyDescription: "",
      storyPriority: "",
      storyDueDate: "",
      uniquePid: id,
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newProjectTask = {
      storyName: this.state.storyName,
      storyStatus: this.state.storyStatus,
      story_points: this.state.Story_Points,
      storyDescription: this.state.storyDescription,
      storyPriority: this.state.storyPriority,
      storyDueDate: this.state.storyDueDate,
    };
    // console.log(newProjectTask);
    this.props
      .addProjectTask(this.state.uniquePid,newProjectTask, this.props.history)
      .then((res) => {
        this.setState({ message: "Task added successfully." });
        this.props.history.push(`/projectBoard/${this.state.uniquePid}`);
      });
  }

  render() {
    const { id } = this.props.match.params;

    return (
      <div className="col-md-8 m-auto">
        <Link to={`/projectBoard/${id}`} className="btn btn-light">
          Back to Project Board
        </Link>
        <h4 className="display-4 text-center">Add Project Task</h4>
        <form action="/TaskBoard">
          <div className="form-group">
            <label>Task Name:</label>
            <input
              type="text"
              placeholder="Task_Name"
              name="storyName"
              className="form-control"
              value={this.state.storyName}
              onChange={this.onChange}
              isRequired
            />
          </div>

          <div className="form-group">
            <label>Task Points:</label>
            <input
              type="number"
              placeholder="Task_Points"
              name="storyPoints"
              className="form-control"
              value={this.state.storyPoints}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Description:</label>
            <input
              placeholder="Task Description"
              name="storyDescription"
              className="form-control"
              value={this.state.storyDescription}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Task DueDate:</label>
            <input
              type="date"
              placeholder="Task DueDate"
              name="storyDueDate"
              className="form-control"
              value={this.state.storyDueDate}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label for="storyPriority">Choose a Priority: </label>
            <select
              defaultValue="Choose..."
              name="storyPriority"
              value={this.state.storyPriority}
              onChange={this.onChange}
            >
              <option>Choose Priority</option>
              <option>BLOCKER</option>
              <option>CRITICAL</option>
              <option>MAJOR</option>
              <option>MINOR</option>
            </select>
          </div>

          <div className="form-group">
            <label for="storyStatus">Choose a Stutus: </label>
            <select
              as="select"
              defaultValue="Choose..."
              name="storyStatus"
              value={this.state.storyStatus}
              onChange={this.onChange}
            >
              <option>Choose...</option>
              <option>TO_DO</option>
              <option>IN_PROGRESS</option>
              <option>DONE</option>
            </select>
          </div>

          <button className="btn btn-success" onClick={this.onSubmit}>
            ADD TASK
          </button>
        </form>
      </div>
    );
  }
}

AddProjectTask.propTypes = {
  addProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  addProjectTask: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, { addProjectTask })(AddProjectTask);
