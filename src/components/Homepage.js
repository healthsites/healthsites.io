import React, {Component} from "react";
import {Button, Col, Image, Row} from "react-bootstrap";

class Homepage extends Component {
    render() {
        return (
            <Row className="h-100 red-background mt-5 justify-content-xl-center">
                <Col xl={12} lg={12}>
                    <Row className="isopad-container mx-auto align-content-center h-100">
                        <Col xl={4} lg={4} md={12}>
                            <div className="m-auto">
                                <p className="fancy">789941<br/>healthsites added</p>
                                <Row>
                                    <Col><Button variant="outline-primary" size="" block>edit the map</Button></Col>
                                    <Col><Button variant="primary" size="" block>how it works</Button></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={12}>
                            <Row>
                                <Col xl={12} lg={12} className="isopad mt-5">
                                    <div className="pin pin-1"/>
                                    <div className="pin pin-2"/>
                                    <div className="pin pin-3"/>
                                    <div className="pin pin-4"/>
                                    <Image src="/img/isometric-ipad@2x.png" width={710} height={364} fluid />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Homepage;
