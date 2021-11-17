import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor'
import chosenIngredientsData from '../../utils/chosenIngredientsData';
import appStyles from './app.module.css';

const url = "https://norma.nomoreparties.space/api/ingredients"

function App() {
  const [chosenIngredients, setchosenIngredients] = React.useState(chosenIngredientsData);
  const [data, setData] = React.useState({
    ingredients: [],
    loading: true
  })

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
    setchosenIngredients(chosenIngredientsData);
    console.log("App is mounted")
  }, [])





  return (
    <>
      <AppHeader />
      <div className={appStyles.content}>
        <div className={appStyles.contentleft}>
          <h1 className="text text_type_main-large mt-10 mb-5"> Соберите бургер</h1>
          <BurgerIngredients data={data.ingredients} />
        </div>
        <div className={appStyles.contentleft}>
          <BurgerConstructor data={chosenIngredients} />
        </div>
      </div>
    </>
  );

}

export default App;
