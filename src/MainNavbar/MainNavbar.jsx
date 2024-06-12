import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './MainNavbar.scss'

export default function MainNavigationbar() {
    return (
        <div className="top-navbar">
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="main-logo-container">
            <img style={{padding: 5}} className="logo" src="logos/personalizedwellness.svg"/>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Overview </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Connect</a>
            </li>
        <li className="nav-item dropdown">
            <button className="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Programs
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Metabolic Reset</a>
                <a className="dropdown-item" href="#">Hormone Balance</a>
            </div>
        </li>
        </ul>
    </div>
    </nav>
    </div>
    </div>
    )
}