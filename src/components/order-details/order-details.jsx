import ReactDOM from 'react-dom';
import orderDetailsStyles from './order-details.module.css'
import doneGif from '../../images/done.gif'
import { orderDetailsTypes } from "../../utils/types"

function OrderDetails(props) {
	return (
		<section className={orderDetailsStyles.orderdetails}>
			<p className="text text_type_digits-large mt-30">
				034536
			</p>

			<p className="text text_type_main-medium mt-8">
				идентификатор заказа
			</p>

			<img className="mt-15" src={doneGif} alt="done!" />

			<p className="text text_type_main-default mt-15">
				Ваш заказ начали готовить
			</p >

			<p className="text text_type_main-default mt-2 mb-30">
				Дождитесь готовности на орбитальной станции
			</p>
		</section>

	)
}

export default OrderDetails;

OrderDetails.propTypes = orderDetailsTypes;