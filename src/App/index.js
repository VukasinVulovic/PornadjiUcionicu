import React from 'react';
import DestSelector from '../DestSelector';
import Compass from '../Compass';
import cords from './cords.json';
import './style.scss';

const EARTH_RADIUS = 6378.137;

class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

class App extends React.Component {
    constructor() {
        super();

        this.state = { 
            compassRotation: 0,
            distance: 0,
            selectedItem: Object.values(cords)[0]
        }

        this.currRotation = 0;
        this.currPos = null;
    }
    
    update() {
        let d = -1;

        const selected = Object.values(this.state.selectedItem)[0];
        const dest = new Vector(selected[0], selected[1], selected[2]);

        if(this.currPos != null) {
            const currX = EARTH_RADIUS * Math.cos(this.currPos.latitude) * Math.cos(this.currPos.longitude);
            const currY = EARTH_RADIUS * Math.cos(this.currPos.latitude) * Math.sin(this.currPos.longitude);
            const currZ = EARTH_RADIUS * Math.sin(this.currPos.latitude);
            const curr = new Vector(currX, currY, currZ);
            d = (Math.pow((dest.x - curr.x), 2) + Math.pow((dest.y - curr.y), 2)) / 2; //+ Math.pow((dest.z - curr.z), 2)
        }
        

        const angle = Math.atan(dest.x / dest.y) * (180 / Math.PI);
        const diff = this.currRotation - angle;

        this.setState({
            compassRotation: diff,
            distance: d
        });
    }

    componentDidMount() {
        this.setState({ distance: 0 });

        navigator.geolocation.watchPosition(e => {
            this.currPos = e.coords;
            this.update();
        }, console.error, {
            enableHighAccuracy: true
        });

        window.addEventListener('deviceorientation', e => {
            this.currRotation = e.alpha;
            this.update();
        });
    }

    render() {
        return (
            <main>
                <DestSelector title='Index' items={cords} onSelected={item => this.setState({ selectedItem: item })}/>
                <Compass arrived={false} rotation={this.state.compassRotation} label={Object.keys(this.state.selectedItem)[0]} distance={this.state.distance}/>
            </main>
        );
    }
}

export default App;