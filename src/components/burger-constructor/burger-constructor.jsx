import React from 'react';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerConstructorStyles from './burger-constructor.module.css';
import { ingredientsTypes } from '../../utils/types'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'

import { BurgerConstructorContext } from '../../context/burger-constructor';

const BurgerConstructor = (props) => {

	const [IsDetailsHidden, setIsDetailsHidden] = React.useState(true)

	const [chosenIngredientsData] = React.useContext(BurgerConstructorContext);

	/*
	const topElement = chosenIngredientsData.slice(0, 1)[0];
	const bottomElement = topElement;
*/
	function handleMakeOrderClick(event) {
		setIsDetailsHidden(false);
		console.log(chosenIngredientsData);
	}

	function handleModalClose() {
		setIsDetailsHidden(1);
	}

	return (
		<>
			{!IsDetailsHidden &&
				(
					<Modal stasus={setIsDetailsHidden} handleModalClose={handleModalClose}>
						<OrderDetails />
					</Modal>
				)
			}
			{(chosenIngredientsData.length) &&
				< div className={burgerConstructorStyles.container + " mt-25 ml-16"}>
					<div className={burgerConstructorStyles.element}>
						<ConstructorElement
							type="top"
							isLocked
							text={chosenIngredientsData[0].name + " (верх)"}
							price={chosenIngredientsData[0].price}
							thumbnail={chosenIngredientsData[0].image}
						/>
					</div>
					<div className={burgerConstructorStyles.ingredientsconstructor}>
						{
							chosenIngredientsData.slice(1)
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
							isLocked
							text={chosenIngredientsData[0].name + " (низ)"}
							price={chosenIngredientsData[0].price}
							thumbnail={chosenIngredientsData[0].image}
						/>
					</div>
					<div className={burgerConstructorStyles.priceandconfirmation + " mt-10 mb-10"}>
						<p className="text text_type_digits-medium">
							{
								chosenIngredientsData.map((elem) => elem.price)
									.reduce((sum, price) => (sum + price))
							}
						</p>
						<div className="mr-10">
							<CurrencyIcon className="mr-10" type="primary" />
						</div>
						<div className="mr-8">
							<Button onClick={handleMakeOrderClick} type="primary" size="large">
								Оформить заказ
							</Button>
						</div>
					</div>
				</div>

			}

		</>
	)

}

BurgerConstructor.propTypes = ingredientsTypes;

export default BurgerConstructor;