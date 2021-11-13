import React from 'react';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import burgerConstructorStyles from './burger-constructor.module.css';
import { burgerConstructorTypes } from '../../utils/types'

const BurgerConstructor = (props) => {
	let topElement = props.data.slice(0, 1)[0];
	let bottomElement = props.data.slice(-1)[0];

	return (
		<div className="container mt-25 ml-16" style={{
			display: 'flex', flexDirection: 'column',
			gap: '10px', alignItems: 'center', flexGrow: '1',
			minHeight: '0'
		}}>
			<div style={{ display: 'flex' }}>
				<ConstructorElement
					type="top"
					isLocked={true}
					text={topElement.name}
					price={topElement.price}
					thumbnail={topElement.image}
				/>
			</div>
			<div className={burgerConstructorStyles.ingredientsconstructor} style={{
				display: 'flex', flexDirection: 'column',
				gap: '10px'
			}}>
				{
					props.data.slice(1, -1)
						.map((ingredientData, index) =>
							<div style={{ display: 'flex' }} key={index}>
								<ConstructorElement
									text={ingredientData.name}
									price={ingredientData.price}
									thumbnail={ingredientData.image}
									key={index}
								/>
							</div>
						)
				}
			</div>
			<div style={{ display: 'flex' }}>
				<ConstructorElement
					type="bottom"
					isLocked={true}
					text={bottomElement.name}
					price={bottomElement.price}
					thumbnail={bottomElement.image}
				/>
			</div>
			<div className="apply mt-10 mb-10" style={{
				display: 'flex', alignItems: 'center',
				justifyContent: 'flex-end', alignSelf: 'flex-end'
			}}>
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

BurgerConstructor.propTypes = burgerConstructorTypes;

export default BurgerConstructor;