import React from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import './app-header.css';

class AppHeader extends React.Component {
    constructor(props) {
        super(props);
        this.showGreeting = this.showGreeting.bind(this);
    }

    showGreeting() {
        alert(JSON.stringify(this.props));
    }

    render() {
        //const className = this.state.theme === 'dark' ? 'Btn-dark' : 'Btn-light';
        return (

            <>
                <header>
                    <div className="header__container-compensate">
                        <div className="header__container">
                            <div className="header__left-links">
                                <div className="menu__item menu__item-first pt-5 pr-5 pb-5 mt-4 mb-4 mr-2">
                                    <div className="mr-2">
                                        <BurgerIcon type="primary" className="mr-2" />
                                    </div>
                                    <a href="" className="menu__link">
                                        <span className="text text_type_main-default">
                                            Конструктор
                                        </span>
                                    </a>
                                </div>
                                <div className="menu__item menu__item-second p-5 mt-4 mb-4">
                                    <div className="mr-2">
                                        <ListIcon type="primary" />
                                    </div>
                                    <a href="" className="menu__link">
                                        <span className="text text_type_main-default">
                                            Лента заказов
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <Logo className="menu__logo" />
                            <div className="header__right-links">
                                <div className="menu__item menu__item-third pt-5 pl-5 pb-5 mt-4 mb-4">
                                    <div className="mr-2">
                                        <ProfileIcon type="primary" />
                                    </div>
                                    <a href="" className="menu__link menu__link-3">
                                        <span className="text text_type_main-default">
                                            Личный кабинет
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header >

                {/*
                <div>
                    <nav>
                        <Button type="secondary" size="medium">
                            Конструктор
                        </Button>
                        <Button type="secondary" size="medium">
                            Лента заказов
                        </Button>
                        <Logo />
                        <Button id="personalCabinet" type="secondary" size="medium">
                            Личный кабинет
                        </Button>
                    </nav>
                </div>
            */}

            </>

        )
    }
}

export default AppHeader;