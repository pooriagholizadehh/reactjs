import React from 'react'
import '../../App.css';
import Button from '../UI/Button';
import Cardsguid from '../Tour/Cardsguid';
function Tour() {
    return (
        <>
        <div className="tourism" style={{backgroundImage:`url(images/tourism.jpg)`}}>
            <div className="tourism-box">
                <input type="text" className="search-input" placeholder="نام شهر و یا کشور" autoComplete={false}/>
                <Button buttonStyle="btn--search--place" buttonSize="btn--large">جستجو</Button>
            </div>
        </div>
        <Cardsguid/>
        </>
    )
}

export default Tour
