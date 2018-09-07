import React, { Component } from 'react';
import './Profile.css';
import homeLogo from '../../assets/home.png';
import searchLogo from '../../assets/search.png'


class Profile extends Component {
    constructor() {
        super()
        this.state = {
            friendList: []
        }
    }

    render() {


        return (
            <div className='profile'>
                <div className='dash-nav'>
                    <div className='sub-nav'>
                        <div className='helo-header'>
                            <h3>Helo</h3>
                        </div>
                        <div className='home-logo'>
                            <img src={homeLogo} alt="" />
                        </div>
                        <div className='search-logo'>
                            <img src={searchLogo} alt="" />
                        </div>
                    </div>
                    <div className='sub-nav-title'>
                        <h2>Profile</h2>
                    </div>
                    <div className='sub-nav-logout'>
                        Logout
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;