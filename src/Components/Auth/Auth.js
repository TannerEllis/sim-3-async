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
                    <div style={{backgroundColor: 'pink'}}className='title-container'>
                        <h1 style={{backgroundColor: 'rgba(000, 000, 000, .3'}}>Helo</h1>
                    </div>
                    <div style={{backgroundColor: 'red'}} className='btn-container'>
                        <button className='login-btn'>Login/Register</button>
                        <p style={{fontSize: '12px'}}>test</p>
                    </div>
                    {/* <div style={{ border: '1px solid blue' }}>
                        <p style={{fontSize: '12px'}}>test</p>
                        <button>test</button>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Auth;
