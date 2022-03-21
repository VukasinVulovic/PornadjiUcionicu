import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

function DestSelector(props) {
    return (
        <div className='selector'>
            <h1 className='label'> {props.title} </h1>

            <nav className='nav-bar'>
<<<<<<< HEAD
                {
                    Object.keys(props.items).map(key => {
                        return (
                            <span className='nav-item' key={key}> 
                                <label className='label'> {key} </label>
                            
                                <div className='items'>
                                    {
                                        Object.keys(props.items[key]).map(item => <a className='item' onClick={props.onSelected ? () => props.onSelected(props.items[key][item]) : null} key={key + '-' + item}> {item} </a>)  
                                    }
                                </div>
                            </span>
                        ); 
                    })
                }
=======
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
>>>>>>> 109bec01d2f510d73d8e893a58382c35546e732a
            </nav>
        </div>
    );
}

export default DestSelector;