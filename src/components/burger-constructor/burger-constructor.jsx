import React from 'react';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerConstructorStyles from './burger-constructor.module.css';
import { IngredientsTypes } from '../../utils/types'

const BurgerConstructor = (props) => {
	const topElement = props.data.slice(0, 1)[0];
	const bottomElement = props.data.slice(-1)[0];

	return (
		<div className={burgerConstructorStyles.container + " mt-25 ml-16"}>
			<div className={burgerConstructorStyles.element}>
				<ConstructorElement
					type="top"
					isLocked={true}
					text={topElement.name + " (верх)"}
					price={topElement.price}
					thumbnail={topElement.image}
				/>
			</div>
			<div className={burgerConstructorStyles.ingredientsconstructor}>
				{
					props.data.slice(1, -1)
						.map((ingredientData, index) =>
							<div className={burgerConstructorStyles.element} key={index}>
								<ConstructorElement
									text={ingredientData.name}
									price={ingredientData.price}
									thumbnail={ingredientData.image}
									key={ingredientData._id}
								/>
							</div>
						)
				}
			</div>
			<div className={burgerConstructorStyles.element}>
				<ConstructorElement
					type="bottom"
					isLocked={true}
					text={bottomElement.name + " (низ)"}
					price={bottomElement.price}
					thumbnail={bottomElement.image}
				/>
			</div>
			<div className={burgerConstructorStyles.priceandconfirmation + " mt-10 mb-10"}>
				<p className="text text_type_digits-medium">
					610
				</p>
				<div className="mr-10">
					<CurrencyIcon className="mr-10" type="primary" />
				</div>
				<div className="mr-8">
					<Button type="primary" size="large">
						Оформить заказ
					</Button>
				</div>
			</div>
		</div>
	)

}

BurgerConstructor.propTypes = IngredientsTypes;

export default BurgerConstructor;