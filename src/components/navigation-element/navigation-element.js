import React from 'react';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { navigationElementTypes } from "../../utils/types"
import navigationElementStyles from './navigation-element.module.css';
import { NavLink } from "react-router-dom";

function NavigationElement(props) {
  let linkClassName = navigationElementStyles.navigationelement__link;
  let iconType = "secondary";
  let icon;

  if (props.isActive) {
    linkClassName = navigationElementStyles.navigationelement__linkactive;
    iconType = "primary";
  }

  switch (props.type) {
    case "constructor":
      icon = <BurgerIcon type={iconType} />;
      break;
    case "order list":
      icon = <ListIcon type={iconType} />;
      break;
    case "personal cabinet":
      icon = <ProfileIcon type={iconType} />;
      break;
    default:
  }

  return (
    <div className="pt-4 pr-5 pb-4 pl-5">
      <li className={navigationElementStyles.navigationelement}>
        {icon}
        <div className="ml-2 text text_type_main-small">
          {/*<p className={linkClassName}>{props.name}</p>*/}
          <NavLink
            exact
            to={props.path}
            className={navigationElementStyles.navElement}
            activeClassName={navigationElementStyles.navElementActive}
          >
            {props.name}
          </NavLink>
        </div>
      </li>
    </div>
  );
}

NavigationElement.propTypes = navigationElementTypes;

export default NavigationElement;