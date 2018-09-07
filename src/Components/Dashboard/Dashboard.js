import React, { Component } from 'react';
import './Dashboard.css';
import homeLogo from '../../assets/home.png';
import searchLogo from '../../assets/search.png'


class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            friendList: []
        }
    }

    render() {


        return (
            <div className='dashboard'>
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
                        <h2>Dashboard</h2>
                    </div>
                    <div className='sub-nav-logout'>
                        Logout
                    </div>
                </div>
              <div className='top-content'>
                <div className='profile-content'>
                <div className='image-container'></div>
                <div className='edit-profile-container'>
                <div className='profile-name-container'>James Lemire</div>
                <div className='edit-btn-container'><button className='edit-profile-btn'>Edit Profile</button></div>
                </div>
                </div>
                <div className='welcome-content'>
                <div className='welcome-message'>
                <p>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name.
                     The more you update your profile, the better recommendations we can make!</p>
                </div>
                </div>
              </div>
              <div className='main-content'>
                <div className='recommended-friends'>
                <div className='main-title'>
                <h2>Recommended Friends</h2>
                </div>
                <div className='main-sort'>
                    <h4>Sorted by</h4>
                    <div className='sort-input'>
                    <select className='select-input'>
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                        <option value="gender">Gender</option>
                        <option value="hairColor">Hair Color</option>
                        <option value="eyeColor">Eye Color</option>
                        <option value="hobby">Hobby</option>
                        <option value="birthdayDay">Birthday Day</option>
                        <option value="birthdayMonth">Birthday Month</option>
                        <option value="birthdayYear">Birthday Year</option>
                    </select>
                    </div>
                </div>
                <div className='no-recommendations' >No recommendations</div>
                </div>
              </div>
            </div>
        )
    }
}

export default Dashboard;