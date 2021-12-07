import React from 'react';
import './Cards.css';
import Cardsitem from './Cardsitem';
function Cards() {
    return (
    <div className="cards">
            <h1>مقاصد برتر</h1>
            <div className="cards__container">
                  <div className="cards__wrapper">
                <ul className="cards__items">
                <Cardsitem 
                    path="/"
                    label="ناشناخته ها"
                    src="images/9.jpg"
                    text="دیدن آبشار در دل جنگلهای آمازون"
                    />
                    <Cardsitem 
                    path="/"
                    label="ناشناخته ها"
                    src="images/7.jpg"
                    text="هیچی نیست در اینجا"
                    />
                    <Cardsitem 
                    path="/"
                    label="ناشناخته ها"
                    src="images/8.jpg"
                    text="کویری زیبا در ایران"
                    />
                    
                </ul>
            </div>
         </div>
    </div>
    )
}

export default Cards;
