import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import './TopNavbar.scss'

export default function TopNavigationbar() {
    return (
        <div className="top-navbar">
            <Navbar expand="lg" className="ms-auto bg-dark">
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-dark ms-auto">
                <Nav.Link href="#link" >Functional Medicine</Nav.Link>
                <Nav.Link href="#link">Chronic Illness</Nav.Link>
                <Nav.Link href="#link">Dr. Bonner</Nav.Link>
                <Nav.Link href="#link">Store</Nav.Link>
                <Nav.Link href="#link"><img style={{padding: 5}} className="icon" src="icons/person-circle.svg"/>Patient Login</Nav.Link>
                <Nav.Link href="#home"><img style={{padding: 5}} className="icon" src="icons/telephone.svg"/>Call 601-898-0911</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
    )
}
