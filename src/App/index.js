import React from 'react';
import DestSelector from '../DestSelector';
import Compass from '../Compass';
import './style.scss';

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
            compassRototion: 0,
            distance: 0,
            selectedItem: 'Event Hall'
        }
    }
    
    render() {
        return (
            <main>
                <DestSelector title='Index' items={{
                'Aneks G': { 
                    'G1': new Vector(0, 0, 0), 
                    'G2': new Vector(0, 0, 0), 
                    'G3': new Vector(0, 0, 0), 
                    'G4': new Vector(0, 0, 0) 
                },
                'Aneks M': {
                    'M1': new Vector(0, 0, 0), 
                    'M2': new Vector(0, 0, 0), 
                    'M3': new Vector(0, 0, 0), 
                    'M4': new Vector(0, 0, 0) 
                },
                'Hrana i Piće': {
                    'Menza': new Vector(0, 0, 0), 
                    'Kafić': new Vector(0, 0, 0)
                },
                'Dešavanja': { 
                    'Event Hall': new Vector(0, 0, 0)
                },
                'Kancelarije': { 
                    'Zbornica': new Vector(0, 0, 0), 
                    'Direktor': new Vector(0, 0, 0), 
                    'Legalna sl.': new Vector(0, 0, 0) 
                }
                }} onSelected={item => console.log(item)}/>
                {/* this.setState({ selectedItem: item }) */}

                <Compass arrived={false} rotation={this.state.compassRototion} label={this.state.selectedItem} distance={this.state.distance}/>
            </main>
        );
    }
}

export default App;