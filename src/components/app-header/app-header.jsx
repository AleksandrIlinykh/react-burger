import React from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'


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
            <h1> 
                Василий и Александр - крутые обработчики
            </h1>
            <Button type="primary" size="small" onClick = {this.showGreeting}>
                Нажми на меня если прогер
            </Button>
            </>
        )
    }
} 

export default AppHeader;