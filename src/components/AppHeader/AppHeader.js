import React, {useCallback, useEffect, useState} from "react";
import TestServices from "../../services/TestServices";

const AppHeader = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header__left">
                    <div className="header__left-logo"><span>Портал</span><span>Разработчика</span></div>
                    <nav className="header__left-menu menu">
                        <ul className="menu__list">
                            <li className="menu__list-item active"><a href="#">Моё обучение</a></li>
                            <li className="menu__list-item"><a href="#">Задачи</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-right">
                    <div className="header-right__item">
                        <div className="header-right__item-icon"><a href="#"><img src="img/icons/1.svg" alt="" /></a></div>
                        <div className="header-right__item-icon"><a href="#"><img src="img/icons/2.svg" alt="" /></a></div>
                        <div className="header-right__item-icon"><a href="#"><img src="img/icons/3.svg" alt="" /></a></div>
                    </div>
                    <div className="header-right__item">
                        <div className="header-right__item-image"><img src="img/icons/4.png" alt="" /></div>
                        <div className="header-right__item-name">Михаил Романов</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader