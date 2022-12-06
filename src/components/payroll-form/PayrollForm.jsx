import React from 'react';
import './PayrollForm.css'
import profile1 from '../../assets/images/Ellipse -1.png'
import profile3 from '../../assets/images/Ellipse -3.png'
import profile7 from '../../assets/images/Ellipse -7.png'
import profile8 from '../../assets/images/Ellipse -8.png'
import EmployeeService from '../../service/EmployeeService';

class PayrollForm extends React.Component {

    allDepartment = ["HR", "Sales", "Finance", "Engineer", "Others"];

    constructor(props){
        super(props);
        
        this.state = {
            name:"",
            profilePic:"",
            gender:"",
            department: [],
            salary: "400000",
            startDate: "",
            notes: "",
            day:"",
            month:"",
            year:""
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        let empObject = {
            name : this.state.name,
            profilePic : this.state.profilePic,
            gender : this.state.gender,
            department : this.state.department,
            salary : this.state.salary,
            startDate : `${this.state.day} ${this.state.month} ${this.state.year}`,
            note : this.state.notes,            
        } 
        
        console.log("Employee object "+ empObject)
        
        EmployeeService.addEmployee(empObject).then( data =>{

            console.log("Data Added successfully!");

            alert('Employee '+ this.state.name +' added successfully!!!')

        }).catch(() =>{
            console.log("Data Can't be added!");

            alert(' Error!! Please Enter Valid Data ')
        })
        
       
    }

    onValueChange = (event) => {
        const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        if( event.target.name === "name"){
            if(nameRegex.test(event.target.value)){
                this.setState({
                    nameError:''
                })    
            }else{
                this.setState({
                    nameError:"Invalid name"
                })
            }
        }
        
        this.setState({
            [event.target.name] : event.target.value 
        });
        this.setState({
            "startDate":`${this.state.day} ${this.state.month} ${this.state.year}`,
        });
        console.log('value for', [event.target.name] , event.target.value);
        
    }

    onCheckboxChange = (event) =>{
        let deptArray = [...this.state.department]
        if(event.target.checked){
            deptArray.push(event.target.value);
        }else{
            let index = deptArray.indexOf(event.target.value);
            deptArray.splice(index,1);
        }
     
        this.setState({
            department : deptArray,
        })
    }

    onReset = (event) => {
        this.setState({
            name:"",
            profilePic:"",
            gender:"",
            department: [],
            salary: "400000",
            startDate: "",
            notes: "",
            day:"",
            month:"",
            year:""
        })
    }

    render() {
        return (
            
            <div>   
                             
                <div className="form-content">
                  
                <form className="form" action="" onSubmit={this.onSubmit} onReset={this.onReset}>

                        <div className="form-head">
                            Employee Payroll Form
                        </div>

                        <div className="row-content">
                            <label className="label text" htmlFor="name"> Name : </label>
                            <input className="input" onChange={this.onValueChange} type="text" name="name" id="name" placeholder="Your name." required />
                            <output className='error-output'> {this.state.nameError} </output>
                        </div>

                        <div className="row-content">
                            <label htmlFor="profile" className="label text">Profile image</label>
                            <div className="profile-radio-content">
                                <label>
                                    <input type="radio"  onChange={this.onValueChange} name="profilePic" id="profile1" value="../../assets/images/Ellipse -3.png" required />
                                    <img src={profile3} className="profile" alt="" />
                                </label>
                                <label>
                                    <input type="radio" onChange={this.onValueChange} name="profilePic" id="profile2" value="../../assets/images/Ellipse -1.png" required />
                                    <img src={profile1} className="profile" alt="" />
                                </label>
                                <label>
                                    <input type="radio" onChange={this.onValueChange} name="profilePic" id="profile3" value="../../assets/images/Ellipse -8.png" required />
                                    <img src={profile8} className="profile" alt="" />
                                </label>
                                <label>
                                    <input type="radio" onChange={this.onValueChange} name="profilePic" id="profile4" value="../../assets/images/Ellipse -7.png" required />
                                    <img src={profile7} className="profile" alt="" />
                                </label>
                            </div>
                        </div>

                        <div className="row-content">
                            <label htmlFor="gender" className="label text">Gender</label>
                            <div>
                                <input type="radio" onChange={this.onValueChange} name="gender" id="male" value="male" />
                                <label htmlFor="male" className="text">Male</label>
                                <input type="radio" onChange={this.onValueChange} name="gender" id="female" value="female" />
                                <label htmlFor="female" className="text">Female</label>
                            </div>
                        </div>

                        <div className="row-content">
                            <label htmlFor="department" name="department" className="label text">Department</label>
                            <div>
                                <input type="checkbox" onChange={this.onCheckboxChange} className="checkbox" name="hr" id="hr" value="HR" />
                                <label htmlFor="hr" className="text">HR</label>   
                                <input type="checkbox" onChange={this.onCheckboxChange} className="checkbox" name="sales" id="sales" value="Sales" />
                                <label htmlFor="sales" className="text">Sales</label>
                                <input type="checkbox" onChange={this.onCheckboxChange} className="checkbox" name="finance" id="finance" value="Finance" />
                                <label htmlFor="finance" className="text">Finance</label>
                                <input type="checkbox" onChange={this.onCheckboxChange} className="checkbox" name="engineer" id="engineer" value="Engineer" />
                                <label htmlFor="engineer" className="text">Engineer</label> 
                                <input type="checkbox" onChange={this.onCheckboxChange} className="checkbox" name="others" id="others" value="Others" />
                                <label htmlFor="others" className="text">Others</label>            
                            </div>
                        </div>

                        <div className="row-content">
                            <label htmlFor="salary" className="label text">Choose your salary: </label>
                            <input type="range" onChange={this.onValueChange} name="salary" id="salary" className="input" min="300000" max="500000" value={this.state.salary} />
                            <output className="salary-output text" htmlFor="salary" id="salaryOutput">{this.state.salary}</output>
                        </div>

                        <div className="row-content">
                            <label htmlFor="startDate" className="label text">Start Date</label>
                            <div onChange={this.onValueChange}>
                                <select name="day" id="day" >
                                    <option>Day</option>
                                    <option value="01">1</option>
                                    <option value="02">2</option>
                                    <option value="03">3</option>
                                    <option value="04">4</option>
                                    <option value="05">5</option>
                                    <option value="06">6</option>
                                    <option value="07">7</option>
                                    <option value="08">8</option>
                                    <option value="09">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                                <select name="month" id="month" >
                                    <option>Month</option>
                                    <option value="Jan">January</option>
                                    <option value="Feb">February</option>
                                    <option value="Mar">March</option>
                                    <option value="Apr">April</option>
                                    <option value="May">May</option>
                                    <option value="Jun">June</option>
                                    <option value="Jul">July</option>
                                    <option value="Aug">August</option>
                                    <option value="Sep">September</option>
                                    <option value="Oct">October</option>
                                    <option value="Nov">November</option>
                                    <option value="Dec">December</option>
                                </select>
                                <select name="year" id="year" >
                                    <option>Year</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                </select>
                            </div>
                        </div>

                        <div className="row-content">
                            <label htmlFor="notes" className="label text">Notes</label>
                            <textarea name="notes" id="notes" className="input" onChange={this.onValueChange}></textarea>
                        </div>

                        <div className="buttonParent">
                            <a href='/home' className="button cancelButton">Cancel</a>
                            <div className="submit-reset">
                                <button type="submit" className="button submitButton" id="submitButton">Submit</button>
                                <button type="reset" className="resetButton button">Reset</button>
                            </div>
                        </div>

                    </form>

                </div>
                
            </div>
        );
    }
}

export default PayrollForm;