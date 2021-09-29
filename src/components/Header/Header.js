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
                    <a href="/order">Order</a>
                    <a href="/quality">Quality</a>
                </div>
                <div className="searchBox">
                    <input type="text"/>
                </div>
                
            </nav>
        </div>
    );
};

export default Header;