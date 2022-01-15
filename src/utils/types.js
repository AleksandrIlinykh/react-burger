import PropTypes from 'prop-types';

export const appHeaderTypes = {
}

export const navigationElementTypes = {
}

export const burgerConstructorElementTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export const ingredientCardTypes = {
  image: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  type: PropTypes.string,
  setBunCounter: PropTypes.func,
  bunCounter: PropTypes.number,
};

export const ingredientsTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number,
      image: PropTypes.string,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number,
    })
  ),
  onIngredientСhoice: PropTypes.func.isRequired,
};

export const modalTypes = {
  handleModalClose: PropTypes.func.isRequired,
};

export const modalOverlayTypes = {
  onClick: PropTypes.func.isRequired,
  handleModalClose: PropTypes.func.isRequired,
};


