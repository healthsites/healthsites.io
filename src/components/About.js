import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from 'react-bootstrap/Tab'
import {ListGroup} from "react-bootstrap";

class Homepage extends Component {
    render() {
        return (
            <Tab.Container defaultActiveKey="#goal">
                <Row className="justify-content-md-center p-md-5 p-1 min-vh-100">
                    <Col md={{ span: 3 }}>
                        <ListGroup>
                            <ListGroup.Item action href="#goal"><strong>Project goal</strong></ListGroup.Item>
                            <ListGroup.Item action href="#objectives"><strong>Objectives</strong></ListGroup.Item>
                            <ListGroup.Item action href="#strategy"><strong>Strategy</strong></ListGroup.Item>
                            <ListGroup.Item action href="#history"><strong>Project history</strong></ListGroup.Item>
                            <ListGroup.Item action href="#support"><strong>Institutional support</strong></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={{ span: 9}} className="px-md-5 py-md-0 p-3">
                        <Tab.Content>
                            <Tab.Pane eventKey="#goal">
                                <h2>Project goal</h2>
                                <p>Accurate and open baseline health facility data that lives in OpenStreetMap</p>
                                <img src="/img/about.png" className="img-fluid m-md-4" alt="Health Facility Data"/>
                                <p>The Global Healthsites Mapping Project is building an open data commons of health
                                    facility data
                                    with OpenStreetMap. We believe that by leaning on the methods and infrastructure of
                                    OpenStreetMap, baseline health facility data can be maintained.</p>
                                <p>Create an <a href="https://www.openstreetmap.org/"
                                                target="_blank">OpenStreetMap</a> account
                                    today.
                                </p>
                                <p><a href="https://wiki.osmfoundation.org/wiki/Main_Page" target="_blank">OpenStreetmap
                                    Foundation</a></p>

                                <p>Key activities:</p>
                                <ul>
                                    <li>Explore <b>Human Centered Design</b> to drive the development of the data</li>
                                    <li>Enabling National health agencies and stakeholders in the health cluster to
                                        share and
                                        contribute baseline health facility data to OpenStreetMap
                                    </li>
                                    <li>Enabling collaboration between national health agencies and volunteer
                                        communities
                                    </li>
                                    <li>Connecting multiple data streams to build higher quality data</li>
                                </ul>
                                <p>If you’d like to find out more please <a href="https://healthsites.io/contact/"
                                                                            target="_blank">contact
                                    us</a></p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#objectives">
                                <h2>Objectives</h2>
                                <ul>
                                    <li>Identify primary user stories and understand the persona’s behind them</li>
                                    <li>Create a free and openly licensed location data of every healthcare facility in the world</li>
                                    <li>Explore innovative methods of validating health care location data through crowdsourcing and other methods</li>
                                    <li>Sustain and seek out ways to sustain (in terms of financial, infrastructural and human resources) the continued development, and improvement of the healthsites.io platform and other tools that collect and curate health facility location data</li>
                                    <li>The data will serve as a critical resource for first responders in emergency and crisis situations, and for improving access to primary health care</li>
                                    <li>The data will serve as a resource for members of the general public, healthcare service providers, government and other institutional actors</li>
                                    <li>The existence of this data in the commons will help community, civil society and governmental organisations to make health facilities more accessible and relevant to the communities that they serve</li>
                                </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#strategy">
                                <h2>Strategy</h2>
                                <img src="/img/strategy.png" className="img-fluid m-md-4" alt="Strategy"
                                     width="975" height="506"/>
                                <h3>Building an open community driven by human centered design</h3>
                                <p>Emergency health data call - We are inviting domain experts to help us define user
                                    stories that can drive the development of Emergency Health data.</p>
                                <p>Together with the International Society for Infectious Diseases Healthsites is
                                    Mapping the Risk of International Infectious Disease Spread. (MRIIDS)</p>
                                <img src="/img/the-lancet.png" className="img-fluid m-md-4" alt="The Lancet"
                                     width="941" height="408"/>
                                <h3>Emergency health data</h3>
                                <p>Please <a href="https://healthsites.io/contact/" target="_blank">contact us</a> if
                                    you’d like to join a call and participate..
                                        <a href="https://docs.google.com/document/d/1O0SotO5dvwFIDKbh_y2OV7-e-YgiyznsXqE9V_JdjFE/edit?usp=sharing"
                                           target="_blank">Healthsites emergency care call notes</a>
                                        <a href="https://vimeo.com/48075598"
                                           target="_blank">https://vimeo.com/48075598</a></p>
                                <h3>Develop open data standards</h3>
                                <p><a href="https://wiki.openstreetmap.org/wiki/Global_Healthsites_Mapping_Project"
                                      target="_blank">https://wiki.openstreetmap.org/wiki/Global_Healthsites_Mapping_Projectv</a>
                                </p>
                                <h3>Build an open platform</h3>
                                <p><a href="https://healthsites.io/" target="_blank">https://healthsites.io/</a>
                                    <a href="https://github.com/healthsites/healthsites/"
                                       target="_blank">https://github.com/healthsites/healthsites/</a></p>
                                <h3>Licenses</h3>
                                <p>Data: Open Database License
                                    Code: Free BSD License
                                    Content: Attribution 4.0 International</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#history">
                                <h2>Project history</h2>
                                <p>The project originated in South Africa with a Human Centered Design approach focused
                                    on the needs of women living in the townships of South Africa. </p>
                                <img src="/img/project-history.png" className="img-fluid mx-4 my-4"
                                     alt="Project history" width="941" height="346"/>
                                <p>The guiding user stories :</p>
                                <ul>
                                    <li>As a mother I want to access health care so that I can make good choices for
                                        myself and take care of my family.
                                    </li>
                                    <li>As a mother I want to earn an income so that I can support myself and my
                                        family.
                                    </li>
                                </ul>
                                <p>Healthsites was established following the Ebola response in 2014 with support from
                                    the International Committee of the Red Cross (ICRC) </p>
                                <p>The project was launched at the Global Partnerships for Humanitarian Impact and
                                    Innovation (GPHI2) conference in Lausanne in 2016. The ICRC uses the service to
                                    establish a baseline of health facility data.</p>
                                <p>The Healthsites open data (ODbL) project has evolved into a resource for saving
                                    baseline health facility data to OpenStreetMap and improving the quality of health
                                    facility data through the interoperability OpenStreetMap provides.</p>
                                <p>When Epidemiologists need an updated dataset they download shapefiles from
                                    Healthsites.io</p>
                                <p>Quote 2</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#support">
                                <h2>Institutional support</h2>
                                <table className="table table-bordered" width="100%" border="1">
                                    <tbody>
                                    <tr>
                                        <td><strong>April 2016 - International Committee of the Red Cross
                                            (ICRC)</strong>
                                            Initial development of the platform. Access baseline health facility data
                                        </td>
                                        <td width="30%" className="text-center">
                                            <img src="/img/partners/icrc-logo.png" className="img-fluid partner-logo"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>December 2016 - Humanitarian Innovation Fund (HIF)</strong>
                                            Research into the method of keeping health facility data up to date.</td>
                                        <td className="text-center"><img src="/img/partners/hif.png" className="img-fluid partner-logo" /></td>
                                    </tr>
                                    <tr>
                                        <td><strong> January 2017 - United States Agency for International Development
                                            (USAID) </strong>
                                            Zika Grand challenge . Health capacity data to support the Mapping of
                                            International Infectious Disease Spread (Ebola) in West Africa</td>
                                        <td className="text-center"><img src="/img/partners/usaid.png" className="img-fluid partner-logo" /></td>
                                    </tr>
                                    <tr>
                                        <td><strong>June 2018 - Digital Square (PATH) </strong>
                                            Global Goods award. Establish OpenStreetMap as the data store
                                            Global goods are digital health tools that can be used in multiple
                                            countries.
                                        </td>
                                        <td className="text-center">
                                            <img src="/img/partners/digital-square.png" className="img-fluid partner-logo"
                                                 alt="Digital Square"/>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }
}

export default Homepage;
