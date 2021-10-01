import React from 'react';
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
                    <a href="/shop">Shop</a>
                    <a href="/order">Order Review</a>
                    <a href="/inventory">Inventory</a>
                </div>
                <div className="searchBox">
                    <input type="text"/>
                </div>
                
            </nav>
        </div>
    );
};

export default Header;