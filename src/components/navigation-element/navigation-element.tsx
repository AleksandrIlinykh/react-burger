import React from "react";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import navigationElementStyles from "./navigation-element.module.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

type TNavigationElement = {
  exact?: boolean;
  type: string;
  name: string;
  path: string;
  isActive: boolean;
};
function NavigationElement({
  type,
  name,
  path,
  isActive,
  exact,
}: TNavigationElement) {
  let iconType: any = "secondary";
  let icon;

  if (isActive) {
    iconType = "primary";
  }

  switch (type) {
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
            exact={exact}
            to={path}
            className={navigationElementStyles.navElement}
            activeClassName={navigationElementStyles.navElementActive}
          >
            {name}
          </NavLink>
        </div>
      </li>
    </div>
  );
}

export default NavigationElement;
