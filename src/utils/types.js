import PropTypes from 'prop-types';

export const appHeaderTypes = {
}

export const navigationElementTypes = {
}

export const ingredientCardTypes = {
	image: PropTypes.string,
	image_large: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
	calories: PropTypes.number,
	proteins: PropTypes.number,
	fat: PropTypes.number,
	carbohydrates: PropTypes.number,
	_id: PropTypes.string,
	type: PropTypes.string,
	setBunCounter: PropTypes.func,
	bunCounter: PropTypes.number
}

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
		}),
	),
	onIngredientСhoice: PropTypes.func,
}


export const modalTypes = {
	stasus: PropTypes.bool,
	handleModalClose: PropTypes.func,
}

export const modalOverlayTypes = {
	onClick: PropTypes.func,
	handleModalClose: PropTypes.func,
}

export const ingredientDetailsTypes = {
	image: PropTypes.string,
	image_large: PropTypes.string,
	name: PropTypes.string,
	proteins: PropTypes.number,
	fat: PropTypes.number,
	carbohydrates: PropTypes.number,
	calories: PropTypes.number,
}


export const orderDetailsTypes = {
	orderNumber: PropTypes.number
}
