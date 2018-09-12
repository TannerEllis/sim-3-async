import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import homeLogo from '../../assets/home.png';
import searchLogo from '../../assets/search.png'


class Profile extends Component {
    constructor() {
        super()
        this.state = {
            user: [],
            firstName: '',
            lastName: '',
            displayFirst: '',
            displayLast: ''
        }

        this.editFirstName = this.editFirstName.bind(this);
        this.editLastName = this.editLastName.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.clearInfo = this.clearInfo.bind(this);

    }



    editFirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    editLastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }

    updateUser() {
        this.setState({
            displayFirstName: this.state.firstName,
            displayLastName: this.state.lastName
        })
    }

    clearInfo() {
        this.setState({
            firstName: '',
            lastName: ''
        })
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
                            <Link to='/dashboard'><img src={homeLogo} alt="" /></Link>
                        </div>
                        <div className='search-logo'>
                            <Link to='/search'><img src={searchLogo} alt="" /></Link>
                        </div>
                    </div>
                    <div className='sub-nav-title'>
                        <h2>Profile</h2>
                    </div>
                    <div className='sub-nav-logout'>
                        <Link to='/'>Logout</Link>
                    </div>
                </div>
                <div className='profile-top'>
                    <div className='profile-user'>
                        <div className='profile-image'></div>
                        <div className='profile-name'>
                            {this.state.displayFirstName}
                            <br />
                            {this.state.displayLastName}
                        </div>
                        <div className='profile-btn-container'>
                            <div className='update-btn-container'><button onClick={() => this.updateUser()} className='update-btn'>Update</button></div>
                            <div className='cancel-btn-container'><button onClick={() => this.clearInfo()} className='cancel-btn'>Cancel</button></div>
                        </div>
                    </div>
                </div>
                <div className='main-content-container'>
                    <div className='profile-main-content'>
                        <div className='main-left'>
                            First Name
                    <input onChange={this.editFirstName} value={this.state.firstName} className='name-input' type="text" />
                    
                            Last Name
                    <input onChange={this.editLastName} value={this.state.lastName} className='name-input' type="text" />

                            Gender
                    <select className='selector' >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>

                            Hair Color
                    <select className='selector'>
                                <option value="black">Black</option>
                                <option value="blonde">Blonde</option>
                                <option value="brown">Brown</option>
                                <option value="gray">Gray</option>
                                <option value="red">Red</option>
                                <option value="other">Other</option>
                            </select>

                            Eye Color
                    <select className='selector'>
                                <option value="blue">Blue</option>
                                <option value="brown">Brown</option>
                                <option value="green">Green</option>
                                <option value="hazel">Hazel</option>
                                <option value="red">Red</option>
                            </select>
                        </div>
                        <div className='main-right'>

                            Hobby
                    <select className='selector' value={this.state.user.hobby}>
                                <option value="Video Games">Video Games</option>
                                <option value="Singing">Singing</option>
                                <option value="Sports">Sports</option>
                                <option value="Reading">Reading</option>
                                <option value="Wood Working">Wood Working</option>
                                <option value="Wood Working">Sewing</option>
                                <option value="Dancing">Dancing</option>
                                <option value="Shooting">Shooting</option>
                                <option value="Hiking">Hiking</option>
                                <option value="Painting">Painting</option>
                            </select>

                            Birthday Day
                            <select className='selector'>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>

                            Birthday Month
                            <select className='selector'>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>

                            Birthday Year
                  <select className='selector'>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                                <option value="1989">1989</option>
                                <option value="1988">1988</option>
                                <option value="1987">1987</option>
                                <option value="1986">1986</option>
                                <option value="1985">1985</option>
                                <option value="1984">1984</option>
                                <option value="1983">1983</option>
                                <option value="1982">1982</option>
                                <option value="1981">1981</option>
                                <option value="1980">1980</option>
                                <option value="1979">1979</option>
                                <option value="1978">1978</option>
                                <option value="1977">1977</option>
                                <option value="1976">1976</option>
                                <option value="1975">1975</option>
                                <option value="1974">1974</option>
                                <option value="1973">1973</option>
                                <option value="1972">1972</option>
                                <option value="1971">1971</option>
                                <option value="1970">1970</option>
                                <option value="1969">1969</option>
                                <option value="1968">1968</option>
                                <option value="1967">1967</option>
                                <option value="1966">1966</option>
                                <option value="1965">1965</option>
                                <option value="1964">1964</option>
                                <option value="1963">1963</option>
                                <option value="1962">1962</option>
                                <option value="1961">1961</option>
                                <option value="1960">1960</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;