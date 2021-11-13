import React from 'react';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { navigationElementTypes } from "../../utils/types"
import navigationElementStyles from './navigation-element.module.css';

function NavigationElement(props) {

	let linkClassName = navigationElementStyles.navigationelement__link;
	let iconType = "secondary"
	let icon;

	if (props.isActive === "true") {
		linkClassName = navigationElementStyles.navigationelement__linkactive;
		iconType = "primary";
	}
	props.type === "constructor" && (icon = <BurgerIcon type={iconType} />)
	props.type === "order list" && (icon = <ListIcon type={iconType} />)
	props.type === "personal cabinet" && (icon = <ProfileIcon type={iconType} />)

	return (
		<div className="pt-4 pr-5 pb-4 pl-5">
			<li className={navigationElementStyles.navigationelement} >
				{icon}
				<div className="ml-2 text text_type_main-small">
					<a href="" className={linkClassName}>{props.name}</a>
				</div>

			</li>
		</div>
	)
}

NavigationElement.propTypes = navigationElementTypes;

export default NavigationElement;