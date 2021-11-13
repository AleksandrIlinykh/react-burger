import PropTypes from 'prop-types';

export const appHeaderTypes = {
}

export const navigationElementTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	isActive: PropTypes.string,
}

export const ingredientCardTypes = {
	image: PropTypes.any,
	name: PropTypes.string,
	id: PropTypes.string,
	price: PropTypes.number,
	onIngredientСhoice: PropTypes.func,
}

export const IngredientsTypes = {
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
		}),
	),
	onIngredientСhoice: PropTypes.func,
}


