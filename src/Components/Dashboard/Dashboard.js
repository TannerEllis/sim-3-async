import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import homeLogo from '../../assets/home.png';
import searchLogo from '../../assets/search.png'


class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            currentUser: [],
            usersList: [],
            select: ''
        }

        this.handleDisplayList = this.handleDisplayList.bind(this);
        this.handleDisplayUser = this.handleDisplayUser.bind(this);
        this.handleAddFriend = this.handleAddFriend.bind(this);
        this.handleFilter = this.handleFilter.bind(this);

    }

    componentDidMount() {
        this.handleDisplayList()
        this.handleDisplayUser()
    }

    handleDisplayList() {
        axios.get('/api/friend/list')
            .then((friends) => {
                this.setState({
                    usersList: friends.data
                })
            })
    }

    handleDisplayUser(){
        axios.get('/api/auth/setUser')
        .then((user) => {
            console.log(user)
            this.setState({
                currentUser: user.data
            })
        })
    }

    handleAddFriend(friend){
        axios.post('/api/friend/add', {friend})
        .then((res) => { 
            this.setState({
                usersList: res.data
            })
        })
    }

    handleFilter(e){
        this.setState({
            select: e.target.value
        })
    }

    render() {
         
        const friends = this.state.usersList.filter((user) => {
            if(user[this.state.select] === this.state.currentUser[this.state.select]){
                return true
            } else {
                return false
            }
        }).map((user, i) => {
            return (

                
            <div key={user + i} className='user-card'>
                <div className='user-image'>
                    <img src={user.image} alt="user" />
                </div>
                <div className='user-name'>
                    <div className='user-first'>{user.first_name}</div>
                    <div className='user-last'>{user.last_name}</div>
                </div>
                <div className='user-btn'>
                    <button onClick={() => (this.handleAddFriend(user.users_id))} className='add-friend'>Add Friend</button>
                </div>
            </div>
            )
        })

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
                            <Link to='/search'><img src={searchLogo} alt="" /></Link>
                        </div>
                    </div>
                    <div className='sub-nav-title'>
                        <h2>Dashboard</h2>
                    </div>
                    <div className='sub-nav-logout'>
                        <Link to='/'>Logout</Link>
                    </div>
                </div>
                <div className='top-content'>
                    <div className='profile-content'>
                        <div className='image-container'>
                            <img src={this.state.currentUser.image} alt=""/>
                        </div>
                        <div className='edit-profile-container'>
                            <div className='profile-name-container'>
                            {this.state.currentUser.first_name} 
                            <br/>
                            {this.state.currentUser.last_name} 
                            </div>
                            <div className='edit-btn-container'><button onClick={() => this.props.history.push('/profile')} className='edit-profile-btn'>Edit Profile</button></div>
                        </div>
                    </div>
                    <div className='welcome-content'>
                        <div className='welcome-message'>
                            <p>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name.
                     The more you update your profile, the better recommendations we can make!</p>
                        </div>
                    </div>
                </div>
                <div className='main-content-container'>
                    <div className='main-content'>
                        <div className='main-title'>
                            <h2>Recommended Friends</h2>
                        </div>
                        <div className='main-sort'>
                            <h4>Sorted by</h4>
                            <div className='sort-input'>
                                <select onChange={this.handleFilter} value={this.state.select} className='select-input'>
                                    <option value="first_name">First Name</option>
                                    <option value="last_name">Last Name</option>
                                    <option value="gender">Gender</option>
                                    <option value="hair_color">Hair Color</option>
                                    <option value="eye_color">Eye Color</option>
                                    <option value="hobby">Hobby</option>
                                    <option value="birth_day">Birthday Day</option>
                                    <option value="birth_month">Birthday Month</option>
                                    <option value="birth_year">Birthday Year</option>
                                </select>
                            </div>
                        </div>    
                        {this.state.usersList.length === 0 ? <div className='no-recommendations' >No recommendations</div> : friends}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;