import React from 'react';
import ReactDOM from 'react-dom';
import modalStyles from './modal.module.css'
import closeIcon from '../../images/close-icon.svg'
import ModalOverlay from '../modal-overlay/modal-overlay';
import { modalTypes } from "../../utils/types"

function Modal(props) {

	const modal = React.useRef(null);

	React.useEffect(() => {
		const onKeypress = e => {
			if (e.key === "Escape") {
				props.handleModalClose();
			}
		}
		document.addEventListener('keydown', onKeypress)
		return () => {
			document.removeEventListener('keydown', onKeypress)
		}
	});

	const onClose = e => {
		props.handleModalClose();
	}

	function stopPropagation(e) {
		e.stopPropagation();
	}

	return ReactDOM.createPortal(
		<ModalOverlay handleModalClose={props.handleModalClose} onClick={onClose} >
			<div ref={modal} onClick={stopPropagation} className={modalStyles.modal}>
				<img onClick={onClose} className={modalStyles.closeicon} src={closeIcon} alt="close button" />
				{props.children}
			</div>

		</ModalOverlay>
		,
		document.getElementById('root-portal')
	)
}

Modal.propTypes = modalTypes;

export default Modal;

