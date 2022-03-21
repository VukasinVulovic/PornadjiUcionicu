import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

function DestSelector(props) {
    return (
        <div className='compass'>
            <div className='compass-wrapper'>
                <div className='needle' style={{ transform: 'rotateZ(' + props.rotation + 'deg)' }}>
                    <span className='destination'> {props.label} </span>
                    {<FontAwesomeIcon icon={props.arrived ? faCheckCircle : faArrowUp} className='icon'/>}
                </div>
            </div>

            <span className='distance'> {props.arrived ? 'Stigli ste.' : props.distance} {props.arrived ? null : <span className='unit'>m</span>} </span>
        </div>
    );
}

export default DestSelector;