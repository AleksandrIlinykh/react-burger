import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import NavigationElement from '../navigation-element/navigation-element'

import appHeaderStyles from './app-header.module.css';

function AppHeader() {

    return (
      <header>
        <div className={appHeaderStyles.header}>
          <div className={appHeaderStyles.header__container}>
            <div className={appHeaderStyles.header__leftlinks}>
              <div className="mr-2">
                <NavigationElement
                  type="constructor"
                  name="Конструктор"
                  path="/"
                  isActive
                />
              </div>
              <NavigationElement
                type="order list"
                name="Лента заказов"
                path="/"
                isActive
              />
            </div>
            <Logo />
            <div className={appHeaderStyles.header__rightlinks}>
              <NavigationElement
                type="personal cabinet"
                name="Личный кабинет"
                path="/profile"
                isActive
              />
            </div>
          </div>
        </div>
      </header>
    );
}

export default AppHeader;