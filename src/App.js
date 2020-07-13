import React, {Component} from 'react';

import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Container from "react-bootstrap/Container";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import EmergencyHealthData from "./components/projects/emergency-health-data";
import Mriids from "./components/projects/mriids";
import HealthCatchmentAreas from "./components/projects/health-catchment-areas";
import UserStories from "./components/projects/user-stories";
import ShareHealthData from "./components/projects/share-health-data";


class App extends Component {
    render() {
        return (
            <Router>
                <Navigation />
                <Container fluid className="h-100 mt-5">

                    <Switch>
                        <Route path="/about/:section" component={About} />
                        <Route path="/partners" component={Partners}/>
                        <Route path="/emergency-health-data" component={EmergencyHealthData} />
                        <Route path="/mriids" component={Mriids} />
                        <Route path="/health-catchment-areas" component={HealthCatchmentAreas} />
                        <Route path="/user-stories" component={UserStories} />
                        <Route path="/share-health-data" component={ShareHealthData} />
                        <Route path="/" component={Homepage}/>
                    </Switch>
                    <Footer />
                </Container>
            </Router>
        );
    }
}

export default App;
