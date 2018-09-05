import React, { Component } from 'react';
import './Auth.css';
import logo from '../../assets/logo.png'

class Auth extends Component {
    render() {
        return (
            <div className='auth'>
                <div className='login-container'>
                    <div className='logo-container'>
                        <div className='helo-logo'>
                            <img src={logo} alt="helo-logo" />
                        </div>
                    </div>
                    <div className='title-container'>
                        <h1>Helo</h1>
                    </div>
                    <div className='btn-container'>
                        <button className='login-btn'>Login / Register</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;
