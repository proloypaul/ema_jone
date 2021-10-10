import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
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
                    <NavLink to="/login" className="signUpBtn">Sign Up</NavLink>
                </div>
                {/* <div className="searchBox">
                    <input type="text"/>
                </div> */}
                
            </nav>
        </div>
    );
};

export default Header;