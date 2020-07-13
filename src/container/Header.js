import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './headerStyle.css';
import Login from '../components/login/Login'
import Logo from '../assets/logo.png'
import "bootstrap/dist/css/bootstrap.min.css";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        }
        this.loginOn = this.loginOn.bind(this);
    }
    loginOn = () => {
        console.log(this.state.isClicked);
        this.setState({
            isClicked: !this.state.isClicked
        });
    };

    render() {
        return (
            <div className="header">
                <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/">
                    <div className="logo">
                        <span>
                            <img src={Logo} width="90" height="70" />
                        </span>
                        <div className="logo-name">
                            <p>TravelLove</p>
                        </div>
                    </div>
                </Link>
                <div className="tab-page">
                    <ul className="tab-ele">
                        <li className="ele" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/">Home</Link>
                        </li>
                        <li className="ele" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/about">About</Link>
                        </li>
                        <li className="ele" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/trips">Trips</Link>
                        </li>
                        <li className="ele" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/contact">Contact</Link>
                        </li>
                        <li className="ele login" onClick={this.loginOn}>
                            Login
                        </li>
                        <li className="ele">
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/register">Register</Link>
                        </li>

                        <div className="dropdown ele-man">
                            <span style={{ textDecoration: 'none', color: '#7C7C7C' }}>Management</span>
                            <div className="dropdown-content">
                                <div>
                                    <Link to="/guest">Guest</Link>
                                </div>
                                <div>
                                    <Link to="/place">Place</Link>
                                </div>
                                <div>
                                    <Link to="/hotel">Hotel</Link>
                                </div>
                                <div>
                                    <Link to="/food" >Food</Link>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
                {this.state.isClicked && <Login toggle={this.loginOn} />}
            </div>
        );
    }
}
export default Header;