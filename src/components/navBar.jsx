import React, { Component } from 'react';
import "./navBar.css";


class Header extends Component {
    state = {}
    render() {
        return (
            <div className='mainDiv'>
                <span className='title'>O A</span>
                <span className='title'>P O R T F O L I O</span>
                <div className='menuSection'>
                    <a href="/">Main</a>
                    <a href="/Projects">Projects</a>
                    <a href="/Contacts">Contact</a>
                </div>
            </div>
        );
    }
}

export default Header;