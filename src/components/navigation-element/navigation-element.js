import React from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'


import './navigation-element.css';

function NavigationElement(props) {

	let linkClassName = 'ml-2 text text_type_main-small navigation-element__link';
	let iconType = "secondary"
	let icon;

	if (props.isActive === "true") {
		linkClassName = 'ml-2 text text_type_main-small navigation-element__link-active';
		iconType = "primary";
	}

	props.type === "constructor" && (icon = <BurgerIcon type={iconType} />)
	props.type === "order list" && (icon = <ListIcon type={iconType} />)
	props.type === "personal cabinet" && (icon = <ProfileIcon type={iconType} />)

	return (
		<li className="navigation-element pt-4 pr-5 pb-4 pl-5" >
			{icon}
			<a href="" className={linkClassName}>{props.name}</a>
		</li>
	)
}

export default NavigationElement;