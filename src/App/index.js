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

const places = {
    'Aneks G': { 
        'G1': { 
            cords: new Vector(0, 0, 0),
            title: 'G1' 
        }, 
        'G2': { 
            cords: new Vector(0, 0, 0),
            title: 'G2' 
        }, 
        'G3': { 
            cords: new Vector(0, 0, 0),
            title: 'G3' 
        }, 
        'G4': { 
            cords: new Vector(0, 0, 0),
            title: 'G4' 
        }
    },
    'Aneks M': {
        'M1': { 
            cords: new Vector(0, 0, 0),
            title: 'M1' 
        },
        'M2': { 
            cords: new Vector(0, 0, 0),
            title: 'M2' 
        }, 
        'M3': { 
            cords: new Vector(0, 0, 0),
            title: 'M3' 
        },
        'M4': { 
            cords: new Vector(0, 0, 0),
            title: 'M4' 
        }
    },
    'Hrana i Piće': {
        'Menza': { 
            cords: new Vector(0, 0, 0),
            title: 'Menza' 
        }, 
        'Kafić': { 
            cords: new Vector(0, 0, 0),
            title: 'Kafić' 
        }
    },
    'Dešavanja': { 
        'Event Hall': { 
            cords: new Vector(10, 40, 0),
            title: 'Event Hall' 
        }
    },
    'Kancelarije': { 
        'Zbornica': { 
            cords: new Vector(0, 0, 0),
            title: 'Zbornica' 
        }, 
        'Direktor': { 
            cords: new Vector(0, 0, 0),
            title: 'Direktor' 
        }, 
        'Legalna sl.': { 
            cords: new Vector(0, 0, 0),
            title: 'Legalna sl.' 
        } 
    }
}

class App extends React.Component {
    constructor() {
        super();
        const curr = new Vector(-100, -100, 0);
        const dest = new Vector(100, 100, 0);

        const deg = Math.atan2(dest.y - curr.y, dest.x - curr.x) * (180 / Math.PI);

        this.state = { 
            compassRotation: deg,
            distance: 0,
            selectedItem: Object.values(Object.values(places)[3])[0]
        }

    }
    
    render() {
        return (
            <main>
                <DestSelector title='Index' items={places} onSelected={item => this.setState({ selectedItem: item })}/>
                <Compass arrived={false} rotation={this.state.compassRotation} label={this.state.selectedItem?.title} distance={this.state.distance}/>
            </main>
        );
    }
}

export default App;