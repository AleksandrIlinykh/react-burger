import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientCard from '../ingredient-card/ingredient-card';

import './burger-ingredients.css';


const Cards = (props) => {
	return (
		<div>
			{
				props.data.map((cardData, index) => (
					<img src={cardData.image} alt={cardData.name} key={index} />
				))
			}
			<img src="props" alt="" />
		</div>
	)
}

const IngredientsContainer = (props) => //{
//return (
(
	<div className={props.className}>
		{
			props.data.filter(
				cardData =>
					// note: this is only passed when in top level of document
					cardData.type === props.ingredientType
			)
				.map((cardData, index) => (
					<div>
						<IngredientCard image={cardData.image} name={cardData.name} price={cardData.price} key={index} />
					</div>
				))
		}
	</div>
)
//}


const BurgerIngredients = (props) => {
	const [current, setCurrent] = React.useState('one')
	return (
		<>
			<div style={{ display: 'flex' }}>
				<Tab value="one" active={current === 'one'} onClick={setCurrent}>
					<a href="#bun"> Булки </a>
				</Tab>
				<Tab value="two" active={current === 'two'} onClick={setCurrent}>
					<a href="#sauce"> Соусы </a>
				</Tab>
				<Tab value="three" active={current === 'three'} onClick={setCurrent}>
					<a href="#main"> Начинки </a>
				</Tab>
			</div>

			<div className="beans-container">
				<div>
					<h1 id="bun">Булки</h1>
					<IngredientsContainer data={props.data} ingredientType="bun" className="ingredient-conteiner-content" />
				</div>
				<div>
					<h1 id="sauce">Соусы</h1>
					<IngredientsContainer data={props.data} ingredientType="sauce" className="ingredient-conteiner-content" />
				</div>
				<div>
					<h1 id="main">Начинки</h1>
					<IngredientsContainer data={props.data} ingredientType="main" className="ingredient-conteiner-content" />
				</div>
			</div>
		</>

	)
}


{/*
	const [current, setCurrent] = React.useState('one')
	return (
		<>
			<div style={{ display: 'flex' }}>
				<Tab value="one" active={current === 'one'} onClick={setCurrent}>
					One
				</Tab>
				<Tab value="two" active={current === 'two'} onClick={setCurrent}>
					Two
				</Tab>
				<Tab value="three" active={current === 'three'} onClick={setCurrent}>
					Three
				</Tab>
			</div>
		</>
		)
	*/}

export default BurgerIngredients;

