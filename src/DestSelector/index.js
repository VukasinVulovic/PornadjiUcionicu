import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

function DestSelector() {
    return (
        <div className='selector'>
            <h1 className='label'> Index </h1>

            <nav className='nav-bar'>
                <a className='nav-item'> 
                    <label className="label"> Aneks G </label>
                    
                    <div className="items">
                        <a className="item"> G1 </a>
                        <a className="item"> G2 </a>
                        <a className="item"> G3 </a>
                        <a className="item"> G4 </a>
                    </div>
                </a>

                <a className='nav-item'> 
                    <label className="label"> Aneks M </label>
                    
                    <div className="items">
                        <a className="item"> M1 </a>
                        <a className="item"> M2 </a>
                        <a className="item"> M3 </a>
                        <a className="item"> M4 </a>
                    </div>
                </a>

                <a className='nav-item'> 
                    <label className="label"> Hrana i Piće </label>
                    
                    <div className="items">
                        <a className="item"> Menza </a>
                        <a className="item"> Kafić </a>
                    </div>
                </a>

                <a className='nav-item'> 
                    <label className="label"> Dešavanja </label>
                    
                    <div className="items">
                        <a className="item"> Event Hall </a>
                    </div>
                </a>

                <a className='nav-item'> 
                    <label className="label"> Kancelarije </label>
                    
                    <div className="items">
                        <a className="item"> Zbornica </a>
                        <a className="item"> Direktor </a>
                        <a className="item"> Legalna sl. </a>
                    </div>
                </a>
            </nav>
        </div>
    );
}

export default DestSelector;