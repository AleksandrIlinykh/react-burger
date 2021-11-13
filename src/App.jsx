import React from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import BurgerConstructor from './components/burger-constructor/burger-constructor'
import burgerData from './utils/data';
import chosenIngredientsData from './utils/chosenIngredientsData';

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
      <div className="content">
        <div className="content-left mr-5">
          <h1 className="text text_type_main-large mt-10 mb-5"> Соберите бургер</h1>
          <BurgerIngredients data={burgerData} onIngredientСhoice={handleChoosingIngredients} />
          {/*<IngredientCard image={burgerData[0].image} name={burgerData[0].name} price={burgerData[0].price} />*/}
        </div>
        <div className="content-right ml-5">
          <BurgerConstructor data={chosenIngredients} />
        </div>
      </div>


    </>
  );
}

export default App;
