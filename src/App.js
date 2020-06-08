import React, {Component} from 'react';
import {Waypoint} from "react-waypoint";

import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Container from "react-bootstrap/Container";
import DataPage from "./components/DataPage";
import Architecture from "./components/Architecture";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <>
                <Navigation />
                <Container fluid className="h-100">
                    <Waypoint onEnter={() => this._handleWaypointEnter('Home')} />
                    <Homepage />
                    <Waypoint onEnter={() => this._handleWaypointEnter('About') } />
                    <About />
                    {/*<Waypoint onEnter={() => this._handleWaypointEnter('Data') } />*/}
                    {/*<DataPage />*/}
                    {/*<Waypoint onEnter={() => this._handleWaypointEnter('Architecture') } />*/}
                    {/*<Architecture />*/}
                    {/*<Waypoint onEnter={() => this._handleWaypointEnter('Partners') } />*/}
                    <Partners />
                    <Waypoint onEnter={() => this._handleWaypointEnter('Footer') } />
                    <Footer />
                </Container>
            </>
        );
    }

    _handleWaypointEnter(page) {
        console.log('enter', page);
    }
}

export default App;
