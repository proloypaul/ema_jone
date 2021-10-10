import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {user, signOutProcess} = useAuth()
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Empty!"/>
            </div>
            <nav>
                <div>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/order">Order Review</NavLink>
                    <NavLink to="/inventory">Manage Inventory</NavLink>
                </div>
                <div>
                    {user?.email ?<NavLink to="/register" onClick={signOutProcess} className="signUpBtn">Sign Out</NavLink>:<NavLink to="/login" className="signUpBtn">Sign in</NavLink>}
                </div>
                {/* <div className="searchBox">
                    <input type="text"/>
                </div> */}
                
            </nav>
        </div>
    );
};

export default Header;