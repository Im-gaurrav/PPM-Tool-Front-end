import axios from 'axios';
import {accessToken,} from "../components/Login";
const Register_URL = 'http://localhost:7171/api/auth/signup';
const AddProject_URL = 'http://localhost:7171/project/create';
class ApiService {
  addUser(u) {
    console.log(u);
    return axios.post(Register_URL, u);
  }
  login(email, password) {
    console.log(email, password);
    return axios.get(
      `http://localhost:7171/api/auth/signin/${email}/${password}`
    );
  }
  addProject(projectDetails,email) {
    let axiosConfig = {
      headers: {
          Authorization: 'Bearer ' + accessToken
      }};
    return axios.post(`http://localhost:7171/project/create/${email}`, projectDetails, axiosConfig);
  }
}

export default new ApiService();