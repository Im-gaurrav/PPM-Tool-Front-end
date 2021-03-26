import axios from "axios";
import { GET_PROJECT, GET_PROJECTS, GET_ERRORS, DELETE_PROJECT } from "./types";
import { accessToken } from "../components/Login";



export const updateProject = (projectDetails, history) => async (dispatch) => {
  try {
    let axiosConfig = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    await axios.put(
      "http://localhost:7171/project/update",
      projectDetails,
      axiosConfig
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
  let axiosConfig = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };
  await axios.delete(`http://localhost:7171/project/${id}`, axiosConfig);
  dispatch({
    type: DELETE_PROJECT,
    payload: id,
  });
};

export const getProjects = (email) => async (dispatch) => {
  console.log(accessToken);
  let axiosConfig = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };
  const res = await axios.get(
    `http://localhost:7171/project/getUserProjects/${email}`,
    axiosConfig
  );
  dispatch({
    type: GET_PROJECTS,
    payload: res.data,
  });
};

export const getProject = (uniquePid, history) => async (dispatch) => {
  let axiosConfig = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };
  const res = await axios.get(
    `http://localhost:7171/project/${uniquePid}`,
    axiosConfig
  );
  dispatch({
    type: GET_PROJECT,
    payload: res.data,
  });
};