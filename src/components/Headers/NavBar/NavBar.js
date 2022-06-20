import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
const NavBar = () => {
    return (
        <>
            <div className='header'>
                <div className='logo'>
                    Mohammad <br />
                    Foysal
                </div>
            </div>
            <div className='nav-container'>
                <ol>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">project</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ol>
            </div>
            {/* <div >
                        <span></span>
                        <span> </span>
                        <span></span>
                        <span></span>
                    </div> */}



        </>
    );
};

export default NavBar;