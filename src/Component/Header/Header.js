import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header-name">
            <h1 className="upperCase">Easy Learning</h1>
            <h2>Best Site To Learn Online</h2>            
            <nav>
                <a href="/about">About Us</a>
                <a href="/courses">Courses</a>
                <a href="/contact">Contact Us</a>
                <a href="/help">Help</a>
            </nav>
            </div>
        </div>
    );
};

export default Header;