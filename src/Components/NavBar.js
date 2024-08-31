import {Navbar,Container,Nav} from "react-bootstrap";
import {
    BrowserRouter as Router
  } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
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
                  <Nav.Link href="#Roadmap" className={activeLink === 'roadmap' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('roadmap')}>Roadmap</Nav.Link>
                  <Nav.Link href="#FAQ" className={activeLink === 'FAQ' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('faq')}>FAQ</Nav.Link>
                </Nav>
                <span className="navbar-text">
                  <HashLink to='#buytoken'>
                    <button className="vvd"><span>Buy Token</span></button>
                  </HashLink>
                </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Router>
    )

}