import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import './Search.css';
import homeLogo from '../../assets/home.png';
import searchLogo from '../../assets/search.png'


class Search extends Component {
    constructor() {
        super()
        this.state = {
            usersList: [],
            select: '',
            input: '',
            current: 1,
            userCount: 0
        }

        this.displaySearchFriends = this.displaySearchFriends.bind(this);
        this.handleAddFriend = this.handleAddFriend.bind(this);
        this.handleRemoveFriend = this.handleRemoveFriend.bind(this);
        this.handleSearchSelect = this.handleSearchSelect.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handlePagination = this.handlePagination.bind(this);
        this.getUserCount = this.getUserCount.bind(this);

    }

    componentDidMount(){
        this.displaySearchFriends()
        this.getUserCount();
    }

    displaySearchFriends(){
        axios.get('/api/user/search/0')
        .then((friends) => {
            this.setState({
                usersList: friends.data
            })
        })
    }

    handleAddFriend(friend){
        axios.post('/api/friend/add', {friend})
        .then((res) => { 
            this.setState({
                usersList: res.data
            })
            this.componentDidMount()
        })
    }
    
    handleRemoveFriend(friend) {
        axios.post('/api/friend/remove', {friend})
        .then((res) => {
            this.setState({
                usersList: res.data
            })
            this.componentDidMount()
        })
    }

    handleSearchSelect(e){
        this.setState({
            select: e.target.value
        })
    }

    handleSearchInput(e){
        this.setState({
            input: e.target.value
        })
    }

    handleReset(){
        this.setState({
            select: '',
            input: ''
        })
    }

    getUserCount(){
        axios.get('/api/user/count')
        .then((res) => {
            this.setState({
                userCount:Number(res.data[0].count) 
            })
        })
    }

    handlePagination(page){
        let offset = page * 8 - 8
        axios.get(`/api/user/search/${offset}`)
        .then( (res) => {
            this.setState({
                usersList: res.data
            })
        })
        this.setState({
            current: page
        })
    }


    render() {

        const searchFriends = this.state.usersList.map((user, i) => {
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
                { user.isFriend 
                    ? <button onClick={ () => (this.handleRemoveFriend(user.users_id))} className='remove-friend'>Remove Friend</button> 
                    : <button onClick={ () => (this.handleAddFriend(user.users_id))} className='add-friend'>Add Friend</button>}         
                    
                </div>
            </div>
            
            )
        })

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
                                <select onChange={this.handleSearchSelect} value={this.state.select} className='search-selector' >
                                <option value="first_name">First Name</option>
                                    <option value="last_name">Last Name</option>
                                </select>
                            </div>
                            <div className='search-bar'>
                                <input className='search-input' type="search" onChange={this.handleSearchInput} value={this.state.input}/>
                            </div>
                            <div className='search-btn-container'><button className='search-btn'>Search</button></div>
                            <div className='reset-btn-container'><button onClick={ ()=> {this.handleReset()}} className='reset-btn'>Reset</button></div>
                        </div>
                        <div className='search-list'>
                        {searchFriends}
                        <Pagination onChange={this.handlePagination} pageSize={8} current={this.state.current} total={this.state.userCount} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;