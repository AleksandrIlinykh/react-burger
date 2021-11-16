import React from "react"
import modalOverlayStyles from './modal-overlay.module.css'

function ModalOverlay(props) {
	return (
		<div id="overlay" onClick={props.onClick} className={modalOverlayStyles.modaloverlay}>
			{props.children}
		</div>
	)
}

export default ModalOverlay;