import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {Image} from "react-bootstrap";

class Partners extends Component {
    render() {
        return (
            <Row>
                <Col md={{ span: 8, offset: 2 }} className="mx-auto text-center">
                    <h3>Partners</h3>
                    <ul className="list-inline">
                        <li className="list-inline-item m-2">
                            <a href="https://www.geomatica-services.com/" target="_blank">
                                <img src="/img/partners/geomatica.png" width="105" className="img-fluid partner-logo"/>
                            </a>
                        </li>
                        <li className="list-inline-item m-2">
                            <a href="https://www.icrc.org/" target="_blank">
                                <img src="/img/partners/icrc-logo.png" className="img-fluid partner-logo"/>
                            </a>
                        </li>
                        <li className="list-inline-item m-2">
                            <a href="https://www.ihf-fih.org/" target="_blank">
                                <img src="/img/partners/ihf-logo.png" className="img-fluid partner-logo" />
                            </a>
                        </li>
                        <li className="list-inline-item m-2">
                            <a href="https://hotosm.org/" target="_blank">
                                <img src="/img/partners/hot-logo.png" className="img-fluid partner-logo"/>
                            </a>
                        </li>
                        <li className="list-inline-item m-2">
                            <a href="https://www.msf.org/" target="_blank">
                                <img src="/img/partners/msf-logo.png" className="img-fluid partner-logo"/>
                            </a>
                        </li>
                        <li className="list-inline-item m-2">
                            <a href="https://www.missingmaps.org" target="_blank">
                                <img src="/img/partners/missing-maps.png" className="img-fluid partner-logo"/>
                            </a>
                        </li>
                        <li className="list-inline-item m-2">
                            <a href="https://cartong.org/" target="_blank">
                                <img src="/img/partners/cartong.png" className="img-fluid partner-logo"/>
                            </a>
                        </li>
                        <li className="list-inline-item m-2">
                            <a href="https://www.radiant.earth/" target="_blank">
                                <img src="/img/partners/radiant-earth-logo.png" className="img-fluid partner-logo"/>
                            </a>
                        </li>
                        <li className="list-inline-item m-2">
                            <a href="https://www.it4life.org/" target="_blank">
                                <img src="/img/partners/it4life-logo.png" className="img-fluid partner-logo"/>
                            </a>
                        </li>
                        <li className="list-inline-item m-2">
                            <a href="https://www.ehealthafrica.org/" target="_blank">
                                <img src="/img/partners/e-health-logo.png" height="105" className="img-fluid partner-logo"/>
                            </a>
                        </li>
                        <li className="list-inline-item m-2">
                            <a href="http://kartoza.com/" target="_blank">
                                <img src="/img/partners/kartoza-logo.svg" height="105" className="img-fluid partner-logo"/>
                            </a>
                        </li>
                        <li className="list-inline-item m-2">
                            <a href="https://heigit.org/" target="_blank">
                                <img src="/img/partners/HeiGIT_Logo_compact.svg" height="105" className="img-fluid partner-logo"/>
                            </a>
                        </li>
                        <li className="list-inline-item m-2">
                            <a href="https://promedmail.org/" target="_blank">
                                <img src="/img/partners/promed.png" height="105" className="img-fluid partner-logo"/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        );
    }
}

export default Partners;
