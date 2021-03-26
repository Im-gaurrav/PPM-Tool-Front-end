import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProjectTask } from "../../actions/projectTaskActions";

class ProjectTaskItem extends Component {
  onDeleteClick(sid) {
    this.props.deleteProjectTask(sid);
  }
  
  render() {
    const { project_task } = this.props;
    return (
      <div className="card mb-1 bg-light">
        <div className="card-header text-primary">ID: {project_task.story.sid}</div>
        <div className="card-body bg-light">
          <h5 className="card-title">Task Name: {project_task.story.storyName}</h5>
          <p className="card-text text-truncate ">Priority: {project_task.story.storyPriority}</p>
          <Link
            to={`/updateProjectTask/${project_task.story.sid}`}
            className="btn btn-primary"
          >
            View / Update
          </Link>

          <button
            className="btn btn-danger ml-4"
            onClick={this.onDeleteClick.bind(this, project_task.story.sid)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

ProjectTaskItem.propTypes = {
  deleteProjectTask: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteProjectTask }
)(ProjectTaskItem);
