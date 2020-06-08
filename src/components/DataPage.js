import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {Image} from "react-bootstrap";

class DataPage extends Component {
    render() {
        return (
            <Row className="h-100">
                <Col>left</Col>
                <Col className="h-100">right</Col>
            </Row>
        );
    }
}

export default DataPage;
