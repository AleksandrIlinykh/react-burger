import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor'
import burgerData from '../../utils/data';
import chosenIngredientsData from '../../utils/chosenIngredientsData';
import appStyles from './app.module.css';

function App() {
  const [chosenIngredients, setchosenIngredients] = React.useState(chosenIngredientsData);

  function handleChoosingIngredients(e) {
    {/*
    setchosenIngredients([...chosenIngredients, ...burgerData.filter(cardData => cardData._id === e.currentTarget.id)]);

    console.log(JSON.stringify(chosenIngredients))
*/}
  }

  return (
    <>
      <AppHeader />
      <div className={appStyles.content}>
        <div className={appStyles.contentleft}>
          <h1 className="text text_type_main-large mt-10 mb-5"> Соберите бургер</h1>
          <BurgerIngredients data={burgerData} onIngredientСhoice={handleChoosingIngredients} />
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
