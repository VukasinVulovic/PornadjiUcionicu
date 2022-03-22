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
    }
    
    posChange(pos) {
        pos.coords.longitude = Math.floor(pos.coords.longitude);
        pos.coords.latitude = Math.floor(pos.coords.latitude);

        const x = EARTH_RADIUS * Math.cos(pos.coords.latitude) * Math.cos(pos.coords.longitude);
        const y = EARTH_RADIUS * Math.cos(pos.coords.latitude) * Math.sin(pos.coords.longitude);
        const z = EARTH_RADIUS * Math.sin(pos.coords.latitude);
    
        
        const selected = Object.values(this.state.selectedItem)[0];

        const dest = new Vector(selected[0], selected[1], selected[2]);
        dest.x = Math.floor(dest.x);
        dest.y = Math.floor(dest.y);
        dest.z = Math.floor(dest.z);
        // const rot = Math.atan2(y - dest.y, x - dest.x) * (180 / Math.PI);
        const rot = Math.atan2(dest.z - z, dest.x - x) * (180 / Math.PI);

        this.setState({ 
            compassRotation: rot
        });
    }

    componentDidMount() {
        this.setState({ distance: 0 });

        navigator.geolocation.watchPosition(this.posChange.bind(this), console.error, {
            // enableHighAccuracy: true
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