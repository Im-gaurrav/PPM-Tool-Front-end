import axios from 'axios';
const Register_URL = 'http://localhost:7171/user/register';
const AddProject_URL = 'http://localhost:7171/project/create';

class ApiService {

    addUser(u) {
        return axios.post(Register_URL, u);
    }
    addProject(projectDetails) {
        return axios.post(AddProject_URL, projectDetails);
    }
}

export default new ApiService();