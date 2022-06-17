import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
const NavBar = () => {
    return (
        <div className='header'>
            <div className='logo'>
                Mohammad <br />
                Foysal
            </div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">project</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default NavBar;