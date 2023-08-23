import * as React from 'react';
import Container from 'react-bootstrap/Container';
import logoWhite from "../../assets/images/logo.png";
import Navbar from 'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {

    return (
        <Navbar style={{
            backgroundColor: '#033375',
            padding: 0,
            height: "70px"
        }} expand="lg" fixed="top"
        >
            <Container>
                <Navbar.Brand href="/" style={{color: "white"}}>
                    <img src={logoWhite} alt="zetty design" style={{height: "70px", position: "absolute",left: "10vw", top: "15px"}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className=" ms-md-5" style={{backgroundColor: "#033375", justifyContent: {xs: 'end'}}}>
                        <NavDropdown title="Mes Services" id="basic-nav-dropdown" className="ms-md-5">
                            <NavDropdown.Item href="/design-graphique">
                                Design Graphique
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/community-management">
                                Community Management
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/redaction-article-web">
                                Rédaction article web
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/creation-site-web">
                                Création de site web
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link style={{color: "white", fontSize: "1.3em"}} className="ms-3" href="/mes-realisations">
                            Mes Réalisations
                        </Nav.Link>
                        <Nav.Link style={{color: "white", fontSize: "1.3em"}} href="/qui-suis-je" className="ms-3">
                            Qui suis-je ?
                        </Nav.Link>
                        <Nav.Link style={{color: "white", fontSize: "1.3em"}} href="#contact" className="ms-3">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
export default NavBar;