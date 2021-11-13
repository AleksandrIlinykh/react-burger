import React from 'react';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

import { ingredientCardTypes } from "../../utils/types"
import ingredientCardStyles from './ingredient-card.module.css';

const IngredientCard = (props) => {
	const [orderCount, setOrderCount] = React.useState(0);

	function handleClick(event) {
		setOrderCount(orderCount + 1);
		console.log(orderCount);
		props.onIngredientСhoice(event);
	}

	return (
		<div className={ingredientCardStyles.ingredientcard__container} onClick={handleClick}>
			<div>
				{
					(orderCount === 0) || <Counter count={orderCount} size="default" />
				}
				<img src={props.image} alt={props.name} className="ml-4 mr-4" />
			</div>
			<div className="mt-1 mb-1">
				<div className={ingredientCardStyles.ingredientcard__price}>
					<p className="text text_type_digits-default">
						{props.price}
					</p>
					<CurrencyIcon type="primary" />
				</div>
			</div>
			<div className={ingredientCardStyles.ingredientcard__description}>
				<p className="text text_type_main-small">
					{props.name}
				</p>
			</div>
		</div >
	)
}

IngredientCard.propTypes = ingredientCardTypes;

export default IngredientCard;
