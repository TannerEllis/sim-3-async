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
            </div>
        )
    }
}

export default Search;