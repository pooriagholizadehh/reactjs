import React from 'react'
import '../../App.css'
import Button from '../UI/Button'
import Cardsguid from '../Tourism/Cardsguid'
function Tourism() {
    return (
         <>
            <div className="tourism" style={{backgroundImage:`url(images/tourism.jpg)`}}>
                    <h1 style={{color:'#fff',fontSize:'46px'}}>پرتال جامع گردشگر و سفر</h1>
                    <p>پرتال جامع گردشگر و سفر</p>
                    <div className="tourism-box">
                        <input type="text" className="search-input" placeholder="جستسجو کشور شهر روستا" autoComplete={false}/>
                        <Button buttonStyle="btn--search--place" buttonSize="btn--large">جستجو</Button>
                    </div>
            </div>
            <Cardsguid/>
        </>
    )
}

export default Tourism;
