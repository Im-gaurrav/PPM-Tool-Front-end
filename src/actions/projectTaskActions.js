import axios from "axios";
import {
  GET_ERRORS,
  GET_PROJECT_TASKS,
  DELETE_PROJECT_TASK,
  GET_PROJECT_TASK,
} from "./types";
import {accessToken,} from "../components/Login";

export const addProjectTask = (uniquePid, project_task, history) => async (
  dispatch
) => {
  try {
    let axiosConfig = {
      headers: {
          Authorization: 'Bearer ' + accessToken
      }};
    console.log(uniquePid);
    await axios.post(
      `http://localhost:7171/story/add/${uniquePid}`,
      project_task,axiosConfig
    );
    history.push(`/projectBoard/${uniquePid}`);
    dispatch({
      type: GET_ERRORS,
      payload: {},
      uniquePid,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
export const updateProjectTask = (sid, project_task, history) => async (
  dispatch
) => {
  try {
    let axiosConfig = {
      headers: {
          Authorization: 'Bearer ' + accessToken
      }};
    await axios.put(`http://localhost:7171/story/update/${sid}`, project_task,axiosConfig);
    history.push("/projectBoard");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const getBacklog = (id) => async (dispatch) => {
  try {
    let axiosConfig = {
      headers: {
          Authorization: 'Bearer ' + accessToken
      }};
    const res = await axios.get(`http://localhost:7171/story/get/${id}`,axiosConfig);
    dispatch({
      type: GET_PROJECT_TASKS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const deleteProjectTask = (sid) => async (dispatch) => {
  if (
    window.confirm(
      `You are deleting project task ${sid}, this action cannot be undone`
    )
  );
  let axiosConfig = {
    headers: {
        Authorization: 'Bearer ' + accessToken
    }};
    await axios.delete(`http://localhost:7171/story/delete/${sid}`,axiosConfig);
  dispatch({
    type: DELETE_PROJECT_TASK,
    payload: sid,
  });
};

export const getProjectTask = (sid, history) => async (dispatch) => {
  try {
    let axiosConfig = {
      headers: {
          Authorization: 'Bearer ' + accessToken
      }};
    console.log(sid);
    const res = await axios.get(`http://localhost:7171/story/getStory/${sid}`,axiosConfig);
    dispatch({
      type: GET_PROJECT_TASK,
      payload: res.data,
    });
  } catch (error) {
    // history.push("/");
  }
};
