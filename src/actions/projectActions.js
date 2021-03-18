import axios from "axios";
import { GET_PROJECTS } from "./types";

export const getProjects = ()=> async dispatch => {
    const res = await axios.get("http://localhost:7171/project/getAllProjects")
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    });
};