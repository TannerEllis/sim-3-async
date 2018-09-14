import React, { Component } from 'react';
import './Auth.css';
import logo from '../../assets/logo.png'

class Auth extends Component {

    login() {
        let {
            REACT_APP_DOMAIN,
            REACT_APP_CLIENT_ID
        } = process.env

        // url = 'http://localhost:3000/auth/callback'
        let url = `${encodeURIComponent(window.location.origin)}/auth/callback`

        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
    }

    

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
                        <button onClick={this.login} className='login-btn'>Login / Register</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;
