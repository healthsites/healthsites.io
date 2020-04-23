import React, {Component} from 'react';
import {Waypoint} from "react-waypoint";

import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import About from "./components/About";

class App extends Component {
    render() {
        return (
            <>
                <Navigation />
                <Waypoint onEnter={() => this._handleWaypointEnter('Home')} />
                <Homepage />
                <Waypoint onEnter={() => this._handleWaypointEnter('About') } />
                <About />
            </>
        );
    }

    _handleWaypointEnter(page) {
        console.log('enter', page);
    }
}

export default App;
