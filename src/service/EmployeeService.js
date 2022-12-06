import axios from 'axios';

class EmployeeService{
    baseUrl ="http://localhost:8081/employeeservice";

    addEmployee(data) {
        return axios.post(`${this.baseUrl}/create`, data);
    }

    getAllEmployees() {
        return axios.get(`${this.baseUrl}/get`);
    }

    getEmployeeById(employeeId) {
        return axios.get(`${this.baseUrl}/get/${employeeId}`);
    }


    deleteEmployee(employeeId) {
        return axios.delete(`${this.baseUrl}/delete/${employeeId}`);
      }

}

export default new EmployeeService();