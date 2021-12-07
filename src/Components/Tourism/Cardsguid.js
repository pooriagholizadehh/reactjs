import React from 'react'
import './Cardguid.css'
import Cardsitem from './Cardsitem';
function Cardsguid() {
    return (
        <div className="cards">
            <h1>بهترین راهنمای جهان گردی تور هتل افامت ویزا و پاسپورت</h1>
            <p style={{textAlign:'center'}}>پرتال جامع گردش و سفر</p>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="card__item">
                    <Cardsitem
                        src="https://hamgardy.com/Static/Img/internal/compare.png"
                        title="دانستنی ها"
                        text="معرفی جذابیت های ایران وجهان"
                    />
                     <Cardsitem
                        src="https://hamgardy.com/Static/Img/internal/compare.png"
                        title="جستجو پیشرفته"
                        text="جستجو تمام مقاصد سفر شما"
                    />
                    <Cardsitem
                        src="https://hamgardy.com/Static/Img/internal/compare.png"
                        title="جستجو پیشرفته"
                        text="جستجو تمام مقاصد سفر شما"
                    />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cardsguid;
