import React from 'react';
import './style.scss';

function keyValuePair(key, value) {
    const obj = {}
    obj[key] = value;
    return obj;
}

function DestSelector(props) {
    return (
        <div className='selector'>
            <h1 className='label'> {props.title} </h1>

            <nav className='nav-bar'>
                {
                    Object.keys(props.items).map(key => {
                        return (
                            <span className='nav-item' key={key}> 
                                <label className='label'> {key} </label>
                            
                                <div className='items'>
                                    {Object.keys(props.items[key]).map(item => <a className='item' onClick={props.onSelected ? () => props.onSelected(keyValuePair(item, props.items[key][item])) : null} key={key + '-' + item}> {item} </a>)}
                                </div>
                            </span>
                        ); 
                    })
                }
            </nav>
        </div>
    );
}

export default DestSelector;