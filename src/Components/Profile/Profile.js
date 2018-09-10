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
                <div className='profile-top'>
                    <div className='profile-user'>
                        <div className='profile-image'></div>
                        <div className='profile-name'></div>
                        <div className='profile-btn-container'>
                            <div className='update-btn-container'><button className='update-btn'>Update</button></div>
                            <div className='cancel-btn-container'><button className='cancel-btn'>Cancel</button></div>
                        </div>
                    </div>
                </div>
                <div className='main-content-container'>
                    <div className='profile-main-content'>
                        <div className='main-left'>
                            First Name
                    <input className='name-input' type="text" />
                            Last Name
                    <input className='name-input' type="text" />
                            Gender
                    <select className='selector'>
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
                    <select className='selector'>
                                <option value="">Video Games</option>
                                <option value="">Singing</option>
                                <option value="">Sports</option>
                                <option value="">Reading</option>
                                <option value="">Wood Working</option>
                                <option value="">Sewing</option>
                                <option value="">Dancing</option>
                                <option value="">Shooting</option>
                                <option value="">Hiking</option>
                                <option value="">Painting</option>
                            </select>
                            Birthday Day
                            <select className='selector'>
                                <option value="">01</option>
                                <option value="">02</option>
                                <option value="">03</option>
                                <option value="">04</option>
                                <option value="">05</option>
                                <option value="">06</option>
                                <option value="">07</option>
                                <option value="">08</option>
                                <option value="">09</option>
                                <option value="">10</option>
                                <option value="">11</option>
                                <option value="">12</option>
                                <option value="">13</option>
                                <option value="">14</option>
                                <option value="">15</option>
                                <option value="">16</option>
                                <option value="">17</option>
                                <option value="">18</option>
                                <option value="">19</option>
                                <option value="">20</option>
                                <option value="">21</option>
                                <option value="">22</option>
                                <option value="">23</option>
                                <option value="">24</option>
                                <option value="">25</option>
                                <option value="">26</option>
                                <option value="">27</option>
                                <option value="">28</option>
                                <option value="">29</option>
                                <option value="">30</option>
                                <option value="">31</option>
                            </select>
                            Birthday Month
                            <select className='selector'>
                                <option value="">January</option>
                                <option value="">February</option>
                                <option value="">March</option>
                                <option value="">April</option>
                                <option value="">May</option>
                                <option value="">June</option>
                                <option value="">July</option>
                                <option value="">August</option>
                                <option value="">September</option>
                                <option value="">October</option>
                                <option value="">November</option>
                                <option value="">December</option>
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