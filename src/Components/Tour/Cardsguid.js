import React from 'react'
import { Link } from 'react-router-dom'
import './Cardsguid.css'
function Cardsguid() {
    return (
        <>
            <div className="container">
                <div className="tour__tabs">
                    <div className="tour__wrapper">
                        <ul className="nav-tabs">
                            <li>
                                <Link to="/" className="anchor">
                                    <h5>تمام تور ها</h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="anchor">
                                    <h5> تور های خارجی  </h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="anchor">
                                    <h5>تور های داخلی</h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="anchor">
                                    <h5>تور یک روزه   </h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="anchor">
                                    <h5>تمام تور ها</h5>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="tour__tabs">
                <div className="tab-content">
                    <div className="tab-pane">
                        <header className="tab-header">
                            <div className="tab-text">
                                تور
                            </div>
                            <div className="tab-sort-filter tab-text">
                                مرتب شده بر اساس
                                <span className="selectTours">
                                    <select className="tab-sort-input">
                                        <option value="news">جدیدترین</option>
                                        <option value="cheapest">ارزون ترین</option>
                                        <option value="viewCount">پر بازدید ترین</option>
                                    </select>
                                </span>
                            </div>
                        </header>
                        <div className="tabs-content">
                                <ul>
                                    <li>
                                        <Link className="anchor">
                                           تور کیش 2 روز 3 شب
                                        </Link>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cardsguid
