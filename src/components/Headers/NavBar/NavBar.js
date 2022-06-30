import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
const NavBar = () => {
    return (
        <>
            <div className='header'>
                <h2 className="hero glitch layers" data-text="Mo.Foysal"><span>Mo.Foysal</span></h2>
            </div>
            <div className='nav-container'>
                <ol>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">project</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ol>
            </div>
        </>
    );
};

export default NavBar;