import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientCard from '../ingredient-card/ingredient-card';
import { IngredientsTypes } from "../../utils/types"
import burgerIngredientsStyles from './burger-ingredients.module.css';

const BurgerIngredients = (props) => {
	const [current, setCurrent] = React.useState('one')

	{/*
	const [linkOneClassName, setlinkOneClassName] = React.useState('link-active')
	const [linkTwoClassName, setlinkTwoClassName] = React.useState('link-inactive')
	const [linkThreeClassName, setlinkThreeClassName] = React.useState('link-inactive')
*/}
	function handleTab(e) {
		console.log(e)
		setCurrent(e);

		{/*}
		if (e === "one") {
			setlinkOneClassName('link-active');
			setlinkTwoClassName('link-inactive');
			setlinkThreeClassName('link-inactive');
		} else if (e === "two") {
			setlinkOneClassName('link-inactive');
			setlinkTwoClassName('link-active');
			setlinkThreeClassName('link-inactive');
		} else if (e === "three") {
			setlinkOneClassName('link-inactive');
			setlinkTwoClassName('link-inactive');
			setlinkThreeClassName('link-active');
		}
*/}
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
											<IngredientCard image={cardData.image} name={cardData.name}
												price={cardData.price} onIngredientСhoice={props.onIngredientСhoice} key={cardData._id} />
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
											<IngredientCard image={cardData.image} name={cardData.name} id={cardData._id}
												price={cardData.price} onIngredientСhoice={props.onIngredientСhoice} key={cardData._id} />
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
											<IngredientCard image={cardData.image} name={cardData.name} id={cardData._id}
												price={cardData.price} onIngredientСhoice={props.onIngredientСhoice} key={cardData._id} />
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

BurgerIngredients.propTypes = IngredientsTypes;

export default BurgerIngredients;

