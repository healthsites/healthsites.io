import React, {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";

import {ReactComponent as Share} from './share.svg';

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand>
                    healthsites.io <Share width="1.1em" height="1.1em" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav as="ul">
                        <Nav as="li"><Nav.Link href="https://medium.com/healthsites-io" target="_blank">Blog <i className="fas fa-external-link-alt"></i></Nav.Link></Nav>
                        <Nav as="li"><Nav.Link href="#about">About</Nav.Link></Nav>
                        <Nav as="li"><Nav.Link href="https://map.healthsites.io/map" target="_blank">Map <i className="fas fa-external-link-alt"></i></Nav.Link></Nav>
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
