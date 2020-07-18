import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import logo from '../../Images/logo.png'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white navbarCustom">
                <Link className="navbar-brand" to="/"> <img src={logo} alt="logo" /> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto"></ul>
                    <ul className="navbar-nav my-lg-0">
                        <li className="nav-item">
                            <Link id="text-color" className="nav-link" to="/">Explore <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link id="text-color" className="nav-link" to="/">Discover</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="text-color" className="nav-link" to="/">For Professionals</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="text-color" className="nav-link" to="/">...</Link>
                        </li>
                        <li className="nav-item">
                            <button id="headerSubmitBtn" className="">Submit Photos</button>
                        </li>
                        <li className="nav-item">
                            <Link id="text-color" className="nav-link" to="/">Login</Link>
                        </li>
                        <li className="nav-item">
                            <button id="headerJoinBtn">Join Free</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
