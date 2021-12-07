import React from 'react'
import  './Cardguid.css'

function Cardsitem(props) {
     const{src,title,text}=props
    return (
        <li className="cards__items">
            <div className="compare-item">
                <div className="compare-image-list">
                    <img src={src}/>
                    <div className="compere-item-title">
                        {title}
                    </div>
                    <div className="compere-item-exp">
                        {text}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Cardsitem
