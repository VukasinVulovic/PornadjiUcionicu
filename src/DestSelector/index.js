import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

function DestSelector() {
    return (
        <div className='selector'>
            <h1 className='label'> Index </h1>

            <nav className='nav-bar'>
                <a className='nav-item'> Aneks G </a>
                <a className='nav-item'> Aneks M </a>
            </nav>
        </div>
    );
}

export default DestSelector;