import React, {Component} from "react";
import {Dropdown, Nav, Navbar, NavItem, NavLink} from "react-bootstrap";

import {ReactComponent as Share} from './share.svg';
import {Link} from "react-router-dom";

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
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>About</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/about" className="dropdown-item">About Healthsites</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/about/goal" className="dropdown-item">Project Goals</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/about/objectives" className="dropdown-item">Objectives</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/about/strategy" className="dropdown-item">Strategy</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/about/support" className="dropdown-item">Institutional support</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/about/history" className="dropdown-item">History</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/about/team" className="dropdown-item">Team</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/about/research" className="dropdown-item">Research</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav as="li"><Nav.Link href="https://map.healthsites.io/map" target="_blank">Map <i className="fas fa-external-link-alt"></i></Nav.Link></Nav>
                        <Nav as="li"><Nav.Link href="#">Country data</Nav.Link></Nav>
                        <Nav as="li"><Nav.Link href="#">How it works</Nav.Link></Nav>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>Projects</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/emergency-health-data">Emergency Health Data</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/mriids" className="dropdown-item">MRIIDS</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/health-catchment-areas" className="dropdown-item">Health Catchment Areas</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/user-stories" className="dropdown-item">User Stories</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/share-health-data" className="dropdown-item">Share Health Data</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav as="li">
                            <Link to="/partners" className="nav-link">Partners</Link>
                        </Nav>
                        <Nav as="li"><Nav.Link to="/donate" as={Link}>Donate</Nav.Link></Nav>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>Campaigns</Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-right">
                                <Dropdown.Item as={Link} to="/main-campaign" className="dropdown-item">Main Campaign</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/senegal-digital-square-pilot" className="dropdown-item">Senegal Digital Square Pilot</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/senegal-hospitals-emergency-health-data" className="dropdown-item">Senegal Hospitals Emergency Health Data</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/start-campaign" className="dropdown-item">Start a Campaign</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
