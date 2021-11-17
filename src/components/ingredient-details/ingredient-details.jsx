import ingredientDetailsStyles from './ingredient-details.module.css'


function IngredientDetails(props) {
	return (
		<section className={ingredientDetailsStyles.ingredientdetails}>
			<h2 className={ingredientDetailsStyles.header = " text text_type_main-large mt-10 ml-10 mr-10"}>
				Детали ингредиента
			</h2>
			<div className={ingredientDetailsStyles.content}>

				<img src={props.image_large} alt="Тут картинка из props" />

				<p className="text text_type_main-medium mt-4">
					{props.name}
				</p>

				<ul className={ingredientDetailsStyles.parameters + " text_color_inactive mt-8 mb-15"}>
					<li className={ingredientDetailsStyles.parameter}>
						<p className="text text_type_main-small">Каллории, ккал</p>
						<p className="text text_type_digits-default mt-2">{props.calories}</p>
					</li>
					<li className={ingredientDetailsStyles.parameter}>
						<p className="text text_type_main-small">Белки, г</p>
						<p className="text text_type_digits-default mt-2">{props.proteins}</p>
					</li>
					<li className={ingredientDetailsStyles.parameter}>
						<p className="text text_type_main-small">Жиры, г</p>
						<p className="text text_type_digits-default mt-2">{props.fat}</p>
					</li>
					<li className={ingredientDetailsStyles.parameter}>
						<p className="text text_type_main-small">Углеводы, г</p>
						<p className="text text_type_digits-default mt-2">{props.carbohydrates}</p>
					</li>
				</ul>
			</div>
		</section>

	)
}

export default IngredientDetails;