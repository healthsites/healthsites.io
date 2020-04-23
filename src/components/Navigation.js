import React, {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";

import {ReactComponent as Share} from './share.svg';

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand>healthsites.io <Share width="1.1em" height="1.1em" /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav as="ul">
                        <Nav as="li"><Nav.Link href="#">Blog</Nav.Link></Nav>
                        <Nav as="li"><Nav.Link href="#">About</Nav.Link></Nav>
                        <Nav as="li"><Nav.Link href="#">Map</Nav.Link></Nav>
                        <Nav as="li"><Nav.Link href="#">Country data</Nav.Link></Nav>
                        <Nav as="li"><Nav.Link href="#">How it works</Nav.Link></Nav>
                        <Nav as="li"><Nav.Link href="#">Share data</Nav.Link></Nav>
                        <Nav as="li"><Nav.Link href="#">Partners</Nav.Link></Nav>
                        <Nav as="li"><Nav.Link href="#">Donate</Nav.Link></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
