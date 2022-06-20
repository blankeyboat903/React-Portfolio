import React, { Component } from "react";
import ConForm from './ConForm';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">Blankeyboat's Portfolio</Navbar.Brand>
                            <Navbar.Toggle aria-controls="justify-content-end" />
                            <Navbar.Collapse id="justify-content-end">
                                <Nav className="me-auto">
                                    <NavDropdown title="Navigation" id="basic-nav-dropdown">
                                        <NavDropdown.Item as={Link} to={"/AboutMe"}>About Me</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={"/Portfolio"}>Portfolio</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={"/ConForm"}>Contact</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route path="/AboutMe"
                        element={<AboutMe/>}/>
                        <Route path="/Portfolio"
                        element={<Portfolio/>}/>
                        <Route path="/ConForm"
                        element={<ConForm/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}