import React from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'


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
                    <nav>
                        <Button type="secondary" size="medium">
                            Конструктор
                        </Button>
                        <Button type="secondary" size="medium">
                            Лента заказов
                        </Button>
                        <Logo />
                        <Button type="secondary" size="medium">
                            Личный кабинет
                        </Button>
                    </nav>
                </header>
                <h1>
                    Василий и Александр - крутые обработчики
                </h1>
                <Button type="primary" size="small" onClick={this.showGreeting}>
                    Нажми на меня если прогер
                </Button>
                <CurrencyIcon type="primary" />
                <Logo />
                <p className="text text_type_main-large">
                    The quick brown fox jumps over the lazy dog.
                </p>

            </>
        )
    }
}

export default AppHeader;