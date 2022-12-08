import React from 'react';
import './Home.css'
import editIcon from '../../assets/images/create-black-18dp.svg';
import deleteIcon from '../../assets/images/delete-black-18dp.svg';
import EmployeeService from '../../service/EmployeeService';
import { Button } from '@mui/material';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeList: []
        }
    }

    updateEmployee = (employeeId) => {
        console.log("update id : "+ employeeId);
        this.props.history.push('register/',{employeeId})
    };

    fetchData() {
        EmployeeService.getAllEmployees().then((response) => {
            this.setState({ employeeList: response.data.data });
        });
    }

    /**
     * componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)
     * componentDidMount() method is called during the Mounting phase of the 
     * React Life-cycle i.e after the component is rendered
     */
    componentDidMount() {
        this.fetchData();
    }



    render() {
        return (
            
            <div className="main-content">
                <div className="header-content">
                    <div className="emp-detail-text">
                        Employee Details<div className="emp-count">{this.state.employeeList.length}</div>
                    </div>
                    <a href='/register' style={{textDecoration:'none'}}>
                    <Button variant='contained' color='success' className='add-button' alt=""> + Add User</Button></a>
                </div>
                <div className="table-main">
                    <table id="table-display" className="table">
                        
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Start Date</th>
                            <th>Notes</th>
                            <th>Actions</th>
                        </tr>
                        
                        {
                                /* map hold key value pairs, creates new array from calling 
                                        a function for every array element
                                        map() calls a function once for each element in an array */
                            
                                this.state.employeeList.map( (employee) => 
                                
                                <tr key={employee.id}>
                                    
                                    <td><img src={employee.profilePic}  alt="ProfilePic" /></td>
                                    <td>{employee.name}</td>
                                    <td>{employee.gender}</td>
                                    <td>
                                    
                                        {employee.department.map(dept =>
                                            <div className="dept-label" id="dept"> {dept} </div>
                                        )}
                                    </td>
                                    
                                    <td>{employee.salary}</td>
									<td>{employee.startDate}</td>
                                    <td>{employee.note} </td>
                                    <td>
    
                                        <img src={deleteIcon} alt="delete"  id={employee.id} onClick={() => this.deleteEmployee(employee.employeeId)}/>
                                        <img id={employee.id} onClick={() => this.updateEmployee(employee.employeeId)} src={editIcon} alt="edit"/>
                                        
                                    </td>

                                </tr>    
                            )
                        }
                        
                    </table>
                                    
                </div>
            </div>
        );
    }
}

export default Home;
