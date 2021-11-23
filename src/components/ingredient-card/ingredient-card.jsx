import React from 'react';
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details';


import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

import { ingredientCardTypes } from "../../utils/types"
import ingredientCardStyles from './ingredient-card.module.css';
import { BurgerConstructorContext } from '../../context/burger-constructor';

const IngredientCard = (props) => {
	const [orderCount, setOrderCount] = React.useState(0);
	const [IsDetailsHidden, setIsDetailsHidden] = React.useState(1);
	const [chosenIngredients, setChosenIngredients] = React.useContext(BurgerConstructorContext);

	function handleClick(event) {
		setIsDetailsHidden(0);
		setOrderCount(1);
		setChosenIngredients([...chosenIngredients, props])
		console.log(chosenIngredients)
		console.log(props)
	}

	function handleModalClose() {
		setIsDetailsHidden(1);
	}

	return (
		<>
			{!IsDetailsHidden &&
				(
					<Modal stasus={IsDetailsHidden} handleModalClose={handleModalClose}>
						<IngredientDetails image={props.image} image_large={props.image_large}
							name={props.name} calories={props.calories} proteins={props.proteins}
							fat={props.fat} carbohydrates={props.carbohydrates} />
					</Modal>
				)
			}
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
		</>
	)
}

IngredientCard.propTypes = ingredientCardTypes;

export default IngredientCard;
