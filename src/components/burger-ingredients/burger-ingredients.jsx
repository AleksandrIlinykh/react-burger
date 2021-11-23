import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientCard from '../ingredient-card/ingredient-card';
import { ingredientsTypes } from "../../utils/types"
import burgerIngredientsStyles from './burger-ingredients.module.css';

const BurgerIngredients = (props) => {
	const [current, setCurrent] = React.useState('one')

	function handleTab(e) {
		setCurrent(e);
	}

	return (
		<>
			<div className={burgerIngredientsStyles.tab}>
				<Tab value="one" active={current === 'one'} onClick={handleTab}>
					<a className={burgerIngredientsStyles.linkactive} href="#bun"> Булки </a>
				</Tab>
				<Tab value="two" active={current === 'two'} onClick={handleTab}>
					<a className={burgerIngredientsStyles.linkinactive} href="#sauce"> Соусы </a>
				</Tab>
				<Tab value="three" active={current === 'three'} onClick={handleTab}>
					<a className={burgerIngredientsStyles.linkinactive} href="#main"> Начинки </a>
				</Tab>
			</div>
			<div className={burgerIngredientsStyles.ingredientscontainer}>
				<div>
					<h1 className="mt-10" id="bun">Булки</h1>
					<div className="ml-4 mt-6 mb-10">
						<div className={burgerIngredientsStyles.ingredientconteinercontent}>
							{
								props.data.filter(
									cardData =>
										// note: this is only passed when in top level of document
										cardData.type === "bun"
								)
									.map((cardData, index) => (
										<div key={cardData._id}>
											<IngredientCard image={cardData.image} image_large={cardData.image_large}
												name={cardData.name} price={cardData.price} calories={cardData.calories}
												proteins={cardData.proteins} fat={cardData.fat}
												carbohydrates={cardData.carbohydrates}
												key={cardData._id} />
										</div>
									))
							}
						</div>
					</div>
				</div>
				<div>
					<h1 className="mt-10" id="sauce">Соусы</h1>
					<div className="ml-4 mt-6 mb-10">
						<div className={burgerIngredientsStyles.ingredientconteinercontent}>
							{
								props.data.filter(
									cardData =>
										// note: this is only passed when in top level of document
										cardData.type === "sauce"
								)
									.map((cardData, index) => (
										<div key={cardData._id}>
											<IngredientCard image={cardData.image} image_large={cardData.image_large}
												name={cardData.name} price={cardData.price} calories={cardData.calories}
												proteins={cardData.proteins} fat={cardData.fat}
												carbohydrates={cardData.carbohydrates}
												key={cardData._id} />
										</div>
									))
							}
						</div>
					</div>
				</div>
				<div>
					<h1 className="mt-10" id="main">Начинки</h1>
					<div className="ml-4 mt-6 mb-10">
						<div className={burgerIngredientsStyles.ingredientconteinercontent}>
							{
								props.data.filter(
									cardData =>
										// note: this is only passed when in top level of document
										cardData.type === "main"
								)
									.map((cardData, index) => (
										<div key={cardData._id}>
											<IngredientCard image={cardData.image} image_large={cardData.image_large}
												name={cardData.name} price={cardData.price} calories={cardData.calories}
												proteins={cardData.proteins} fat={cardData.fat}
												carbohydrates={cardData.carbohydrates}
												key={cardData._id} />
										</div>
									))
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

BurgerIngredients.propTypes = ingredientsTypes;

export default BurgerIngredients;

