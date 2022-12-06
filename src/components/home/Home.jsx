import React from 'react';
import './Home.css'
import addIcon from '../../assets/images/add-24px.svg'
import editIcon from '../../assets/images/create-black-18dp.svg';
import deleteIcon from '../../assets/images/delete-black-18dp.svg';
import EmployeeService from '../../service/EmployeeService';
import profile1 from '../../assets/images/Ellipse -1.png'
import profile3 from '../../assets/images/Ellipse -3.png'
import profile7 from '../../assets/images/Ellipse -7.png'
import profile8 from '../../assets/images/Ellipse -8.png'

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeList: []
        }
    }

  
    fetchData() {
        EmployeeService.getAllEmployees().then((response) => {
            this.setState({ employeeList: response.data.data });
        });
    }

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
                    <a href='/register' className='add-button'>
                    <img src={addIcon} alt="" /> Add User</a>
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
                            this.state.employeeList.map( (employee) => 
                                
                                <tr key={employee.id}>
                                    
                                    <td><img src={employee.profilePic === "../../assets/images/Ellipse -1.png" ? profile1 :
                                                employee.profilePic === "../../assets/images/Ellipse -3.png" ? profile3 :
                                                    employee.profilePic === "../../assets/images/Ellipse -7.png" ? profile7 : profile8
                                            }  alt="ProfilePic" /></td>
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
                                        <img src={deleteIcon} alt="delete"  id={employee.id} 
                                        onClick={() => this.deleteEmployee(employee.employeeId)}/>
                                        <img id={employee.id}  src={editIcon} alt="edit"/>
                                        
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
