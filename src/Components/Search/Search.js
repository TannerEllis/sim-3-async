import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import homeLogo from '../../assets/home.png';
import searchLogo from '../../assets/search.png'


class Search extends Component {
    constructor() {
        super()
        this.state = {
            usersList: []
        }
    }

    render() {


        return (
            <div className='search'>
                <div className='dash-nav'>
                    <div className='sub-nav'>
                        <div className='helo-header'>
                            <h3>Helo</h3>
                        </div>
                        <div className='home-logo'>
                            <Link to='/dashboard'><img src={homeLogo} alt="" /></Link>
                        </div>
                        <div className='search-logo'>
                            <img src={searchLogo} alt="" />
                        </div>
                    </div>
                    <div className='sub-nav-title'>
                        <h2>Search</h2>
                    </div>
                    <div className='sub-nav-logout'>
                        <Link to='/'>Logout</Link>
                    </div>
                </div>
                <div className='search-main-container'>
                    <div className='search-main-content'>
                        <div className='search-bar-container'>
                            <div className='search-select'>
                                <select className='search-selector' >
                                <option value="first_name">First Name</option>
                                    <option value="last_name">Last Name</option>
                                    <option value="gender">Gender</option>
                                    <option value="hair_color">Hair Color</option>
                                    <option value="eye_olor">Eye Color</option>
                                    <option value="hobby">Hobby</option>
                                    <option value="birth_day">Birthday Day</option>
                                    <option value="birth_month">Birthday Month</option>
                                    <option value="birth_year">Birthday Year</option>
                                </select>
                            </div>
                            <div className='search-bar'>
                                <input className='search-input' type="search" />
                            </div>
                            <div className='search-btn-container'><button className='search-btn'>Search</button></div>
                            <div className='reset-btn-container'><button className='reset-btn'>Reset</button></div>
                        </div>
                        <div className='search-list'></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Search;