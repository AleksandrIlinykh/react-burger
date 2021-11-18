import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor'
import chosenIngredientsData from '../../utils/chosenIngredientsData';
import appStyles from './app.module.css';
const INGREDIENTS_URL = "https://norma.nomoreparties.space/api/ingredients"

function App() {
	const [chosenIngredients, setchosenIngredients] = React.useState(chosenIngredientsData);
	const [ingredientsData, setIngredientsData] = React.useState([])

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
		setchosenIngredients(chosenIngredientsData);
	}, [])

	return (
		<>
			<AppHeader />
			<div className={appStyles.content}>
				<div className={appStyles.contentleft}>
					<h1 className="text text_type_main-large mt-10 mb-5"> Соберите бургер</h1>
					<BurgerIngredients data={ingredientsData} />
				</div>
				<div className={appStyles.contentleft}>
					<BurgerConstructor data={chosenIngredients} />
				</div>
			</div>
		</>
	);

}

export default App;
