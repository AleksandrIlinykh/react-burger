import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor'
import appStyles from './app.module.css';
import { BurgerConstructorContext, TotalPriceContext } from '../../context/burger-constructor';

const INGREDIENTS_URL = "https://norma.nomoreparties.space/api/ingredients";


const initialState = { price: 0 };

function reducer(state, action) {
	switch (action.type) {
		case "recalculate":
			{
				return { price: state.price + action.payload }
			}
		default:



	}
}

function App() {
	const chosenIngredientsState = React.useState([]);
	const [ingredientsData, setIngredientsData] = React.useState([])
	const [totalPriceState, totalPriceDispatcher] = React.useReducer(reducer, initialState, undefined);

	const getIngredients = async () => {
		fetch(INGREDIENTS_URL)
			.then((res) => {
				if (res.ok) {
					return res
				} else {
					throw new Error('Network response was not OK');
				}
			})
			.then(res => res.json())

			.then(data => setIngredientsData(data.data))
			.catch((e) => {
				console.log('Error: ' + e.message);
				console.log(e.response);

			});
	}

	React.useEffect(() => {
		getIngredients();
		//setchosenIngredients(chosenIngredientsData);
	}, [])

	return (
		<>
			<AppHeader />
			<TotalPriceContext.Provider value={{ totalPriceState, totalPriceDispatcher }}>
				<BurgerConstructorContext.Provider value={chosenIngredientsState} >
					<div className={appStyles.content}>
						<div className={appStyles.contentleft}>
							<h1 className="text text_type_main-large mt-10 mb-5"> Соберите бургер</h1>
							<BurgerIngredients data={ingredientsData} />
						</div>
						<div className={appStyles.contentleft}>
							<BurgerConstructor />
						</div>
					</div>
				</BurgerConstructorContext.Provider>
			</TotalPriceContext.Provider>
		</>
	);

}

export default App;
