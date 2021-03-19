import axios from "axios";
import { GET_PROJECT, GET_PROJECTS, GET_ERRORS, DELETE_PROJECT } from "./types";

export const updateProject = (projectDetails, history) => async (dispatch) => {
  try {
    const res = await axios.put(
      "http://localhost:7171/project/update",
      projectDetails
    );
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const deleteProject = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:7171/project/${id}`);
  dispatch({
    type: DELETE_PROJECT,
    payload: id,
  });
};

export const getProjects = ()=> async dispatch => {
    const res = await axios.get("http://localhost:7171/project/getAllProjects")
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    });
};

export const getProject = (id, history) => async (dispatch) => {
  const res = await axios.get(`http://localhost:7171/project/${id}`);
  dispatch({
    type: GET_PROJECT,
    payload: res.data,
  });
};