import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <button className="search-btn">Search</button>
                <h1>Social Network</h1>
                <button className="menu-btn">Menu</button>
            </div>
        );
    }
}

export default Header;