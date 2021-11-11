import React from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import NavigationElement from '../navigation-element/navigation-element'

import './app-header.css';

function AppHeader() {

    return (
        <header>
            <div className="header">
                <div className="header__container">
                    <div className="header__left-links">
                        <div className="mr-2">
                            <NavigationElement type="constructor" name="Конструктор" isActive="true" />
                        </div>
                        <NavigationElement type="order list" name="Лента заказов" isActive="false" />
                    </div>
                    <Logo className="menu__logo" />
                    <div className="header__right-links">
                        <NavigationElement type="personal cabinet" name="Личный кабинет" isActive="false" />
                    </div>
                </div>
            </div>
        </header >
    )
}



export default AppHeader;