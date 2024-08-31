import {Navbar,Container,Nav} from "react-bootstrap";
import { useState } from 'react';
import {
    BrowserRouter as Router
  } from "react-router-dom";
import { Link } from 'react-router-dom';


export const NavBar = () => {
    const [activeLink,setActiveLink] = useState('home');
    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
      }
      
    return (
        <Router>
          <Navbar expand="md">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                  <Nav.Link href="#aboutus" className={activeLink === 'aboutus' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutus')}>About Us</Nav.Link>
                  <Nav.Link href="#tokenomics" className={activeLink === 'tokenomics' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tokenomics')}>Tokenomics</Nav.Link>
                  <Nav.Link href="#roadmap" className={activeLink === 'roadmap' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('roadmap')}>Roadmap</Nav.Link>
                  <Nav.Link href="#faq" className={activeLink === 'faq' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('faq')}>FAQ</Nav.Link>
                </Nav>
                <span className="navbar-text">
                  <link to='#buytoken'>
                    <button className="vvd"><span>Buy Token</span></button>
                  </link>
                </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Router>
    )

}