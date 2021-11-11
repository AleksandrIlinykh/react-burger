import React from 'react';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'


import './ingredient-card.css';

const IngredientCard = (props) => {
	return (

		<div className="ingredient-card__container">

			<div className="ingredient-card__image-container">
				<Counter count={1} size="default" />
				<img src={props.image} alt={props.name} className="ml-4 mr-4" />
			</div>
			<div className="ingredient-card__price mt-1 mb-1">
				<p className="text text_type_digits-default">
					{props.price}
				</p>
				<CurrencyIcon type="primary" />
			</div>
			<div className="ingredient-card__description">
				<p className="ingredient-card__description-text text text_type_main-small">
					{props.name}
				</p>
			</div>
		</div>
	)
}

export default IngredientCard;
