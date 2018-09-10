import React, { Component } from 'react';
import './Search.css';
import homeLogo from '../../assets/home.png';
import searchLogo from '../../assets/search.png'


class Search extends Component {
    constructor() {
        super()
        this.state = {
            friendList: []
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
                            <img src={homeLogo} alt="" />
                        </div>
                        <div className='search-logo'>
                            <img src={searchLogo} alt="" />
                        </div>
                    </div>
                    <div className='sub-nav-title'>
                        <h2>Search</h2>
                    </div>
                    <div className='sub-nav-logout'>
                        Logout
                    </div>
                </div>
                <div className='search-main-container'>
                    <div className='search-main-content'>
                        <div className='search-bar-container'>
                            <div className='search-select'>
                                <select className='search-selector' >
                                    <option value="">First Name</option>
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