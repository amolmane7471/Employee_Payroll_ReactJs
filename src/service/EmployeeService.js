import axios from 'axios';

class EmployeeService{
    baseUrl ="http://localhost:8081/employeeservice";

    async addEmployee(data) {
        return axios.post(`${this.baseUrl}/create`, data);
    }
}

export default new EmployeeService();