import React from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import IngredientCard from './components/ingredient-card/ingredient-card';
import NavigationElement from './components/navigation-element/navigation-element'
import burgerData from './utils/data';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'

function App() {

  return (
    <>
      <AppHeader />




      <div className="content">
        <div className="content-left mr-5">
          <h1 className="text text_type_main-large mt-10 mb-5"> Булки, соусы, начинки</h1>
          {/*{<BurgerIngredients data={burgerData} />}*/}
          <IngredientCard image={burgerData[0].image} name={burgerData[0].name} price={burgerData[0].price} />
        </div>
        <div className="content-right ml-5">

        </div>
      </div>


    </>
  );
}

export default App;
