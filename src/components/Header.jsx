import React from 'react';
import logo from '../assets/images/logo.png';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="header-content header">
                    <div className="logo-content">
                        <img src={logo} alt="" />
                        <div>
                            <span className="emp-text">
                                EMPLOYEE
                            </span>
                            <br />
                            <span className="emp-text emp-payroll">PAYROLL</span>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
