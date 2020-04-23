import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {Image} from "react-bootstrap";

class Homepage extends Component {
    render() {
        return (
            <Container fluid className="homepage">
                <Row>
                    <Col><br/><br/><br/> Home <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></Col>
                    <Col><Image src="/img/isometric-ipad@2x.png" /></Col>
                </Row>
            </Container>
        );
    }
}

export default Homepage;
