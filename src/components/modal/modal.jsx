import React from 'react';
import ReactDOM from 'react-dom';
import modalStyles from './modal.module.css'
import closeIcon from '../../images/close-icon.svg'
import ModalOverlay from '../modal-overlay/modal-overlay';

function Modal(props) {

	const modal = React.useRef(null);

	React.useEffect(() => {
		console.log("Это я")
		console.log(modal.current)
		modal.current.focus();
	}, []);

	function onClose(e) {
		props.handleClose(e);
	}

	function onCloseEsc(e) {
		console.log(e.target)
	}

	function stopPropagation(e) {
		e.stopPropagation();
	}


	return ReactDOM.createPortal(
		<ModalOverlay onClick={onClose} >
			<div ref={modal} onKeyPress={onCloseEsc} onClick={stopPropagation} className={modalStyles.modal}>
				<img onClick={onClose} className={modalStyles.closeicon} src={closeIcon} alt="x" />
				{props.children}
			</div>

		</ModalOverlay>
		,
		document.getElementById('root-portal')
	)
}

export default Modal;