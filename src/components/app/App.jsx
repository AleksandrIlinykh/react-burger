import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor'
import burgerData from '../../utils/data';
import chosenIngredientsData from '../../utils/chosenIngredientsData';
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details';
import appStyles from './app.module.css';
import OrderDetails from '../order-details/order-details';


const url = "https://norma.nomoreparties.space/api/ingredients"
const badUrl = "https://norma.nomo2reparties.space/api/ingredients"

function App() {
  const [chosenIngredients, setchosenIngredients] = React.useState(chosenIngredientsData);
  const [data, setData] = React.useState({
    ingredients: [],
    loading: true
  })

  function handleChoosingIngredients(e) {
    {/*
    setchosenIngredients([...chosenIngredients, ...burgerData.filter(cardData => cardData._id === e.currentTarget.id)]);
    console.log(JSON.stringify(chosenIngredients))
*/}
  }


  const getIngredients = async () => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network response was not OK');
        }
      })
      .then((res) => {
        if ((res.status >= 200 && res.status < 300)) {
          return res;
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error
        }
      })
      .then(res => res.json())
      .then(data => setData({ ingredients: data.data, loading: false }))
      .catch((e) => {
        console.log('Error: ' + e.message);
        console.log(e.response);
      });
  }



  React.useEffect(() => {
    getIngredients();
    console.log("App is mounted")
  }, [])





  return (
    <>
      <AppHeader />
      <div className={appStyles.content}>
        <div className={appStyles.contentleft}>
          <h1 className="text text_type_main-large mt-10 mb-5"> Соберите бургер</h1>
          <BurgerIngredients data={data.ingredients} onIngredientСhoice={handleChoosingIngredients} />
          {/*<IngredientCard image={burgerData[0].image} name={burgerData[0].name} price={burgerData[0].price} />*/}
        </div>
        <div className={appStyles.contentleft}>
          <BurgerConstructor data={chosenIngredients} />
        </div>
      </div>
    </>
  );

}

export default App;
