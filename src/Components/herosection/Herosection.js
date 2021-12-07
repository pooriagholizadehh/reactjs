import React from 'react';
import './Herosection.css';
import Button from '../UI/Button';
function Herosection() {
    return (
        <div className="hero-container">
            <video src="/videos/1.mp4" autoPlay loop muted/>
            <div className="hero-buttons">
                 <input className="search-input" type="text" placeholder="جستجوی مکان شهر کشور..." autoComplete={false}/>
                <Button buttonStyle="btn--search" buttonSize="btn--medium" >
                    جستجو 
                </Button>
            </div>
        </div>
    )
}

export default Herosection;
